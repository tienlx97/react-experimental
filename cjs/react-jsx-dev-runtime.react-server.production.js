/**
 * @license React
 * react-jsx-dev-runtime.react-server.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
var React = require("react"),
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  ReactSharedInternalsServer =
    React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
if (!ReactSharedInternalsServer)
  throw Error(
    'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.'
  );
function getOwner() {
  var dispatcher = ReactSharedInternalsServer.A;
  return null === dispatcher ? null : dispatcher.getOwner();
}
function jsxProd(type$jscomp$0, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  maybeKey = {};
  for (var propName in config)
    if ("key" !== propName)
      if ("ref" === propName) {
        var JSCompiler_temp_const = maybeKey;
        a: {
          var stringRef = config[propName];
          var JSCompiler_inline_result = getOwner();
          var type = type$jscomp$0;
          if ("string" !== typeof stringRef)
            if ("number" === typeof stringRef || "boolean" === typeof stringRef)
              stringRef = "" + stringRef;
            else {
              JSCompiler_inline_result = stringRef;
              break a;
            }
          var callback = stringRefAsCallbackRef.bind(
            null,
            stringRef,
            type,
            JSCompiler_inline_result
          );
          callback.__stringRef = stringRef;
          callback.__type = type;
          callback.__owner = JSCompiler_inline_result;
          JSCompiler_inline_result = callback;
        }
        JSCompiler_temp_const.ref = JSCompiler_inline_result;
      } else maybeKey[propName] = config[propName];
  config = getOwner();
  propName = maybeKey.ref;
  return {
    $$typeof: REACT_LEGACY_ELEMENT_TYPE,
    type: type$jscomp$0,
    key: key,
    ref: void 0 !== propName ? propName : null,
    props: maybeKey,
    _owner: config
  };
}
function stringRefAsCallbackRef(stringRef, type, owner, value) {
  if (!owner)
    throw Error(
      "Element ref was specified as a string (" +
        stringRef +
        ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://react.dev/link/refs-must-have-owner for more information."
    );
  if (1 !== owner.tag)
    throw Error(
      "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://react.dev/link/strict-mode-string-ref"
    );
  type = owner.stateNode;
  if (!type)
    throw Error(
      "Missing owner for string ref " +
        stringRef +
        ". This error is likely caused by a bug in React. Please file an issue."
    );
  type = type.refs;
  null === value ? delete type[stringRef] : (type[stringRef] = value);
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxDEV = void 0;
exports.jsxs = jsxProd;
