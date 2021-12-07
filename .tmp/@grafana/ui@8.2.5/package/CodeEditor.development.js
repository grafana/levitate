var index$2 = require('./index.development.js');
var React = require('react');
var data = require('@grafana/data');
require('react-inlinesvg');
require('react-dom');
var e2eSelectors = require('@grafana/e2e-selectors');
require('crypto');
require('moment');
require('tty');
require('util');
require('os');
require('@grafana/schema');
require('jquery');
require('@grafana/aws-sdk');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2$1(_objectSpread2$1({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs'
  }
};

function curry$1(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject$1(value) {
  return {}.toString.call(value).includes('Object');
}

/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler$1('configIsRequired');
  if (!isObject$1(config)) errorHandler$1('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages$1.deprecation);
}

function throwError$1(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages$1 = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  config: validateConfig
};

var compose$1 = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/** the local state of the module */

var _state$create = index.create({
  config: config,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config$1(config) {
  setState(function (state) {
    return {
      config: merge(state.config, validators$1.config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable(Promise.resolve(window.monaco));
    }

    compose$1(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config$1,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: loadingStyles
  }, content);
}

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperClassName
}) {
  return /*#__PURE__*/React__default['default'].createElement("section", {
    style: { ...styles.wrapper,
      width,
      height
    },
    className: wrapperClassName
  }, !isEditorReady && /*#__PURE__*/React__default['default'].createElement(Loading, {
    content: loading
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: _ref,
    style: { ...styles.fullWidth,
      ...(!isEditorReady && styles.hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]).isRequired,
  height: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]).isRequired,
  loading: index$2.propTypes.oneOfType([index$2.propTypes.element, index$2.propTypes.string]).isRequired,
  isEditorReady: index$2.propTypes.bool.isRequired,
  className: index$2.propTypes.string,
  wrapperClassName: index$2.propTypes.string
};

var MonacoContainer$1 = /*#__PURE__*/React.memo(MonacoContainer);

function useMount(effect) {
  React.useEffect(effect, []);
}

function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = React.useRef(true);
  React.useEffect(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(crateModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && crateModelUri(monaco, path));
}

function crateModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}

function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = React.useState(true);
  const editorRef = React.useRef(null);
  const monacoRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const onMountRef = React.useRef(onMount);
  const beforeMountRef = React.useRef(beforeMount);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  useUpdate(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  useUpdate(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = React.useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = monacoRef.current.editor.createModel(original, originalLanguage || language, originalModelPath && monacoRef.current.Uri.parse(originalModelPath));
    const modifiedModel = monacoRef.current.editor.createModel(modified, modifiedLanguage || language, modifiedModelPath && monacoRef.current.Uri.parse(modifiedModelPath));
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = React.useCallback(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  React.useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  React.useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/React__default['default'].createElement(MonacoContainer$1, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

DiffEditor.propTypes = {
  original: index$2.propTypes.string,
  modified: index$2.propTypes.string,
  language: index$2.propTypes.string,
  originalLanguage: index$2.propTypes.string,
  modifiedLanguage: index$2.propTypes.string,

  /* === */
  originalModelPath: index$2.propTypes.string,
  modifiedModelPath: index$2.propTypes.string,
  keepCurrentOriginalModel: index$2.propTypes.bool,
  keepCurrentModifiedModel: index$2.propTypes.bool,
  theme: index$2.propTypes.string,
  loading: index$2.propTypes.oneOfType([index$2.propTypes.element, index$2.propTypes.string]),
  options: index$2.propTypes.object,

  /* === */
  width: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]),
  height: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]),
  className: index$2.propTypes.string,
  wrapperClassName: index$2.propTypes.string,

  /* === */
  beforeMount: index$2.propTypes.func,
  onMount: index$2.propTypes.func
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: noop,
  onMount: noop
};

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = React.useState(true);
  const monacoRef = React.useRef(null);
  const editorRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const onMountRef = React.useRef(onMount);
  const beforeMountRef = React.useRef(beforeMount);
  const subscriptionRef = React.useRef(null);
  const valueRef = React.useRef(value);
  const previousPath = usePrevious(path);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  useUpdate(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = React.useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  React.useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  React.useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  React.useEffect(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  React.useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/React__default['default'].createElement(MonacoContainer$1, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

Editor.propTypes = {
  defaultValue: index$2.propTypes.string,
  defaultPath: index$2.propTypes.string,
  defaultLanguage: index$2.propTypes.string,
  value: index$2.propTypes.string,
  language: index$2.propTypes.string,
  path: index$2.propTypes.string,

  /* === */
  theme: index$2.propTypes.string,
  line: index$2.propTypes.number,
  loading: index$2.propTypes.oneOfType([index$2.propTypes.element, index$2.propTypes.string]),
  options: index$2.propTypes.object,
  overrideServices: index$2.propTypes.object,
  saveViewState: index$2.propTypes.bool,
  keepCurrentModel: index$2.propTypes.bool,

  /* === */
  width: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]),
  height: index$2.propTypes.oneOfType([index$2.propTypes.number, index$2.propTypes.string]),
  className: index$2.propTypes.string,
  wrapperClassName: index$2.propTypes.string,

  /* === */
  beforeMount: index$2.propTypes.func,
  onMount: index$2.propTypes.func,
  onChange: index$2.propTypes.func,
  onValidate: index$2.propTypes.func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};

var index$1 = /*#__PURE__*/React.memo(Editor);

/**
 * @internal -- only exported for tests
 */
function findInsertIndex(line) {
    for (var i = line.length - 1; i > 0; i--) {
        var ch = line.charAt(i);
        if (ch === '$') {
            return {
                index: i,
                prefix: line.substring(i),
            };
        }
        // Keep these seperators
        if (ch === ' ' || ch === '\t' || ch === '"' || ch === "'") {
            return {
                index: i + 1,
                prefix: line.substring(i + 1),
            };
        }
    }
    return {
        index: 0,
        prefix: line,
    };
}
function getCompletionItems(monaco, prefix, suggestions, range) {
    var e_1, _a;
    var _b;
    var items = [];
    try {
        for (var suggestions_1 = index$2.__values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
            var suggestion = suggestions_1_1.value;
            if (prefix && !suggestion.label.startsWith(prefix)) {
                continue; // skip non-matching suggestions
            }
            items.push(index$2.__assign(index$2.__assign({}, suggestion), { kind: mapKinds(monaco, suggestion.kind), range: range, insertText: (_b = suggestion.insertText) !== null && _b !== void 0 ? _b : suggestion.label }));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (suggestions_1_1 && !suggestions_1_1.done && (_a = suggestions_1.return)) _a.call(suggestions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return items;
}
function mapKinds(monaco, sug) {
    switch (sug) {
        case index$2.CodeEditorSuggestionItemKind.Method:
            return monaco.languages.CompletionItemKind.Method;
        case index$2.CodeEditorSuggestionItemKind.Field:
            return monaco.languages.CompletionItemKind.Field;
        case index$2.CodeEditorSuggestionItemKind.Property:
            return monaco.languages.CompletionItemKind.Property;
        case index$2.CodeEditorSuggestionItemKind.Constant:
            return monaco.languages.CompletionItemKind.Constant;
        case index$2.CodeEditorSuggestionItemKind.Text:
            return monaco.languages.CompletionItemKind.Text;
    }
    return monaco.languages.CompletionItemKind.Text;
}
/**
 * @alpha
 */
function registerSuggestions(monaco, language, getSuggestions) {
    if (!language || !getSuggestions) {
        return undefined;
    }
    return monaco.languages.registerCompletionItemProvider(language, {
        triggerCharacters: ['$'],
        provideCompletionItems: function (model, position, context) {
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: position.column,
                endColumn: position.column,
            };
            // Simple check if this was triggered by pressing `$`
            if (context.triggerCharacter === '$') {
                range.startColumn = position.column - 1;
                return {
                    suggestions: getCompletionItems(monaco, '$', getSuggestions(), range),
                };
            }
            // Find the replacement region
            var currentLine = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
            });
            var _a = findInsertIndex(currentLine), index = _a.index, prefix = _a.prefix;
            range.startColumn = index + 1;
            var suggestions = getCompletionItems(monaco, prefix, getSuggestions(), range);
            if (suggestions.length) {
                // NOTE, this will replace any language provided suggestions
                return { suggestions: suggestions };
            }
            // Default language suggestions
            return undefined;
        },
    });
}

function defineThemes(monaco, theme) {
    // color tokens are defined here https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/colorRegistry.ts#L174
    var colors = {
        'editor.background': theme.components.input.background,
        'minimap.background': theme.colors.background.secondary,
    };
    monaco.editor.defineTheme('grafana-dark', {
        base: 'vs-dark',
        inherit: true,
        colors: colors,
        rules: [],
    });
    monaco.editor.defineTheme('grafana-light', {
        base: 'vs',
        inherit: true,
        colors: colors,
        rules: [],
    });
}

var initalized = false;
function initMonoco() {
    var _a;
    if (initalized) {
        return;
    }
    loader.config({
        paths: {
            vs: ((_a = window.__grafana_public_path__) !== null && _a !== void 0 ? _a : 'public/') + 'lib/monaco/min/vs',
        },
    });
    initalized = true;
}
var UnthemedCodeEditor = /** @class */ (function (_super) {
    index$2.__extends(UnthemedCodeEditor, _super);
    function UnthemedCodeEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.loadCustomLanguage = function () {
            var language = _this.props.language;
            var customLanguage = data.monacoLanguageRegistry.getIfExists(language);
            if (customLanguage) {
                return customLanguage.init();
            }
            return Promise.resolve();
        };
        // This is replaced with a real function when the actual editor mounts
        _this.getEditorValue = function () { return ''; };
        _this.onBlur = function () {
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur(_this.getEditorValue());
            }
        };
        _this.onSave = function () {
            var onSave = _this.props.onSave;
            if (onSave) {
                onSave(_this.getEditorValue());
            }
        };
        _this.handleBeforeMount = function (monaco) {
            _this.monaco = monaco;
            var _a = _this.props, language = _a.language, theme = _a.theme, getSuggestions = _a.getSuggestions, onBeforeEditorMount = _a.onBeforeEditorMount;
            defineThemes(monaco, theme);
            if (getSuggestions) {
                _this.completionCancel = registerSuggestions(monaco, language, getSuggestions);
            }
            onBeforeEditorMount === null || onBeforeEditorMount === void 0 ? void 0 : onBeforeEditorMount(monaco);
        };
        _this.handleOnMount = function (editor, monaco) {
            var onEditorDidMount = _this.props.onEditorDidMount;
            _this.getEditorValue = function () { return editor.getValue(); };
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, _this.onSave);
            var languagePromise = _this.loadCustomLanguage();
            if (onEditorDidMount) {
                languagePromise.then(function () { return onEditorDidMount(editor, monaco); });
            }
        };
        initMonoco();
        return _this;
    }
    UnthemedCodeEditor.prototype.componentWillUnmount = function () {
        if (this.completionCancel) {
            this.completionCancel.dispose();
        }
    };
    UnthemedCodeEditor.prototype.componentDidUpdate = function (oldProps) {
        var _a = this.props, getSuggestions = _a.getSuggestions, language = _a.language;
        if (language !== oldProps.language) {
            if (this.completionCancel) {
                this.completionCancel.dispose();
            }
            if (!this.monaco) {
                console.warn('Monaco instance not loaded yet');
                return;
            }
            if (getSuggestions) {
                this.completionCancel = registerSuggestions(this.monaco, language, getSuggestions);
            }
            this.loadCustomLanguage();
        }
    };
    UnthemedCodeEditor.prototype.render = function () {
        var _a;
        var _b = this.props, theme = _b.theme, language = _b.language, width = _b.width, height = _b.height, showMiniMap = _b.showMiniMap, showLineNumbers = _b.showLineNumbers, readOnly = _b.readOnly, monacoOptions = _b.monacoOptions;
        var value = (_a = this.props.value) !== null && _a !== void 0 ? _a : '';
        var longText = value.length > 100;
        var styles = getStyles(theme);
        var options = {
            wordWrap: 'off',
            tabSize: 2,
            codeLens: false,
            contextmenu: false,
            minimap: {
                enabled: longText && showMiniMap,
                renderCharacters: false,
            },
            readOnly: readOnly,
            lineNumbersMinChars: 4,
            lineDecorationsWidth: 1 * theme.spacing.gridSize,
            overviewRulerBorder: false,
            automaticLayout: true,
            padding: {
                top: 0.5 * theme.spacing.gridSize,
                bottom: 0.5 * theme.spacing.gridSize,
            },
        };
        if (!showLineNumbers) {
            options.glyphMargin = false;
            options.folding = false;
            options.lineNumbers = 'off';
            options.lineNumbersMinChars = 0;
        }
        return (React__default['default'].createElement("div", { className: styles.container, onBlur: this.onBlur, "aria-label": e2eSelectors.selectors.components.CodeEditor.container },
            React__default['default'].createElement(index$1, { width: width, height: height, language: language, theme: theme.isDark ? 'grafana-dark' : 'grafana-light', value: value, options: index$2.__assign(index$2.__assign({}, options), (monacoOptions !== null && monacoOptions !== void 0 ? monacoOptions : {})), beforeMount: this.handleBeforeMount, onMount: this.handleOnMount })));
    };
    return UnthemedCodeEditor;
}(React__default['default'].PureComponent));
var CodeEditor = index$2.withTheme2(UnthemedCodeEditor);
var getStyles = function (theme) {
    return {
        container: index$2.css(templateObject_1 || (templateObject_1 = index$2.__makeTemplateObject(["\n      border-radius: ", ";\n      border: 1px solid ", ";\n    "], ["\n      border-radius: ", ";\n      border: 1px solid ", ";\n    "])), theme.shape.borderRadius(), theme.components.input.borderColor),
    };
};
var templateObject_1;

exports.default = CodeEditor;
//# sourceMappingURL=CodeEditor.development.js.map
