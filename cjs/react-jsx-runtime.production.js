/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
var React = require("react"),
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getOwner() {
  var dispatcher = ReactSharedInternals.A;
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
  if (!owner) throw Error(formatProdErrorMessage(290, stringRef));
  if (1 !== owner.tag) throw Error(formatProdErrorMessage(309));
  type = owner.stateNode;
  if (!type) throw Error(formatProdErrorMessage(147, stringRef));
  type = type.refs;
  null === value ? delete type[stringRef] : (type[stringRef] = value);
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;
