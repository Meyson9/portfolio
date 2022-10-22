/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrolTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrolTop */ "./src/js/modules/scrolTop.js");
/* harmony import */ var _modules_menuActive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuActive */ "./src/js/modules/menuActive.js");
/* harmony import */ var _modules_trainslet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/trainslet */ "./src/js/modules/trainslet.js");
/* harmony import */ var _modules_imgBig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/imgBig */ "./src/js/modules/imgBig.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/touch */ "./src/js/modules/touch.js");
/*
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Add slick.js -->
    <script src="assets/slick/slick.min.js"></script>
*/






window.addEventListener('DOMContentLoaded', function () {
  console.log('jhg111111111');
  Object(_modules_scrolTop__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var w = parseInt(window.innerWidth);
  var h = parseInt(window.innerHeight);

  if (w < 600 || h < 850) {
    // это мобильник 
    console.log('mobilnik');
  }

  Object(_modules_touch__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_imgBig__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_trainslet__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_menuActive__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/imgBig.js":
/*!**********************************!*\
  !*** ./src/js/modules/imgBig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var imgBig = function imgBig() {
  var modal = document.querySelector('#myModal'),
      img = document.querySelectorAll('.photoAll'),
      modalImg = document.querySelector('#img01'),
      captionText = document.querySelector('#caption'),
      span = document.querySelector('.clouse');
  modal.classList.add('hideModal');
  /*clous modall x */

  try {
    span.addEventListener('click', clouseModal);
  } catch (error) {}
  /*clous modall backgraund */


  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      clouseModal();
    }
  });
  /*clous modall esc */

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && modal.classList.contains('showModal')) {
      clouseModal();
    }
  });
  /*open modall */

  img.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var target = e.target;
      console.log(target);
      modal.classList.remove('hideModal');
      modal.classList.add('showModal');
      document.body.style.overflow = 'hidden';
      modalImg.src = target.getAttribute('src');
      modalImg.alt = target.getAttribute('alt'); // console.log(item.nextElementSibling.textContent)

      captionText.textContent = item.nextElementSibling.textContent; // captionText.innerHTML = target.getAttribute('alt') ;
    });
  });

  function clouseModal() {
    modal.classList.remove('showModal');
    modal.classList.add('hideModal');
    document.body.style.overflow = '';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (imgBig);

/***/ }),

/***/ "./src/js/modules/menuActive.js":
/*!**************************************!*\
  !*** ./src/js/modules/menuActive.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var menuActive = function menuActive() {
  var burger = document.querySelector('.hamburger'),
      ndlist = document.querySelector('.hamburger').children,
      menu = document.querySelector('.grid_mn'),
      itemMenu = document.querySelectorAll('.becMar');
  var style1 = window.getComputedStyle(menu).getPropertyValue("display");
  console.log(style1); //   console.log(ndlist);
  //   console.log(menu);

  /*on/of menu = (max-white 576px)*/

  burger.addEventListener('click', function () {
    if (!menu.classList.contains('menu_active')) {
      menu.classList.add('menu_active');
      menu.classList.remove('fadedOF');
      menu.classList.add('faded'); // console.log('true');
    } else {
      menu.classList.remove('menu_active');
      console.log('false');
      menu.classList.add('fadedOF');
      menu.classList.remove('faded');
    } // console.log(style1);

    /*toggle burger transform */
    //menu.classList.contains('faded')


    if (menu.classList.contains('menu_active')) {
      // console.log('true 1');
      openMenue();
    } else {
      console.log('false 2');
      clouseMenue();
    } // menu.classList.toggle('menu_active');

  });
  /* delete actev item menu */

  function removeActev() {
    itemMenu.forEach(function (it) {
      it.classList.remove('activeMenuItem');
    });
  } // console.log(itemMenu);

  /*add clic active item */


  itemMenu.forEach(function (item, i) {
    item.addEventListener('click', function () {
      removeActev();
      item.classList.add('activeMenuItem');
      console.log(item);
      console.log(i);
      menu.classList.remove('menu_active');
      clouseMenue();
    });
  });

  function openMenue() {
    burger.classList.add('burgerActive');
    ndlist.forEach(function (span) {
      // console.log(span);
      span.classList.add('burgerActiveSpan');
    });
    ndlist[0].classList.add('span1');
    ndlist[1].style.display = 'none';
    ndlist[2].classList.add('span2');
  }

  function clouseMenue() {
    burger.classList.remove('burgerActive');
    ndlist.forEach(function (span) {
      // console.log(span);
      span.classList.remove('burgerActiveSpan');
    });
    ndlist[0].classList.remove('span1');
    ndlist[1].style.display = 'block';
    ndlist[2].classList.remove('span2');
  }

  var links = document.querySelectorAll('[href^="#"]'); // '[href^="#"]' я ищу все ссылки которые начинаются на #

  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var widhtTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null; //    console.log(widhtTop)
      //    console.log(hash)
      //    console.log(toBlock);
      //getBoundingClientRect - позволяетполучить  доступ к свойствам 
    });
  });
  var elem = document.querySelectorAll('section'); // console.log(elem);

  var y = elem[1].scrollTop; // console.log(y);

  elem.forEach(function (item, i) {
    document.addEventListener('scroll', function () {
      var posTop = Math.round(item.getBoundingClientRect().top),
          posBottom = Math.round(item.getBoundingClientRect().bottom);
      var heightTop = document.documentElement.scrollTop,
          r = posTop + heightTop,
          t = heightTop - Math.abs(posTop); // это высота блока 
      // console.log(`page: ${posTop} numbr: ${i} `);

      itemMenu.forEach(function (element) {
        if (heightTop <= 450) {
          removeActev();
          itemMenu[0].classList.add('activeMenuItem');
        }

        if (heightTop >= 451 && heightTop <= 1000) {
          removeActev();
          itemMenu[1].classList.add('activeMenuItem');
        }

        if (heightTop >= 1001 && heightTop <= 2400) {
          removeActev();
          itemMenu[2].classList.add('activeMenuItem');
        }

        if (heightTop >= 2401 && heightTop <= 3250) {
          removeActev();
          itemMenu[3].classList.add('activeMenuItem');
        }

        if (heightTop >= 3251) {
          removeActev();
          itemMenu[4].classList.add('activeMenuItem');
        }
      }); // itemMenu.forEach((kitem,k) => { 
      // console.log(`r: ${r} длина +скролВысота `);
      // console.log(heightTop)
      // console.log(`${t} scrollll t` )
      // let k = -9;
      // console.log(`page: ${posTop} numbr: ${i} `);
      // console.log(`нижняя часть эл: ${posBottom} numbr: ${i} `);
      // if ((heightTop + 6) >= Math.abs(r ) && heightTop <= (r + 9) ) {
      //     console.log(`-------------------1000--------------------` );
      //     console.log(item);
      //     console.log(i);
      //             // itemMenu.forEach((kitem,k) => { 
      //             //     console.log(kitem[i]);
      //             //   switch (i) {
      //             //     case 0:
      //             //         removeActev();
      //             //         itemMenu[i].classList.add('activeMenuItem');
      //             //        console.log(itemMenu[i])
      //             //        console.log(i)
      //             //        break;
      //             //     case 1:
      //             //          removeActev();
      //             //          itemMenu[i].classList.add('activeMenuItem')
      //             //         console.log(i)
      //             //         break;
      //             //     case 2:
      //             //         removeActev();
      //             //         itemMenu[i].classList.add('activeMenuItem')
      //             //         console.log(i)
      //             //         break;
      //             //     case 3:
      //             //         removeActev();
      //             //         itemMenu[i].classList.add('activeMenuItem')
      //             //     console.log(i)
      //             //     break;
      //             //     case 4:
      //             //         removeActev();
      //             //         itemMenu[i].classList.add('activeMenuItem')
      //             //         console.log(i)
      //             //         break;
      //             //     case 5:
      //             //         removeActev();
      //             //         itemMenu[i].classList.add('activeMenuItem')
      //             //     console.log(i)
      //             //     break;
      //             //     default:
      //             //         removeActev();
      //             //         itemMenu[0].classList.add('activeMenuItem')
      //             //         console.log(i)
      //             //         break;
      //             //   }
      //             // //   console.log(kitem);
      //             //         // removeActev();
      //             //         // kitem.classList.add('activeMenuItem');
      //             //         // console.log(item);
      //             //         // console.log(i);
      //             //         // i.classList.remove('menu_active');
      //             //         clouseMenue()
      //             //     });
      // } 
      // if (Math.sign(posTop) === 1) {
      //     let r = posTop + widhtTop;
      //     //   console.log(`r: ${r} `);
      //     //   console.log(item.childNodes);
      //     //   console.log(`page: ${posTop} numbr: ${i} `);
      //     if(widhtTop <= (r) ){
      //         // console.log(`pizzzddaaaa`);
      //         itemMenu.forEach((item,k) => { 
      //             // console.log(`${i}i, k ${k} true`);
      //             removeActev();
      //             item.classList.add('activeMenuItem');
      //             // menu.classList.remove('menu_active');
      //             clouseMenue()
      //         });
      //     }else {
      //         let t = (widhtTop - Math.abs(posTop)); // это высота блока 
      //             console.log(`${t} scrollll t` )
      //         if ( widhtTop >= (t - 450) && widhtTop <= (t + 100)) {
      //             console.log(`page: ${posTop} numbr: ${i} `);
      //             console.log(`pizzzddaaaa`);
      //             itemMenu.forEach((item,j) => { 
      //                 console.log(`${i}i, j${j} fals`);
      //                 removeActev();
      //                 item.classList.add('activeMenuItem');
      //                 // console.log(item);
      //                 // console.log(i);
      //                 // menu.classList.remove('menu_active');
      //                 clouseMenue()
      //             });
      //         }
      //     }
      // }
    });
  }); // menuAutoActive(3,1)
  //  function menuAutoActive (a,b) {
  //    let k = a-b;
  //     return console.log(k);
  //  }
};

/* harmony default export */ __webpack_exports__["default"] = (menuActive);

/***/ }),

/***/ "./src/js/modules/scrolTop.js":
/*!************************************!*\
  !*** ./src/js/modules/scrolTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var scrollElement = function scrollElement() {
  var links = document.querySelectorAll('[href^="#"]'),
      // '[href^="#"]' я ищу все ссылки которые начинаются на #
  speed = 0.3;
  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var widhtTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null; //  console.log(widhtTop)
      //  console.log(hash)
      //getBoundingClientRect - позволяетполучить  доступ к свойствам 
      //  console.log(toBlock);

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        var proggres = time - start,
            r = toBlock < 0 ? Math.max(widhtTop - proggres / speed, widhtTop + toBlock) : Math.min(widhtTop + proggres / speed, widhtTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widhtTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  }); //     const a = document.querySelectorAll('a');
  //     console.log('scrolTop');
  //     a.forEach(element => {
  //       element.addEventListener('click', (e)=>{
  //         e.preventDefault();
  //       let attribute = element.getAttribute('href').slice(1);
  //         console.log(element);
  //         console.log(attribute);
  //       let po =  document.querySelector(`#${attribute}`);
  //       po.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start'
  //       });
  //       console.log(po);
  //         // window.location.hash=attribute.slice(1);
  //     })
  //     });
  // console.log(a);
};

/* harmony default export */ __webpack_exports__["default"] = (scrollElement);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var slider = function slider() {
  var btn = document.querySelector('#btnMore'),
      modalSlider = document.querySelector('.modal_slider'),
      prev = document.querySelector('.offer__slider--prev'),
      next = document.querySelector('.offer__slider--next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      span = document.querySelector('.clouse__slide'),
      slids = document.querySelectorAll('.offer__slide');
  var index = 1;
  span.addEventListener('click', clouseModal);
  showSlids(1);

  if (slids.length < 10) {
    total.textContent = "0".concat(slids.length);
  } else {
    total.textContent = slids.length;
  }

  function showSlids(n) {
    if (n > slids.length) {
      index = 1;
    }

    if (n < 1) {
      index = slids.length;
    }

    slids.forEach(function (item) {
      item.classList.remove('displayGrid');
      item.classList.add('hideModal');
    });
    slids[index - 1].classList.remove('hideModal');
    slids[index - 1].classList.add('displayGrid');
    console.log(index);

    if (slids.length < 10) {
      current.textContent = "0".concat(index);
    } else {
      current.textContent = index;
    }
  }

  btn.addEventListener('click', function () {
    modalSlider.classList.add('displayGrid');
    modalSlider.classList.remove('hideModal');
    document.body.style.overflow = 'hidden';
    console.log(span);
  });

  function plusSlides(n) {
    showSlids(index += n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });

  function clouseModal() {
    modalSlider.classList.remove('displayGrid');
    modalSlider.classList.add('hideModal');
    document.body.style.overflow = ''; // console.log('hhhhhhhhhhhhhhhh')
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/touch.js":
/*!*********************************!*\
  !*** ./src/js/modules/touch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var touch = function touch() {
  var opo = document.querySelector('#swipeTest');
  var x;
  opo.addEventListener('touchstart', function (e) {
    x = e.changedTouches[0].clientX;
  });
  opo.addEventListener('touchend', function (e) {
    e.changedTouches[0].clientX - x < -50 && swipeLeft();
  });

  function swipeLeft() {
    console.log('swipe left');
  }

  window.addEventListener('touchstart', function (e) {
    x = e.changedTouches[0].clientY;
  });
  window.addEventListener('touchend', function (e) {
    e.changedTouches[0].clientY - x < 50 && swiperight();
  });

  function swiperight() {
    console.log('swipe reight');
  }
  /**
  Creates a swipe gesture event handler
  */


  try {} catch (error) {} // MobiSwipe('#swipeTest');
  // function MobiSwipe(id) {
  //     // Constants
  //     this.HORIZONTAL = 1;
  //     this.VERTICAL = 2;
  //     this.AXIS_THRESHOLD = 30; // The user will not define a perfect line
  //     this.GESTURE_DELTA = 60; // The min delta in the axis to fire the gesture
  //     // Public members
  //     this.direction = this.HORIZONTAL;
  //     this.element = document.querySelector(id);
  //     this.onswiperight = null;
  //     this.onswipeleft = null;
  //     this.onswipeup = null;
  //     this.onswipedown = null;
  //     this.inGesture = false;
  //     // Private members
  //     this._originalX = 0
  //     this._originalY = 0
  //     var _this = this;
  //     // Makes the element clickable on iPhone
  //     this.element.onclick = function() {void(0)};
  //     var mousedown = function(event) {
  //         console.log('нажатие');
  //     // Finger press
  //     event.preventDefault();
  //     _this.inGesture = true;
  //     _this._originalX = (event.touches) ? event.touches[0].pageX : event.pageX;
  //     _this._originalY = (event.touches) ? event.touches[0].pageY : event.pageY;
  //     // Only for iPhone
  //     if (event.touches && event.touches.length!=1) {
  //     _this.inGesture = false; // Cancel gesture on multiple touch
  //     }
  //     };
  //     var mousemove = function(event) {
  //         console.log('двигается');
  //     // Finger moving
  //     event.preventDefault();
  //     var delta = 0;
  //     // Get coordinates using iPhone or standard technique
  //     var currentX = (event.touches) ? event.touches[0].pageX : event.pageX;
  //     var currentY = (event.touches) ? event.touches[0].pageY : event.pageY;
  //     // Check if the user is still in line with the axis
  //     if (_this.inGesture) {
  //     if ((_this.direction==_this.HORIZONTAL)) {
  //     delta = Math.abs(currentY-_this._originalY);
  //     } else {
  //     delta = Math.abs(currentX-_this._originalX);
  //     }
  //     if (delta >_this.AXIS_THRESHOLD) {
  //     // Cancel the gesture, the user is moving in the other axis
  //     _this.inGesture = false;
  //     }
  //     }
  //     // Check if we can consider it a swipe
  //     if (_this.inGesture) {
  //     if (_this.direction==_this.HORIZONTAL) {
  //     delta = Math.abs(currentX-_this._originalX);
  //     if (currentX>_this._originalX) {
  //     direction = 0;
  //     } else {
  //     direction = 1;
  //     }
  //     } else {
  //     delta = Math.abs(currentY-_this._originalY);
  //     if (currentY>_this._originalY) {
  //     direction = 2;
  //     } else {
  //     direction = 3;
  //     }
  //     }
  //     if (delta >= _this.GESTURE_DELTA) {
  //     // Gesture detected!
  //     var handler = null;
  //     switch(direction) {
  //     case 0: handler = _this.onswiperight; break;
  //     case 1: handler = _this.onswipeleft; break;
  //     case 2: handler = _this.onswipedown; break;
  //     case 3: handler = _this.onswipeup; break;
  //     }
  //     if (handler!=null) {
  //     // Call to the callback with the optional delta
  //     handler(delta);
  //     }
  //     _this.inGesture = false;
  //     }
  //     }
  //     };
  //     // iPhone and Android's events
  //     this.element.addEventListener('touchstart', mousedown, false);
  //     this.element.addEventListener('touchmove', mousemove, false);
  //     this.element.addEventListener('touchcancel', function() {
  //         console.log('хз');
  //     _this.inGesture = false;
  //     }, false);
  //     // We should also assign our mousedown and mousemove functions to
  //     // standard events on compatible devices
  //     }

};

/* harmony default export */ __webpack_exports__["default"] = (touch);

/***/ }),

/***/ "./src/js/modules/trainslet.js":
/*!*************************************!*\
  !*** ./src/js/modules/trainslet.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var trainslet = function trainslet() {};

/* harmony default export */ __webpack_exports__["default"] = (trainslet);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map