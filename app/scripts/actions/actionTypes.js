// ACTION TYPES
// ============
// Constant string identifiers used by action creators and reducers in Redux.

"use strict";


// RPC ACTIONS
// auth
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const LOGOUT_FORCE = "LOGOUT_FORCE";


// disks
export const DISK_OVERVIEW_REQUEST = "DISK_OVERVIEW_REQUEST";
export const DISK_OVERVIEW_SUCCESS = "DISK_OVERVIEW_SUCCESS";
export const DISK_OVERVIEW_FAILURE = "DISK_OVERVIEW_FAILURE";


// middleware
export const WS_TARGET_CHANGED = "WS_TARGET_CHANGED";
export const WS_CONNECTING = "WS_CONNECTING";
export const WS_OPEN = "WS_OPEN";
export const WS_CLOSING = "WS_CLOSING";
export const WS_CLOSED = "WS_CLOSED";
export const ATTEMPT_CONNECTION = "ATTEMPT_CONNECTION";
export const RECONNECT_TICK = "RECONNECT_TICK";


// TASKS
export const TASK_SUBMIT_REQUEST = "TASK_SUBMIT_REQUEST";
export const TASK_SUBMIT_SUCCESS = "TASK_SUBMIT_SUCCESS";
export const TASK_SUBMIT_FAILURE = "TASK_SUBMIT_FAILURE";
// export const TASK_SUBMIT_TIMEOUT = "TASK_SUBMIT_TIMEOUT";

export const TASK_CREATED = "TASK_CREATED";
export const TASK_UPDATED = "TASK_UPDATED";
export const TASK_PROGRESS = "TASK_PROGRESS";


