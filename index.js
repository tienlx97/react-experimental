/* eslint-disable no-func-assign */
/* eslint-disable no-self-assign */
/* eslint-disable no-invalid-this */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable guard-for-in */
/* eslint-disable no-implicit-coercion */
/* eslint-disable no-eq-null */
/* eslint-disable no-var */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-return-assign */
/* eslint-disable complexity */
/* eslint-disable max-params */
/* eslint-disable no-undef */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */

import {ReactFeatureFlags as dynamicFeatureFlags} from "./ReactFeatureFlags"



"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    "function" &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());

let enableTransitionTracing = dynamicFeatureFlags.enableTransitionTracing;
let renameElementSymbol = dynamicFeatureFlags.renameElementSymbol;
let enableViewTransition = dynamicFeatureFlags.enableViewTransition;
let REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
let REACT_ELEMENT_TYPE = renameElementSymbol
  ? Symbol.for("react.transitional.element")
  : REACT_LEGACY_ELEMENT_TYPE;
let REACT_PORTAL_TYPE = Symbol.for("react.portal");
let REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
let REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
let REACT_PROFILER_TYPE = Symbol.for("react.profiler");
let REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
let REACT_CONTEXT_TYPE = Symbol.for("react.context");
let REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
let REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
let REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
let REACT_MEMO_TYPE = Symbol.for("react.memo");
let REACT_LAZY_TYPE = Symbol.for("react.lazy");
let REACT_SCOPE_TYPE = Symbol.for("react.scope");
let REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
let REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
let REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
let REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
let MAYBE_ITERATOR_SYMBOL = Symbol.iterator;

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return typeof maybeIterable === "function" ? maybeIterable : null;
}
let ReactNoopUpdateQueue = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
let assign = Object.assign;
let emptyObject = {};
export function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
export function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
let pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
let isArrayImpl = Array.isArray;
function noop() {}
let ReactSharedInternals = { H: null, A: null, T: null, S: null };
let hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, props) {
  let refProp = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== refProp ? refProp : null,
    props: props
  };
}
function jsxProd(type, config, maybeKey) {
  let key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (let propName in config)
      "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  return ReactElement(type, key, maybeKey);
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(oldElement.type, newKey, oldElement.props);
}
export function isValidElement(object) {
  return (
    typeof object === "object" &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  let escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, (match) => {
      return escaperLookup[match];
    })
  );
}
let userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return typeof element === "object" && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function resolveThenable(thenable) {
  switch (thenable.status) {
  case "fulfilled":
    return thenable.value;
  case "rejected":
    throw thenable.reason;
  default:
    switch (
      (typeof thenable.status === "string"
        ? thenable.then(noop, noop)
        : ((thenable.status = "pending"),
        thenable.then(
          (fulfilledValue) => {
            thenable.status === "pending" &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
          },
          (error) => {
            thenable.status === "pending" &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
          }
        )),
      thenable.status)
    ) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  let type = typeof children;
  if (type === "undefined" || type === "boolean") children = null;
  let invokeCallback = !1;
  if (children === null) invokeCallback = !0;
  else
    switch (type) {
    case "bigint":
    case "string":
    case "number":
      invokeCallback = !0;
      break;
    case "object":
      switch (children.$$typeof) {
      case REACT_ELEMENT_TYPE:
      case REACT_PORTAL_TYPE:
        invokeCallback = !0;
        break;
      case REACT_LAZY_TYPE:
        return (
          (invokeCallback = children._init),
          mapIntoArray(
            invokeCallback(children._payload),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          )
        );
      }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        nameSoFar === "" ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
        null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
        mapIntoArray(callback, array, escapedPrefix, "", (c) => {
          return c;
        }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (callback.key == null ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                    userProvidedKeyEscapeRegex,
                    "$&/"
                  ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  let nextNamePrefix = nameSoFar === "" ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
      (type = nextNamePrefix + getElementKey(nameSoFar, i)),
      (invokeCallback += mapIntoArray(
        nameSoFar,
        array,
        escapedPrefix,
        type,
        callback
      ));
  else if (((i = getIteratorFn(children)), typeof i === "function"))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
      (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
      (invokeCallback += mapIntoArray(
        nameSoFar,
        array,
        escapedPrefix,
        type,
        callback
      ));
  else if (type === "object") {
    if (typeof children.then === "function")
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        (array === "[object Object]"
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (children == null) return children;
  let result = [];
  let count = 0;
  mapIntoArray(children, result, "", "", (child) => {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (payload._status === -1) {
    let ctor = payload._result;
    ctor = ctor();
    ctor.then(
      (moduleObject) => {
        if (payload._status === 0 || payload._status === -1)
          (payload._status = 1), (payload._result = moduleObject);
      },
      (error) => {
        if (payload._status === 0 || payload._status === -1)
          (payload._status = 2), (payload._result = error);
      }
    );
    payload._status === -1 && ((payload._status = 0), (payload._result = ctor));
  }
  if (payload._status === 1) return payload._result.default;
  throw payload._result;
}
function useMemoCache(size) {
  return ReactSharedInternals.H.useMemoCache(size);
}
let reportGlobalError =
  typeof reportError === "function"
    ? reportError
    : function (error) {
      if (
        typeof window === "object" &&
          typeof window.ErrorEvent === "function"
      ) {
        let event = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message:
              typeof error === "object" &&
              null !== error &&
              typeof error.message === "string"
                ? String(error.message)
                : String(error),
          error: error
        });
        if (!window.dispatchEvent(event)) return;
      } else if (
        typeof process === "object" &&
          typeof process.emit === "function"
      ) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
export function startTransition(scope, options) {
  let prevTransition = ReactSharedInternals.T;
  let currentTransition = {};
  enableViewTransition &&
    (currentTransition.types =
      null !== prevTransition ? prevTransition.types : null);
  enableTransitionTracing &&
    ((currentTransition.name =
      void 0 !== options && void 0 !== options.name ? options.name : null),
    (currentTransition.startTime = -1));
  ReactSharedInternals.T = currentTransition;
  try {
    let returnValue = scope();
    let onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    typeof returnValue === "object" &&
      null !== returnValue &&
      typeof returnValue.then === "function" &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    null !== prevTransition &&
      null !== currentTransition.types &&
      (prevTransition.types = currentTransition.types),
    (ReactSharedInternals.T = prevTransition);
  }
}
function addTransitionType(type) {
  if (enableViewTransition) {
    let transition = ReactSharedInternals.T;
    if (null !== transition) {
      let transitionTypes = transition.types;
      transitionTypes === null
        ? (transition.types = [type])
        : transitionTypes.indexOf(type) === -1 && transitionTypes.push(type);
    } else startTransition(addTransitionType.bind(null, type));
  }
}
let ReactCompilerRuntime = { __proto__: null, c: useMemoCache };
export const Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    let n = 0;
    mapChildren(children, () => {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, (child) => {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
Component = Component;
export const Fragment = REACT_FRAGMENT_TYPE;
export const Profiler = REACT_PROFILER_TYPE;
PureComponent = PureComponent;
export const StrictMode = REACT_STRICT_MODE_TYPE;
export const Suspense = REACT_SUSPENSE_TYPE;
export const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
export const __COMPILER_RUNTIME = ReactCompilerRuntime;
export const act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
export const c = useMemoCache;
export const cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
export const cacheSignal = function () {
  return null;
};
export const captureOwnerStack = void 0;
export const cloneElement = function (element, config, children) {
  if (element === null || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  let props = { ...element.props};
  let key = element.key;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      !hasOwnProperty.call(config, propName) ||
        propName === "key" ||
        propName === "__self" ||
        propName === "__source" ||
        (propName === "ref" && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (propName === 1) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, props);
};
export const createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
export const createElement = function (type, config, children) {
  let propName;
  let props = {};
  let key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  let childrenLength = arguments.length - 2;
  if (childrenLength === 1) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, props);
};
export const createRef = function () {
  return { current: null };
};
export const experimental_useEffectEvent = function (callback) {
  return ReactSharedInternals.H.useEffectEvent(callback);
};
export const forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
isValidElement = isValidElement;
export const jsx = jsxProd;
export const jsxDEV = void 0;
export const jsxs = jsxProd;
export const lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
export const memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
startTransition = startTransition;
export const unstable_Activity = REACT_ACTIVITY_TYPE;
export const unstable_LegacyHidden = REACT_LEGACY_HIDDEN_TYPE;
export const unstable_Scope = REACT_SCOPE_TYPE;
export const unstable_SuspenseList = REACT_SUSPENSE_LIST_TYPE;
export const unstable_TracingMarker = REACT_TRACING_MARKER_TYPE;
export const unstable_ViewTransition = REACT_VIEW_TRANSITION_TYPE;
export const unstable_addTransitionType = addTransitionType;
export const unstable_getCacheForType = function (resourceType) {
  let dispatcher = ReactSharedInternals.A;
  return dispatcher ? dispatcher.getCacheForType(resourceType) : resourceType();
};
export const unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
export const unstable_useMemoCache = useMemoCache;
export const use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
export const useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
export const useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
export const useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
export const useDebugValue = function () {};
export const useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
export const useEffect = function (create, deps) {
  return ReactSharedInternals.H.useEffect(create, deps);
};
export const useId = function () {
  return ReactSharedInternals.H.useId();
};
export const useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
export const useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
export const useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
export const useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
export const useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
export const useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
export const useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
export const useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
export const useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
export const useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
export const version = "19.2.0-www-classic-2710795a-20250903";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    "function" &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());

export default {
  version,
  useTransition,
  useSyncExternalStore,
  useState,
  useRef,
  useReducer,
  useOptimistic,
  useMemo,
  useLayoutEffect,
  useInsertionEffect,
  useImperativeHandle,
  useId,
  useEffect,
  useDeferredValue,
  useDebugValue,
  useContext,
  useCallback,
  useActionState,
  use,
  unstable_useMemoCache,
  unstable_useCacheRefresh,
  unstable_getCacheForType,
  unstable_addTransitionType,
  unstable_ViewTransition,
  unstable_TracingMarker,
  unstable_SuspenseList,
  unstable_Scope,
  unstable_LegacyHidden,
  unstable_Activity,
  startTransition,
  memo,
  isValidElement, 
  jsx ,
  jsxDEV ,
  jsxs ,
  lazy ,
  forwardRef,
  experimental_useEffectEvent,
  createRef,
  createElement,
  createContext,
  cloneElement,
  captureOwnerStack,
  cacheSignal,
  cache,
  c,
  act,
  Children ,
  Component ,
  Fragment ,
  Profiler ,
  PureComponent ,
  StrictMode ,
  Suspense ,
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  __COMPILER_RUNTIME ,
}
