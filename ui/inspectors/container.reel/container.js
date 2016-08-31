/**
 * @module ui/container.reel
 */
var Component = require("montage/ui/component").Component,
    Model = require("core/model/model").Model;

/**
 * @class Container
 * @extends Component
 */
exports.Container = Component.specialize(/** @lends Container# */ {

    templateDidLoad: {
        value: function () {
            var self = this;
            this._environement = {};

            this.blockDrawGate.setField("volume", false);

            this.application.dataService.getNewInstanceForType(Model.DockerVolume).then(function (volume) {
                self._volume = volume;
                self.blockDrawGate.setField("volume", true);
            });

            Model.populateObjectPrototypeForType(Model.DockerImage).then(function (DockerImage) {
                self._dockerImageService = DockerImage.constructor.services;
            });
        }
    },

    enterDocument: {
        value: function () {
            this._fetchDataIfNeeded();
        }  
    },

    exitDocument: {
        value: function () {
            this._reset();
        }
    },

    _fetchDataIfNeeded: {
        value: function () {
            if (!this._images) {
                var self = this;
                this._dockerImageService.getTemplates().then(function(templates) {
                    var templatesNames = Object.keys(templates);
                    self._images = templatesNames.map(function(x) {
                        return {
                            label: x,
                            value: templates[x].image
                        };
                    });
                });
            }
        } 
    },

    _reset: {
        value: function () {
            this._volume.clear();
            this._environement.clear();
        }
    },

    _getPortsFromArray: {
        value: function (array) {
            var ports = null,
                string = array.join(" "),
                error;

            if (string) {
                var data = string.split(/:|\/| /),
                    port, containerPort, hostPort;

                ports = [];

                for (var i = 0, length = data.length; i + 3 <= length; i = i + 3) {
                    ports.push({ 
                        container_port: +data[i],
                        host_port: +data[i + 1],
                        protocol: data[i + 2].toUpperCase()
                    });
                }
            }

            return ports;
        }
    },

    _getEnvironmentVariableFromArray: {
        value: function (array) {
            var env = null,
                string = array.join(" ");

            if (string) {
                var data = string.split(/ |=/);
                env = this._environement;

                for (var i = 0, length = data.length; i + 2 <= length; i = i + 2) {
                    env[data[i]] = data[i + 1];
                }
            }

            return env;
        }
    },

    save: {
        value: function () {
            var environmentComponentValues = this._environmentComponent.values,
                commandString = this._commandComponent.value,
                namesString = this._nameComponent.value,
                portsValues = this._portsComponent.values,
                spaceString = " ",
                self = this;

            if (commandString) {
                this.object.command = commandString.split(spaceString);
            }

            if (namesString) {
                if (Array.isArray(this.object.names)) {
                    this.object.names[0] = spaceString;
                } else {
                    this.object.names = [spaceString];
                }
            }

            if (environmentComponentValues) {
                this.object.environment = this._getEnvironmentVariableFromArray(environmentComponentValues);
            }

            if (portsValues.length) {
                this.object.ports = this._getPortsFromArray(portsValues);
            }

            if (this._volume.container_path && this._volume.host_path) {
                this.object.volumes = [this._volume];
            } else if (this.object.volumes && this.object.volumes.length) {
                this.object.volumes = null;
            }

            return this.application.dataService.saveDataObject(this.object).then(function () {
                self._reset();
            });
        }
    }

});
