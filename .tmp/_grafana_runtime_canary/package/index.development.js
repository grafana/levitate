'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var data = require('@grafana/data');
var ui = require('@grafana/ui');
var lodash = require('lodash');
var require$$0 = require('fs');
var React = require('react');
var e2eSelectors = require('@grafana/e2e-selectors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var singletonInstance$6;
/**
 * Used during startup by Grafana to set the BackendSrv so it is available
 * via the {@link getBackendSrv} to the rest of the application.
 *
 * @internal
 */
var setBackendSrv = function (instance) {
    singletonInstance$6 = instance;
};
/**
 * Used to retrieve the {@link BackendSrv} that can be used to communicate
 * via http(s) to a remote backend such as the Grafana backend, a datasource etc.
 *
 * @public
 */
var getBackendSrv = function () { return singletonInstance$6; };

var instance;
/**
 * Used during startup by Grafana to set the AngularLoader so it is available
 * via the {@link getAngularLoader} to the rest of the application.
 *
 * @internal
 */
function setAngularLoader(v) {
    instance = v;
}
/**
 * Used to retrieve the {@link AngularLoader} that enables the use of Angular
 * components within a React component.
 *
 * Please see the {@link AngularComponent} for a proper example.
 *
 * @public
 */
function getAngularLoader() {
    return instance;
}

var singletonInstance$5;
/**
 * Used during startup by Grafana to set the DataSourceSrv so it is available
 * via the {@link getDataSourceSrv} to the rest of the application.
 *
 * @internal
 */
function setDataSourceSrv(instance) {
    singletonInstance$5 = instance;
}
/**
 * Used to retrieve the {@link DataSourceSrv} that is the entry point for communicating with
 * a datasource that is added as a plugin (both external and internal).
 *
 * @public
 */
function getDataSourceSrv() {
    return singletonInstance$5;
}

var singletonInstance$4;
/**
 * Used during startup by Grafana to set the LocationSrv so it is available
 * via the {@link getLocationSrv} to the rest of the application.
 *
 * @internal
 */
function setLocationSrv(instance) {
    singletonInstance$4 = instance;
}
/**
 * Used to retrieve the {@link LocationSrv} that can be used to automatically navigate
 * the user to a new place in Grafana.
 *
 * @public
 */
function getLocationSrv() {
    return singletonInstance$4;
}

/**
 * Supported echo event types that can be sent via the {@link EchoSrv}.
 *
 * @public
 */
exports.EchoEventType = void 0;
(function (EchoEventType) {
    EchoEventType["Performance"] = "performance";
    EchoEventType["MetaAnalytics"] = "meta-analytics";
    EchoEventType["Sentry"] = "sentry";
    EchoEventType["Pageview"] = "pageview";
    EchoEventType["Interaction"] = "interaction";
})(exports.EchoEventType || (exports.EchoEventType = {}));
var singletonInstance$3;
/**
 * Used during startup by Grafana to set the EchoSrv so it is available
 * via the {@link getEchoSrv} to the rest of the application.
 *
 * @internal
 */
function setEchoSrv(instance) {
    singletonInstance$3 = instance;
}
/**
 * Used to retrieve the {@link EchoSrv} that can be used to report events to registered
 * echo backends.
 *
 * @public
 */
function getEchoSrv() {
    return singletonInstance$3;
}
/**
 * Used to register echo backends that will receive Grafana echo events during application
 * runtime.
 *
 * @public
 */
var registerEchoBackend = function (backend) {
    getEchoSrv().addBackend(backend);
};

var singletonInstance$2;
/**
 * Used during startup by Grafana to set the TemplateSrv so it is available
 * via the {@link getTemplateSrv} to the rest of the application.
 *
 * @internal
 */
var setTemplateSrv = function (instance) {
    singletonInstance$2 = instance;
};
/**
 * Used to retrieve the {@link TemplateSrv} that can be used to fetch available
 * template variables.
 *
 * @public
 */
var getTemplateSrv = function () { return singletonInstance$2; };

var singleton;
/**
 * Used during startup by Grafana to temporarily expose the angular injector to
 * pure javascript plugins using {@link getLegacyAngularInjector}.
 *
 * @internal
 */
var setLegacyAngularInjector = function (instance) {
    singleton = instance;
};
/**
 * WARNING: this function provides a temporary way for plugins to access anything in the
 * angular injector.  While the migration from angular to react continues, there are a few
 * options that do not yet have good alternatives.  Note that use of this function will
 * be removed in the future.
 *
 * @beta
 */
var getLegacyAngularInjector = function () { return singleton; };

var singletonInstance$1;
/**
 * Used during startup by Grafana to set the GrafanaLiveSrv so it is available
 * via the {@link getGrafanaLiveSrv} to the rest of the application.
 *
 * @internal
 */
var setGrafanaLiveSrv = function (instance) {
    singletonInstance$1 = instance;
};
/**
 * Used to retrieve the GrafanaLiveSrv that allows you to subscribe to
 * server side events and streams
 *
 * @alpha -- experimental
 */
var getGrafanaLiveSrv = function () { return singletonInstance$1; };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values$2(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read$2(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray$1(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

var isProduction$1 = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction$1) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var isProduction = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== "production" ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Browser history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

var GrafanaBootConfig = /** @class */ (function () {
    function GrafanaBootConfig(options) {
        this.datasources = {};
        this.panels = {};
        this.minRefreshInterval = '';
        this.appUrl = '';
        this.appSubUrl = '';
        this.windowTitlePrefix = '';
        this.buildInfo = {};
        this.newPanelTitle = '';
        this.externalUserMngLinkUrl = '';
        this.externalUserMngLinkName = '';
        this.externalUserMngInfo = '';
        this.allowOrgCreate = false;
        this.disableLoginForm = false;
        this.defaultDatasource = ''; // UID
        this.alertingEnabled = false;
        this.alertingErrorOrTimeout = '';
        this.alertingNoDataOrNullValues = '';
        this.alertingMinInterval = 1;
        this.authProxyEnabled = false;
        this.exploreEnabled = false;
        this.ldapEnabled = false;
        this.sigV4AuthEnabled = false;
        this.samlEnabled = false;
        this.samlName = '';
        this.autoAssignOrg = true;
        this.verifyEmailEnabled = false;
        this.disableUserSignUp = false;
        this.viewersCanEdit = false;
        this.editorsCanAdmin = false;
        this.disableSanitizeHtml = false;
        this.liveEnabled = true;
        this.pluginsToPreload = [];
        this.featureToggles = {
            accesscontrol: false,
            trimDefaults: false,
            tempoServiceGraph: false,
            tempoSearch: false,
            recordedQueries: false,
            newNavigation: false,
            fullRangeLogsVolume: false,
        };
        this.licenseInfo = {};
        this.rendererAvailable = false;
        this.rendererVersion = '';
        this.http2Enabled = false;
        this.sentry = {
            enabled: false,
            dsn: '',
            customEndpoint: '',
            sampleRate: 1,
        };
        this.pluginCatalogURL = 'https://grafana.com/grafana/plugins/';
        this.pluginAdminEnabled = true;
        this.pluginAdminExternalManageEnabled = false;
        this.pluginCatalogHiddenPlugins = [];
        this.expressionsEnabled = false;
        this.awsAllowedAuthProviders = [];
        this.awsAssumeRoleEnabled = false;
        this.azure = {
            managedIdentityEnabled: false,
        };
        this.caching = {
            enabled: false,
        };
        this.unifiedAlertingEnabled = false;
        this.recordedQueries = {
            enabled: false,
        };
        var mode = options.bootData.user.lightTheme ? 'light' : 'dark';
        this.theme2 = data.createTheme({ colors: { mode: mode } });
        this.theme = this.theme2.v1;
        var defaults = {
            datasources: {},
            windowTitlePrefix: 'Grafana - ',
            panels: {},
            newPanelTitle: 'Panel Title',
            playlist_timespan: '1m',
            unsaved_changes_warning: true,
            appUrl: '',
            appSubUrl: '',
            buildInfo: {
                version: 'v1.0',
                commit: '1',
                env: 'production',
                isEnterprise: false,
            },
            viewersCanEdit: false,
            editorsCanAdmin: false,
            disableSanitizeHtml: false,
        };
        lodash.merge(this, defaults, options);
        if (this.dateFormats) {
            data.systemDateFormats.update(this.dateFormats);
        }
    }
    return GrafanaBootConfig;
}());
var bootData = window.grafanaBootData || {
    settings: {},
    user: {},
    navTree: [],
};
var options = bootData.settings;
options.bootData = bootData;
/**
 * Use this to access the {@link GrafanaBootConfig} for the current running Grafana instance.
 *
 * @public
 */
var config$1 = new GrafanaBootConfig(options);

/** @internal */
var HistoryWrapper = /** @class */ (function () {
    function HistoryWrapper(history) {
        var _a;
        // If no history passed create an in memory one if being called from test
        this.history =
            history ||
                (process.env.NODE_ENV === 'test'
                    ? createMemoryHistory({ initialEntries: ['/'] })
                    : createBrowserHistory({ basename: (_a = config$1.appSubUrl) !== null && _a !== void 0 ? _a : '/' }));
        this.partial = this.partial.bind(this);
        this.push = this.push.bind(this);
        this.replace = this.replace.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.getHistory = this.getHistory.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }
    HistoryWrapper.prototype.getHistory = function () {
        return this.history;
    };
    HistoryWrapper.prototype.getSearch = function () {
        return new URLSearchParams(this.history.location.search);
    };
    HistoryWrapper.prototype.partial = function (query, replace) {
        var e_1, _a;
        var currentLocation = this.history.location;
        var newQuery = this.getSearchObject();
        try {
            for (var _b = __values$2(Object.keys(query)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                // removing params with null | undefined
                if (query[key] === null || query[key] === undefined) {
                    delete newQuery[key];
                }
                else {
                    newQuery[key] = query[key];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var updatedUrl = data.urlUtil.renderUrl(currentLocation.pathname, newQuery);
        if (replace) {
            this.history.replace(updatedUrl, this.history.location.state);
        }
        else {
            this.history.push(updatedUrl, this.history.location.state);
        }
    };
    HistoryWrapper.prototype.push = function (location) {
        this.history.push(location);
    };
    HistoryWrapper.prototype.replace = function (location) {
        this.history.replace(location);
    };
    HistoryWrapper.prototype.reload = function () {
        var _a;
        var prevState = (_a = this.history.location.state) === null || _a === void 0 ? void 0 : _a.routeReloadCounter;
        this.history.replace(__assign$1(__assign$1({}, this.history.location), { state: { routeReloadCounter: prevState ? prevState + 1 : 1 } }));
    };
    HistoryWrapper.prototype.getLocation = function () {
        return this.history.location;
    };
    HistoryWrapper.prototype.getSearchObject = function () {
        return locationSearchToObject(this.history.location.search);
    };
    /** @deprecated use partial, push or replace instead */
    HistoryWrapper.prototype.update = function (options) {
        data.deprecationWarning('LocationSrv', 'update', 'partial, push or replace');
        if (options.partial && options.query) {
            this.partial(options.query, options.partial);
        }
        else {
            var newLocation = {
                pathname: options.path,
            };
            if (options.query) {
                newLocation.search = data.urlUtil.toUrlParams(options.query);
            }
            if (options.replace) {
                this.replace(newLocation);
            }
            else {
                this.push(newLocation);
            }
        }
    };
    return HistoryWrapper;
}());
/**
 * @alpha
 * Parses a location search string to an object
 * */
function locationSearchToObject(search) {
    var queryString = typeof search === 'number' ? String(search) : search;
    if (queryString.length > 0) {
        if (queryString.startsWith('?')) {
            return data.urlUtil.parseKeyValue(queryString.substring(1));
        }
        return data.urlUtil.parseKeyValue(queryString);
    }
    return {};
}
/**
 * @alpha
 */
exports.locationService = new HistoryWrapper();
/** @internal
 * Used for tests only
 */
var setLocationService = function (location) {
    if (process.env.NODE_ENV !== 'test') {
        throw new Error('locationService can be only overriden in test environment');
    }
    exports.locationService = location;
};
var navigationLog = ui.createLogger('Router');
/** @internal */
var navigationLogger = navigationLog.logger;
// For debugging purposes the location service is attached to global _debug variable
ui.attachDebugger('location', exports.locationService, navigationLog);

/**
 * Called when a dashboard is refreshed
 *
 * @public
 */
var RefreshEvent = /** @class */ (function (_super) {
    __extends$1(RefreshEvent, _super);
    function RefreshEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefreshEvent.type = 'refresh';
    return RefreshEvent;
}(data.BusEventBase));
/**
 * Called when the theme settings change
 *
 * @public
 */
var ThemeChangedEvent = /** @class */ (function (_super) {
    __extends$1(ThemeChangedEvent, _super);
    function ThemeChangedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeChangedEvent.type = 'theme-changed';
    return ThemeChangedEvent;
}(data.BusEventWithPayload));
/**
 * Called when time range is updated
 *
 * @public
 */
var TimeRangeUpdatedEvent = /** @class */ (function (_super) {
    __extends$1(TimeRangeUpdatedEvent, _super);
    function TimeRangeUpdatedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeRangeUpdatedEvent.type = 'time-range-updated';
    return TimeRangeUpdatedEvent;
}(data.BusEventWithPayload));
/**
 * Called to copy a panel JSON into local storage
 *
 * @public
 */
var CopyPanelEvent = /** @class */ (function (_super) {
    __extends$1(CopyPanelEvent, _super);
    function CopyPanelEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CopyPanelEvent.type = 'copy-panel';
    return CopyPanelEvent;
}(data.BusEventWithPayload));
// Internal singleton instance
var singletonInstance;
/**
 * Used during startup by Grafana to set the LocationSrv so it is available
 * via the {@link getLocationSrv} to the rest of the application.
 *
 * @internal
 */
function setAppEvents(instance) {
    singletonInstance = instance;
}
/**
 * Used to retrieve an event bus that manages application level events
 *
 * @public
 */
function getAppEvents() {
    return singletonInstance;
}

/**
 * The meta analytics events that can be added to the echo service.
 *
 * @public
 */
exports.MetaAnalyticsEventName = void 0;
(function (MetaAnalyticsEventName) {
    MetaAnalyticsEventName["DashboardView"] = "dashboard-view";
    MetaAnalyticsEventName["DataRequest"] = "data-request";
})(exports.MetaAnalyticsEventName || (exports.MetaAnalyticsEventName = {}));
/**
 * Pageview event typeguard.
 *
 * @public
 */
var isPageviewEvent = function (event) {
    return Boolean(event.payload.page);
};
/**
 * Interaction event typeguard.
 *
 * @public
 */
var isInteractionEvent = function (event) {
    return Boolean(event.payload.interactionName);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var system = {exports: {}};

/*
 * SystemJS v0.20.19 Dev
 */

(function (module) {
!function(){function e(e){return ut?Symbol():"@@"+e}function t(e,t){ot||(t=t.replace(at?/file:\/\/\//g:/file:\/\//g,""));var r,n=(e.message||e)+"\n  "+t;r=ft&&e.fileName?new Error(n,e.fileName,e.lineNumber):new Error(n);var o=e.originalErr?e.originalErr.stack:e.stack;return r.stack=it?n+"\n  "+o:o,r.originalErr=e.originalErr||e,r}function r(e,t){throw new RangeError('Unable to resolve "'+e+'" to '+t)}function n(e,t){e=e.trim();var n=t&&t.substr(0,t.indexOf(":")+1),o=e[0],i=e[1];if("/"===o&&"/"===i)return n||r(e,t),n+e;if("."===o&&("/"===i||"."===i&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===o){var a,s=!n||"/"!==t[n.length];if(s?(void 0===t&&r(e,t),a=t):a="/"===t[n.length+1]?"file:"!==n?(a=t.substr(n.length+2)).substr(a.indexOf("/")+1):t.substr(8):t.substr(n.length+1),"/"===o){if(!s)return t.substr(0,t.length-a.length-1)+e;r(e,t);}for(var u=a.substr(0,a.lastIndexOf("/")+1)+e,l=[],c=-1,f=0;f<u.length;f++)if(-1===c)if("."!==u[f])c=f;else {if("."!==u[f+1]||"/"!==u[f+2]&&f+2!==u.length){if("/"!==u[f+1]&&f+1!==u.length){c=f;continue}f+=1;}else l.pop(),f+=2;s&&0===l.length&&r(e,t);}else "/"===u[f]&&(l.push(u.substring(c,f+1)),c=-1);return -1!==c&&l.push(u.substr(c)),t.substr(0,t.length-a.length)+l.join("")}return -1!==e.indexOf(":")?it&&":"===e[1]&&"\\"===e[2]&&e[0].match(/[a-z]/i)?"file:///"+e.replace(/\\/g,"/"):e:void 0}function o(e){if(e.values)return e.values();if("undefined"==typeof Symbol||!Symbol.iterator)throw new Error("Symbol.iterator not supported in this browser");var t={};return t[Symbol.iterator]=function(){var t=Object.keys(e),r=0;return {next:function(){return r<t.length?{value:e[t[r++]],done:!1}:{value:void 0,done:!0}}}},t}function i(){this.registry=new u;}function a(e){if(!(e instanceof l))throw new TypeError("Module instantiation did not return a valid namespace object.");return e}function s(e){if(void 0===e)throw new RangeError("No resolution found.");return e}function u(){this[mt]={};}function l(e){Object.defineProperty(this,vt,{value:e}),Object.keys(e).forEach(c,this);}function c(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[vt][e]}});}function f(){i.call(this);var e=this.registry.delete;this.registry.delete=function(r){var n=e.call(this,r);return t.hasOwnProperty(r)&&!t[r].linkRecord&&(delete t[r],n=!0),n};var t={};this[yt]={lastRegister:void 0,records:t},this.trace=!1;}function d(e,t,r){return e.records[t]={key:t,registration:r,module:void 0,importerSetters:void 0,loadError:void 0,evalError:void 0,linkRecord:{instantiatePromise:void 0,dependencies:void 0,execute:void 0,executingRequire:!1,moduleObj:void 0,setters:void 0,depsInstantiatePromise:void 0,dependencyInstantiations:void 0}}}function p(e,t,r,n,o){var i=n[t];if(i)return Promise.resolve(i);var a=o.records[t];return a&&!a.module?a.loadError?Promise.reject(a.loadError):h(e,a,a.linkRecord,n,o):e.resolve(t,r).then(function(t){if(i=n[t])return i;if((a=o.records[t])&&!a.module||(a=d(o,t,a&&a.registration)),a.loadError)return Promise.reject(a.loadError);var r=a.linkRecord;return r?h(e,a,r,n,o):a})}function g(e,t,r){return function(){var e=r.lastRegister;return e?(r.lastRegister=void 0,t.registration=e,!0):!!t.registration}}function h(e,r,n,o,i){return n.instantiatePromise||(n.instantiatePromise=(r.registration?Promise.resolve():Promise.resolve().then(function(){return i.lastRegister=void 0,e[bt](r.key,e[bt].length>1&&g(e,r,i))})).then(function(t){if(void 0!==t){if(!(t instanceof l))throw new TypeError("Instantiate did not return a valid Module object.");return delete i.records[r.key],e.trace&&v(e,r,n),o[r.key]=t}var a=r.registration;if(r.registration=void 0,!a)throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");return n.dependencies=a[0],r.importerSetters=[],n.moduleObj={},a[2]?(n.moduleObj.default=n.moduleObj.__useDefault={},n.executingRequire=a[1],n.execute=a[2]):y(e,r,n,a[1]),r}).catch(function(e){throw r.linkRecord=void 0,r.loadError=r.loadError||t(e,"Instantiating "+r.key)}))}function m(e,t,r,n,o,i){return e.resolve(t,r).then(function(r){i&&(i[t]=r);var a=o.records[r],s=n[r];if(s&&(!a||a.module&&s!==a.module))return s;if(a&&a.loadError)throw a.loadError;(!a||!s&&a.module)&&(a=d(o,r,a&&a.registration));var u=a.linkRecord;return u?h(e,a,u,n,o):a})}function v(e,t,r){e.loads=e.loads||{},e.loads[t.key]={key:t.key,deps:r.dependencies,dynamicDeps:[],depMap:r.depMap||{}};}function y(e,t,r,n){var o=r.moduleObj,i=t.importerSetters,a=!1,s=n.call(st,function(e,t){if("object"==typeof e){var r=!1;for(var n in e)t=e[n],"__useDefault"===n||n in o&&o[n]===t||(r=!0,o[n]=t);if(!1===r)return t}else {if((a||e in o)&&o[e]===t)return t;o[e]=t;}for(var s=0;s<i.length;s++)i[s](o);return t},new x(e,t.key));r.setters=s.setters,r.execute=s.execute,s.exports&&(r.moduleObj=o=s.exports,a=!0);}function b(e,r,n,o,i){if(n.depsInstantiatePromise)return n.depsInstantiatePromise;for(var a=Array(n.dependencies.length),s=0;s<n.dependencies.length;s++)a[s]=m(e,n.dependencies[s],r.key,o,i,e.trace&&n.depMap||(n.depMap={}));var u=Promise.all(a).then(function(e){if(n.dependencyInstantiations=e,n.setters)for(var t=0;t<e.length;t++){var o=n.setters[t];if(o){var i=e[t];if(i instanceof l)o(i);else {if(i.loadError)throw i.loadError;o(i.module||i.linkRecord.moduleObj),i.importerSetters&&i.importerSetters.push(o);}}}return r});return e.trace&&(u=u.then(function(){return v(e,r,n),r})),(u=u.catch(function(e){throw n.depsInstantiatePromise=void 0,t(e,"Loading "+r.key)})).catch(function(){}),n.depsInstantiatePromise=u}function w(e,t,r,n,o){return new Promise(function(r,i){function a(t){var r=t.linkRecord;r&&-1===u.indexOf(t)&&(u.push(t),c++,b(e,t,r,n,o).then(s,i));}function s(e){c--;var t=e.linkRecord;if(t)for(var n=0;n<t.dependencies.length;n++){var o=t.dependencyInstantiations[n];o instanceof l||a(o);}0===c&&r();}var u=[],c=0;a(t);})}function x(e,t){this.loader=e,this.key=this.id=t,this.meta={url:t};}function k(e,t,r,n,o,i){if(t.module)return t.module;if(t.evalError)throw t.evalError;if(i&&-1!==i.indexOf(t))return t.linkRecord.moduleObj;var a=O(e,t,r,n,o,r.setters?[]:i||[]);if(a)throw a;return t.module}function E(e,t,r,n,o,i,a){return function(s){for(var u=0;u<r.length;u++)if(r[u]===s){var c,f=n[u];return c=f instanceof l?f:k(e,f,f.linkRecord,o,i,a),"__useDefault"in c?c.__useDefault:c}throw new Error("Module "+s+" not declared as a System.registerDynamic dependency of "+t)}}function O(e,r,n,o,i,a){a.push(r);var s;if(n.setters)for(var u,c,f=0;f<n.dependencies.length;f++)if(!((u=n.dependencyInstantiations[f])instanceof l)&&((c=u.linkRecord)&&-1===a.indexOf(u)&&(s=u.evalError?u.evalError:O(e,u,c,o,i,c.setters?a:[])),s))return r.linkRecord=void 0,r.evalError=t(s,"Evaluating "+r.key),r.evalError;if(n.execute)if(n.setters)s=S(n.execute);else {var d={id:r.key},p=n.moduleObj;Object.defineProperty(d,"exports",{configurable:!0,set:function(e){p.default=p.__useDefault=e;},get:function(){return p.__useDefault}});var g=E(e,r.key,n.dependencies,n.dependencyInstantiations,o,i,a);if(!n.executingRequire)for(f=0;f<n.dependencies.length;f++)g(n.dependencies[f]);s=j(n.execute,g,p.default,d),d.exports!==p.__useDefault&&(p.default=p.__useDefault=d.exports);var h=p.default;if(h&&h.__esModule)for(var m in h)Object.hasOwnProperty.call(h,m)&&(p[m]=h[m]);}if(r.linkRecord=void 0,s)return r.evalError=t(s,"Evaluating "+r.key);if(o[r.key]=r.module=new l(n.moduleObj),!n.setters){if(r.importerSetters)for(f=0;f<r.importerSetters.length;f++)r.importerSetters[f](r.module);r.importerSetters=void 0;}}function S(e){try{e.call(wt);}catch(e){return e}}function j(e,t,r,n){try{var o=e.call(st,t,r,n);void 0!==o&&(n.exports=o);}catch(e){return e}}function _(){}function P(e){return e instanceof l?e:new l(e&&e.__esModule?e:{default:e,__useDefault:e})}function M(e){return void 0===xt&&(xt="undefined"!=typeof Symbol&&!!Symbol.toStringTag),e instanceof l||xt&&"[object Module]"==Object.prototype.toString.call(e)}function R(e,t){(t||this.warnings&&"undefined"!=typeof console&&console.warn)&&console.warn(e);}function C(e,t,r){var n=new Uint8Array(t);return 0===n[0]&&97===n[1]&&115===n[2]?WebAssembly.compile(t).then(function(t){var n=[],o=[],i={};return WebAssembly.Module.imports&&WebAssembly.Module.imports(t).forEach(function(e){var t=e.module;o.push(function(e){i[t]=e;}),-1===n.indexOf(t)&&n.push(t);}),e.register(n,function(e){return {setters:o,execute:function(){e(new WebAssembly.Instance(t,i).exports);}}}),r(),!0}):Promise.resolve(!1)}function L(e,t){if("."===e[0])throw new Error("Node module "+e+" can't be loaded as it is not a package require.");if(!kt){var r=this._nodeRequire("module"),n=decodeURI(t.substr(at?8:7));(kt=new r(n)).paths=r._nodeModulePaths(n);}return kt.require(e)}function A(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function I(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&void 0===e[r]&&(e[r]=t[r]);return e}function F(e,t,r){for(var n in t)if(Object.hasOwnProperty.call(t,n)){var o=t[n];void 0===e[n]?e[n]=o:o instanceof Array&&e[n]instanceof Array?e[n]=[].concat(r?o:e[n]).concat(r?e[n]:o):"object"==typeof o&&null!==o&&"object"==typeof e[n]?e[n]=(r?I:A)(A({},e[n]),o):r||(e[n]=o);}}function K(e){if(Pt||Mt){var t=document.createElement("link");Pt?(t.rel="preload",t.as="script"):t.rel="prefetch",t.href=e,document.head.appendChild(t);}else (new Image).src=e;}function D(e,t,r){try{importScripts(e);}catch(e){r(e);}t();}function U(e,t,r,n,o){function i(){n(),s();}function a(t){s(),o(new Error("Fetching "+e));}function s(){for(var e=0;e<Rt.length;e++)if(Rt[e].err===a){Rt.splice(e,1);break}u.removeEventListener("load",i,!1),u.removeEventListener("error",a,!1),document.head.removeChild(u);}if(e=e.replace(/#/g,"%23"),_t)return D(e,n,o);var u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,t&&(u.crossOrigin=t),r&&(u.integrity=r),u.addEventListener("load",i,!1),u.addEventListener("error",a,!1),u.src=e,document.head.appendChild(u);}function q(e,t){for(var r=e.split(".");r.length;)t=t[r.shift()];return t}function T(e,t,r){var o=N(t,r);if(o){var i=t[o]+r.substr(o.length),a=n(i,nt);return void 0!==a?a:e+i}return -1!==r.indexOf(":")?r:e+r}function z(e){var t=this.name;if(t.substr(0,e.length)===e&&(t.length===e.length||"/"===t[e.length]||"/"===e[e.length-1]||":"===e[e.length-1])){var r=e.split("/").length;r>this.len&&(this.match=e,this.len=r);}}function N(e,t){if(Object.hasOwnProperty.call(e,t))return t;var r={name:t,match:void 0,len:0};return Object.keys(e).forEach(z,r),r.match}function J(e,t,r,n){if("file:///"===e.substr(0,8)){if(Ft)return $(e,t,r,n);throw new Error("Unable to fetch file URLs in this environment.")}e=e.replace(/#/g,"%23");var o={headers:{Accept:"application/x-es-module, */*"}};return r&&(o.integrity=r),t&&("string"==typeof t&&(o.headers.Authorization=t),o.credentials="include"),fetch(e,o).then(function(e){if(e.ok)return n?e.arrayBuffer():e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)})}function $(e,t,r,n){return new Promise(function(r,o){function i(){r(n?s.response:s.responseText);}function a(){o(new Error("XHR error: "+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e));}e=e.replace(/#/g,"%23");var s=new XMLHttpRequest;n&&(s.responseType="arraybuffer"),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.response?i():(s.addEventListener("error",a),s.addEventListener("load",i)):200===s.status?i():a());},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),s.send(null);})}function B(e,t,r,n){return "file:///"!=e.substr(0,8)?Promise.reject(new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// supported running in Node.')):(Lt=Lt||require$$0__default["default"],e=at?e.replace(/\//g,"\\").substr(8):e.substr(7),new Promise(function(t,r){Lt.readFile(e,function(e,o){if(e)return r(e);if(n)t(o);else {var i=o+"";"\ufeff"===i[0]&&(i=i.substr(1)),t(i);}});}))}function W(){throw new Error("No fetch method is defined for this environment.")}function G(){return {pluginKey:void 0,pluginArgument:void 0,pluginModule:void 0,packageKey:void 0,packageConfig:void 0,load:void 0}}function H(e,t,r){var n=G();if(r){var o;t.pluginFirst?-1!==(o=r.lastIndexOf("!"))&&(n.pluginArgument=n.pluginKey=r.substr(0,o)):-1!==(o=r.indexOf("!"))&&(n.pluginArgument=n.pluginKey=r.substr(o+1)),n.packageKey=N(t.packages,r),n.packageKey&&(n.packageConfig=t.packages[n.packageKey]);}return n}function Z(e,t){var r=this[St],n=G(),o=H(this,r,t),i=this;return Promise.resolve().then(function(){var r=e.lastIndexOf("#?");if(-1===r)return Promise.resolve(e);var n=he.call(i,e.substr(r+2));return me.call(i,n,t,!0).then(function(t){return t?e.substr(0,r):"@empty"})}).then(function(e){var a=ne(r.pluginFirst,e);return a?(n.pluginKey=a.plugin,Promise.all([ee.call(i,r,a.argument,o&&o.pluginArgument||t,n,o,!0),i.resolve(a.plugin,t)]).then(function(e){if(n.pluginArgument=e[0],n.pluginKey=e[1],n.pluginArgument===n.pluginKey)throw new Error("Plugin "+n.pluginArgument+" cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");return oe(r.pluginFirst,e[0],e[1])})):ee.call(i,r,e,o&&o.pluginArgument||t,n,o,!1)}).then(function(e){return ve.call(i,e,t,o)}).then(function(e){return re.call(i,r,e,n),n.pluginKey||!n.load.loader?e:i.resolve(n.load.loader,e).then(function(t){return n.pluginKey=t,n.pluginArgument=e,e})}).then(function(e){return i[jt][e]=n,e})}function X(e,t){var r=ne(e.pluginFirst,t);if(r){var n=X.call(this,e,r.plugin);return oe(e.pluginFirst,Q.call(this,e,r.argument,void 0,!1,!1),n)}return Q.call(this,e,t,void 0,!1,!1)}function Y(e,t){var r=this[St],n=G(),o=o||H(this,r,t),i=ne(r.pluginFirst,e);return i?(n.pluginKey=Y.call(this,i.plugin,t),oe(r.pluginFirst,V.call(this,r,i.argument,o.pluginArgument||t,n,o,!!n.pluginKey),n.pluginKey)):V.call(this,r,e,o.pluginArgument||t,n,o,!!n.pluginKey)}function Q(e,t,r,o,i){var a=n(t,r||nt);if(a)return T(e.baseURL,e.paths,a);if(o){var s=N(e.map,t);if(s&&(t=e.map[s]+t.substr(s.length),a=n(t,nt)))return T(e.baseURL,e.paths,a)}if(this.registry.has(t))return t;if("@node/"===t.substr(0,6))return t;var u=i&&"/"!==t[t.length-1],l=T(e.baseURL,e.paths,u?t+"/":t);return u?l.substr(0,l.length-1):l}function V(e,t,r,n,o,i){if(o&&o.packageConfig&&"."!==t[0]){var a=o.packageConfig.map,s=a&&N(a,t);if(s&&"string"==typeof a[s]){var u=ue(this,e,o.packageConfig,o.packageKey,s,t,n,i);if(u)return u}}var l=Q.call(this,e,t,r,!0,!0),c=de(e,l);if(n.packageKey=c&&c.packageKey||N(e.packages,l),!n.packageKey)return l;if(-1!==e.packageConfigKeys.indexOf(l))return n.packageKey=void 0,l;n.packageConfig=e.packages[n.packageKey]||(e.packages[n.packageKey]=Ee());var f=l.substr(n.packageKey.length+1);return ae(this,e,n.packageConfig,n.packageKey,f,n,i)}function ee(e,t,r,n,o,i){var a=this;return Et.then(function(){if(o&&o.packageConfig&&"./"!==t.substr(0,2)){var r=o.packageConfig.map,s=r&&N(r,t);if(s)return ce(a,e,o.packageConfig,o.packageKey,s,t,n,i)}return Et}).then(function(o){if(o)return o;var s=Q.call(a,e,t,r,!0,!0),u=de(e,s);return n.packageKey=u&&u.packageKey||N(e.packages,s),n.packageKey?-1!==e.packageConfigKeys.indexOf(s)?(n.packageKey=void 0,n.load=te(),n.load.format="json",n.load.loader="",Promise.resolve(s)):(n.packageConfig=e.packages[n.packageKey]||(e.packages[n.packageKey]=Ee()),(u&&!n.packageConfig.configured?pe(a,e,u.configPath,n):Et).then(function(){var t=s.substr(n.packageKey.length+1);return le(a,e,n.packageConfig,n.packageKey,t,n,i)})):Promise.resolve(s)})}function te(){return {extension:"",deps:void 0,format:void 0,loader:void 0,scriptLoad:void 0,globals:void 0,nonce:void 0,integrity:void 0,sourceMap:void 0,exports:void 0,encapsulateGlobal:!1,crossOrigin:void 0,cjsRequireDetection:!0,cjsDeferDepsExecute:!1,esModule:!1}}function re(e,t,r){r.load=r.load||te();var n,o=0;for(var i in e.meta)if(-1!==(n=i.indexOf("*"))&&i.substr(0,n)===t.substr(0,n)&&i.substr(n+1)===t.substr(t.length-i.length+n+1)){var a=i.split("/").length;a>o&&(o=a),F(r.load,e.meta[i],o!==a);}if(e.meta[t]&&F(r.load,e.meta[t],!1),r.packageKey){var s=t.substr(r.packageKey.length+1),u={};if(r.packageConfig.meta){o=0;ge(r.packageConfig.meta,s,function(e,t,r){r>o&&(o=r),F(u,t,r&&o>r);}),F(r.load,u,!1);}!r.packageConfig.format||r.pluginKey||r.load.loader||(r.load.format=r.load.format||r.packageConfig.format);}}function ne(e,t){var r,n,o=e?t.indexOf("!"):t.lastIndexOf("!");if(-1!==o)return e?(r=t.substr(o+1),n=t.substr(0,o)):(r=t.substr(0,o),n=t.substr(o+1)||r.substr(r.lastIndexOf(".")+1)),{argument:r,plugin:n}}function oe(e,t,r){return e?r+"!"+t:t+"!"+r}function ie(e,t,r,n,o){if(!n||!t.defaultExtension||"/"===n[n.length-1]||o)return n;var i=!1;if(t.meta&&ge(t.meta,n,function(e,t,r){if(0===r||e.lastIndexOf("*")!==e.length-1)return i=!0}),!i&&e.meta&&ge(e.meta,r+"/"+n,function(e,t,r){if(0===r||e.lastIndexOf("*")!==e.length-1)return i=!0}),i)return n;var a="."+t.defaultExtension;return n.substr(n.length-a.length)!==a?n+a:n}function ae(e,t,r,n,o,i,a){if(!o){if(!r.main)return n;o="./"===r.main.substr(0,2)?r.main.substr(2):r.main;}if(r.map){var s="./"+o,u=N(r.map,s);if(u||(s="./"+ie(t,r,n,o,a))!=="./"+o&&(u=N(r.map,s)),u){var l=ue(e,t,r,n,u,s,i,a);if(l)return l}}return n+"/"+ie(t,r,n,o,a)}function se(e,t,r){return !(t.substr(0,e.length)===e&&r.length>e.length)}function ue(e,t,r,n,o,i,a,s){"/"===i[i.length-1]&&(i=i.substr(0,i.length-1));var u=r.map[o];if("object"==typeof u)throw new Error("Synchronous conditional normalization not supported sync normalizing "+o+" in "+n);if(se(o,u,i)&&"string"==typeof u)return V.call(e,t,u+i.substr(o.length),n+"/",a,a,s)}function le(e,t,r,n,o,i,a){if(!o){if(!r.main)return Promise.resolve(n);o="./"===r.main.substr(0,2)?r.main.substr(2):r.main;}var s,u;return r.map&&(s="./"+o,(u=N(r.map,s))||(s="./"+ie(t,r,n,o,a))!=="./"+o&&(u=N(r.map,s))),(u?ce(e,t,r,n,u,s,i,a):Et).then(function(e){return e?Promise.resolve(e):Promise.resolve(n+"/"+ie(t,r,n,o,a))})}function ce(e,t,r,n,o,i,a,s){"/"===i[i.length-1]&&(i=i.substr(0,i.length-1));var u=r.map[o];if("string"==typeof u)return se(o,u,i)?ee.call(e,t,u+i.substr(o.length),n+"/",a,a,s).then(function(t){return ve.call(e,t,n+"/",a)}):Et;var l=[],c=[];for(var d in u){var p=he(d);c.push({condition:p,map:u[d]}),l.push(f.prototype.import.call(e,p.module,n));}return Promise.all(l).then(function(e){for(var t=0;t<c.length;t++){var r=c[t].condition,n=q(r.prop,"__useDefault"in e[t]?e[t].__useDefault:e[t]);if(!r.negate&&n||r.negate&&!n)return c[t].map}}).then(function(r){if(r)return se(o,r,i)?ee.call(e,t,r+i.substr(o.length),n+"/",a,a,s).then(function(t){return ve.call(e,t,n+"/",a)}):Et})}function fe(e){var t=e.lastIndexOf("*"),r=Math.max(t+1,e.lastIndexOf("/"));return {length:r,regEx:new RegExp("^("+e.substr(0,r).replace(/[.+?^${}()|[\]\\]/g,"\\$&").replace(/\*/g,"[^\\/]+")+")(\\/|$)"),wildcard:-1!==t}}function de(e,t){for(var r,n,o=!1,i=0;i<e.packageConfigPaths.length;i++){var a=e.packageConfigPaths[i],s=Dt[a]||(Dt[a]=fe(a));if(!(t.length<s.length)){var u=t.match(s.regEx);!u||r&&(o&&s.wildcard||!(r.length<u[1].length))||(r=u[1],o=!s.wildcard,n=r+a.substr(s.length));}}if(r)return {packageKey:r,configPath:n}}function pe(e,r,n,o,i){var a=e.pluginLoader||e;return -1===r.packageConfigKeys.indexOf(n)&&r.packageConfigKeys.push(n),a.import(n).then(function(e){Oe(o.packageConfig,e,o.packageKey,!0,r),o.packageConfig.configured=!0;}).catch(function(e){throw t(e,"Unable to fetch package configuration file "+n)})}function ge(e,t,r){var n;for(var o in e){var i="./"===o.substr(0,2)?"./":"";if(i&&(o=o.substr(2)),-1!==(n=o.indexOf("*"))&&o.substr(0,n)===t.substr(0,n)&&o.substr(n+1)===t.substr(t.length-o.length+n+1)&&r(o,e[i+o],o.split("/").length))return}var a=e[t]&&Object.hasOwnProperty.call(e,t)?e[t]:e["./"+t];a&&r(a,a,0);}function he(e){var t,r,n,o=e.lastIndexOf("|");return -1!==o?(t=e.substr(o+1),r=e.substr(0,o),"~"===t[0]&&(n=!0,t=t.substr(1))):(n="~"===e[0],t="default",r=e.substr(n),-1!==Ut.indexOf(r)&&(t=r,r=null)),{module:r||"@system-env",prop:t,negate:n}}function me(e,t,r){return f.prototype.import.call(this,e.module,t).then(function(t){var n=q(e.prop,t);if(r&&"boolean"!=typeof n)throw new TypeError("Condition did not resolve to a boolean.");return e.negate?!n:n})}function ve(e,t,r){var n=e.match(qt);if(!n)return Promise.resolve(e);var o=he.call(this,n[0].substr(2,n[0].length-3));return me.call(this,o,t,!1).then(function(r){if("string"!=typeof r)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");if(-1!==r.indexOf("/"))throw new TypeError("Unabled to interpolate conditional "+e+(t?" in "+t:"")+"\n\tThe condition value "+r+' cannot contain a "/" separator.');return e.replace(qt,r)})}function ye(e,t,r){for(var n=0;n<Tt.length;n++){var o=Tt[n];t[o]&&Er[o.substr(0,o.length-6)]&&r(t[o]);}}function be(e,t){var r={};for(var n in e){var o=e[n];t>1?o instanceof Array?r[n]=[].concat(o):"object"==typeof o?r[n]=be(o,t-1):"packageConfig"!==n&&(r[n]=o):r[n]=o;}return r}function we(e,t){var r=e[t];return r instanceof Array?e[t].concat([]):"object"==typeof r?be(r,3):e[t]}function xe(e){if(e){if(-1!==Or.indexOf(e))return we(this[St],e);throw new Error('"'+e+'" is not a valid configuration name. Must be one of '+Or.join(", ")+".")}for(var t={},r=0;r<Or.length;r++){var n=Or[r],o=we(this[St],n);void 0!==o&&(t[n]=o);}return t}function ke(e,t){var r=this,o=this[St];if("warnings"in e&&(o.warnings=e.warnings),"wasm"in e&&(o.wasm="undefined"!=typeof WebAssembly&&e.wasm),("production"in e||"build"in e)&&tt.call(r,!!e.production,!!(e.build||Er&&Er.build)),!t){var i;ye(r,e,function(e){i=i||e.baseURL;}),(i=i||e.baseURL)&&(o.baseURL=n(i,nt)||n("./"+i,nt),"/"!==o.baseURL[o.baseURL.length-1]&&(o.baseURL+="/")),e.paths&&A(o.paths,e.paths),ye(r,e,function(e){e.paths&&A(o.paths,e.paths);});for(var a in o.paths)-1!==o.paths[a].indexOf("*")&&(R.call(o,"Path config "+a+" -> "+o.paths[a]+" is no longer supported as wildcards are deprecated."),delete o.paths[a]);}if(e.defaultJSExtensions&&R.call(o,"The defaultJSExtensions configuration option is deprecated.\n  Use packages defaultExtension instead.",!0),"boolean"==typeof e.pluginFirst&&(o.pluginFirst=e.pluginFirst),e.map)for(var a in e.map){var s=e.map[a];if("string"==typeof s){var u=Q.call(r,o,s,void 0,!1,!1);"/"===u[u.length-1]&&":"!==a[a.length-1]&&"/"!==a[a.length-1]&&(u=u.substr(0,u.length-1)),o.map[a]=u;}else {m=(m=Q.call(r,o,"/"!==a[a.length-1]?a+"/":a,void 0,!0,!0)).substr(0,m.length-1);var l=o.packages[m];l||((l=o.packages[m]=Ee()).defaultExtension=""),Oe(l,{map:s},m,!1,o);}}if(e.packageConfigPaths){for(var c=[],f=0;f<e.packageConfigPaths.length;f++){var d=e.packageConfigPaths[f],p=Math.max(d.lastIndexOf("*")+1,d.lastIndexOf("/")),g=Q.call(r,o,d.substr(0,p),void 0,!1,!1);c[f]=g+d.substr(p);}o.packageConfigPaths=c;}if(e.bundles)for(var a in e.bundles){for(var h=[],f=0;f<e.bundles[a].length;f++)h.push(r.normalizeSync(e.bundles[a][f]));o.bundles[a]=h;}if(e.packages)for(var a in e.packages){if(a.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+a+'" is not a valid package name.');var m=Q.call(r,o,"/"!==a[a.length-1]?a+"/":a,void 0,!0,!0);m=m.substr(0,m.length-1),Oe(o.packages[m]=o.packages[m]||Ee(),e.packages[a],m,!1,o);}if(e.depCache)for(var a in e.depCache)o.depCache[r.normalizeSync(a)]=[].concat(e.depCache[a]);if(e.meta)for(var a in e.meta)if("*"===a[0])A(o.meta[a]=o.meta[a]||{},e.meta[a]);else {var v=Q.call(r,o,a,void 0,!0,!0);A(o.meta[v]=o.meta[v]||{},e.meta[a]);}"transpiler"in e&&(o.transpiler=e.transpiler);for(var y in e)-1===Or.indexOf(y)&&-1===Tt.indexOf(y)&&(r[y]=e[y]);ye(r,e,function(e){r.config(e,!0);});}function Ee(){return {defaultExtension:void 0,main:void 0,format:void 0,meta:void 0,map:void 0,packageConfig:void 0,configured:!1}}function Oe(e,t,r,n,o){for(var i in t)"main"===i||"format"===i||"defaultExtension"===i||"configured"===i?n&&void 0!==e[i]||(e[i]=t[i]):"map"===i?(n?I:A)(e.map=e.map||{},t.map):"meta"===i?(n?I:A)(e.meta=e.meta||{},t.meta):Object.hasOwnProperty.call(t,i)&&R.call(o,'"'+i+'" is not a valid package configuration option in package '+r);return void 0===e.defaultExtension&&(e.defaultExtension="js"),void 0===e.main&&e.map&&e.map["."]?(e.main=e.map["."],delete e.map["."]):"object"==typeof e.main&&(e.map=e.map||{},e.map["./@main"]=e.main,e.main.default=e.main.default||"./",e.main="@main"),e}function Se(e){return zt?Wt+new Buffer(e).toString("base64"):"undefined"!=typeof btoa?Wt+btoa(unescape(encodeURIComponent(e))):""}function je(e,t,r,n){var o=e.lastIndexOf("\n");if(t){if("object"!=typeof t)throw new TypeError("load.metadata.sourceMap must be set to an object.");t=JSON.stringify(t);}return (n?"(function(System, SystemJS) {":"")+e+(n?"\n})(System, System);":"")+("\n//# sourceURL="!=e.substr(o,15)?"\n//# sourceURL="+r+(t?"!transpiled":""):"")+(t&&Se(t)||"")}function _e(e,t,r,n,o){Nt||(Nt=document.head||document.body||document.documentElement);var i=document.createElement("script");i.text=je(t,r,n,!1);var a,s=window.onerror;if(window.onerror=function(e){a=addToError(e,"Evaluating "+n),s&&s.apply(this,arguments);},Pe(e),o&&i.setAttribute("nonce",o),Nt.appendChild(i),Nt.removeChild(i),Me(),window.onerror=s,a)return a}function Pe(e){0==Gt++&&(Bt=st.System),st.System=st.SystemJS=e;}function Me(){0==--Gt&&(st.System=st.SystemJS=Bt);}function Re(e,t,r,n,o,i,a){if(t){if(i&&Ht)return _e(e,t,r,n,i);try{Pe(e),!Jt&&e._nodeRequire&&(Jt=e._nodeRequire("vm"),$t=Jt.runInThisContext("typeof System !== 'undefined' && System")===e),$t?Jt.runInThisContext(je(t,r,n,!a),{filename:n+(r?"!transpiled":"")}):(0,eval)(je(t,r,n,!a)),Me();}catch(e){return Me(),e}}}function Ce(e){return "file:///"===e.substr(0,8)?e.substr(7+!!at):Zt&&e.substr(0,Zt.length)===Zt?e.substr(Zt.length):e}function Le(e,t){return Ce(this.normalizeSync(e,t))}function Ae(e){var t,r=e.lastIndexOf("!"),n=(t=-1!==r?e.substr(0,r):e).split("/");return n.pop(),n=n.join("/"),{filename:Ce(t),dirname:Ce(n)}}function Ie(e){function t(e,t){for(var r=0;r<e.length;r++)if(e[r][0]<t.index&&e[r][1]>t.index)return !0;return !1}It.lastIndex=tr.lastIndex=rr.lastIndex=0;var r,n=[],o=[],i=[];if(e.length/e.split("\n").length<200){for(;r=rr.exec(e);)o.push([r.index,r.index+r[0].length]);for(;r=tr.exec(e);)t(o,r)||i.push([r.index+r[1].length,r.index+r[0].length-1]);}for(;r=It.exec(e);)if(!t(o,r)&&!t(i,r)){var a=r[1].substr(1,r[1].length-2);if(a.match(/"|'/))continue;n.push(a);}return n}function Fe(e){if(-1===nr.indexOf(e)){try{var t=st[e];}catch(t){nr.push(e);}this(e,t);}}function Ke(e){if("string"==typeof e)return q(e,st);if(!(e instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},r=0;r<e.length;r++)t[e[r].split(".").pop()]=q(e[r],st);return t}function De(e,t,r,n){var o=st.define;st.define=void 0;var i;if(r){i={};for(var a in r)i[a]=st[a],st[a]=r[a];}return t||(Yt={},Object.keys(st).forEach(Fe,function(e,t){Yt[e]=t;})),function(){var e,r=t?Ke(t):{},a=!!t;if(t&&!n||Object.keys(st).forEach(Fe,function(o,i){Yt[o]!==i&&void 0!==i&&(n&&(st[o]=void 0),t||(r[o]=i,void 0!==e?a||e===i||(a=!0):e=i));}),r=a?r:e,i)for(var s in i)st[s]=i[s];return st.define=o,r}}function Ue(e,t){var r=((e=e.replace(tr,"")).match(ar)[1].split(",")[t]||"require").replace(sr,""),n=ur[r]||(ur[r]=new RegExp(or+r+ir,"g"));n.lastIndex=0;for(var o,i=[];o=n.exec(e);)i.push(o[2]||o[3]);return i}function qe(e){return function(t,r,n){e(t,r,n),"object"!=typeof(r=n.exports)&&"function"!=typeof r||"__esModule"in r||Object.defineProperty(n.exports,"__esModule",{value:!0});}}function Te(e,t){Vt=e,cr=t,Qt=void 0,lr=!1;}function ze(e){Qt?e.registerDynamic(Vt?Qt[0].concat(Vt):Qt[0],!1,cr?qe(Qt[1]):Qt[1]):lr&&e.registerDynamic([],!1,_);}function Ne(e,t){!e.load.esModule||"object"!=typeof t&&"function"!=typeof t||"__esModule"in t||Object.defineProperty(t,"__esModule",{value:!0});}function Je(e,t){var r=this,n=this[St];return (Be(n,this,e)||Et).then(function(){if(!t()){var o=r[jt][e];if("@node/"===e.substr(0,6)){if(!r._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");return r.registerDynamic([],!1,function(){return L.call(r,e.substr(6),r.baseURL)}),void t()}return o.load.scriptLoad?!o.load.pluginKey&&fr||(o.load.scriptLoad=!1,R.call(n,'scriptLoad not supported for "'+e+'"')):!1!==o.load.scriptLoad&&!o.load.pluginKey&&fr&&(o.load.deps||o.load.globals||!("system"===o.load.format||"register"===o.load.format||"global"===o.load.format&&o.load.exports)||(o.load.scriptLoad=!0)),o.load.scriptLoad?new Promise(function(n,i){if("amd"===o.load.format&&st.define!==r.amdDefine)throw new Error("Loading AMD with scriptLoad requires setting the global `"+pr+".define = SystemJS.amdDefine`");U(e,o.load.crossOrigin,o.load.integrity,function(){if(!t()){o.load.format="global";var e=o.load.exports&&Ke(o.load.exports);r.registerDynamic([],!1,function(){return Ne(o,e),e}),t();}n();},i);}):$e(r,e,o).then(function(){return We(r,e,o,t,n.wasm)})}}).then(function(t){return delete r[jt][e],t})}function $e(e,t,r){return r.pluginKey?e.import(r.pluginKey).then(function(e){r.pluginModule=e,r.pluginLoad={name:t,address:r.pluginArgument,source:void 0,metadata:r.load},r.load.deps=r.load.deps||[];}):Et}function Be(e,t,r){var n=e.depCache[r];if(n)for(a=0;a<n.length;a++)t.normalize(n[a],r).then(K);else {var o=!1;for(var i in e.bundles){for(var a=0;a<e.bundles[i].length;a++){var s=e.bundles[i][a];if(s===r){o=!0;break}if(-1!==s.indexOf("*")){var u=s.split("*");if(2!==u.length){e.bundles[i].splice(a--,1);continue}if(r.substr(0,u[0].length)===u[0]&&r.substr(r.length-u[1].length,u[1].length)===u[1]){o=!0;break}}}if(o)return t.import(i)}}}function We(e,t,r,n,o){return r.load.exports&&!r.load.format&&(r.load.format="global"),Et.then(function(){if(r.pluginModule&&r.pluginModule.locate)return Promise.resolve(r.pluginModule.locate.call(e,r.pluginLoad)).then(function(e){e&&(r.pluginLoad.address=e);})}).then(function(){return r.pluginModule?(o=!1,r.pluginModule.fetch?r.pluginModule.fetch.call(e,r.pluginLoad,function(e){return Kt(e.address,r.load.authorization,r.load.integrity,!1)}):Kt(r.pluginLoad.address,r.load.authorization,r.load.integrity,!1)):Kt(t,r.load.authorization,r.load.integrity,o)}).then(function(i){return o&&"string"!=typeof i?C(e,i,n).then(function(o){if(!o){var a=ot?new TextDecoder("utf-8").decode(new Uint8Array(i)):i.toString();return Ge(e,t,a,r,n)}}):Ge(e,t,i,r,n)})}function Ge(e,t,r,n,o){return Promise.resolve(r).then(function(t){return "detect"===n.load.format&&(n.load.format=void 0),Ve(t,n),n.pluginModule?(n.pluginLoad.source=t,n.pluginModule.translate?Promise.resolve(n.pluginModule.translate.call(e,n.pluginLoad,n.traceOpts)).then(function(e){if(n.load.sourceMap){if("object"!=typeof n.load.sourceMap)throw new Error("metadata.load.sourceMap must be set to an object.");Xe(n.pluginLoad.address,n.load.sourceMap);}return "string"==typeof e?e:n.pluginLoad.source}):t):t}).then(function(r){return n.load.format||'"bundle"'!==r.substring(0,8)?"register"===n.load.format||!n.load.format&&He(r)?(n.load.format="register",r):"esm"===n.load.format||!n.load.format&&r.match(gr)?(n.load.format="esm",Ye(e,r,t,n)):r:(n.load.format="system",r)}).then(function(t){if("string"!=typeof t||!n.pluginModule||!n.pluginModule.instantiate)return t;var r=!1;return n.pluginLoad.source=t,Promise.resolve(n.pluginModule.instantiate.call(e,n.pluginLoad,function(e){if(t=e.source,n.load=e.metadata,r)throw new Error("Instantiate must only be called once.");r=!0;})).then(function(e){return r?t:P(e)})}).then(function(r){if("string"!=typeof r)return r;n.load.format||(n.load.format=Ze(r));var i=!1;switch(n.load.format){case"esm":case"register":case"system":if(u=Re(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1))throw u;if(!o())return Ot;return;case"json":var a=JSON.parse(r);return e.newModule({default:a,__useDefault:a});case"amd":var s=st.define;st.define=e.amdDefine,Te(n.load.deps,n.load.esModule);var u=Re(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1);if((i=o())||(ze(e),i=o()),st.define=s,u)throw u;break;case"cjs":var l=n.load.deps,c=(n.load.deps||[]).concat(n.load.cjsRequireDetection?Ie(r):[]);for(var f in n.load.globals)n.load.globals[f]&&c.push(n.load.globals[f]);e.registerDynamic(c,!0,function(o,i,a){if(o.resolve=function(t){return Le.call(e,t,a.id)},a.paths=[],a.require=o,!n.load.cjsDeferDepsExecute&&l)for(var s=0;s<l.length;s++)o(l[s]);var u=Ae(a.id),c={exports:i,args:[o,i,a,u.filename,u.dirname,st,st]},f="(function (require, exports, module, __filename, __dirname, global, GLOBAL";if(n.load.globals)for(var d in n.load.globals)c.args.push(o(n.load.globals[d])),f+=", "+d;var p=st.define;st.define=void 0,st.__cjsWrapper=c,r=f+") {"+r.replace(yr,"")+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";var g=Re(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!1);if(g)throw g;Ne(n,i),st.__cjsWrapper=void 0,st.define=p;}),i=o();break;case"global":c=n.load.deps||[];for(var f in n.load.globals){var d=n.load.globals[f];d&&c.push(d);}e.registerDynamic(c,!1,function(o,i,a){var s;if(n.load.globals){s={};for(var u in n.load.globals)n.load.globals[u]&&(s[u]=o(n.load.globals[u]));}var l=n.load.exports;l&&(r+="\n"+pr+'["'+l+'"] = '+l+";");var c=De(a.id,l,s,n.load.encapsulateGlobal),f=Re(e,r,n.load.sourceMap,t,n.load.integrity,n.load.nonce,!0);if(f)throw f;var d=c();return Ne(n,d),d}),i=o();break;default:throw new TypeError('Unknown module format "'+n.load.format+'" for "'+t+'".'+("es6"===n.load.format?' Use "esm" instead here.':""))}if(!i)throw new Error("Module "+t+" detected as "+n.load.format+" but didn't execute correctly.")})}function He(e){var t=e.match(hr);return t&&"System.register"===e.substr(t[0].length,15)}function Ze(e){return e.match(mr)?"amd":(vr.lastIndex=0,It.lastIndex=0,It.exec(e)||vr.exec(e)?"cjs":"global")}function Xe(e,t){var r=e.split("!")[0];t.file&&t.file!=e||(t.file=r+"!transpiled"),(!t.sources||t.sources.length<=1&&(!t.sources[0]||t.sources[0]===e))&&(t.sources=[r]);}function Ye(e,r,n,o,i){if(!e.transpiler)throw new TypeError("Unable to dynamically transpile ES module\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: 'transpiler-module' })`.");if(o.load.deps){for(var a="",s=0;s<o.load.deps.length;s++)a+='import "'+o.load.deps[s]+'"; ';r=a+r;}return e.import.call(e,e.transpiler).then(function(t){if(!(t=t.__useDefault||t).translate)throw new Error(e.transpiler+" is not a valid transpiler plugin.");return t===o.pluginModule?r:("string"==typeof o.load.sourceMap&&(o.load.sourceMap=JSON.parse(o.load.sourceMap)),o.pluginLoad=o.pluginLoad||{name:n,address:n,source:r,metadata:o.load},o.load.deps=o.load.deps||[],Promise.resolve(t.translate.call(e,o.pluginLoad,o.traceOpts)).then(function(e){var t=o.load.sourceMap;return t&&"object"==typeof t&&Xe(n,t),"esm"===o.load.format&&He(e)&&(o.load.format="register"),e}))},function(e){throw t(e,"Unable to load transpiler to transpile "+n)})}function Qe(e,t,r){for(var n,o=t.split(".");o.length>1;)e=e[n=o.shift()]=e[n]||{};void 0===e[n=o.shift()]&&(e[n]=r);}function Ve(e,t){var r=e.match(br);if(r)for(var n=r[0].match(wr),o=0;o<n.length;o++){var i=n[o],a=i.length,s=i.substr(0,1);if(";"==i.substr(a-1,1)&&a--,'"'==s||"'"==s){var u=i.substr(1,i.length-3),l=u.substr(0,u.indexOf(" "));if(l){var c=u.substr(l.length+1,u.length-l.length-1);"deps"===l&&(l="deps[]"),"[]"===l.substr(l.length-2,2)?(l=l.substr(0,l.length-2),t.load[l]=t.load[l]||[],t.load[l].push(c)):"use"!==l&&Qe(t.load,l,c);}else t.load[u]=!0;}}}function et(){f.call(this),this._loader={},this[jt]={},this[St]={baseURL:nt,paths:{},packageConfigPaths:[],packageConfigKeys:[],map:{},packages:{},depCache:{},meta:{},bundles:{},production:!1,transpiler:void 0,loadedBundles:{},warnings:!1,pluginFirst:!1,wasm:!1},this.scriptSrc=dr,this._nodeRequire=er,this.registry.set("@empty",Ot),tt.call(this,!1,!1),Xt(this);}function tt(e,t){this[St].production=e,this.registry.set("@system-env",Er=this.newModule({browser:ot,node:!!this._nodeRequire,production:!t&&e,dev:t||!e,build:t,default:!0}));}function rt(e,t){R.call(e[St],"SystemJS."+t+" is deprecated for SystemJS.registry."+t);}var nt,ot="undefined"!=typeof window&&"undefined"!=typeof document,it="undefined"!=typeof process&&process.versions&&process.versions.node,at="undefined"!=typeof process&&"string"==typeof process.platform&&process.platform.match(/^win/),st="undefined"!=typeof self?self:commonjsGlobal,ut="undefined"!=typeof Symbol;if("undefined"!=typeof document&&document.getElementsByTagName){if(!(nt=document.baseURI)){var lt=document.getElementsByTagName("base");nt=lt[0]&&lt[0].href||window.location.href;}}else "undefined"!=typeof location&&(nt=location.href);if(nt){var ct=(nt=nt.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==ct&&(nt=nt.substr(0,ct+1));}else {if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURI");nt="file://"+(at?"/":"")+process.cwd(),at&&(nt=nt.replace(/\\/g,"/"));}"/"!==nt[nt.length-1]&&(nt+="/");var ft="_"==new Error(0,"_").fileName,dt=Promise.resolve();i.prototype.constructor=i,i.prototype.import=function(e,r){if("string"!=typeof e)throw new TypeError("Loader import method must be passed a module key string");var n=this;return dt.then(function(){return n[gt](e,r)}).then(a).catch(function(n){throw t(n,"Loading "+e+(r?" from "+r:""))})};var pt=i.resolve=e("resolve"),gt=i.resolveInstantiate=e("resolveInstantiate");i.prototype[gt]=function(e,t){var r=this;return r.resolve(e,t).then(function(e){return r.registry.get(e)})},i.prototype.resolve=function(e,r){var n=this;return dt.then(function(){return n[pt](e,r)}).then(s).catch(function(n){throw t(n,"Resolving "+e+(r?" to "+r:""))})};var ht="undefined"!=typeof Symbol&&Symbol.iterator,mt=e("registry");ht&&(u.prototype[Symbol.iterator]=function(){return this.entries()[Symbol.iterator]()},u.prototype.entries=function(){var e=this[mt];return o(Object.keys(e).map(function(t){return [t,e[t]]}))}),u.prototype.keys=function(){return o(Object.keys(this[mt]))},u.prototype.values=function(){var e=this[mt];return o(Object.keys(e).map(function(t){return e[t]}))},u.prototype.get=function(e){return this[mt][e]},u.prototype.set=function(e,t){if(!(t instanceof l))throw new Error("Registry must be set with an instance of Module Namespace");return this[mt][e]=t,this},u.prototype.has=function(e){return Object.hasOwnProperty.call(this[mt],e)},u.prototype.delete=function(e){return !!Object.hasOwnProperty.call(this[mt],e)&&(delete this[mt][e],!0)};var vt=e("baseObject");l.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l.prototype,Symbol.toStringTag,{value:"Module"});var yt=e("register-internal");f.prototype=Object.create(i.prototype),f.prototype.constructor=f;var bt=f.instantiate=e("instantiate");f.prototype[f.resolve=i.resolve]=function(e,t){return n(e,t||nt)},f.prototype[bt]=function(e,t){},f.prototype[i.resolveInstantiate]=function(e,t){var r=this,n=this[yt],o=this.registry[mt];return p(r,e,t,o,n).then(function(e){if(e instanceof l)return e;var t=e.linkRecord;if(!t){if(e.module)return e.module;throw e.evalError}return w(r,e,t,o,n).then(function(){return k(r,e,t,o,n,void 0)})})},f.prototype.register=function(e,t,r){var n=this[yt];void 0===r?n.lastRegister=[e,t,void 0]:(n.records[e]||d(n,e,void 0)).registration=[t,r,void 0];},f.prototype.registerDynamic=function(e,t,r,n){var o=this[yt];"string"!=typeof e?o.lastRegister=[e,t,r]:(o.records[e]||d(o,e,void 0)).registration=[t,r,n];},x.prototype.import=function(e){return this.loader.trace&&this.loader.loads[this.key].dynamicDeps.push(e),this.loader.import(e,this.key)};var wt={};Object.freeze&&Object.freeze(wt);var xt,kt,Et=Promise.resolve(),Ot=new l({}),St=e("loader-config"),jt=e("metadata"),_t="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,Pt=!1,Mt=!1;if(ot&&function(){var e=document.createElement("link").relList;if(e&&e.supports){Mt=!0;try{Pt=e.supports("preload");}catch(e){}}}(),ot){var Rt=[],Ct=window.onerror;window.onerror=function(e,t){for(var r=0;r<Rt.length;r++)if(Rt[r].src===t)return void Rt[r].err(e);Ct&&Ct.apply(this,arguments);};}var Lt,It=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)\s*\)/g,Ft="undefined"!=typeof XMLHttpRequest,Kt="undefined"!=typeof self&&void 0!==self.fetch?J:Ft?$:"undefined"!=typeof commonjsRequire&&"undefined"!=typeof process?B:W,Dt={},Ut=["browser","node","dev","build","production","default"],qt=/#\{[^\}]+\}/,Tt=["browserConfig","nodeConfig","devConfig","buildConfig","productionConfig"],zt="undefined"!=typeof Buffer;try{zt&&"YQ=="!==new Buffer("a").toString("base64")&&(zt=!1);}catch(e){zt=!1;}var Nt,Jt,$t,Bt,Wt="\n//# sourceMappingURL=data:application/json;base64,",Gt=0,Ht=!1;ot&&"undefined"!=typeof document&&document.getElementsByTagName&&(window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\.js/)||(Ht=!0));var Zt,Xt=function(e){function t(r,n,o,i){if("object"==typeof r&&!(r instanceof Array))return t.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof r&&"function"==typeof n&&(r=[r]),!(r instanceof Array)){if("string"==typeof r){var a=e.decanonicalize(r,i),s=e.get(a);if(!s)throw new Error('Module not already loaded loading "'+r+'" as '+a+(i?' from "'+i+'".':"."));return "__useDefault"in s?s.__useDefault:s}throw new TypeError("Invalid require")}for(var u=[],l=0;l<r.length;l++)u.push(e.import(r[l],i));Promise.all(u).then(function(e){n&&n.apply(null,e);},o);}function r(r,n,o){function i(r,i,l){for(var c=[],f=0;f<n.length;f++)c.push(r(n[f]));if(l.uri=l.id,l.config=_,-1!==u&&c.splice(u,0,l),-1!==s&&c.splice(s,0,i),-1!==a){var d=function(n,o,i){return "string"==typeof n&&"function"!=typeof o?r(n):t.call(e,n,o,i,l.id)};d.toUrl=function(t){return e.normalizeSync(t,l.id)},c.splice(a,0,d);}var p=st.require;st.require=t;var g=o.apply(-1===s?st:i,c);st.require=p,void 0!==g&&(l.exports=g);}"string"!=typeof r&&(o=n,n=r,r=null),n instanceof Array||(o=n,n=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),r||Vt&&(n=n.concat(Vt),Vt=void 0);var a,s,u;-1!==(a=n.indexOf("require"))&&(n.splice(a,1),r||(n=n.concat(Ue(o.toString(),a)))),-1!==(s=n.indexOf("exports"))&&n.splice(s,1),-1!==(u=n.indexOf("module"))&&n.splice(u,1),r?(e.registerDynamic(r,n,!1,i),Qt?(Qt=void 0,lr=!0):lr||(Qt=[n,i])):e.registerDynamic(n,!1,cr?qe(i):i);}e.set("@@cjs-helpers",e.newModule({requireResolve:Le.bind(e),getPathVars:Ae})),e.set("@@global-helpers",e.newModule({prepareGlobal:De})),r.amd={},e.amdDefine=r,e.amdRequire=t;};"undefined"!=typeof window&&"undefined"!=typeof document&&window.location&&(Zt=location.protocol+"//"+location.hostname+(location.port?":"+location.port:""));var Yt,Qt,Vt,er,tr=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,rr=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,nr=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"],or="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",ir="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",ar=/\(([^\)]*)\)/,sr=/^\s+|\s+$/g,ur={},lr=!1,cr=!1,fr=(ot||_t)&&"undefined"!=typeof navigator&&navigator.userAgent&&!navigator.userAgent.match(/MSIE (9|10).0/);"undefined"==typeof commonjsRequire||"undefined"==typeof process||process.browser||(er=commonjsRequire);var dr,pr="undefined"!=typeof self?"self":"global",gr=/(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n; ]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/,hr=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/,mr=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,vr=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,yr=/^\#\!.*/,br=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,wr=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;if("undefined"==typeof Promise)throw new Error("SystemJS needs a Promise polyfill.");if("undefined"!=typeof document){var xr=document.getElementsByTagName("script"),kr=xr[xr.length-1];document.currentScript&&(kr.defer||kr.async)&&(kr=document.currentScript),dr=kr&&kr.src;}else if("undefined"!=typeof importScripts)try{throw new Error("_")}catch(e){e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){dr=t;});}else "undefined"!=typeof __filename&&(dr=__filename);var Er;et.prototype=Object.create(f.prototype),et.prototype.constructor=et,et.prototype[et.resolve=f.resolve]=et.prototype.normalize=Z,et.prototype.load=function(e,t){return R.call(this[St],"System.load is deprecated."),this.import(e,t)},et.prototype.decanonicalize=et.prototype.normalizeSync=et.prototype.resolveSync=Y,et.prototype[et.instantiate=f.instantiate]=Je,et.prototype.config=ke,et.prototype.getConfig=xe,et.prototype.global=st,et.prototype.import=function(){return f.prototype.import.apply(this,arguments).then(function(e){return "__useDefault"in e?e.__useDefault:e})};for(var Or=["baseURL","map","paths","packages","packageConfigPaths","depCache","meta","bundles","transpiler","warnings","pluginFirst","production","wasm"],Sr="undefined"!=typeof Proxy,jr=0;jr<Or.length;jr++)!function(e){Object.defineProperty(et.prototype,e,{get:function(){var t=we(this[St],e);return Sr&&"object"==typeof t&&(t=new Proxy(t,{set:function(t,r){throw new Error("Cannot set SystemJS."+e+'["'+r+'"] directly. Use SystemJS.config({ '+e+': { "'+r+'": ... } }) rather.')}})),t},set:function(t){throw new Error("Setting `SystemJS."+e+"` directly is no longer supported. Use `SystemJS.config({ "+e+": ... })`.")}});}(Or[jr]);et.prototype.delete=function(e){return rt(this,"delete"),this.registry.delete(e)},et.prototype.get=function(e){return rt(this,"get"),this.registry.get(e)},et.prototype.has=function(e){return rt(this,"has"),this.registry.has(e)},et.prototype.set=function(e,t){return rt(this,"set"),this.registry.set(e,t)},et.prototype.newModule=function(e){return new l(e)},et.prototype.isModule=M,et.prototype.register=function(e,t,r){return "string"==typeof e&&(e=X.call(this,this[St],e)),f.prototype.register.call(this,e,t,r)},et.prototype.registerDynamic=function(e,t,r,n){return "string"==typeof e&&(e=X.call(this,this[St],e)),f.prototype.registerDynamic.call(this,e,t,r,n)},et.prototype.version="0.20.19 Dev";var _r=new et;(ot||_t)&&(st.SystemJS=st.System=_r),module.exports&&(module.exports=_r);}();
}(system));

var System = /*@__PURE__*/getDefaultExportFromCjs(system.exports);

/**
 * @internal
 */
var SystemJS = System;
/**
 * Use this to load css for a Grafana plugin by specifying a {@link PluginCssOptions}
 * containing styling for the dark and the light theme.
 *
 * @param options - plugin styling for light and dark theme.
 * @public
 */
function loadPluginCss(options) {
    var theme = config$1.bootData.user.lightTheme ? options.light : options.dark;
    return SystemJS.import(theme + "!css");
}

/**
 * Helper function to report meta analytics to the {@link EchoSrv}.
 *
 * @public
 */
var reportMetaAnalytics = function (payload) {
    getEchoSrv().addEvent({
        type: exports.EchoEventType.MetaAnalytics,
        payload: payload,
    });
};
/**
 * Helper function to report pageview events to the {@link EchoSrv}.
 *
 * @public
 */
var reportPageview = function () {
    var _a;
    var location = exports.locationService.getLocation();
    var page = "" + ((_a = config$1.appSubUrl) !== null && _a !== void 0 ? _a : '') + location.pathname + location.search + location.hash;
    getEchoSrv().addEvent({
        type: exports.EchoEventType.Pageview,
        payload: {
            page: page,
        },
    });
};
/**
 * Helper function to report interaction events to the {@link EchoSrv}.
 *
 * @public
 */
var reportInteraction = function (interactionName, properties) {
    getEchoSrv().addEvent({
        type: exports.EchoEventType.Interaction,
        payload: {
            interactionName: interactionName,
            properties: properties,
        },
    });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values$1(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read$1(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$1(arguments[i]));
    return ar;
}

/**
 * Session Status
 */
var SessionStatus;
(function (SessionStatus) {
    /** JSDoc */
    SessionStatus["Ok"] = "ok";
    /** JSDoc */
    SessionStatus["Exited"] = "exited";
    /** JSDoc */
    SessionStatus["Crashed"] = "crashed";
    /** JSDoc */
    SessionStatus["Abnormal"] = "abnormal";
})(SessionStatus || (SessionStatus = {}));
var RequestSessionStatus;
(function (RequestSessionStatus) {
    /** JSDoc */
    RequestSessionStatus["Ok"] = "ok";
    /** JSDoc */
    RequestSessionStatus["Errored"] = "errored";
    /** JSDoc */
    RequestSessionStatus["Crashed"] = "crashed";
})(RequestSessionStatus || (RequestSessionStatus = {}));

/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));

/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}

/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (isNodeEnv()
        ? global
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
            ? window // eslint-disable-line no-restricted-globals
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}

// TODO: Implement different loggers for different environments
var global$1 = getGlobalObject();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/**
 * Temporarily unwrap `console.log` and friends in order to perform the given callback using the original methods.
 * Restores wrapping after the callback completes.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$1.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$1.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$1.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global$1.__SENTRY__ = global$1.__SENTRY__ || {};
var logger = global$1.__SENTRY__.logger || (global$1.__SENTRY__.logger = new Logger());

/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (isPlainObject(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = __values$1(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}

/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (isThenable(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                void SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = getGlobalObject().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = dynamicRequire(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
((function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = getGlobalObject().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            return performance.timeOrigin;
        }
        else {
            return navigationStart;
        }
    }
    return dateNow;
}))();

/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = __spread(scope._breadcrumbs);
            newScope._tags = __assign({}, scope._tags);
            newScope._extra = __assign({}, scope._extra);
            newScope._contexts = __assign({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = __spread(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = __assign(__assign({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = __assign(__assign({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = __assign(__assign({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = __assign(__assign({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = __assign(__assign({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        var _a, _b, _c, _d;
        // often, this span will be a transaction, but it's not guaranteed to be
        var span = this.getSpan();
        // try it the new way first
        if ((_a = span) === null || _a === void 0 ? void 0 : _a.transaction) {
            return (_b = span) === null || _b === void 0 ? void 0 : _b.transaction;
        }
        // fallback to the old way (known bug: this only finds transactions with sampled = true)
        if ((_d = (_c = span) === null || _c === void 0 ? void 0 : _c.spanRecorder) === null || _d === void 0 ? void 0 : _d.spans[0]) {
            return span.spanRecorder.spans[0];
        }
        // neither way found a transaction
        return undefined;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = __assign(__assign({}, this._tags), captureContext._tags);
            this._extra = __assign(__assign({}, this._extra), captureContext._extra);
            this._contexts = __assign(__assign({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if (isPlainObject(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = __assign(__assign({}, this._tags), captureContext.tags);
            this._extra = __assign(__assign({}, this._extra), captureContext.extra);
            this._contexts = __assign(__assign({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = __assign({ timestamp: dateTimestampInSeconds() }, breadcrumb);
        this._breadcrumbs = __spread(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional information about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        var _a;
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = __assign(__assign({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = __assign(__assign({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = __assign(__assign({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = __assign(__assign({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = __assign({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = (_a = this._span.transaction) === null || _a === void 0 ? void 0 : _a.name;
            if (transactionName) {
                event.tags = __assign({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = __spread((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors(__spread(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new SyncPromise(function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(__assign({}, event), hint);
                if (isThenable(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());
/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access  */
    var global = getGlobalObject();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
}

/**
 * @inheritdoc
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = uuid4();
        this.duration = 0;
        this.status = SessionStatus.Ok;
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = timestampInSeconds();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || timestampInSeconds();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : uuid4();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === SessionStatus.Ok) {
            this.update({ status: SessionStatus.Exited });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return dropUndefinedKeys({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: dropUndefinedKeys({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            }),
        });
    };
    return Session;
}());

/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new Scope(); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        if (client) {
            this.bindClient(client);
        }
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = Scope.clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, __assign(__assign({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, __assign(__assign({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = uuid4();
        if (event.type !== 'transaction') {
            this._lastEventId = eventId;
        }
        this._invokeClient('captureEvent', event, __assign(__assign({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = dateTimestampInSeconds();
        var mergedBreadcrumb = __assign({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var _a, _b, _c, _d, _e;
        (_c = (_b = (_a = this.getStackTop()) === null || _a === void 0 ? void 0 : _a.scope) === null || _b === void 0 ? void 0 : _b.getSession()) === null || _c === void 0 ? void 0 : _c.close();
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        (_e = (_d = this.getStackTop()) === null || _d === void 0 ? void 0 : _d.scope) === null || _e === void 0 ? void 0 : _e.setSession();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = getGlobalObject();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new Session(__assign(__assign(__assign({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === SessionStatus.Ok) {
                currentSession.update({ status: SessionStatus.Exited });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, __spread(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        logger.warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = getGlobalObject();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (isNodeEnv()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    var _a, _b, _c;
    try {
        var activeDomain = (_c = (_b = (_a = getMainCarrier().__SENTRY__) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub)
        return carrier.__SENTRY__.hub;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}

/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = getCurrentHub();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, __spread(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, __assign({ originalException: message, syntheticException: syntheticException }, context));
}

/**
 * Log a message at INFO level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
function logInfo(message, contexts) {
    captureMessage(message, {
        level: Severity.Info,
        contexts: contexts,
    });
}
/**
 * Log a message at WARNING level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
function logWarning(message, contexts) {
    captureMessage(message, {
        level: Severity.Warning,
        contexts: contexts,
    });
}
/**
 * Log a message at DEBUG level. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
function logDebug(message, contexts) {
    captureMessage(message, {
        level: Severity.Debug,
        contexts: contexts,
    });
}
/**
 * Log an error. Depending on configuration might be forwarded to backend and logged to stdout or sent to Sentry
 *
 * @public
 */
function logError(err, contexts) {
    captureException(err, { contexts: contexts });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialTeardown = this.initialTeardown;
            if (isFunction(initialTeardown)) {
                try {
                    initialTeardown();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for (var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execTeardown(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _teardowns = this._teardowns;
        _teardowns && arrRemove(_teardowns, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execTeardown(teardown) {
    if (isFunction(teardown)) {
        teardown();
    }
    else {
        teardown.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}

function noop() { }

var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            (next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete);
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
            }
            else {
                context_1 = observerOrNext;
            }
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next) : noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler),
            complete: complete ? wrapForErrorHandling(complete) : noop,
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function wrapForErrorHandling(handler, instance) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            handler.apply(void 0, __spreadArray([], __read(args)));
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                captureError(err);
            }
            else {
                reportUnhandledError(err);
            }
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    };
    return OperatorSubscriber;
}(Subscriber));

var EMPTY = new Observable(function (subscriber) { return subscriber.complete(); });

function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}

var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

function isInteropObservable(input) {
    return isFunction(input[observable]);
}

function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process$1(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}

function internalFromArray(input, scheduler) {
    return scheduler ? scheduleArray(input, scheduler) : fromArrayLike(input);
}

function isScheduler(value) {
    return value && isFunction(value.schedule);
}

function last(arr) {
    return arr[arr.length - 1];
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    return scheduler ? scheduleArray(args, scheduler) : internalFromArray(args);
}

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(new OperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function () { return doInnerSub(bufferedValue); })) : doInnerSub(bufferedValue);
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(new OperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
    };
}

function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}

function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap(identity, concurrent);
}

function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            EMPTY
        : sources.length === 1
            ?
                innerFrom(sources[0])
            :
                mergeAll(concurrent)(internalFromArray(sources, scheduler));
}

function catchError(selector) {
    return operate(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(new OperatorSubscriber(subscriber, undefined, undefined, function (err) {
            handledResult = innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}

function switchMap(project, resultSelector) {
    return operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(new OperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = new OperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}

/**
 * Convert an object into a DataQueryError -- if this is an HTTP response,
 * it will put the correct values in the error field
 *
 * @public
 */
function toDataQueryError(err) {
    var error = (err || {});
    if (!error.message) {
        if (typeof err === 'string' || err instanceof String) {
            return { message: err };
        }
        var message = 'Query error';
        if (error.message) {
            message = error.message;
        }
        else if (error.data && error.data.message) {
            message = error.data.message;
        }
        else if (error.data && error.data.error) {
            message = error.data.error;
        }
        else if (error.status) {
            message = "Query error: " + error.status + " " + error.statusText;
        }
        error.message = message;
    }
    return error;
}

/**
 * Parse the results from /api/ds/query into a DataQueryResponse
 *
 * @param res - the HTTP response data.
 * @param queries - optional DataQuery array that will order the response based on the order of query refId's.
 *
 * @public
 */
function toDataQueryResponse(res, queries) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
    var _f, _g, _h, _j;
    var rsp = { data: [], state: data.LoadingState.Done };
    // If the response isn't in a correct shape we just ignore the data and pass empty DataQueryResponse.
    if ((_f = res.data) === null || _f === void 0 ? void 0 : _f.results) {
        var results = res.data.results;
        var refIDs = (queries === null || queries === void 0 ? void 0 : queries.length) ? queries.map(function (q) { return q.refId; }) : Object.keys(results);
        var data$1 = [];
        try {
            for (var refIDs_1 = __values$2(refIDs), refIDs_1_1 = refIDs_1.next(); !refIDs_1_1.done; refIDs_1_1 = refIDs_1.next()) {
                var refId = refIDs_1_1.value;
                var dr = results[refId];
                if (!dr) {
                    continue;
                }
                dr.refId = refId;
                data$1.push(dr);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (refIDs_1_1 && !refIDs_1_1.done && (_a = refIDs_1.return)) _a.call(refIDs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var data_1 = __values$2(data$1), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var dr = data_1_1.value;
                if (dr.error) {
                    if (!rsp.error) {
                        rsp.error = {
                            refId: dr.refId,
                            message: dr.error,
                        };
                        rsp.state = data.LoadingState.Error;
                    }
                }
                if ((_g = dr.frames) === null || _g === void 0 ? void 0 : _g.length) {
                    try {
                        for (var _k = (e_3 = void 0, __values$2(dr.frames)), _l = _k.next(); !_l.done; _l = _k.next()) {
                            var js = _l.value;
                            var df = data.dataFrameFromJSON(js);
                            if (!df.refId) {
                                df.refId = dr.refId;
                            }
                            rsp.data.push(df);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    continue; // the other tests are legacy
                }
                if ((_h = dr.series) === null || _h === void 0 ? void 0 : _h.length) {
                    try {
                        for (var _m = (e_4 = void 0, __values$2(dr.series)), _o = _m.next(); !_o.done; _o = _m.next()) {
                            var s = _o.value;
                            if (!s.refId) {
                                s.refId = dr.refId;
                            }
                            rsp.data.push(data.toDataFrame(s));
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                if ((_j = dr.tables) === null || _j === void 0 ? void 0 : _j.length) {
                    try {
                        for (var _p = (e_5 = void 0, __values$2(dr.tables)), _q = _p.next(); !_q.done; _q = _p.next()) {
                            var s = _q.value;
                            if (!s.refId) {
                                s.refId = dr.refId;
                            }
                            rsp.data.push(data.toDataFrame(s));
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    // When it is not an OK response, make sure the error gets added
    if (res.status && res.status !== 200) {
        if (rsp.state !== data.LoadingState.Error) {
            rsp.state = data.LoadingState.Error;
        }
        if (!rsp.error) {
            rsp.error = toDataQueryError(res);
        }
    }
    return rsp;
}
/**
 * Return the first string or non-time field as the value
 *
 * @beta
 */
function frameToMetricFindValue(frame) {
    if (!frame || !frame.length) {
        return [];
    }
    var values = [];
    var field = frame.fields.find(function (f) { return f.type === data.FieldType.string; });
    if (!field) {
        field = frame.fields.find(function (f) { return f.type !== data.FieldType.time; });
    }
    if (field) {
        for (var i = 0; i < field.values.length; i++) {
            values.push({ text: '' + field.values.get(i) });
        }
    }
    return values;
}

/**
 * @internal
 */
var ExpressionDatasourceRef = Object.freeze({
    type: '__expr__',
    uid: '__expr__',
});
/**
 * @internal
 */
function isExpressionReference(ref) {
    var _a;
    if (!ref) {
        return false;
    }
    var v = (_a = ref.type) !== null && _a !== void 0 ? _a : ref;
    return v === ExpressionDatasourceRef.type || v === '-100'; // -100 was a legacy accident that should be removed
}
var HealthCheckError = /** @class */ (function (_super) {
    __extends$1(HealthCheckError, _super);
    function HealthCheckError(message, details) {
        var _this = _super.call(this, message) || this;
        _this.details = details;
        _this.name = 'HealthCheckError';
        return _this;
    }
    return HealthCheckError;
}(Error));
/**
 * Describes the current health status of a data source plugin.
 *
 * @public
 */
exports.HealthStatus = void 0;
(function (HealthStatus) {
    HealthStatus["Unknown"] = "UNKNOWN";
    HealthStatus["OK"] = "OK";
    HealthStatus["Error"] = "ERROR";
})(exports.HealthStatus || (exports.HealthStatus = {}));
/**
 * Extend this class to implement a data source plugin that is depending on the Grafana
 * backend API.
 *
 * @public
 */
exports.DataSourceWithBackend = /** @class */ (function (_super) {
    __extends$1(DataSourceWithBackend, _super);
    function DataSourceWithBackend(instanceSettings) {
        var _this = _super.call(this, instanceSettings) || this;
        /**
         * Optionally override the streaming behavior
         */
        _this.streamOptionsProvider = standardStreamOptionsProvider;
        return _this;
    }
    /**
     * Ideally final -- any other implementation may not work as expected
     */
    DataSourceWithBackend.prototype.query = function (request) {
        var _this = this;
        var intervalMs = request.intervalMs, maxDataPoints = request.maxDataPoints, range = request.range, requestId = request.requestId;
        var targets = request.targets;
        if (this.filterQuery) {
            targets = targets.filter(function (q) { return _this.filterQuery(q); });
        }
        var queries = targets.map(function (q) {
            var _a;
            var datasource = _this.getRef();
            var datasourceId = _this.id;
            if (isExpressionReference(q.datasource)) {
                return __assign$1(__assign$1({}, q), { datasource: ExpressionDatasourceRef });
            }
            if (q.datasource) {
                var ds = getDataSourceSrv().getInstanceSettings(q.datasource);
                if (!ds) {
                    throw new Error("Unknown Datasource: " + JSON.stringify(q.datasource));
                }
                datasource = (_a = ds.rawRef) !== null && _a !== void 0 ? _a : data.getDataSourceRef(ds);
                datasourceId = ds.id;
            }
            return __assign$1(__assign$1({}, _this.applyTemplateVariables(q, request.scopedVars)), { datasource: datasource, datasourceId: datasourceId, // deprecated!
                intervalMs: intervalMs, maxDataPoints: maxDataPoints });
        });
        // Return early if no queries exist
        if (!queries.length) {
            return of({ data: [] });
        }
        var body = { queries: queries };
        if (range) {
            body.range = range;
            body.from = range.from.valueOf().toString();
            body.to = range.to.valueOf().toString();
        }
        return getBackendSrv()
            .fetch({
            url: '/api/ds/query',
            method: 'POST',
            data: body,
            requestId: requestId,
        })
            .pipe(switchMap(function (raw) {
            var _a;
            var rsp = toDataQueryResponse(raw, queries);
            // Check if any response should subscribe to a live stream
            if (((_a = rsp.data) === null || _a === void 0 ? void 0 : _a.length) && rsp.data.find(function (f) { var _a; return (_a = f.meta) === null || _a === void 0 ? void 0 : _a.channel; })) {
                return toStreamingDataResponse(rsp, request, _this.streamOptionsProvider);
            }
            return of(rsp);
        }), catchError(function (err) {
            return of(toDataQueryResponse(err));
        }));
    };
    /**
     * Apply template variables for explore
     */
    DataSourceWithBackend.prototype.interpolateVariablesInQueries = function (queries, scopedVars) {
        var _this = this;
        return queries.map(function (q) { return _this.applyTemplateVariables(q, scopedVars); });
    };
    /**
     * Override to apply template variables.  The result is usually also `TQuery`, but sometimes this can
     * be used to modify the query structure before sending to the backend.
     *
     * NOTE: if you do modify the structure or use template variables, alerting queries may not work
     * as expected
     *
     * @virtual
     */
    DataSourceWithBackend.prototype.applyTemplateVariables = function (query, scopedVars) {
        return query;
    };
    /**
     * Make a GET request to the datasource resource path
     */
    DataSourceWithBackend.prototype.getResource = function (path, params) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, getBackendSrv().get("/api/datasources/" + this.id + "/resources/" + path, params)];
            });
        });
    };
    /**
     * Send a POST request to the datasource resource path
     */
    DataSourceWithBackend.prototype.postResource = function (path, body) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, getBackendSrv().post("/api/datasources/" + this.id + "/resources/" + path, __assign$1({}, body))];
            });
        });
    };
    /**
     * Run the datasource healthcheck
     */
    DataSourceWithBackend.prototype.callHealthCheck = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, getBackendSrv()
                        .request({ method: 'GET', url: "/api/datasources/" + this.id + "/health", showErrorAlert: false })
                        .then(function (v) {
                        return v;
                    })
                        .catch(function (err) {
                        return err.data;
                    })];
            });
        });
    };
    /**
     * Checks the plugin health
     * see public/app/features/datasources/state/actions.ts for what needs to be returned here
     */
    DataSourceWithBackend.prototype.testDatasource = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.callHealthCheck().then(function (res) {
                        if (res.status === exports.HealthStatus.OK) {
                            return {
                                status: 'success',
                                message: res.message,
                            };
                        }
                        throw new HealthCheckError(res.message, res.details);
                    })];
            });
        });
    };
    return DataSourceWithBackend;
}(data.DataSourceApi));
/**
 * @internal exported for tests
 */
function toStreamingDataResponse(rsp, req, getter) {
    var e_1, _a;
    var _b;
    var live = getGrafanaLiveSrv();
    if (!live) {
        return of(rsp); // add warning?
    }
    var staticdata = [];
    var streams = [];
    try {
        for (var _c = __values$2(rsp.data), _d = _c.next(); !_d.done; _d = _c.next()) {
            var f = _d.value;
            var addr = data.parseLiveChannelAddress((_b = f.meta) === null || _b === void 0 ? void 0 : _b.channel);
            if (addr) {
                var frame = f;
                streams.push(live.getDataStream({
                    addr: addr,
                    buffer: getter(req, frame),
                    frame: frame,
                }));
            }
            else {
                staticdata.push(f);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (staticdata.length) {
        streams.push(of(__assign$1(__assign$1({}, rsp), { data: staticdata })));
    }
    if (streams.length === 1) {
        return streams[0]; // avoid merge wrapper
    }
    return merge.apply(void 0, __spreadArray$1([], __read$2(streams), false));
}
/**
 * @public
 */
var standardStreamOptionsProvider = function (request, frame) {
    var _a, _b;
    var buffer = {
        maxLength: (_a = request.maxDataPoints) !== null && _a !== void 0 ? _a : 500,
        action: data.StreamingFrameAction.Append,
    };
    // For recent queries, clamp to the current time range
    if (((_b = request.rangeRaw) === null || _b === void 0 ? void 0 : _b.to) === 'now') {
        buffer.maxDelta = request.range.to.valueOf() - request.range.from.valueOf();
    }
    return buffer;
};
//@ts-ignore
exports.DataSourceWithBackend = data.makeClassES5Compatible(exports.DataSourceWithBackend);

/**
 * PanelRenderer component that will be set via the {@link setPanelRenderer} function
 * when Grafana starts. The implementation being used during runtime lives in Grafana
 * core.
 *
 * @internal
 */
var PanelRenderer = function () {
    return React__default["default"].createElement("div", null, "PanelRenderer can only be used after Grafana instance has been started.");
};

/**
 * PanelDataErrorView allows panels to show a consistent error message when
 * the result structure does not meet expected criteria
 *
 * @alpha
 */
var PanelDataErrorView = function (_a) {
    var message = _a.message;
    return React__default["default"].createElement("div", null,
        "Unable to render data: ",
        message,
        ".");
};

var factory;
/**
 * Used to bootstrap the {@link createQueryRunner} during application start.
 *
 * @internal
 */
var setQueryRunnerFactory = function (instance) {
    if (factory) {
        throw new Error('Runner should only be set when Grafana is starting.');
    }
    factory = instance;
};
/**
 * Used to create QueryRunner instances from outside the core Grafana application.
 * This is helpful to be able to create a QueryRunner to execute queries in e.g. an app plugin.
 *
 * @internal
 */
var createQueryRunner = function () {
    if (!factory) {
        throw new Error('`createQueryRunner` can only be used after Grafana instance has started.');
    }
    return factory();
};

/**
 * Component to be able to select a datasource from the list of installed and enabled
 * datasources in the current Grafana instance.
 *
 * @internal
 */
var DataSourcePicker = /** @class */ (function (_super) {
    __extends$1(DataSourcePicker, _super);
    function DataSourcePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.dataSourceSrv = getDataSourceSrv();
        _this.state = {};
        _this.onChange = function (item, actionMeta) {
            if (actionMeta.action === 'clear' && _this.props.onClear) {
                _this.props.onClear();
                return;
            }
            var dsSettings = _this.dataSourceSrv.getInstanceSettings(item.value);
            if (dsSettings) {
                _this.props.onChange(dsSettings);
                _this.setState({ error: undefined });
            }
        };
        return _this;
    }
    DataSourcePicker.prototype.componentDidMount = function () {
        var current = this.props.current;
        var dsSettings = this.dataSourceSrv.getInstanceSettings(current);
        if (!dsSettings) {
            this.setState({ error: 'Could not find data source ' + current });
        }
    };
    DataSourcePicker.prototype.getCurrentValue = function () {
        var _a = this.props, current = _a.current, hideTextValue = _a.hideTextValue, noDefault = _a.noDefault;
        if (!current && noDefault) {
            return;
        }
        var ds = this.dataSourceSrv.getInstanceSettings(current);
        if (ds) {
            return {
                label: ds.name.substr(0, 37),
                value: ds.uid,
                imgUrl: ds.meta.info.logos.small,
                hideText: hideTextValue,
                meta: ds.meta,
            };
        }
        var uid = data.getDataSourceUID(current);
        return {
            label: (uid !== null && uid !== void 0 ? uid : 'no name') + ' - not found',
            value: uid !== null && uid !== void 0 ? uid : undefined,
            imgUrl: '',
            hideText: hideTextValue,
        };
    };
    DataSourcePicker.prototype.getDataSourceOptions = function () {
        var _a = this.props, alerting = _a.alerting, tracing = _a.tracing, metrics = _a.metrics, mixed = _a.mixed, dashboard = _a.dashboard, variables = _a.variables, annotations = _a.annotations, pluginId = _a.pluginId, type = _a.type, filter = _a.filter;
        var options = this.dataSourceSrv
            .getList({
            alerting: alerting,
            tracing: tracing,
            metrics: metrics,
            dashboard: dashboard,
            mixed: mixed,
            variables: variables,
            annotations: annotations,
            pluginId: pluginId,
            filter: filter,
            type: type,
        })
            .map(function (ds) { return ({
            value: ds.name,
            label: "" + ds.name + (ds.isDefault ? ' (default)' : ''),
            imgUrl: ds.meta.info.logos.small,
            meta: ds.meta,
        }); });
        return options;
    };
    DataSourcePicker.prototype.render = function () {
        var _a = this.props, autoFocus = _a.autoFocus, onBlur = _a.onBlur, onClear = _a.onClear, openMenuOnFocus = _a.openMenuOnFocus, placeholder = _a.placeholder, width = _a.width;
        var error = this.state.error;
        var options = this.getDataSourceOptions();
        var value = this.getCurrentValue();
        var isClearable = typeof onClear === 'function';
        return (React__default["default"].createElement("div", { "aria-label": e2eSelectors.selectors.components.DataSourcePicker.container },
            React__default["default"].createElement(ui.Select, { "aria-label": e2eSelectors.selectors.components.DataSourcePicker.inputV2, inputId: "data-source-picker", menuShouldPortal: true, className: "ds-picker select-container", isMulti: false, isClearable: isClearable, backspaceRemovesValue: false, onChange: this.onChange, options: options, autoFocus: autoFocus, onBlur: onBlur, width: width, openMenuOnFocus: openMenuOnFocus, maxMenuHeight: 500, placeholder: placeholder, noOptionsMessage: "No datasources found", value: value !== null && value !== void 0 ? value : null, invalid: !!error, getOptionLabel: function (o) {
                    if (o.meta && data.isUnsignedPluginSignature(o.meta.signature) && o !== value) {
                        return (React__default["default"].createElement(ui.HorizontalGroup, { align: "center", justify: "space-between" },
                            React__default["default"].createElement("span", null, o.label),
                            " ",
                            React__default["default"].createElement(ui.PluginSignatureBadge, { status: o.meta.signature })));
                    }
                    return o.label || '';
                } })));
    };
    DataSourcePicker.defaultProps = {
        autoFocus: false,
        openMenuOnFocus: false,
        placeholder: 'Select data source',
    };
    return DataSourcePicker;
}(React.PureComponent));

exports.CopyPanelEvent = CopyPanelEvent;
exports.DataSourcePicker = DataSourcePicker;
exports.GrafanaBootConfig = GrafanaBootConfig;
exports.HistoryWrapper = HistoryWrapper;
exports.PanelDataErrorView = PanelDataErrorView;
exports.PanelRenderer = PanelRenderer;
exports.RefreshEvent = RefreshEvent;
exports.SystemJS = SystemJS;
exports.ThemeChangedEvent = ThemeChangedEvent;
exports.TimeRangeUpdatedEvent = TimeRangeUpdatedEvent;
exports.config = config$1;
exports.createQueryRunner = createQueryRunner;
exports.frameToMetricFindValue = frameToMetricFindValue;
exports.getAngularLoader = getAngularLoader;
exports.getAppEvents = getAppEvents;
exports.getBackendSrv = getBackendSrv;
exports.getDataSourceSrv = getDataSourceSrv;
exports.getEchoSrv = getEchoSrv;
exports.getGrafanaLiveSrv = getGrafanaLiveSrv;
exports.getLegacyAngularInjector = getLegacyAngularInjector;
exports.getLocationSrv = getLocationSrv;
exports.getTemplateSrv = getTemplateSrv;
exports.isInteractionEvent = isInteractionEvent;
exports.isPageviewEvent = isPageviewEvent;
exports.loadPluginCss = loadPluginCss;
exports.locationSearchToObject = locationSearchToObject;
exports.logDebug = logDebug;
exports.logError = logError;
exports.logInfo = logInfo;
exports.logWarning = logWarning;
exports.navigationLogger = navigationLogger;
exports.registerEchoBackend = registerEchoBackend;
exports.reportInteraction = reportInteraction;
exports.reportMetaAnalytics = reportMetaAnalytics;
exports.reportPageview = reportPageview;
exports.setAngularLoader = setAngularLoader;
exports.setAppEvents = setAppEvents;
exports.setBackendSrv = setBackendSrv;
exports.setDataSourceSrv = setDataSourceSrv;
exports.setEchoSrv = setEchoSrv;
exports.setGrafanaLiveSrv = setGrafanaLiveSrv;
exports.setLegacyAngularInjector = setLegacyAngularInjector;
exports.setLocationService = setLocationService;
exports.setLocationSrv = setLocationSrv;
exports.setQueryRunnerFactory = setQueryRunnerFactory;
exports.setTemplateSrv = setTemplateSrv;
exports.toDataQueryError = toDataQueryError;
exports.toDataQueryResponse = toDataQueryResponse;
//# sourceMappingURL=index.development.js.map
