// System Settings
// ===============
// Display and Modify FreeNAS GUI and OS settings.

"use strict";

import React from "react";
import TWBS from "react-bootstrap";
import _ from "lodash";

import SM from "../../../flux/middleware/SystemMiddleware";
import SS from "../../../flux/stores/SystemStore";

import HardwareSettings from "./System/HardwareSettings";
import LocalizationSettings from "./System/LocalizationSettings";
import OSSettings from "./System/OSSettings";
import Tuneables from "./System/Tuneables";
import WebappSettings from "./System/WebappSettings";

function getSystemUIConfig () {
  return SS.systemUIConfig;
}

const System = React.createClass(
  { render () {
    return (
      <TWBS.Grid>
        <TWBS.Row>
          <TWBS.Col xs = {4}>
            <WebappSettings/>
          </TWBS.Col>
          <TWBS.Col xs = {4}>
            <OSSettings/>
          </TWBS.Col>
          <TWBS.Col xs = {4}>
            <LocalizationSettings/>
          </TWBS.Col>
        </TWBS.Row>
        <TWBS.Row>
          <TWBS.Col xs = {4}>
            <HardwareSettings/>
          </TWBS.Col>
          <TWBS.Col xs = {8}>
            <Tuneables/>
          </TWBS.Col>
        </TWBS.Row>
      </TWBS.Grid>
    );
  }
});

export default System;
