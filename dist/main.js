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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);


var a = 1;
console.log(a);

var x = function x() {
  console.log('x');
};

x();
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('ok');
  }, 100);
});
p.then(function (x) {
  console.log(x);
});

var aa = __webpack_require__(/*! n/test.js */ "./node_modules/testnpm/test.js");

console.log('node_modules');
console.log(aa);
aa.p.then(function (s) {
  console.log(s);
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
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
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // call something on iterator step with safe closing on error


module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
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

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
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

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
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

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      hide(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
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

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line no-undef
check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
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

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
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

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;

  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
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

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store, it) || {};
  };

  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

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

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  }

  return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;

var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (error) {
        if (head) notify();else last = undefined;
        throw error;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function () {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;

    notify = function () {
      then.call(promise, flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = {
    fn: fn,
    next: undefined
  };
  if (last) last.next = task;

  if (!head) {
    head = task;
    notify();
  }

  last = task;
};

/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;

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

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}; // 25.4.1.5 NewPromiseCapability(C)


module.exports.f = function (C) {
  return new PromiseCapability(C);
};

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

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z'; // `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');
shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});

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

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) args.push(arguments[i++]);

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };

    defer(counter);
    return counter;
  };

  clear = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    }; // Rest old browsers

  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
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

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
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

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

var ObjectPrototype = Object.prototype; // `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, {
    unsafe: true
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;

var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");

var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");

var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");

var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");

var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);

  var empty = function () {
    /* empty */
  };

  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


  return !((IS_NODE || typeof PromiseRejectionEvent == 'function') && (!IS_PURE || promise['finally']) && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // we can't detect it synchronously, so just check versions
  && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1);
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () {
    /* empty */
  });
}); // helpers

var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0; // variable length - can't use forEach

    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // can throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }

    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;

  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };

  if (handler = global['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;

    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);

    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };

        try {
          then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, {
      done: false
    }, error, state);
  }
}; // constructor polyfill


if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);

    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then; // wrap native Promise#then for native async functions

    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    }); // wrap fetch result

    if (typeof $fetch == 'function') $({
      global: true,
      enumerable: true,
      forced: true
    }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({
  global: true,
  wrap: true,
  forced: FORCED
}, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = path[PROMISE]; // statics

$({
  target: PROMISE,
  stat: true,
  forced: FORCED
}, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});
$({
  target: PROMISE,
  stat: true,
  forced: IS_PURE || FORCED
}, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});
$({
  target: PROMISE,
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/testnpm/test.js":
/*!**************************************!*\
  !*** ./node_modules/testnpm/test.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);


var a = 1;
exports.a = a;
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('我来自node_modules');
  }, 100);
});
exports.p = p;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3RucG0vdGVzdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImEiLCJjb25zb2xlIiwibG9nIiwieCIsInAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aGVuIiwiYWEiLCJyZXF1aXJlIiwicyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIkNvbnN0cnVjdG9yIiwibmFtZSIsImlzT2JqZWN0IiwidG9JbmRleGVkT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJjcmVhdGVNZXRob2QiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsInVuZGVmaW5lZCIsImNhbGwiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiYW5PYmplY3QiLCJpdGVyYXRvciIsIkVOVFJJRVMiLCJlcnJvciIsInJldHVybk1ldGhvZCIsIndlbGxLbm93blN5bWJvbCIsIklURVJBVE9SIiwiU0FGRV9DTE9TSU5HIiwiY2FsbGVkIiwiaXRlcmF0b3JXaXRoUmV0dXJuIiwibmV4dCIsImRvbmUiLCJBcnJheSIsImZyb20iLCJleGVjIiwiU0tJUF9DTE9TSU5HIiwiSVRFUkFUSU9OX1NVUFBPUlQiLCJvYmplY3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2xhc3NvZlJhdyIsIlRPX1NUUklOR19UQUciLCJDT1JSRUNUX0FSR1VNRU5UUyIsInRyeUdldCIsImtleSIsInRhZyIsInJlc3VsdCIsIk9iamVjdCIsImNhbGxlZSIsImhhcyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsInRhcmdldCIsInNvdXJjZSIsImtleXMiLCJkZWZpbmVQcm9wZXJ0eSIsImYiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpIiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZmFpbHMiLCJnZXQiLCJnbG9iYWwiLCJkb2N1bWVudCIsIkVYSVNUUyIsImNyZWF0ZUVsZW1lbnQiLCJoaWRlIiwicmVkZWZpbmUiLCJzZXRHbG9iYWwiLCJjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzIiwiaXNGb3JjZWQiLCJvcHRpb25zIiwiVEFSR0VUIiwiR0xPQkFMIiwiU1RBVElDIiwic3RhdCIsIkZPUkNFRCIsInRhcmdldFByb3BlcnR5Iiwic291cmNlUHJvcGVydHkiLCJkZXNjcmlwdG9yIiwicHJvdG90eXBlIiwibm9UYXJnZXRHZXQiLCJmb3JjZWQiLCJzaGFtIiwic2hhcmVkIiwiRnVuY3Rpb24iLCJwYXRoIiwidmFyaWFibGUiLCJuYW1lc3BhY2UiLCJtZXRob2QiLCJjbGFzc29mIiwiSXRlcmF0b3JzIiwiY2hlY2siLCJNYXRoIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsInNlbGYiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFU0NSSVBUT1JTIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0QnVpbHRJbiIsInNwbGl0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJOQVRJVkVfV0VBS19NQVAiLCJvYmplY3RIYXMiLCJzaGFyZWRLZXkiLCJoaWRkZW5LZXlzIiwiV2Vha01hcCIsInNldCIsImVuZm9yY2UiLCJnZXR0ZXJGb3IiLCJUWVBFIiwic3RhdGUiLCJ0eXBlIiwic3RvcmUiLCJ3bWdldCIsIndtaGFzIiwid21zZXQiLCJtZXRhZGF0YSIsIlNUQVRFIiwiQXJyYXlQcm90b3R5cGUiLCJyZXBsYWNlbWVudCIsImZlYXR1cmUiLCJkZXRlY3Rpb24iLCJkYXRhIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJzdHJpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc0FycmF5SXRlcmF0b3JNZXRob2QiLCJiaW5kIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nIiwiUmVzdWx0Iiwic3RvcHBlZCIsIml0ZXJhdGUiLCJpdGVyYWJsZSIsIkFTX0VOVFJJRVMiLCJJU19JVEVSQVRPUiIsImJvdW5kRnVuY3Rpb24iLCJpdGVyRm4iLCJzdGVwIiwic3RvcCIsIm1hY3JvdGFzayIsInVzZXJBZ2VudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwicHJvY2VzcyIsIklTX05PREUiLCJxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IiLCJxdWV1ZU1pY3JvdGFzayIsImZsdXNoIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJ0b2dnbGUiLCJub2RlIiwicHJvbWlzZSIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsIm5leHRUaWNrIiwidGVzdCIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJ0YXNrIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiU3ltYm9sIiwibmF0aXZlRnVuY3Rpb25Ub1N0cmluZyIsIlByb21pc2VDYXBhYmlsaXR5IiwiQyIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIm5hdGl2ZURlZmluZVByb3BlcnR5IiwiUCIsIkF0dHJpYnV0ZXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSIsIm5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImludGVybmFsT2JqZWN0S2V5cyIsImVudW1CdWdLZXlzIiwiY29uY2F0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm5hbWVzIiwicHVzaCIsIm5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTkFTSE9STl9CVUciLCJWIiwiZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSIsImdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiY29uc3RydWN0b3IiLCJwcm9taXNlQ2FwYWJpbGl0eSIsInNyYyIsIkludGVybmFsU3RhdGVNb2R1bGUiLCJnZXRJbnRlcm5hbFN0YXRlIiwiZW5mb3JjZUludGVybmFsU3RhdGUiLCJURU1QTEFURSIsInVuc2FmZSIsInNpbXBsZSIsImpvaW4iLCJTUEVDSUVTIiwiQ09OU1RSVUNUT1JfTkFNRSIsIlRBRyIsInVpZCIsIklTX1BVUkUiLCJTSEFSRUQiLCJ2ZXJzaW9uIiwibW9kZSIsImNvcHlyaWdodCIsImRlZmF1bHRDb25zdHJ1Y3RvciIsIlMiLCJodG1sIiwibG9jYXRpb24iLCJzZXRJbW1lZGlhdGUiLCJjbGVhciIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJEaXNwYXRjaCIsImNvdW50ZXIiLCJxdWV1ZSIsIk9OUkVBRFlTVEFURUNIQU5HRSIsImRlZmVyIiwiY2hhbm5lbCIsInBvcnQiLCJydW4iLCJpZCIsInJ1bm5lciIsImxpc3RlbmVyIiwiZXZlbnQiLCJwb3N0IiwicG9zdE1lc3NhZ2UiLCJwcm90b2NvbCIsImhvc3QiLCJhcmdzIiwibm93IiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInRvSW50ZWdlciIsIm1heCIsIm1pbiIsImludGVnZXIiLCJJbmRleGVkT2JqZWN0IiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsImNlaWwiLCJmbG9vciIsImFyZ3VtZW50IiwiaXNOYU4iLCJpbnB1dCIsIlBSRUZFUlJFRF9TVFJJTkciLCJ2YWwiLCJ2YWx1ZU9mIiwicG9zdGZpeCIsInJhbmRvbSIsIk5BVElWRV9TWU1CT0wiLCJPYmplY3RQcm90b3R5cGUiLCIkIiwiTmF0aXZlUHJvbWlzZSIsInJlZGVmaW5lQWxsIiwic2V0VG9TdHJpbmdUYWciLCJzZXRTcGVjaWVzIiwiYW5JbnN0YW5jZSIsImNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsInByb21pc2VSZXNvbHZlIiwiaG9zdFJlcG9ydEVycm9ycyIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsIlBST01JU0UiLCJzZXRJbnRlcm5hbFN0YXRlIiwiZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUiLCJQcm9taXNlQ29uc3RydWN0b3IiLCIkZmV0Y2giLCJmZXRjaCIsInZlcnNpb25zIiwidjgiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJESVNQQVRDSF9FVkVOVCIsImNyZWF0ZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIlVOSEFORExFRF9SRUpFQ1RJT04iLCJSRUpFQ1RJT05fSEFORExFRCIsIlBFTkRJTkciLCJGVUxGSUxMRUQiLCJSRUpFQ1RFRCIsIkhBTkRMRUQiLCJVTkhBTkRMRUQiLCJJbnRlcm5hbCIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiUHJvbWlzZVdyYXBwZXIiLCJuYXRpdmVUaGVuIiwiZW1wdHkiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsIklOQ09SUkVDVF9JVEVSQVRJT04iLCJhbGwiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJub3RpZmllZCIsImNoYWluIiwicmVhY3Rpb25zIiwib2siLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZXhpdGVkIiwicmVqZWN0aW9uIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInJlYXNvbiIsImluaXRFdmVudCIsIklTX1VOSEFORExFRCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsInVud3JhcCIsImludGVybmFsUmVqZWN0IiwiaW50ZXJuYWxSZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwid3JhcCIsInIiLCJjYXBhYmlsaXR5IiwiJHByb21pc2VSZXNvbHZlIiwidmFsdWVzIiwicmVtYWluaW5nIiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJnIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsQ0FBQyxHQUFHLENBQVY7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBSTtBQUNWRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBRUQsQ0FIRDs7QUFJQUMsQ0FBQztBQUNELElBQUlDLENBQUMsR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW1CO0FBQ3JDQyxZQUFVLENBQUMsWUFBTTtBQUNmRixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdELENBSk8sQ0FBUjtBQUtBRixDQUFDLENBQUNLLElBQUYsQ0FBTyxVQUFDTixDQUFELEVBQUs7QUFDVkYsU0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQVo7QUFDRCxDQUZEOztBQUdBLElBQUlPLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxpREFBRCxDQUFoQjs7QUFDQVYsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWVEsRUFBWjtBQUNBQSxFQUFFLENBQUNOLENBQUgsQ0FBS0ssSUFBTCxDQUFVLFVBQUFHLENBQUMsRUFBRTtBQUNYWCxTQUFPLENBQUNDLEdBQVIsQ0FBWVUsQ0FBWjtBQUVELENBSEQsRTs7Ozs7Ozs7Ozs7QUNsQkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSSxPQUFPQSxFQUFQLElBQWEsVUFBakIsRUFBNkI7QUFDM0IsVUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUNGLEVBQUQsQ0FBTixHQUFhLG9CQUFkLENBQWY7QUFDRDs7QUFBQyxTQUFPQSxFQUFQO0FBQ0gsQ0FKRCxDOzs7Ozs7Ozs7OztBQ0FBRixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjRyxXQUFkLEVBQTJCQyxJQUEzQixFQUFpQztBQUNoRCxNQUFJLEVBQUVKLEVBQUUsWUFBWUcsV0FBaEIsQ0FBSixFQUFrQztBQUNoQyxVQUFNRixTQUFTLENBQUMsZ0JBQWdCRyxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFWLEdBQWdCLEVBQXBDLElBQTBDLFlBQTNDLENBQWY7QUFDRDs7QUFBQyxTQUFPSixFQUFQO0FBQ0gsQ0FKRCxDOzs7Ozs7Ozs7OztBQ0FBLElBQUlLLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0Qjs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJLENBQUNLLFFBQVEsQ0FBQ0wsRUFBRCxDQUFiLEVBQW1CO0FBQ2pCLFVBQU1DLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDRixFQUFELENBQU4sR0FBYSxtQkFBZCxDQUFmO0FBQ0Q7O0FBQUMsU0FBT0EsRUFBUDtBQUNILENBSkQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJTSxlQUFlLEdBQUdWLG1CQUFPLENBQUMsNkZBQUQsQ0FBN0I7O0FBQ0EsSUFBSVcsUUFBUSxHQUFHWCxtQkFBTyxDQUFDLDZFQUFELENBQXRCOztBQUNBLElBQUlZLGVBQWUsR0FBR1osbUJBQU8sQ0FBQyw2RkFBRCxDQUE3QixDLENBRUE7OztBQUNBLElBQUlhLFlBQVksR0FBRyxVQUFVQyxXQUFWLEVBQXVCO0FBQ3hDLFNBQU8sVUFBVUMsS0FBVixFQUFpQkMsRUFBakIsRUFBcUJDLFNBQXJCLEVBQWdDO0FBQ3JDLFFBQUlDLENBQUMsR0FBR1IsZUFBZSxDQUFDSyxLQUFELENBQXZCO0FBQ0EsUUFBSUksTUFBTSxHQUFHUixRQUFRLENBQUNPLENBQUMsQ0FBQ0MsTUFBSCxDQUFyQjtBQUNBLFFBQUlDLEtBQUssR0FBR1IsZUFBZSxDQUFDSyxTQUFELEVBQVlFLE1BQVosQ0FBM0I7QUFDQSxRQUFJRSxLQUFKLENBSnFDLENBS3JDO0FBQ0E7O0FBQ0EsUUFBSVAsV0FBVyxJQUFJRSxFQUFFLElBQUlBLEVBQXpCLEVBQTZCLE9BQU9HLE1BQU0sR0FBR0MsS0FBaEIsRUFBdUI7QUFDbERDLFdBQUssR0FBR0gsQ0FBQyxDQUFDRSxLQUFLLEVBQU4sQ0FBVCxDQURrRCxDQUVsRDs7QUFDQSxVQUFJQyxLQUFLLElBQUlBLEtBQWIsRUFBb0IsT0FBTyxJQUFQLENBSDhCLENBSXBEO0FBQ0MsS0FMRCxNQUtPLE9BQU1GLE1BQU0sR0FBR0MsS0FBZixFQUFzQkEsS0FBSyxFQUEzQixFQUErQjtBQUNwQyxVQUFJLENBQUNOLFdBQVcsSUFBSU0sS0FBSyxJQUFJRixDQUF6QixLQUErQkEsQ0FBQyxDQUFDRSxLQUFELENBQUQsS0FBYUosRUFBaEQsRUFBb0QsT0FBT0YsV0FBVyxJQUFJTSxLQUFmLElBQXdCLENBQS9CO0FBQ3JEO0FBQUMsV0FBTyxDQUFDTixXQUFELElBQWdCLENBQUMsQ0FBeEI7QUFDSCxHQWZEO0FBZ0JELENBakJEOztBQW1CQVosTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2Y7QUFDQTtBQUNBbUIsVUFBUSxFQUFFVCxZQUFZLENBQUMsSUFBRCxDQUhQO0FBSWY7QUFDQTtBQUNBVSxTQUFPLEVBQUVWLFlBQVksQ0FBQyxLQUFEO0FBTk4sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUN4QkEsSUFBSVcsU0FBUyxHQUFHeEIsbUJBQU8sQ0FBQywrRUFBRCxDQUF2QixDLENBRUE7OztBQUNBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXNCLEVBQVYsRUFBY0MsSUFBZCxFQUFvQlAsTUFBcEIsRUFBNEI7QUFDM0NLLFdBQVMsQ0FBQ0MsRUFBRCxDQUFUO0FBQ0EsTUFBSUMsSUFBSSxLQUFLQyxTQUFiLEVBQXdCLE9BQU9GLEVBQVA7O0FBQ3hCLFVBQVFOLE1BQVI7QUFDRSxTQUFLLENBQUw7QUFBUSxhQUFPLFlBQVk7QUFDekIsZUFBT00sRUFBRSxDQUFDRyxJQUFILENBQVFGLElBQVIsQ0FBUDtBQUNELE9BRk87O0FBR1IsU0FBSyxDQUFMO0FBQVEsYUFBTyxVQUFVckMsQ0FBVixFQUFhO0FBQzFCLGVBQU9vQyxFQUFFLENBQUNHLElBQUgsQ0FBUUYsSUFBUixFQUFjckMsQ0FBZCxDQUFQO0FBQ0QsT0FGTzs7QUFHUixTQUFLLENBQUw7QUFBUSxhQUFPLFVBQVVBLENBQVYsRUFBYXdDLENBQWIsRUFBZ0I7QUFDN0IsZUFBT0osRUFBRSxDQUFDRyxJQUFILENBQVFGLElBQVIsRUFBY3JDLENBQWQsRUFBaUJ3QyxDQUFqQixDQUFQO0FBQ0QsT0FGTzs7QUFHUixTQUFLLENBQUw7QUFBUSxhQUFPLFVBQVV4QyxDQUFWLEVBQWF3QyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtBQUNoQyxlQUFPTCxFQUFFLENBQUNHLElBQUgsQ0FBUUYsSUFBUixFQUFjckMsQ0FBZCxFQUFpQndDLENBQWpCLEVBQW9CQyxDQUFwQixDQUFQO0FBQ0QsT0FGTztBQVZWOztBQWNBLFNBQU87QUFBVTtBQUFlO0FBQzlCLFdBQU9MLEVBQUUsQ0FBQ00sS0FBSCxDQUFTTCxJQUFULEVBQWVNLFNBQWYsQ0FBUDtBQUNELEdBRkQ7QUFHRCxDQXBCRCxDOzs7Ozs7Ozs7OztBQ0hBLElBQUlDLFFBQVEsR0FBR2pDLG1CQUFPLENBQUMsNkVBQUQsQ0FBdEIsQyxDQUVBOzs7QUFDQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVUrQixRQUFWLEVBQW9CVCxFQUFwQixFQUF3QkosS0FBeEIsRUFBK0JjLE9BQS9CLEVBQXdDO0FBQ3ZELE1BQUk7QUFDRixXQUFPQSxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1EsUUFBUSxDQUFDWixLQUFELENBQVIsQ0FBZ0IsQ0FBaEIsQ0FBRCxFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUIsQ0FBTCxHQUFzQ0ksRUFBRSxDQUFDSixLQUFELENBQXRELENBREUsQ0FFSjtBQUNDLEdBSEQsQ0FHRSxPQUFPZSxLQUFQLEVBQWM7QUFDZCxRQUFJQyxZQUFZLEdBQUdILFFBQVEsQ0FBQyxRQUFELENBQTNCO0FBQ0EsUUFBSUcsWUFBWSxLQUFLVixTQUFyQixFQUFnQ00sUUFBUSxDQUFDSSxZQUFZLENBQUNULElBQWIsQ0FBa0JNLFFBQWxCLENBQUQsQ0FBUjtBQUNoQyxVQUFNRSxLQUFOO0FBQ0Q7QUFDRixDQVRELEM7Ozs7Ozs7Ozs7O0FDSEEsSUFBSUUsZUFBZSxHQUFHdEMsbUJBQU8sQ0FBQyw2RkFBRCxDQUE3Qjs7QUFFQSxJQUFJdUMsUUFBUSxHQUFHRCxlQUFlLENBQUMsVUFBRCxDQUE5QjtBQUNBLElBQUlFLFlBQVksR0FBRyxLQUFuQjs7QUFFQSxJQUFJO0FBQ0YsTUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRztBQUN2QkMsUUFBSSxFQUFFLFlBQVk7QUFDaEIsYUFBTztBQUFFQyxZQUFJLEVBQUUsQ0FBQyxDQUFDSCxNQUFNO0FBQWhCLE9BQVA7QUFDRCxLQUhzQjtBQUl2QixjQUFVLFlBQVk7QUFDcEJELGtCQUFZLEdBQUcsSUFBZjtBQUNEO0FBTnNCLEdBQXpCOztBQVFBRSxvQkFBa0IsQ0FBQ0gsUUFBRCxDQUFsQixHQUErQixZQUFZO0FBQ3pDLFdBQU8sSUFBUDtBQUNELEdBRkQsQ0FWRSxDQWFGOzs7QUFDQU0sT0FBSyxDQUFDQyxJQUFOLENBQVdKLGtCQUFYLEVBQStCLFlBQVk7QUFBRSxVQUFNLENBQU47QUFBVSxHQUF2RDtBQUNELENBZkQsQ0FlRSxPQUFPTixLQUFQLEVBQWM7QUFBRTtBQUFhOztBQUUvQmxDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNEMsSUFBVixFQUFnQkMsWUFBaEIsRUFBOEI7QUFDN0MsTUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNSLFlBQXRCLEVBQW9DLE9BQU8sS0FBUDtBQUNwQyxNQUFJUyxpQkFBaUIsR0FBRyxLQUF4Qjs7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0FBLFVBQU0sQ0FBQ1gsUUFBRCxDQUFOLEdBQW1CLFlBQVk7QUFDN0IsYUFBTztBQUNMSSxZQUFJLEVBQUUsWUFBWTtBQUNoQixpQkFBTztBQUFFQyxnQkFBSSxFQUFFSyxpQkFBaUIsR0FBRztBQUE1QixXQUFQO0FBQ0Q7QUFISSxPQUFQO0FBS0QsS0FORDs7QUFPQUYsUUFBSSxDQUFDRyxNQUFELENBQUo7QUFDRCxHQVZELENBVUUsT0FBT2QsS0FBUCxFQUFjO0FBQUU7QUFBYTs7QUFDL0IsU0FBT2EsaUJBQVA7QUFDRCxDQWZELEM7Ozs7Ozs7Ozs7O0FDdEJBLElBQUlFLFFBQVEsR0FBRyxHQUFHQSxRQUFsQjs7QUFFQWpELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBTytDLFFBQVEsQ0FBQ3ZCLElBQVQsQ0FBY3hCLEVBQWQsRUFBa0JnRCxLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUFDLENBQTVCLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkEsSUFBSUMsVUFBVSxHQUFHckQsbUJBQU8sQ0FBQyxpRkFBRCxDQUF4Qjs7QUFDQSxJQUFJc0MsZUFBZSxHQUFHdEMsbUJBQU8sQ0FBQyw2RkFBRCxDQUE3Qjs7QUFFQSxJQUFJc0QsYUFBYSxHQUFHaEIsZUFBZSxDQUFDLGFBQUQsQ0FBbkMsQyxDQUNBOztBQUNBLElBQUlpQixpQkFBaUIsR0FBR0YsVUFBVSxDQUFDLFlBQVk7QUFBRSxTQUFPckIsU0FBUDtBQUFtQixDQUFqQyxFQUFELENBQVYsSUFBbUQsV0FBM0UsQyxDQUVBOztBQUNBLElBQUl3QixNQUFNLEdBQUcsVUFBVXBELEVBQVYsRUFBY3FELEdBQWQsRUFBbUI7QUFDOUIsTUFBSTtBQUNGLFdBQU9yRCxFQUFFLENBQUNxRCxHQUFELENBQVQ7QUFDRCxHQUZELENBRUUsT0FBT3JCLEtBQVAsRUFBYztBQUFFO0FBQWE7QUFDaEMsQ0FKRCxDLENBTUE7OztBQUNBbEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixNQUFJYyxDQUFKLEVBQU93QyxHQUFQLEVBQVlDLE1BQVo7QUFDQSxTQUFPdkQsRUFBRSxLQUFLdUIsU0FBUCxHQUFtQixXQUFuQixHQUFpQ3ZCLEVBQUUsS0FBSyxJQUFQLEdBQWMsTUFBZCxDQUN0QztBQURzQyxJQUVwQyxRQUFRc0QsR0FBRyxHQUFHRixNQUFNLENBQUN0QyxDQUFDLEdBQUcwQyxNQUFNLENBQUN4RCxFQUFELENBQVgsRUFBaUJrRCxhQUFqQixDQUFwQixLQUF3RCxRQUF4RCxHQUFtRUksR0FBbkUsQ0FDRjtBQURFLElBRUFILGlCQUFpQixHQUFHRixVQUFVLENBQUNuQyxDQUFELENBQWIsQ0FDbkI7QUFEbUIsSUFFakIsQ0FBQ3lDLE1BQU0sR0FBR04sVUFBVSxDQUFDbkMsQ0FBRCxDQUFwQixLQUE0QixRQUE1QixJQUF3QyxPQUFPQSxDQUFDLENBQUMyQyxNQUFULElBQW1CLFVBQTNELEdBQXdFLFdBQXhFLEdBQXNGRixNQU4xRjtBQU9ELENBVEQsQzs7Ozs7Ozs7Ozs7QUNmQSxJQUFJRyxHQUFHLEdBQUc5RCxtQkFBTyxDQUFDLGlFQUFELENBQWpCOztBQUNBLElBQUkrRCxPQUFPLEdBQUcvRCxtQkFBTyxDQUFDLDJFQUFELENBQXJCOztBQUNBLElBQUlnRSw4QkFBOEIsR0FBR2hFLG1CQUFPLENBQUMsK0hBQUQsQ0FBNUM7O0FBQ0EsSUFBSWlFLG9CQUFvQixHQUFHakUsbUJBQU8sQ0FBQyx1R0FBRCxDQUFsQzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVUrRCxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxNQUFJQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0ksTUFBRCxDQUFsQjtBQUNBLE1BQUlFLGNBQWMsR0FBR0osb0JBQW9CLENBQUNLLENBQTFDO0FBQ0EsTUFBSUMsd0JBQXdCLEdBQUdQLDhCQUE4QixDQUFDTSxDQUE5RDs7QUFDQSxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLElBQUksQ0FBQ2pELE1BQXpCLEVBQWlDcUQsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxRQUFJZixHQUFHLEdBQUdXLElBQUksQ0FBQ0ksQ0FBRCxDQUFkO0FBQ0EsUUFBSSxDQUFDVixHQUFHLENBQUNJLE1BQUQsRUFBU1QsR0FBVCxDQUFSLEVBQXVCWSxjQUFjLENBQUNILE1BQUQsRUFBU1QsR0FBVCxFQUFjYyx3QkFBd0IsQ0FBQ0osTUFBRCxFQUFTVixHQUFULENBQXRDLENBQWQ7QUFDeEI7QUFDRixDQVJELEM7Ozs7Ozs7Ozs7O0FDTEF2RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXNFLE1BQVYsRUFBa0JwRCxLQUFsQixFQUF5QjtBQUN4QyxTQUFPO0FBQ0xxRCxjQUFVLEVBQUUsRUFBRUQsTUFBTSxHQUFHLENBQVgsQ0FEUDtBQUVMRSxnQkFBWSxFQUFFLEVBQUVGLE1BQU0sR0FBRyxDQUFYLENBRlQ7QUFHTEcsWUFBUSxFQUFFLEVBQUVILE1BQU0sR0FBRyxDQUFYLENBSEw7QUFJTHBELFNBQUssRUFBRUE7QUFKRixHQUFQO0FBTUQsQ0FQRCxDOzs7Ozs7Ozs7OztBQ0FBLElBQUl3RCxLQUFLLEdBQUc3RSxtQkFBTyxDQUFDLHFFQUFELENBQW5CLEMsQ0FFQTs7O0FBQ0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDMEUsS0FBSyxDQUFDLFlBQVk7QUFDbEMsU0FBT2pCLE1BQU0sQ0FBQ1MsY0FBUCxDQUFzQixFQUF0QixFQUEwQixHQUExQixFQUErQjtBQUFFUyxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU8sQ0FBUDtBQUFXO0FBQWhDLEdBQS9CLEVBQW1FekYsQ0FBbkUsSUFBd0UsQ0FBL0U7QUFDRCxDQUZzQixDQUF2QixDOzs7Ozs7Ozs7OztBQ0hBLElBQUkwRixNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUlTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0Qjs7QUFFQSxJQUFJZ0YsUUFBUSxHQUFHRCxNQUFNLENBQUNDLFFBQXRCLEMsQ0FDQTs7QUFDQSxJQUFJQyxNQUFNLEdBQUd4RSxRQUFRLENBQUN1RSxRQUFELENBQVIsSUFBc0J2RSxRQUFRLENBQUN1RSxRQUFRLENBQUNFLGFBQVYsQ0FBM0M7O0FBRUFoRixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLFNBQU82RSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QjlFLEVBQXZCLENBQUgsR0FBZ0MsRUFBN0M7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDUEE7QUFDQUYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQ2YsYUFEZSxFQUVmLGdCQUZlLEVBR2YsZUFIZSxFQUlmLHNCQUplLEVBS2YsZ0JBTGUsRUFNZixVQU5lLEVBT2YsU0FQZSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0RBLElBQUk0RSxNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUl1RSx3QkFBd0IsR0FBR3ZFLG1CQUFPLENBQUMsK0hBQUQsQ0FBUCxDQUEyRHNFLENBQTFGOztBQUNBLElBQUlhLElBQUksR0FBR25GLG1CQUFPLENBQUMsbUVBQUQsQ0FBbEI7O0FBQ0EsSUFBSW9GLFFBQVEsR0FBR3BGLG1CQUFPLENBQUMsMkVBQUQsQ0FBdEI7O0FBQ0EsSUFBSXFGLFNBQVMsR0FBR3JGLG1CQUFPLENBQUMsK0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXNGLHlCQUF5QixHQUFHdEYsbUJBQU8sQ0FBQyxpSEFBRCxDQUF2Qzs7QUFDQSxJQUFJdUYsUUFBUSxHQUFHdkYsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0QjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVcUYsT0FBVixFQUFtQnJCLE1BQW5CLEVBQTJCO0FBQzFDLE1BQUlzQixNQUFNLEdBQUdELE9BQU8sQ0FBQ3RCLE1BQXJCO0FBQ0EsTUFBSXdCLE1BQU0sR0FBR0YsT0FBTyxDQUFDVCxNQUFyQjtBQUNBLE1BQUlZLE1BQU0sR0FBR0gsT0FBTyxDQUFDSSxJQUFyQjtBQUNBLE1BQUlDLE1BQUosRUFBWTNCLE1BQVosRUFBb0JULEdBQXBCLEVBQXlCcUMsY0FBekIsRUFBeUNDLGNBQXpDLEVBQXlEQyxVQUF6RDs7QUFDQSxNQUFJTixNQUFKLEVBQVk7QUFDVnhCLFVBQU0sR0FBR2EsTUFBVDtBQUNELEdBRkQsTUFFTyxJQUFJWSxNQUFKLEVBQVk7QUFDakJ6QixVQUFNLEdBQUdhLE1BQU0sQ0FBQ1UsTUFBRCxDQUFOLElBQWtCSixTQUFTLENBQUNJLE1BQUQsRUFBUyxFQUFULENBQXBDO0FBQ0QsR0FGTSxNQUVBO0FBQ0x2QixVQUFNLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDVSxNQUFELENBQU4sSUFBa0IsRUFBbkIsRUFBdUJRLFNBQWhDO0FBQ0Q7O0FBQ0QsTUFBSS9CLE1BQUosRUFBWSxLQUFLVCxHQUFMLElBQVlVLE1BQVosRUFBb0I7QUFDOUI0QixrQkFBYyxHQUFHNUIsTUFBTSxDQUFDVixHQUFELENBQXZCOztBQUNBLFFBQUkrQixPQUFPLENBQUNVLFdBQVosRUFBeUI7QUFDdkJGLGdCQUFVLEdBQUd6Qix3QkFBd0IsQ0FBQ0wsTUFBRCxFQUFTVCxHQUFULENBQXJDO0FBQ0FxQyxvQkFBYyxHQUFHRSxVQUFVLElBQUlBLFVBQVUsQ0FBQzNFLEtBQTFDO0FBQ0QsS0FIRCxNQUdPeUUsY0FBYyxHQUFHNUIsTUFBTSxDQUFDVCxHQUFELENBQXZCOztBQUNQb0MsVUFBTSxHQUFHTixRQUFRLENBQUNHLE1BQU0sR0FBR2pDLEdBQUgsR0FBU2dDLE1BQU0sSUFBSUUsTUFBTSxHQUFHLEdBQUgsR0FBUyxHQUFuQixDQUFOLEdBQWdDbEMsR0FBaEQsRUFBcUQrQixPQUFPLENBQUNXLE1BQTdELENBQWpCLENBTjhCLENBTzlCOztBQUNBLFFBQUksQ0FBQ04sTUFBRCxJQUFXQyxjQUFjLEtBQUtuRSxTQUFsQyxFQUE2QztBQUMzQyxVQUFJLE9BQU9vRSxjQUFQLEtBQTBCLE9BQU9ELGNBQXJDLEVBQXFEO0FBQ3JEUiwrQkFBeUIsQ0FBQ1MsY0FBRCxFQUFpQkQsY0FBakIsQ0FBekI7QUFDRCxLQVg2QixDQVk5Qjs7O0FBQ0EsUUFBSU4sT0FBTyxDQUFDWSxJQUFSLElBQWlCTixjQUFjLElBQUlBLGNBQWMsQ0FBQ00sSUFBdEQsRUFBNkQ7QUFDM0RqQixVQUFJLENBQUNZLGNBQUQsRUFBaUIsTUFBakIsRUFBeUIsSUFBekIsQ0FBSjtBQUNELEtBZjZCLENBZ0I5Qjs7O0FBQ0FYLFlBQVEsQ0FBQ2xCLE1BQUQsRUFBU1QsR0FBVCxFQUFjc0MsY0FBZCxFQUE4QlAsT0FBOUIsQ0FBUjtBQUNEO0FBQ0YsQ0EvQkQsQzs7Ozs7Ozs7Ozs7QUN0QkF0RixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVTRDLElBQVYsRUFBZ0I7QUFDL0IsTUFBSTtBQUNGLFdBQU8sQ0FBQyxDQUFDQSxJQUFJLEVBQWI7QUFDRCxHQUZELENBRUUsT0FBT1gsS0FBUCxFQUFjO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQU5ELEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBSWlFLE1BQU0sR0FBR3JHLG1CQUFPLENBQUMsdUVBQUQsQ0FBcEI7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtHLE1BQU0sQ0FBQywyQkFBRCxFQUE4QkMsUUFBUSxDQUFDbkQsUUFBdkMsQ0FBdkIsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJb0QsSUFBSSxHQUFHdkcsbUJBQU8sQ0FBQyxtRUFBRCxDQUFsQjs7QUFDQSxJQUFJK0UsTUFBTSxHQUFHL0UsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFFQSxJQUFJd0IsU0FBUyxHQUFHLFVBQVVnRixRQUFWLEVBQW9CO0FBQ2xDLFNBQU8sT0FBT0EsUUFBUCxJQUFtQixVQUFuQixHQUFnQ0EsUUFBaEMsR0FBMkM3RSxTQUFsRDtBQUNELENBRkQ7O0FBSUF6QixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXNHLFNBQVYsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQzVDLFNBQU8xRSxTQUFTLENBQUNiLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJLLFNBQVMsQ0FBQytFLElBQUksQ0FBQ0UsU0FBRCxDQUFMLENBQVQsSUFBOEJqRixTQUFTLENBQUN1RCxNQUFNLENBQUMwQixTQUFELENBQVAsQ0FBOUQsR0FDSEYsSUFBSSxDQUFDRSxTQUFELENBQUosSUFBbUJGLElBQUksQ0FBQ0UsU0FBRCxDQUFKLENBQWdCQyxNQUFoQixDQUFuQixJQUE4QzNCLE1BQU0sQ0FBQzBCLFNBQUQsQ0FBTixJQUFxQjFCLE1BQU0sQ0FBQzBCLFNBQUQsQ0FBTixDQUFrQkMsTUFBbEIsQ0FEdkU7QUFFRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDUEEsSUFBSUMsT0FBTyxHQUFHM0csbUJBQU8sQ0FBQyx5RUFBRCxDQUFyQjs7QUFDQSxJQUFJNEcsU0FBUyxHQUFHNUcsbUJBQU8sQ0FBQyw2RUFBRCxDQUF2Qjs7QUFDQSxJQUFJc0MsZUFBZSxHQUFHdEMsbUJBQU8sQ0FBQyw2RkFBRCxDQUE3Qjs7QUFFQSxJQUFJdUMsUUFBUSxHQUFHRCxlQUFlLENBQUMsVUFBRCxDQUE5Qjs7QUFFQXBDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSUEsRUFBRSxJQUFJdUIsU0FBVixFQUFxQixPQUFPdkIsRUFBRSxDQUFDbUMsUUFBRCxDQUFGLElBQ3ZCbkMsRUFBRSxDQUFDLFlBQUQsQ0FEcUIsSUFFdkJ3RyxTQUFTLENBQUNELE9BQU8sQ0FBQ3ZHLEVBQUQsQ0FBUixDQUZPO0FBR3RCLENBSkQsQzs7Ozs7Ozs7Ozs7QUNOQSxrREFBSWMsQ0FBQyxHQUFHLFFBQVI7O0FBQ0EsSUFBSTJGLEtBQUssR0FBRyxVQUFVekcsRUFBVixFQUFjO0FBQ3hCLFNBQU9BLEVBQUUsSUFBSUEsRUFBRSxDQUFDMEcsSUFBSCxJQUFXQSxJQUFqQixJQUF5QjFHLEVBQWhDO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBRixNQUFNLENBQUNDLE9BQVAsR0FDRTtBQUNBMEcsS0FBSyxDQUFDLE9BQU9FLFVBQVAsSUFBcUI3RixDQUFyQixJQUEwQjZGLFVBQTNCLENBQUwsSUFDQUYsS0FBSyxDQUFDLE9BQU9HLE1BQVAsSUFBaUI5RixDQUFqQixJQUFzQjhGLE1BQXZCLENBREwsSUFFQUgsS0FBSyxDQUFDLE9BQU9JLElBQVAsSUFBZS9GLENBQWYsSUFBb0IrRixJQUFyQixDQUZMLElBR0FKLEtBQUssQ0FBQyxPQUFPOUIsTUFBUCxJQUFpQjdELENBQWpCLElBQXNCNkQsTUFBdkIsQ0FITCxJQUlBO0FBQ0F1QixRQUFRLENBQUMsYUFBRCxDQUFSLEVBUEYsQzs7Ozs7Ozs7Ozs7O0FDTkEsSUFBSVksY0FBYyxHQUFHLEdBQUdBLGNBQXhCOztBQUVBaEgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBY3FELEdBQWQsRUFBbUI7QUFDbEMsU0FBT3lELGNBQWMsQ0FBQ3RGLElBQWYsQ0FBb0J4QixFQUFwQixFQUF3QnFELEdBQXhCLENBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDRkF2RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJZ0gsV0FBVyxHQUFHbkgsbUJBQU8sQ0FBQyxpRkFBRCxDQUF6Qjs7QUFDQSxJQUFJaUUsb0JBQW9CLEdBQUdqRSxtQkFBTyxDQUFDLHVHQUFELENBQWxDOztBQUNBLElBQUlvSCx3QkFBd0IsR0FBR3BILG1CQUFPLENBQUMsK0dBQUQsQ0FBdEM7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmdILFdBQVcsR0FBRyxVQUFVakUsTUFBVixFQUFrQk8sR0FBbEIsRUFBdUJwQyxLQUF2QixFQUE4QjtBQUMzRCxTQUFPNEMsb0JBQW9CLENBQUNLLENBQXJCLENBQXVCcEIsTUFBdkIsRUFBK0JPLEdBQS9CLEVBQW9DMkQsd0JBQXdCLENBQUMsQ0FBRCxFQUFJL0YsS0FBSixDQUE1RCxDQUFQO0FBQ0QsQ0FGMkIsR0FFeEIsVUFBVTZCLE1BQVYsRUFBa0JPLEdBQWxCLEVBQXVCcEMsS0FBdkIsRUFBOEI7QUFDaEM2QixRQUFNLENBQUNPLEdBQUQsQ0FBTixHQUFjcEMsS0FBZDtBQUNBLFNBQU82QixNQUFQO0FBQ0QsQ0FMRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUk2QixNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWQsQ0FBVixFQUFhd0MsQ0FBYixFQUFnQjtBQUMvQixNQUFJdkMsT0FBTyxHQUFHeUYsTUFBTSxDQUFDekYsT0FBckI7O0FBQ0EsTUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUM4QyxLQUF2QixFQUE4QjtBQUM1QkosYUFBUyxDQUFDYixNQUFWLEtBQXFCLENBQXJCLEdBQXlCN0IsT0FBTyxDQUFDOEMsS0FBUixDQUFjL0MsQ0FBZCxDQUF6QixHQUE0Q0MsT0FBTyxDQUFDOEMsS0FBUixDQUFjL0MsQ0FBZCxFQUFpQndDLENBQWpCLENBQTVDO0FBQ0Q7QUFDRixDQUxELEM7Ozs7Ozs7Ozs7O0FDRkEsSUFBSXdGLFVBQVUsR0FBR3JILG1CQUFPLENBQUMsbUZBQUQsQ0FBeEI7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtILFVBQVUsQ0FBQyxVQUFELEVBQWEsaUJBQWIsQ0FBM0IsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJRixXQUFXLEdBQUduSCxtQkFBTyxDQUFDLGlGQUFELENBQXpCOztBQUNBLElBQUk2RSxLQUFLLEdBQUc3RSxtQkFBTyxDQUFDLHFFQUFELENBQW5COztBQUNBLElBQUlrRixhQUFhLEdBQUdsRixtQkFBTyxDQUFDLHlHQUFELENBQTNCLEMsQ0FFQTs7O0FBQ0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDZ0gsV0FBRCxJQUFnQixDQUFDdEMsS0FBSyxDQUFDLFlBQVk7QUFDbEQsU0FBT2pCLE1BQU0sQ0FBQ1MsY0FBUCxDQUFzQmEsYUFBYSxDQUFDLEtBQUQsQ0FBbkMsRUFBNEMsR0FBNUMsRUFBaUQ7QUFDdERKLE9BQUcsRUFBRSxZQUFZO0FBQUUsYUFBTyxDQUFQO0FBQVc7QUFEd0IsR0FBakQsRUFFSnpGLENBRkksSUFFQyxDQUZSO0FBR0QsQ0FKc0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7QUNMQSxJQUFJd0YsS0FBSyxHQUFHN0UsbUJBQU8sQ0FBQyxxRUFBRCxDQUFuQjs7QUFDQSxJQUFJMkcsT0FBTyxHQUFHM0csbUJBQU8sQ0FBQyxpRkFBRCxDQUFyQjs7QUFFQSxJQUFJc0gsS0FBSyxHQUFHLEdBQUdBLEtBQWYsQyxDQUVBOztBQUNBcEgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMEUsS0FBSyxDQUFDLFlBQVk7QUFDakM7QUFDQTtBQUNBLFNBQU8sQ0FBQ2pCLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWTJELG9CQUFaLENBQWlDLENBQWpDLENBQVI7QUFDRCxDQUpxQixDQUFMLEdBSVosVUFBVW5ILEVBQVYsRUFBYztBQUNqQixTQUFPdUcsT0FBTyxDQUFDdkcsRUFBRCxDQUFQLElBQWUsUUFBZixHQUEwQmtILEtBQUssQ0FBQzFGLElBQU4sQ0FBV3hCLEVBQVgsRUFBZSxFQUFmLENBQTFCLEdBQStDd0QsTUFBTSxDQUFDeEQsRUFBRCxDQUE1RDtBQUNELENBTmdCLEdBTWJ3RCxNQU5KLEM7Ozs7Ozs7Ozs7O0FDTkEsSUFBSTRELGVBQWUsR0FBR3hILG1CQUFPLENBQUMseUZBQUQsQ0FBN0I7O0FBQ0EsSUFBSStFLE1BQU0sR0FBRy9FLG1CQUFPLENBQUMsdUVBQUQsQ0FBcEI7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLDZFQUFELENBQXRCOztBQUNBLElBQUltRixJQUFJLEdBQUduRixtQkFBTyxDQUFDLG1FQUFELENBQWxCOztBQUNBLElBQUl5SCxTQUFTLEdBQUd6SCxtQkFBTyxDQUFDLGlFQUFELENBQXZCOztBQUNBLElBQUkwSCxTQUFTLEdBQUcxSCxtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUNBLElBQUkySCxVQUFVLEdBQUczSCxtQkFBTyxDQUFDLGlGQUFELENBQXhCOztBQUVBLElBQUk0SCxPQUFPLEdBQUc3QyxNQUFNLENBQUM2QyxPQUFyQjtBQUNBLElBQUlDLEdBQUosRUFBUy9DLEdBQVQsRUFBY2hCLEdBQWQ7O0FBRUEsSUFBSWdFLE9BQU8sR0FBRyxVQUFVMUgsRUFBVixFQUFjO0FBQzFCLFNBQU8wRCxHQUFHLENBQUMxRCxFQUFELENBQUgsR0FBVTBFLEdBQUcsQ0FBQzFFLEVBQUQsQ0FBYixHQUFvQnlILEdBQUcsQ0FBQ3pILEVBQUQsRUFBSyxFQUFMLENBQTlCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJMkgsU0FBUyxHQUFHLFVBQVVDLElBQVYsRUFBZ0I7QUFDOUIsU0FBTyxVQUFVNUgsRUFBVixFQUFjO0FBQ25CLFFBQUk2SCxLQUFKOztBQUNBLFFBQUksQ0FBQ3hILFFBQVEsQ0FBQ0wsRUFBRCxDQUFULElBQWlCLENBQUM2SCxLQUFLLEdBQUduRCxHQUFHLENBQUMxRSxFQUFELENBQVosRUFBa0I4SCxJQUFsQixLQUEyQkYsSUFBaEQsRUFBc0Q7QUFDcEQsWUFBTTNILFNBQVMsQ0FBQyw0QkFBNEIySCxJQUE1QixHQUFtQyxXQUFwQyxDQUFmO0FBQ0Q7O0FBQUMsV0FBT0MsS0FBUDtBQUNILEdBTEQ7QUFNRCxDQVBEOztBQVNBLElBQUlULGVBQUosRUFBcUI7QUFDbkIsTUFBSVcsS0FBSyxHQUFHLElBQUlQLE9BQUosRUFBWjtBQUNBLE1BQUlRLEtBQUssR0FBR0QsS0FBSyxDQUFDckQsR0FBbEI7QUFDQSxNQUFJdUQsS0FBSyxHQUFHRixLQUFLLENBQUNyRSxHQUFsQjtBQUNBLE1BQUl3RSxLQUFLLEdBQUdILEtBQUssQ0FBQ04sR0FBbEI7O0FBQ0FBLEtBQUcsR0FBRyxVQUFVekgsRUFBVixFQUFjbUksUUFBZCxFQUF3QjtBQUM1QkQsU0FBSyxDQUFDMUcsSUFBTixDQUFXdUcsS0FBWCxFQUFrQi9ILEVBQWxCLEVBQXNCbUksUUFBdEI7QUFDQSxXQUFPQSxRQUFQO0FBQ0QsR0FIRDs7QUFJQXpELEtBQUcsR0FBRyxVQUFVMUUsRUFBVixFQUFjO0FBQ2xCLFdBQU9nSSxLQUFLLENBQUN4RyxJQUFOLENBQVd1RyxLQUFYLEVBQWtCL0gsRUFBbEIsS0FBeUIsRUFBaEM7QUFDRCxHQUZEOztBQUdBMEQsS0FBRyxHQUFHLFVBQVUxRCxFQUFWLEVBQWM7QUFDbEIsV0FBT2lJLEtBQUssQ0FBQ3pHLElBQU4sQ0FBV3VHLEtBQVgsRUFBa0IvSCxFQUFsQixDQUFQO0FBQ0QsR0FGRDtBQUdELENBZkQsTUFlTztBQUNMLE1BQUlvSSxLQUFLLEdBQUdkLFNBQVMsQ0FBQyxPQUFELENBQXJCO0FBQ0FDLFlBQVUsQ0FBQ2EsS0FBRCxDQUFWLEdBQW9CLElBQXBCOztBQUNBWCxLQUFHLEdBQUcsVUFBVXpILEVBQVYsRUFBY21JLFFBQWQsRUFBd0I7QUFDNUJwRCxRQUFJLENBQUMvRSxFQUFELEVBQUtvSSxLQUFMLEVBQVlELFFBQVosQ0FBSjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQUhEOztBQUlBekQsS0FBRyxHQUFHLFVBQVUxRSxFQUFWLEVBQWM7QUFDbEIsV0FBT3FILFNBQVMsQ0FBQ3JILEVBQUQsRUFBS29JLEtBQUwsQ0FBVCxHQUF1QnBJLEVBQUUsQ0FBQ29JLEtBQUQsQ0FBekIsR0FBbUMsRUFBMUM7QUFDRCxHQUZEOztBQUdBMUUsS0FBRyxHQUFHLFVBQVUxRCxFQUFWLEVBQWM7QUFDbEIsV0FBT3FILFNBQVMsQ0FBQ3JILEVBQUQsRUFBS29JLEtBQUwsQ0FBaEI7QUFDRCxHQUZEO0FBR0Q7O0FBRUR0SSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjBILEtBQUcsRUFBRUEsR0FEVTtBQUVmL0MsS0FBRyxFQUFFQSxHQUZVO0FBR2ZoQixLQUFHLEVBQUVBLEdBSFU7QUFJZmdFLFNBQU8sRUFBRUEsT0FKTTtBQUtmQyxXQUFTLEVBQUVBO0FBTEksQ0FBakIsQzs7Ozs7Ozs7Ozs7QUN0REEsSUFBSXpGLGVBQWUsR0FBR3RDLG1CQUFPLENBQUMsNkZBQUQsQ0FBN0I7O0FBQ0EsSUFBSTRHLFNBQVMsR0FBRzVHLG1CQUFPLENBQUMsNkVBQUQsQ0FBdkI7O0FBRUEsSUFBSXVDLFFBQVEsR0FBR0QsZUFBZSxDQUFDLFVBQUQsQ0FBOUI7QUFDQSxJQUFJbUcsY0FBYyxHQUFHNUYsS0FBSyxDQUFDb0QsU0FBM0IsQyxDQUVBOztBQUNBL0YsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPQSxFQUFFLEtBQUt1QixTQUFQLEtBQXFCaUYsU0FBUyxDQUFDL0QsS0FBVixLQUFvQnpDLEVBQXBCLElBQTBCcUksY0FBYyxDQUFDbEcsUUFBRCxDQUFkLEtBQTZCbkMsRUFBNUUsQ0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNQQSxJQUFJeUUsS0FBSyxHQUFHN0UsbUJBQU8sQ0FBQyxxRUFBRCxDQUFuQjs7QUFFQSxJQUFJMEksV0FBVyxHQUFHLGlCQUFsQjs7QUFFQSxJQUFJbkQsUUFBUSxHQUFHLFVBQVVvRCxPQUFWLEVBQW1CQyxTQUFuQixFQUE4QjtBQUMzQyxNQUFJdkgsS0FBSyxHQUFHd0gsSUFBSSxDQUFDQyxTQUFTLENBQUNILE9BQUQsQ0FBVixDQUFoQjtBQUNBLFNBQU90SCxLQUFLLElBQUkwSCxRQUFULEdBQW9CLElBQXBCLEdBQ0gxSCxLQUFLLElBQUkySCxNQUFULEdBQWtCLEtBQWxCLEdBQ0EsT0FBT0osU0FBUCxJQUFvQixVQUFwQixHQUFpQy9ELEtBQUssQ0FBQytELFNBQUQsQ0FBdEMsR0FDQSxDQUFDLENBQUNBLFNBSE47QUFJRCxDQU5EOztBQVFBLElBQUlFLFNBQVMsR0FBR3ZELFFBQVEsQ0FBQ3VELFNBQVQsR0FBcUIsVUFBVUcsTUFBVixFQUFrQjtBQUNyRCxTQUFPM0ksTUFBTSxDQUFDMkksTUFBRCxDQUFOLENBQWVDLE9BQWYsQ0FBdUJSLFdBQXZCLEVBQW9DLEdBQXBDLEVBQXlDUyxXQUF6QyxFQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJTixJQUFJLEdBQUd0RCxRQUFRLENBQUNzRCxJQUFULEdBQWdCLEVBQTNCO0FBQ0EsSUFBSUcsTUFBTSxHQUFHekQsUUFBUSxDQUFDeUQsTUFBVCxHQUFrQixHQUEvQjtBQUNBLElBQUlELFFBQVEsR0FBR3hELFFBQVEsQ0FBQ3dELFFBQVQsR0FBb0IsR0FBbkM7QUFFQTdJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm9GLFFBQWpCLEM7Ozs7Ozs7Ozs7O0FDcEJBckYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEVBQVYsRUFBYztBQUM3QixTQUFPLE9BQU9BLEVBQVAsS0FBYyxRQUFkLEdBQXlCQSxFQUFFLEtBQUssSUFBaEMsR0FBdUMsT0FBT0EsRUFBUCxLQUFjLFVBQTVEO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0FBRixNQUFNLENBQUNDLE9BQVAsR0FBaUIsS0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJOEIsUUFBUSxHQUFHakMsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0Qjs7QUFDQSxJQUFJb0oscUJBQXFCLEdBQUdwSixtQkFBTyxDQUFDLDJHQUFELENBQW5DOztBQUNBLElBQUlXLFFBQVEsR0FBR1gsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0Qjs7QUFDQSxJQUFJcUosSUFBSSxHQUFHckosbUJBQU8sQ0FBQyxtRkFBRCxDQUFsQjs7QUFDQSxJQUFJc0osaUJBQWlCLEdBQUd0SixtQkFBTyxDQUFDLGlHQUFELENBQS9COztBQUNBLElBQUl1Siw0QkFBNEIsR0FBR3ZKLG1CQUFPLENBQUMsMkhBQUQsQ0FBMUM7O0FBRUEsSUFBSXdKLE1BQU0sR0FBRyxVQUFVQyxPQUFWLEVBQW1COUYsTUFBbkIsRUFBMkI7QUFDdEMsT0FBSzhGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUs5RixNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQUhEOztBQUtBLElBQUkrRixPQUFPLEdBQUd4SixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXdKLFFBQVYsRUFBb0JsSSxFQUFwQixFQUF3QkMsSUFBeEIsRUFBOEJrSSxVQUE5QixFQUEwQ0MsV0FBMUMsRUFBdUQ7QUFDcEYsTUFBSUMsYUFBYSxHQUFHVCxJQUFJLENBQUM1SCxFQUFELEVBQUtDLElBQUwsRUFBV2tJLFVBQVUsR0FBRyxDQUFILEdBQU8sQ0FBNUIsQ0FBeEI7QUFDQSxNQUFJMUgsUUFBSixFQUFjNkgsTUFBZCxFQUFzQjNJLEtBQXRCLEVBQTZCRCxNQUE3QixFQUFxQ3dDLE1BQXJDLEVBQTZDcUcsSUFBN0M7O0FBRUEsTUFBSUgsV0FBSixFQUFpQjtBQUNmM0gsWUFBUSxHQUFHeUgsUUFBWDtBQUNELEdBRkQsTUFFTztBQUNMSSxVQUFNLEdBQUdULGlCQUFpQixDQUFDSyxRQUFELENBQTFCO0FBQ0EsUUFBSSxPQUFPSSxNQUFQLElBQWlCLFVBQXJCLEVBQWlDLE1BQU0xSixTQUFTLENBQUMsd0JBQUQsQ0FBZixDQUY1QixDQUdMOztBQUNBLFFBQUkrSSxxQkFBcUIsQ0FBQ1csTUFBRCxDQUF6QixFQUFtQztBQUNqQyxXQUFLM0ksS0FBSyxHQUFHLENBQVIsRUFBV0QsTUFBTSxHQUFHUixRQUFRLENBQUNnSixRQUFRLENBQUN4SSxNQUFWLENBQWpDLEVBQW9EQSxNQUFNLEdBQUdDLEtBQTdELEVBQW9FQSxLQUFLLEVBQXpFLEVBQTZFO0FBQzNFdUMsY0FBTSxHQUFHaUcsVUFBVSxHQUNmRSxhQUFhLENBQUM3SCxRQUFRLENBQUMrSCxJQUFJLEdBQUdMLFFBQVEsQ0FBQ3ZJLEtBQUQsQ0FBaEIsQ0FBUixDQUFpQyxDQUFqQyxDQUFELEVBQXNDNEksSUFBSSxDQUFDLENBQUQsQ0FBMUMsQ0FERSxHQUVmRixhQUFhLENBQUNILFFBQVEsQ0FBQ3ZJLEtBQUQsQ0FBVCxDQUZqQjtBQUdBLFlBQUl1QyxNQUFNLElBQUlBLE1BQU0sWUFBWTZGLE1BQWhDLEVBQXdDLE9BQU83RixNQUFQO0FBQ3pDOztBQUFDLGFBQU8sSUFBSTZGLE1BQUosQ0FBVyxLQUFYLENBQVA7QUFDSDs7QUFDRHRILFlBQVEsR0FBRzZILE1BQU0sQ0FBQ25JLElBQVAsQ0FBWStILFFBQVosQ0FBWDtBQUNEOztBQUVELFNBQU8sQ0FBQyxDQUFDSyxJQUFJLEdBQUc5SCxRQUFRLENBQUNTLElBQVQsRUFBUixFQUF5QkMsSUFBakMsRUFBdUM7QUFDckNlLFVBQU0sR0FBRzRGLDRCQUE0QixDQUFDckgsUUFBRCxFQUFXNEgsYUFBWCxFQUEwQkUsSUFBSSxDQUFDM0ksS0FBL0IsRUFBc0N1SSxVQUF0QyxDQUFyQztBQUNBLFFBQUlqRyxNQUFNLElBQUlBLE1BQU0sWUFBWTZGLE1BQWhDLEVBQXdDLE9BQU83RixNQUFQO0FBQ3pDOztBQUFDLFNBQU8sSUFBSTZGLE1BQUosQ0FBVyxLQUFYLENBQVA7QUFDSCxDQXpCRDs7QUEyQkFFLE9BQU8sQ0FBQ08sSUFBUixHQUFlLFVBQVV0RyxNQUFWLEVBQWtCO0FBQy9CLFNBQU8sSUFBSTZGLE1BQUosQ0FBVyxJQUFYLEVBQWlCN0YsTUFBakIsQ0FBUDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUN2Q0F6RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJNEUsTUFBTSxHQUFHL0UsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFDQSxJQUFJdUUsd0JBQXdCLEdBQUd2RSxtQkFBTyxDQUFDLCtIQUFELENBQVAsQ0FBMkRzRSxDQUExRjs7QUFDQSxJQUFJcUMsT0FBTyxHQUFHM0csbUJBQU8sQ0FBQyxpRkFBRCxDQUFyQjs7QUFDQSxJQUFJa0ssU0FBUyxHQUFHbEssbUJBQU8sQ0FBQyxtRUFBRCxDQUFQLENBQTZCNkgsR0FBN0M7O0FBQ0EsSUFBSXNDLFNBQVMsR0FBR25LLG1CQUFPLENBQUMsK0VBQUQsQ0FBdkI7O0FBRUEsSUFBSW9LLGdCQUFnQixHQUFHckYsTUFBTSxDQUFDcUYsZ0JBQVAsSUFBMkJyRixNQUFNLENBQUNzRixzQkFBekQ7QUFDQSxJQUFJQyxPQUFPLEdBQUd2RixNQUFNLENBQUN1RixPQUFyQjtBQUNBLElBQUk1SyxPQUFPLEdBQUdxRixNQUFNLENBQUNyRixPQUFyQjtBQUNBLElBQUk2SyxPQUFPLEdBQUc1RCxPQUFPLENBQUMyRCxPQUFELENBQVAsSUFBb0IsU0FBbEMsQyxDQUNBOztBQUNBLElBQUlFLHdCQUF3QixHQUFHakcsd0JBQXdCLENBQUNRLE1BQUQsRUFBUyxnQkFBVCxDQUF2RDtBQUNBLElBQUkwRixjQUFjLEdBQUdELHdCQUF3QixJQUFJQSx3QkFBd0IsQ0FBQ25KLEtBQTFFO0FBRUEsSUFBSXFKLEtBQUosRUFBV0MsSUFBWCxFQUFpQkMsSUFBakIsRUFBdUJDLE1BQXZCLEVBQStCQyxNQUEvQixFQUF1Q0MsSUFBdkMsRUFBNkNDLE9BQTdDLEVBQXNEbEwsSUFBdEQsQyxDQUVBOztBQUNBLElBQUksQ0FBQzJLLGNBQUwsRUFBcUI7QUFDbkJDLE9BQUssR0FBRyxZQUFZO0FBQ2xCLFFBQUlPLE1BQUosRUFBWXhKLEVBQVo7QUFDQSxRQUFJOEksT0FBTyxLQUFLVSxNQUFNLEdBQUdYLE9BQU8sQ0FBQ1ksTUFBdEIsQ0FBWCxFQUEwQ0QsTUFBTSxDQUFDRSxJQUFQOztBQUMxQyxXQUFPUixJQUFQLEVBQWE7QUFDWGxKLFFBQUUsR0FBR2tKLElBQUksQ0FBQ2xKLEVBQVY7QUFDQWtKLFVBQUksR0FBR0EsSUFBSSxDQUFDaEksSUFBWjs7QUFDQSxVQUFJO0FBQ0ZsQixVQUFFO0FBQ0gsT0FGRCxDQUVFLE9BQU9XLEtBQVAsRUFBYztBQUNkLFlBQUl1SSxJQUFKLEVBQVVFLE1BQU0sR0FBaEIsS0FDS0QsSUFBSSxHQUFHakosU0FBUDtBQUNMLGNBQU1TLEtBQU47QUFDRDtBQUNGOztBQUFDd0ksUUFBSSxHQUFHakosU0FBUDtBQUNGLFFBQUlzSixNQUFKLEVBQVlBLE1BQU0sQ0FBQ0csS0FBUDtBQUNiLEdBZkQsQ0FEbUIsQ0FrQm5COzs7QUFDQSxNQUFJYixPQUFKLEVBQWE7QUFDWE0sVUFBTSxHQUFHLFlBQVk7QUFDbkJQLGFBQU8sQ0FBQ2UsUUFBUixDQUFpQlgsS0FBakI7QUFDRCxLQUZELENBRFcsQ0FJYjs7QUFDQyxHQUxELE1BS08sSUFBSU4sZ0JBQWdCLElBQUksQ0FBQyxtQ0FBbUNrQixJQUFuQyxDQUF3Q25CLFNBQXhDLENBQXpCLEVBQTZFO0FBQ2xGVyxVQUFNLEdBQUcsSUFBVDtBQUNBQyxRQUFJLEdBQUcvRixRQUFRLENBQUN1RyxjQUFULENBQXdCLEVBQXhCLENBQVA7QUFDQSxRQUFJbkIsZ0JBQUosQ0FBcUJNLEtBQXJCLEVBQTRCYyxPQUE1QixDQUFvQ1QsSUFBcEMsRUFBMEM7QUFBRVUsbUJBQWEsRUFBRTtBQUFqQixLQUExQyxFQUhrRixDQUdkOztBQUNwRVosVUFBTSxHQUFHLFlBQVk7QUFDbkJFLFVBQUksQ0FBQ2xDLElBQUwsR0FBWWlDLE1BQU0sR0FBRyxDQUFDQSxNQUF0QjtBQUNELEtBRkQsQ0FKa0YsQ0FPcEY7O0FBQ0MsR0FSTSxNQVFBLElBQUlwTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsT0FBdkIsRUFBZ0M7QUFDckM7QUFDQXFMLFdBQU8sR0FBR3RMLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmdDLFNBQWhCLENBQVY7QUFDQTdCLFFBQUksR0FBR2tMLE9BQU8sQ0FBQ2xMLElBQWY7O0FBQ0ErSyxVQUFNLEdBQUcsWUFBWTtBQUNuQi9LLFVBQUksQ0FBQzhCLElBQUwsQ0FBVW9KLE9BQVYsRUFBbUJOLEtBQW5CO0FBQ0QsS0FGRCxDQUpxQyxDQU92QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsR0FiTSxNQWFBO0FBQ0xHLFVBQU0sR0FBRyxZQUFZO0FBQ25CO0FBQ0FYLGVBQVMsQ0FBQ3RJLElBQVYsQ0FBZW1ELE1BQWYsRUFBdUIyRixLQUF2QjtBQUNELEtBSEQ7QUFJRDtBQUNGOztBQUVEeEssTUFBTSxDQUFDQyxPQUFQLEdBQWlCc0ssY0FBYyxJQUFJLFVBQVVoSixFQUFWLEVBQWM7QUFDL0MsTUFBSWlLLElBQUksR0FBRztBQUFFakssTUFBRSxFQUFFQSxFQUFOO0FBQVVrQixRQUFJLEVBQUVoQjtBQUFoQixHQUFYO0FBQ0EsTUFBSWlKLElBQUosRUFBVUEsSUFBSSxDQUFDakksSUFBTCxHQUFZK0ksSUFBWjs7QUFDVixNQUFJLENBQUNmLElBQUwsRUFBVztBQUNUQSxRQUFJLEdBQUdlLElBQVA7QUFDQWIsVUFBTTtBQUNQOztBQUFDRCxNQUFJLEdBQUdjLElBQVA7QUFDSCxDQVBELEM7Ozs7Ozs7Ozs7O0FDdEVBLElBQUkzRyxNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI0RSxNQUFNLENBQUNyRixPQUF4QixDOzs7Ozs7Ozs7OztBQ0ZBLElBQUltRixLQUFLLEdBQUc3RSxtQkFBTyxDQUFDLHFFQUFELENBQW5COztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDK0gscUJBQVQsSUFBa0MsQ0FBQzlHLEtBQUssQ0FBQyxZQUFZO0FBQ3BFO0FBQ0E7QUFDQSxTQUFPLENBQUN2RSxNQUFNLENBQUNzTCxNQUFNLEVBQVAsQ0FBZDtBQUNELENBSndELENBQXpELEM7Ozs7Ozs7Ozs7O0FDRkEsSUFBSTdHLE1BQU0sR0FBRy9FLG1CQUFPLENBQUMsdUVBQUQsQ0FBcEI7O0FBQ0EsSUFBSTZMLHNCQUFzQixHQUFHN0wsbUJBQU8sQ0FBQywrRkFBRCxDQUFwQzs7QUFFQSxJQUFJNEgsT0FBTyxHQUFHN0MsTUFBTSxDQUFDNkMsT0FBckI7QUFFQTFILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixPQUFPeUgsT0FBUCxLQUFtQixVQUFuQixJQUFpQyxjQUFjMEQsSUFBZCxDQUFtQk8sc0JBQXNCLENBQUNqSyxJQUF2QixDQUE0QmdHLE9BQTVCLENBQW5CLENBQWxELEM7Ozs7Ozs7Ozs7OztBQ0xhOztBQUNiLElBQUlwRyxTQUFTLEdBQUd4QixtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUVBLElBQUk4TCxpQkFBaUIsR0FBRyxVQUFVQyxDQUFWLEVBQWE7QUFDbkMsTUFBSXBNLE9BQUosRUFBYUMsTUFBYjtBQUNBLE9BQUtvTCxPQUFMLEdBQWUsSUFBSWUsQ0FBSixDQUFNLFVBQVVDLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCO0FBQ2xELFFBQUl0TSxPQUFPLEtBQUtnQyxTQUFaLElBQXlCL0IsTUFBTSxLQUFLK0IsU0FBeEMsRUFBbUQsTUFBTXRCLFNBQVMsQ0FBQyx5QkFBRCxDQUFmO0FBQ25EVixXQUFPLEdBQUdxTSxTQUFWO0FBQ0FwTSxVQUFNLEdBQUdxTSxRQUFUO0FBQ0QsR0FKYyxDQUFmO0FBS0EsT0FBS3RNLE9BQUwsR0FBZTZCLFNBQVMsQ0FBQzdCLE9BQUQsQ0FBeEI7QUFDQSxPQUFLQyxNQUFMLEdBQWM0QixTQUFTLENBQUM1QixNQUFELENBQXZCO0FBQ0QsQ0FURCxDLENBV0E7OztBQUNBTSxNQUFNLENBQUNDLE9BQVAsQ0FBZW1FLENBQWYsR0FBbUIsVUFBVXlILENBQVYsRUFBYTtBQUM5QixTQUFPLElBQUlELGlCQUFKLENBQXNCQyxDQUF0QixDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ2ZBLElBQUk1RSxXQUFXLEdBQUduSCxtQkFBTyxDQUFDLGlGQUFELENBQXpCOztBQUNBLElBQUlrTSxjQUFjLEdBQUdsTSxtQkFBTyxDQUFDLHVGQUFELENBQTVCOztBQUNBLElBQUlpQyxRQUFRLEdBQUdqQyxtQkFBTyxDQUFDLDZFQUFELENBQXRCOztBQUNBLElBQUltTSxXQUFXLEdBQUduTSxtQkFBTyxDQUFDLG1GQUFELENBQXpCOztBQUVBLElBQUlvTSxvQkFBb0IsR0FBR3hJLE1BQU0sQ0FBQ1MsY0FBbEMsQyxDQUVBO0FBQ0E7O0FBQ0FsRSxPQUFPLENBQUNtRSxDQUFSLEdBQVk2QyxXQUFXLEdBQUdpRixvQkFBSCxHQUEwQixTQUFTL0gsY0FBVCxDQUF3Qm5ELENBQXhCLEVBQTJCbUwsQ0FBM0IsRUFBOEJDLFVBQTlCLEVBQTBDO0FBQ3pGckssVUFBUSxDQUFDZixDQUFELENBQVI7QUFDQW1MLEdBQUMsR0FBR0YsV0FBVyxDQUFDRSxDQUFELEVBQUksSUFBSixDQUFmO0FBQ0FwSyxVQUFRLENBQUNxSyxVQUFELENBQVI7QUFDQSxNQUFJSixjQUFKLEVBQW9CLElBQUk7QUFDdEIsV0FBT0Usb0JBQW9CLENBQUNsTCxDQUFELEVBQUltTCxDQUFKLEVBQU9DLFVBQVAsQ0FBM0I7QUFDRCxHQUZtQixDQUVsQixPQUFPbEssS0FBUCxFQUFjO0FBQUU7QUFBYTtBQUMvQixNQUFJLFNBQVNrSyxVQUFULElBQXVCLFNBQVNBLFVBQXBDLEVBQWdELE1BQU1qTSxTQUFTLENBQUMseUJBQUQsQ0FBZjtBQUNoRCxNQUFJLFdBQVdpTSxVQUFmLEVBQTJCcEwsQ0FBQyxDQUFDbUwsQ0FBRCxDQUFELEdBQU9DLFVBQVUsQ0FBQ2pMLEtBQWxCO0FBQzNCLFNBQU9ILENBQVA7QUFDRCxDQVZELEM7Ozs7Ozs7Ozs7O0FDVEEsSUFBSWlHLFdBQVcsR0FBR25ILG1CQUFPLENBQUMsaUZBQUQsQ0FBekI7O0FBQ0EsSUFBSXVNLDBCQUEwQixHQUFHdk0sbUJBQU8sQ0FBQyxxSEFBRCxDQUF4Qzs7QUFDQSxJQUFJb0gsd0JBQXdCLEdBQUdwSCxtQkFBTyxDQUFDLCtHQUFELENBQXRDOztBQUNBLElBQUlVLGVBQWUsR0FBR1YsbUJBQU8sQ0FBQyw2RkFBRCxDQUE3Qjs7QUFDQSxJQUFJbU0sV0FBVyxHQUFHbk0sbUJBQU8sQ0FBQyxtRkFBRCxDQUF6Qjs7QUFDQSxJQUFJOEQsR0FBRyxHQUFHOUQsbUJBQU8sQ0FBQyxpRUFBRCxDQUFqQjs7QUFDQSxJQUFJa00sY0FBYyxHQUFHbE0sbUJBQU8sQ0FBQyx1RkFBRCxDQUE1Qjs7QUFFQSxJQUFJd00sOEJBQThCLEdBQUc1SSxNQUFNLENBQUNXLHdCQUE1QyxDLENBRUE7QUFDQTs7QUFDQXBFLE9BQU8sQ0FBQ21FLENBQVIsR0FBWTZDLFdBQVcsR0FBR3FGLDhCQUFILEdBQW9DLFNBQVNqSSx3QkFBVCxDQUFrQ3JELENBQWxDLEVBQXFDbUwsQ0FBckMsRUFBd0M7QUFDakduTCxHQUFDLEdBQUdSLGVBQWUsQ0FBQ1EsQ0FBRCxDQUFuQjtBQUNBbUwsR0FBQyxHQUFHRixXQUFXLENBQUNFLENBQUQsRUFBSSxJQUFKLENBQWY7QUFDQSxNQUFJSCxjQUFKLEVBQW9CLElBQUk7QUFDdEIsV0FBT00sOEJBQThCLENBQUN0TCxDQUFELEVBQUltTCxDQUFKLENBQXJDO0FBQ0QsR0FGbUIsQ0FFbEIsT0FBT2pLLEtBQVAsRUFBYztBQUFFO0FBQWE7QUFDL0IsTUFBSTBCLEdBQUcsQ0FBQzVDLENBQUQsRUFBSW1MLENBQUosQ0FBUCxFQUFlLE9BQU9qRix3QkFBd0IsQ0FBQyxDQUFDbUYsMEJBQTBCLENBQUNqSSxDQUEzQixDQUE2QjFDLElBQTdCLENBQWtDVixDQUFsQyxFQUFxQ21MLENBQXJDLENBQUYsRUFBMkNuTCxDQUFDLENBQUNtTCxDQUFELENBQTVDLENBQS9CO0FBQ2hCLENBUEQsQzs7Ozs7Ozs7Ozs7QUNaQSxJQUFJSSxrQkFBa0IsR0FBR3pNLG1CQUFPLENBQUMsbUdBQUQsQ0FBaEM7O0FBQ0EsSUFBSTBNLFdBQVcsR0FBRzFNLG1CQUFPLENBQUMscUZBQUQsQ0FBekI7O0FBRUEsSUFBSTJILFVBQVUsR0FBRytFLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQixRQUFuQixFQUE2QixXQUE3QixDQUFqQixDLENBRUE7QUFDQTs7QUFDQXhNLE9BQU8sQ0FBQ21FLENBQVIsR0FBWVYsTUFBTSxDQUFDZ0osbUJBQVAsSUFBOEIsU0FBU0EsbUJBQVQsQ0FBNkIxTCxDQUE3QixFQUFnQztBQUN4RSxTQUFPdUwsa0JBQWtCLENBQUN2TCxDQUFELEVBQUl5RyxVQUFKLENBQXpCO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ1BBeEgsT0FBTyxDQUFDbUUsQ0FBUixHQUFZVixNQUFNLENBQUMrSCxxQkFBbkIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJN0gsR0FBRyxHQUFHOUQsbUJBQU8sQ0FBQyxpRUFBRCxDQUFqQjs7QUFDQSxJQUFJVSxlQUFlLEdBQUdWLG1CQUFPLENBQUMsNkZBQUQsQ0FBN0I7O0FBQ0EsSUFBSXVCLE9BQU8sR0FBR3ZCLG1CQUFPLENBQUMsdUZBQUQsQ0FBUCxDQUF1Q3VCLE9BQXJEOztBQUNBLElBQUlvRyxVQUFVLEdBQUczSCxtQkFBTyxDQUFDLGlGQUFELENBQXhCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVStDLE1BQVYsRUFBa0IySixLQUFsQixFQUF5QjtBQUN4QyxNQUFJM0wsQ0FBQyxHQUFHUixlQUFlLENBQUN3QyxNQUFELENBQXZCO0FBQ0EsTUFBSXNCLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSWIsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFKOztBQUNBLE9BQUtBLEdBQUwsSUFBWXZDLENBQVosRUFBZSxDQUFDNEMsR0FBRyxDQUFDNkQsVUFBRCxFQUFhbEUsR0FBYixDQUFKLElBQXlCSyxHQUFHLENBQUM1QyxDQUFELEVBQUl1QyxHQUFKLENBQTVCLElBQXdDRSxNQUFNLENBQUNtSixJQUFQLENBQVlySixHQUFaLENBQXhDLENBTHlCLENBTXhDOzs7QUFDQSxTQUFPb0osS0FBSyxDQUFDMUwsTUFBTixHQUFlcUQsQ0FBdEIsRUFBeUIsSUFBSVYsR0FBRyxDQUFDNUMsQ0FBRCxFQUFJdUMsR0FBRyxHQUFHb0osS0FBSyxDQUFDckksQ0FBQyxFQUFGLENBQWYsQ0FBUCxFQUE4QjtBQUNyRCxLQUFDakQsT0FBTyxDQUFDb0MsTUFBRCxFQUFTRixHQUFULENBQVIsSUFBeUJFLE1BQU0sQ0FBQ21KLElBQVAsQ0FBWXJKLEdBQVosQ0FBekI7QUFDRDs7QUFDRCxTQUFPRSxNQUFQO0FBQ0QsQ0FYRCxDOzs7Ozs7Ozs7Ozs7QUNMYTs7QUFDYixJQUFJb0osMEJBQTBCLEdBQUcsR0FBR3hGLG9CQUFwQztBQUNBLElBQUloRCx3QkFBd0IsR0FBR1gsTUFBTSxDQUFDVyx3QkFBdEMsQyxDQUVBOztBQUNBLElBQUl5SSxXQUFXLEdBQUd6SSx3QkFBd0IsSUFBSSxDQUFDd0ksMEJBQTBCLENBQUNuTCxJQUEzQixDQUFnQztBQUFFLEtBQUc7QUFBTCxDQUFoQyxFQUEwQyxDQUExQyxDQUEvQyxDLENBRUE7QUFDQTs7QUFDQXpCLE9BQU8sQ0FBQ21FLENBQVIsR0FBWTBJLFdBQVcsR0FBRyxTQUFTekYsb0JBQVQsQ0FBOEIwRixDQUE5QixFQUFpQztBQUN6RCxNQUFJakgsVUFBVSxHQUFHekIsd0JBQXdCLENBQUMsSUFBRCxFQUFPMEksQ0FBUCxDQUF6QztBQUNBLFNBQU8sQ0FBQyxDQUFDakgsVUFBRixJQUFnQkEsVUFBVSxDQUFDdEIsVUFBbEM7QUFDRCxDQUhzQixHQUduQnFJLDBCQUhKLEM7Ozs7Ozs7Ozs7OztBQ1RhOztBQUNiLElBQUlwRyxPQUFPLEdBQUczRyxtQkFBTyxDQUFDLHlFQUFELENBQXJCOztBQUNBLElBQUlzQyxlQUFlLEdBQUd0QyxtQkFBTyxDQUFDLDZGQUFELENBQTdCOztBQUVBLElBQUlzRCxhQUFhLEdBQUdoQixlQUFlLENBQUMsYUFBRCxDQUFuQztBQUNBLElBQUlnSixJQUFJLEdBQUcsRUFBWDtBQUVBQSxJQUFJLENBQUNoSSxhQUFELENBQUosR0FBc0IsR0FBdEIsQyxDQUVBO0FBQ0E7O0FBQ0FwRCxNQUFNLENBQUNDLE9BQVAsR0FBaUJHLE1BQU0sQ0FBQ2dMLElBQUQsQ0FBTixLQUFpQixZQUFqQixHQUFnQyxTQUFTbkksUUFBVCxHQUFvQjtBQUNuRSxTQUFPLGFBQWF3RCxPQUFPLENBQUMsSUFBRCxDQUFwQixHQUE2QixHQUFwQztBQUNELENBRmdCLEdBRWIyRSxJQUFJLENBQUNuSSxRQUZULEM7Ozs7Ozs7Ozs7O0FDWEEsSUFBSWtFLFVBQVUsR0FBR3JILG1CQUFPLENBQUMsbUZBQUQsQ0FBeEI7O0FBQ0EsSUFBSWtOLHlCQUF5QixHQUFHbE4sbUJBQU8sQ0FBQyxxSEFBRCxDQUF2Qzs7QUFDQSxJQUFJbU4sMkJBQTJCLEdBQUduTixtQkFBTyxDQUFDLHlIQUFELENBQXpDOztBQUNBLElBQUlpQyxRQUFRLEdBQUdqQyxtQkFBTyxDQUFDLDZFQUFELENBQXRCLEMsQ0FFQTs7O0FBQ0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtILFVBQVUsQ0FBQyxTQUFELEVBQVksU0FBWixDQUFWLElBQW9DLFNBQVN0RCxPQUFULENBQWlCM0QsRUFBakIsRUFBcUI7QUFDeEUsTUFBSWdFLElBQUksR0FBRzhJLHlCQUF5QixDQUFDNUksQ0FBMUIsQ0FBNEJyQyxRQUFRLENBQUM3QixFQUFELENBQXBDLENBQVg7QUFDQSxNQUFJdUwscUJBQXFCLEdBQUd3QiwyQkFBMkIsQ0FBQzdJLENBQXhEO0FBQ0EsU0FBT3FILHFCQUFxQixHQUFHdkgsSUFBSSxDQUFDdUksTUFBTCxDQUFZaEIscUJBQXFCLENBQUN2TCxFQUFELENBQWpDLENBQUgsR0FBNENnRSxJQUF4RTtBQUNELENBSkQsQzs7Ozs7Ozs7Ozs7QUNOQWxFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsbUJBQU8sQ0FBQyx1RUFBRCxDQUF4QixDOzs7Ozs7Ozs7OztBQ0FBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVTRDLElBQVYsRUFBZ0I7QUFDL0IsTUFBSTtBQUNGLFdBQU87QUFBRVgsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JmLFdBQUssRUFBRTBCLElBQUk7QUFBM0IsS0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPWCxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQUVBLFdBQUssRUFBRSxJQUFUO0FBQWVmLFdBQUssRUFBRWU7QUFBdEIsS0FBUDtBQUNEO0FBQ0YsQ0FORCxDOzs7Ozs7Ozs7OztBQ0FBLElBQUlILFFBQVEsR0FBR2pDLG1CQUFPLENBQUMsNkVBQUQsQ0FBdEI7O0FBQ0EsSUFBSVMsUUFBUSxHQUFHVCxtQkFBTyxDQUFDLDZFQUFELENBQXRCOztBQUNBLElBQUlvTixvQkFBb0IsR0FBR3BOLG1CQUFPLENBQUMsdUdBQUQsQ0FBbEM7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNEwsQ0FBVixFQUFhdk0sQ0FBYixFQUFnQjtBQUMvQnlDLFVBQVEsQ0FBQzhKLENBQUQsQ0FBUjtBQUNBLE1BQUl0TCxRQUFRLENBQUNqQixDQUFELENBQVIsSUFBZUEsQ0FBQyxDQUFDNk4sV0FBRixLQUFrQnRCLENBQXJDLEVBQXdDLE9BQU92TSxDQUFQO0FBQ3hDLE1BQUk4TixpQkFBaUIsR0FBR0Ysb0JBQW9CLENBQUM5SSxDQUFyQixDQUF1QnlILENBQXZCLENBQXhCO0FBQ0EsTUFBSXBNLE9BQU8sR0FBRzJOLGlCQUFpQixDQUFDM04sT0FBaEM7QUFDQUEsU0FBTyxDQUFDSCxDQUFELENBQVA7QUFDQSxTQUFPOE4saUJBQWlCLENBQUN0QyxPQUF6QjtBQUNELENBUEQsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJNUYsUUFBUSxHQUFHcEYsbUJBQU8sQ0FBQywyRUFBRCxDQUF0Qjs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVUrRCxNQUFWLEVBQWtCcUosR0FBbEIsRUFBdUIvSCxPQUF2QixFQUFnQztBQUMvQyxPQUFLLElBQUkvQixHQUFULElBQWdCOEosR0FBaEIsRUFBcUJuSSxRQUFRLENBQUNsQixNQUFELEVBQVNULEdBQVQsRUFBYzhKLEdBQUcsQ0FBQzlKLEdBQUQsQ0FBakIsRUFBd0IrQixPQUF4QixDQUFSOztBQUNyQixTQUFPdEIsTUFBUDtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJYSxNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUlxRyxNQUFNLEdBQUdyRyxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUltRixJQUFJLEdBQUduRixtQkFBTyxDQUFDLG1FQUFELENBQWxCOztBQUNBLElBQUk4RCxHQUFHLEdBQUc5RCxtQkFBTyxDQUFDLGlFQUFELENBQWpCOztBQUNBLElBQUlxRixTQUFTLEdBQUdyRixtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUNBLElBQUk2TCxzQkFBc0IsR0FBRzdMLG1CQUFPLENBQUMsK0ZBQUQsQ0FBcEM7O0FBQ0EsSUFBSXdOLG1CQUFtQixHQUFHeE4sbUJBQU8sQ0FBQyx1RkFBRCxDQUFqQzs7QUFFQSxJQUFJeU4sZ0JBQWdCLEdBQUdELG1CQUFtQixDQUFDMUksR0FBM0M7QUFDQSxJQUFJNEksb0JBQW9CLEdBQUdGLG1CQUFtQixDQUFDMUYsT0FBL0M7QUFDQSxJQUFJNkYsUUFBUSxHQUFHck4sTUFBTSxDQUFDdUwsc0JBQUQsQ0FBTixDQUErQnZFLEtBQS9CLENBQXFDLFVBQXJDLENBQWY7QUFFQWpCLE1BQU0sQ0FBQyxlQUFELEVBQWtCLFVBQVVqRyxFQUFWLEVBQWM7QUFDcEMsU0FBT3lMLHNCQUFzQixDQUFDakssSUFBdkIsQ0FBNEJ4QixFQUE1QixDQUFQO0FBQ0QsQ0FGSyxDQUFOO0FBSUEsQ0FBQ0YsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVlLENBQVYsRUFBYXVDLEdBQWIsRUFBa0JwQyxLQUFsQixFQUF5Qm1FLE9BQXpCLEVBQWtDO0FBQ2xELE1BQUlvSSxNQUFNLEdBQUdwSSxPQUFPLEdBQUcsQ0FBQyxDQUFDQSxPQUFPLENBQUNvSSxNQUFiLEdBQXNCLEtBQTFDO0FBQ0EsTUFBSUMsTUFBTSxHQUFHckksT0FBTyxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxDQUFDZCxVQUFiLEdBQTBCLEtBQTlDO0FBQ0EsTUFBSXdCLFdBQVcsR0FBR1YsT0FBTyxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxDQUFDVSxXQUFiLEdBQTJCLEtBQXBEOztBQUNBLE1BQUksT0FBTzdFLEtBQVAsSUFBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsUUFBSSxPQUFPb0MsR0FBUCxJQUFjLFFBQWQsSUFBMEIsQ0FBQ0ssR0FBRyxDQUFDekMsS0FBRCxFQUFRLE1BQVIsQ0FBbEMsRUFBbUQ4RCxJQUFJLENBQUM5RCxLQUFELEVBQVEsTUFBUixFQUFnQm9DLEdBQWhCLENBQUo7QUFDbkRpSyx3QkFBb0IsQ0FBQ3JNLEtBQUQsQ0FBcEIsQ0FBNEI4QyxNQUE1QixHQUFxQ3dKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLE9BQU9ySyxHQUFQLElBQWMsUUFBZCxHQUF5QkEsR0FBekIsR0FBK0IsRUFBN0MsQ0FBckM7QUFDRDs7QUFDRCxNQUFJdkMsQ0FBQyxLQUFLNkQsTUFBVixFQUFrQjtBQUNoQixRQUFJOEksTUFBSixFQUFZM00sQ0FBQyxDQUFDdUMsR0FBRCxDQUFELEdBQVNwQyxLQUFULENBQVosS0FDS2dFLFNBQVMsQ0FBQzVCLEdBQUQsRUFBTXBDLEtBQU4sQ0FBVDtBQUNMO0FBQ0QsR0FKRCxNQUlPLElBQUksQ0FBQ3VNLE1BQUwsRUFBYTtBQUNsQixXQUFPMU0sQ0FBQyxDQUFDdUMsR0FBRCxDQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUksQ0FBQ3lDLFdBQUQsSUFBZ0JoRixDQUFDLENBQUN1QyxHQUFELENBQXJCLEVBQTRCO0FBQ2pDb0ssVUFBTSxHQUFHLElBQVQ7QUFDRDs7QUFDRCxNQUFJQSxNQUFKLEVBQVkzTSxDQUFDLENBQUN1QyxHQUFELENBQUQsR0FBU3BDLEtBQVQsQ0FBWixLQUNLOEQsSUFBSSxDQUFDakUsQ0FBRCxFQUFJdUMsR0FBSixFQUFTcEMsS0FBVCxDQUFKLENBbEI2QyxDQW1CcEQ7QUFDQyxDQXBCRCxFQW9CR2lGLFFBQVEsQ0FBQ0wsU0FwQlosRUFvQnVCLFVBcEJ2QixFQW9CbUMsU0FBUzlDLFFBQVQsR0FBb0I7QUFDckQsU0FBTyxPQUFPLElBQVAsSUFBZSxVQUFmLElBQTZCc0ssZ0JBQWdCLENBQUMsSUFBRCxDQUFoQixDQUF1QnRKLE1BQXBELElBQThEMEgsc0JBQXNCLENBQUNqSyxJQUF2QixDQUE0QixJQUE1QixDQUFyRTtBQUNELENBdEJELEU7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTFCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsTUFBSUEsRUFBRSxJQUFJdUIsU0FBVixFQUFxQixNQUFNdEIsU0FBUyxDQUFDLDBCQUEwQkQsRUFBM0IsQ0FBZjtBQUNyQixTQUFPQSxFQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7OztBQ0ZBLElBQUkyRSxNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUltRixJQUFJLEdBQUduRixtQkFBTyxDQUFDLG1FQUFELENBQWxCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXNELEdBQVYsRUFBZXBDLEtBQWYsRUFBc0I7QUFDckMsTUFBSTtBQUNGOEQsUUFBSSxDQUFDSixNQUFELEVBQVN0QixHQUFULEVBQWNwQyxLQUFkLENBQUo7QUFDRCxHQUZELENBRUUsT0FBT2UsS0FBUCxFQUFjO0FBQ2QyQyxVQUFNLENBQUN0QixHQUFELENBQU4sR0FBY3BDLEtBQWQ7QUFDRDs7QUFBQyxTQUFPQSxLQUFQO0FBQ0gsQ0FORCxDOzs7Ozs7Ozs7Ozs7QUNIYTs7QUFDYixJQUFJZ0csVUFBVSxHQUFHckgsbUJBQU8sQ0FBQyxtRkFBRCxDQUF4Qjs7QUFDQSxJQUFJaUUsb0JBQW9CLEdBQUdqRSxtQkFBTyxDQUFDLHVHQUFELENBQWxDOztBQUNBLElBQUlzQyxlQUFlLEdBQUd0QyxtQkFBTyxDQUFDLDZGQUFELENBQTdCOztBQUNBLElBQUltSCxXQUFXLEdBQUduSCxtQkFBTyxDQUFDLGlGQUFELENBQXpCOztBQUVBLElBQUkrTixPQUFPLEdBQUd6TCxlQUFlLENBQUMsU0FBRCxDQUE3Qjs7QUFFQXBDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVNk4sZ0JBQVYsRUFBNEI7QUFDM0MsTUFBSXpOLFdBQVcsR0FBRzhHLFVBQVUsQ0FBQzJHLGdCQUFELENBQTVCO0FBQ0EsTUFBSTNKLGNBQWMsR0FBR0osb0JBQW9CLENBQUNLLENBQTFDOztBQUVBLE1BQUk2QyxXQUFXLElBQUk1RyxXQUFmLElBQThCLENBQUNBLFdBQVcsQ0FBQ3dOLE9BQUQsQ0FBOUMsRUFBeUQ7QUFDdkQxSixrQkFBYyxDQUFDOUQsV0FBRCxFQUFjd04sT0FBZCxFQUF1QjtBQUNuQ3BKLGtCQUFZLEVBQUUsSUFEcUI7QUFFbkNHLFNBQUcsRUFBRSxZQUFZO0FBQUUsZUFBTyxJQUFQO0FBQWM7QUFGRSxLQUF2QixDQUFkO0FBSUQ7QUFDRixDQVZELEM7Ozs7Ozs7Ozs7O0FDUkEsSUFBSVQsY0FBYyxHQUFHckUsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQLENBQStDc0UsQ0FBcEU7O0FBQ0EsSUFBSVIsR0FBRyxHQUFHOUQsbUJBQU8sQ0FBQyxpRUFBRCxDQUFqQjs7QUFDQSxJQUFJc0MsZUFBZSxHQUFHdEMsbUJBQU8sQ0FBQyw2RkFBRCxDQUE3Qjs7QUFFQSxJQUFJc0QsYUFBYSxHQUFHaEIsZUFBZSxDQUFDLGFBQUQsQ0FBbkM7O0FBRUFwQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsRUFBVixFQUFjNk4sR0FBZCxFQUFtQnRJLE1BQW5CLEVBQTJCO0FBQzFDLE1BQUl2RixFQUFFLElBQUksQ0FBQzBELEdBQUcsQ0FBQzFELEVBQUUsR0FBR3VGLE1BQU0sR0FBR3ZGLEVBQUgsR0FBUUEsRUFBRSxDQUFDNkYsU0FBdkIsRUFBa0MzQyxhQUFsQyxDQUFkLEVBQWdFO0FBQzlEZSxrQkFBYyxDQUFDakUsRUFBRCxFQUFLa0QsYUFBTCxFQUFvQjtBQUFFcUIsa0JBQVksRUFBRSxJQUFoQjtBQUFzQnRELFdBQUssRUFBRTRNO0FBQTdCLEtBQXBCLENBQWQ7QUFDRDtBQUNGLENBSkQsQzs7Ozs7Ozs7Ozs7QUNOQSxJQUFJNUgsTUFBTSxHQUFHckcsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFDQSxJQUFJa08sR0FBRyxHQUFHbE8sbUJBQU8sQ0FBQyxpRUFBRCxDQUFqQjs7QUFFQSxJQUFJb0UsSUFBSSxHQUFHaUMsTUFBTSxDQUFDLE1BQUQsQ0FBakI7O0FBRUFuRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVXNELEdBQVYsRUFBZTtBQUM5QixTQUFPVyxJQUFJLENBQUNYLEdBQUQsQ0FBSixLQUFjVyxJQUFJLENBQUNYLEdBQUQsQ0FBSixHQUFZeUssR0FBRyxDQUFDekssR0FBRCxDQUE3QixDQUFQO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0xBLElBQUlzQixNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUlxRixTQUFTLEdBQUdyRixtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUNBLElBQUltTyxPQUFPLEdBQUduTyxtQkFBTyxDQUFDLHlFQUFELENBQXJCOztBQUVBLElBQUlvTyxNQUFNLEdBQUcsb0JBQWI7QUFDQSxJQUFJakcsS0FBSyxHQUFHcEQsTUFBTSxDQUFDcUosTUFBRCxDQUFOLElBQWtCL0ksU0FBUyxDQUFDK0ksTUFBRCxFQUFTLEVBQVQsQ0FBdkM7QUFFQSxDQUFDbE8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVzRCxHQUFWLEVBQWVwQyxLQUFmLEVBQXNCO0FBQ3RDLFNBQU84RyxLQUFLLENBQUMxRSxHQUFELENBQUwsS0FBZTBFLEtBQUssQ0FBQzFFLEdBQUQsQ0FBTCxHQUFhcEMsS0FBSyxLQUFLTSxTQUFWLEdBQXNCTixLQUF0QixHQUE4QixFQUExRCxDQUFQO0FBQ0QsQ0FGRCxFQUVHLFVBRkgsRUFFZSxFQUZmLEVBRW1CeUwsSUFGbkIsQ0FFd0I7QUFDdEJ1QixTQUFPLEVBQUUsT0FEYTtBQUV0QkMsTUFBSSxFQUFFSCxPQUFPLEdBQUcsTUFBSCxHQUFZLFFBRkg7QUFHdEJJLFdBQVMsRUFBRTtBQUhXLENBRnhCLEU7Ozs7Ozs7Ozs7O0FDUEEsSUFBSXRNLFFBQVEsR0FBR2pDLG1CQUFPLENBQUMsNkVBQUQsQ0FBdEI7O0FBQ0EsSUFBSXdCLFNBQVMsR0FBR3hCLG1CQUFPLENBQUMsK0VBQUQsQ0FBdkI7O0FBQ0EsSUFBSXNDLGVBQWUsR0FBR3RDLG1CQUFPLENBQUMsNkZBQUQsQ0FBN0I7O0FBRUEsSUFBSStOLE9BQU8sR0FBR3pMLGVBQWUsQ0FBQyxTQUFELENBQTdCLEMsQ0FFQTtBQUNBOztBQUNBcEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVlLENBQVYsRUFBYXNOLGtCQUFiLEVBQWlDO0FBQ2hELE1BQUl6QyxDQUFDLEdBQUc5SixRQUFRLENBQUNmLENBQUQsQ0FBUixDQUFZbU0sV0FBcEI7QUFDQSxNQUFJb0IsQ0FBSjtBQUNBLFNBQU8xQyxDQUFDLEtBQUtwSyxTQUFOLElBQW1CLENBQUM4TSxDQUFDLEdBQUd4TSxRQUFRLENBQUM4SixDQUFELENBQVIsQ0FBWWdDLE9BQVosQ0FBTCxLQUE4QnBNLFNBQWpELEdBQTZENk0sa0JBQTdELEdBQWtGaE4sU0FBUyxDQUFDaU4sQ0FBRCxDQUFsRztBQUNELENBSkQsQzs7Ozs7Ozs7Ozs7QUNSQSxJQUFJMUosTUFBTSxHQUFHL0UsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFDQSxJQUFJNkUsS0FBSyxHQUFHN0UsbUJBQU8sQ0FBQyxxRUFBRCxDQUFuQjs7QUFDQSxJQUFJMkcsT0FBTyxHQUFHM0csbUJBQU8sQ0FBQyxpRkFBRCxDQUFyQjs7QUFDQSxJQUFJcUosSUFBSSxHQUFHckosbUJBQU8sQ0FBQyxtRkFBRCxDQUFsQjs7QUFDQSxJQUFJME8sSUFBSSxHQUFHMU8sbUJBQU8sQ0FBQyxtRUFBRCxDQUFsQjs7QUFDQSxJQUFJa0YsYUFBYSxHQUFHbEYsbUJBQU8sQ0FBQyx5R0FBRCxDQUEzQjs7QUFFQSxJQUFJMk8sUUFBUSxHQUFHNUosTUFBTSxDQUFDNEosUUFBdEI7QUFDQSxJQUFJOUcsR0FBRyxHQUFHOUMsTUFBTSxDQUFDNkosWUFBakI7QUFDQSxJQUFJQyxLQUFLLEdBQUc5SixNQUFNLENBQUMrSixjQUFuQjtBQUNBLElBQUl4RSxPQUFPLEdBQUd2RixNQUFNLENBQUN1RixPQUFyQjtBQUNBLElBQUl5RSxjQUFjLEdBQUdoSyxNQUFNLENBQUNnSyxjQUE1QjtBQUNBLElBQUlDLFFBQVEsR0FBR2pLLE1BQU0sQ0FBQ2lLLFFBQXRCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLG9CQUF6QjtBQUNBLElBQUlDLEtBQUosRUFBV0MsT0FBWCxFQUFvQkMsSUFBcEI7O0FBRUEsSUFBSUMsR0FBRyxHQUFHLFVBQVVDLEVBQVYsRUFBYztBQUN0QjtBQUNBLE1BQUlOLEtBQUssQ0FBQ2hJLGNBQU4sQ0FBcUJzSSxFQUFyQixDQUFKLEVBQThCO0FBQzVCLFFBQUkvTixFQUFFLEdBQUd5TixLQUFLLENBQUNNLEVBQUQsQ0FBZDtBQUNBLFdBQU9OLEtBQUssQ0FBQ00sRUFBRCxDQUFaO0FBQ0EvTixNQUFFO0FBQ0g7QUFDRixDQVBEOztBQVNBLElBQUlnTyxNQUFNLEdBQUcsVUFBVUQsRUFBVixFQUFjO0FBQ3pCLFNBQU8sWUFBWTtBQUNqQkQsT0FBRyxDQUFDQyxFQUFELENBQUg7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFNQSxJQUFJRSxRQUFRLEdBQUcsVUFBVUMsS0FBVixFQUFpQjtBQUM5QkosS0FBRyxDQUFDSSxLQUFLLENBQUM5RyxJQUFQLENBQUg7QUFDRCxDQUZEOztBQUlBLElBQUkrRyxJQUFJLEdBQUcsVUFBVUosRUFBVixFQUFjO0FBQ3ZCO0FBQ0F6SyxRQUFNLENBQUM4SyxXQUFQLENBQW1CTCxFQUFFLEdBQUcsRUFBeEIsRUFBNEJiLFFBQVEsQ0FBQ21CLFFBQVQsR0FBb0IsSUFBcEIsR0FBMkJuQixRQUFRLENBQUNvQixJQUFoRTtBQUNELENBSEQsQyxDQUtBOzs7QUFDQSxJQUFJLENBQUNsSSxHQUFELElBQVEsQ0FBQ2dILEtBQWIsRUFBb0I7QUFDbEJoSCxLQUFHLEdBQUcsU0FBUytHLFlBQVQsQ0FBc0JuTixFQUF0QixFQUEwQjtBQUM5QixRQUFJdU8sSUFBSSxHQUFHLEVBQVg7QUFDQSxRQUFJeEwsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsV0FBT3hDLFNBQVMsQ0FBQ2IsTUFBVixHQUFtQnFELENBQTFCLEVBQTZCd0wsSUFBSSxDQUFDbEQsSUFBTCxDQUFVOUssU0FBUyxDQUFDd0MsQ0FBQyxFQUFGLENBQW5COztBQUM3QjBLLFNBQUssQ0FBQyxFQUFFRCxPQUFILENBQUwsR0FBbUIsWUFBWTtBQUM3QjtBQUNBLE9BQUMsT0FBT3hOLEVBQVAsSUFBYSxVQUFiLEdBQTBCQSxFQUExQixHQUErQjZFLFFBQVEsQ0FBQzdFLEVBQUQsQ0FBeEMsRUFBOENNLEtBQTlDLENBQW9ESixTQUFwRCxFQUErRHFPLElBQS9EO0FBQ0QsS0FIRDs7QUFJQVosU0FBSyxDQUFDSCxPQUFELENBQUw7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0FWRDs7QUFXQUosT0FBSyxHQUFHLFNBQVNDLGNBQVQsQ0FBd0JVLEVBQXhCLEVBQTRCO0FBQ2xDLFdBQU9OLEtBQUssQ0FBQ00sRUFBRCxDQUFaO0FBQ0QsR0FGRCxDQVprQixDQWVsQjs7O0FBQ0EsTUFBSTdJLE9BQU8sQ0FBQzJELE9BQUQsQ0FBUCxJQUFvQixTQUF4QixFQUFtQztBQUNqQzhFLFNBQUssR0FBRyxVQUFVSSxFQUFWLEVBQWM7QUFDcEJsRixhQUFPLENBQUNlLFFBQVIsQ0FBaUJvRSxNQUFNLENBQUNELEVBQUQsQ0FBdkI7QUFDRCxLQUZELENBRGlDLENBSW5DOztBQUNDLEdBTEQsTUFLTyxJQUFJUixRQUFRLElBQUlBLFFBQVEsQ0FBQ2lCLEdBQXpCLEVBQThCO0FBQ25DYixTQUFLLEdBQUcsVUFBVUksRUFBVixFQUFjO0FBQ3BCUixjQUFRLENBQUNpQixHQUFULENBQWFSLE1BQU0sQ0FBQ0QsRUFBRCxDQUFuQjtBQUNELEtBRkQsQ0FEbUMsQ0FJckM7O0FBQ0MsR0FMTSxNQUtBLElBQUlULGNBQUosRUFBb0I7QUFDekJNLFdBQU8sR0FBRyxJQUFJTixjQUFKLEVBQVY7QUFDQU8sUUFBSSxHQUFHRCxPQUFPLENBQUNhLEtBQWY7QUFDQWIsV0FBTyxDQUFDYyxLQUFSLENBQWNDLFNBQWQsR0FBMEJWLFFBQTFCO0FBQ0FOLFNBQUssR0FBRy9GLElBQUksQ0FBQ2lHLElBQUksQ0FBQ08sV0FBTixFQUFtQlAsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBWixDQUp5QixDQUszQjtBQUNBO0FBQ0MsR0FQTSxNQU9BLElBQUl2SyxNQUFNLENBQUNzTCxnQkFBUCxJQUEyQixPQUFPUixXQUFQLElBQXNCLFVBQWpELElBQStELENBQUM5SyxNQUFNLENBQUN1TCxhQUF2RSxJQUF3RixDQUFDekwsS0FBSyxDQUFDK0ssSUFBRCxDQUFsRyxFQUEwRztBQUMvR1IsU0FBSyxHQUFHUSxJQUFSO0FBQ0E3SyxVQUFNLENBQUNzTCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ1gsUUFBbkMsRUFBNkMsS0FBN0MsRUFGK0csQ0FHakg7QUFDQyxHQUpNLE1BSUEsSUFBSVAsa0JBQWtCLElBQUlqSyxhQUFhLENBQUMsUUFBRCxDQUF2QyxFQUFtRDtBQUN4RGtLLFNBQUssR0FBRyxVQUFVSSxFQUFWLEVBQWM7QUFDcEJkLFVBQUksQ0FBQzZCLFdBQUwsQ0FBaUJyTCxhQUFhLENBQUMsUUFBRCxDQUE5QixFQUEwQ2lLLGtCQUExQyxJQUFnRSxZQUFZO0FBQzFFVCxZQUFJLENBQUM4QixXQUFMLENBQWlCLElBQWpCO0FBQ0FqQixXQUFHLENBQUNDLEVBQUQsQ0FBSDtBQUNELE9BSEQ7QUFJRCxLQUxELENBRHdELENBTzFEOztBQUNDLEdBUk0sTUFRQTtBQUNMSixTQUFLLEdBQUcsVUFBVUksRUFBVixFQUFjO0FBQ3BCM1AsZ0JBQVUsQ0FBQzRQLE1BQU0sQ0FBQ0QsRUFBRCxDQUFQLEVBQWEsQ0FBYixDQUFWO0FBQ0QsS0FGRDtBQUdEO0FBQ0Y7O0FBRUR0UCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjBILEtBQUcsRUFBRUEsR0FEVTtBQUVmZ0gsT0FBSyxFQUFFQTtBQUZRLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDL0ZBLElBQUk0QixTQUFTLEdBQUd6USxtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUVBLElBQUkwUSxHQUFHLEdBQUc1SixJQUFJLENBQUM0SixHQUFmO0FBQ0EsSUFBSUMsR0FBRyxHQUFHN0osSUFBSSxDQUFDNkosR0FBZixDLENBRUE7QUFDQTtBQUNBOztBQUNBelEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVpQixLQUFWLEVBQWlCRCxNQUFqQixFQUF5QjtBQUN4QyxNQUFJeVAsT0FBTyxHQUFHSCxTQUFTLENBQUNyUCxLQUFELENBQXZCO0FBQ0EsU0FBT3dQLE9BQU8sR0FBRyxDQUFWLEdBQWNGLEdBQUcsQ0FBQ0UsT0FBTyxHQUFHelAsTUFBWCxFQUFtQixDQUFuQixDQUFqQixHQUF5Q3dQLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVelAsTUFBVixDQUFuRDtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLElBQUkwUCxhQUFhLEdBQUc3USxtQkFBTyxDQUFDLHVGQUFELENBQTNCOztBQUNBLElBQUk4USxzQkFBc0IsR0FBRzlRLG1CQUFPLENBQUMsMkdBQUQsQ0FBcEM7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxFQUFWLEVBQWM7QUFDN0IsU0FBT3lRLGFBQWEsQ0FBQ0Msc0JBQXNCLENBQUMxUSxFQUFELENBQXZCLENBQXBCO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0pBLElBQUkyUSxJQUFJLEdBQUdqSyxJQUFJLENBQUNpSyxJQUFoQjtBQUNBLElBQUlDLEtBQUssR0FBR2xLLElBQUksQ0FBQ2tLLEtBQWpCLEMsQ0FFQTtBQUNBOztBQUNBOVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVU4USxRQUFWLEVBQW9CO0FBQ25DLFNBQU9DLEtBQUssQ0FBQ0QsUUFBUSxHQUFHLENBQUNBLFFBQWIsQ0FBTCxHQUE4QixDQUE5QixHQUFrQyxDQUFDQSxRQUFRLEdBQUcsQ0FBWCxHQUFlRCxLQUFmLEdBQXVCRCxJQUF4QixFQUE4QkUsUUFBOUIsQ0FBekM7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDTEEsSUFBSVIsU0FBUyxHQUFHelEsbUJBQU8sQ0FBQywrRUFBRCxDQUF2Qjs7QUFFQSxJQUFJMlEsR0FBRyxHQUFHN0osSUFBSSxDQUFDNkosR0FBZixDLENBRUE7QUFDQTs7QUFDQXpRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVOFEsUUFBVixFQUFvQjtBQUNuQyxTQUFPQSxRQUFRLEdBQUcsQ0FBWCxHQUFlTixHQUFHLENBQUNGLFNBQVMsQ0FBQ1EsUUFBRCxDQUFWLEVBQXNCLGdCQUF0QixDQUFsQixHQUE0RCxDQUFuRSxDQURtQyxDQUNtQztBQUN2RSxDQUZELEM7Ozs7Ozs7Ozs7O0FDTkEsSUFBSXhRLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0QixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVWdSLEtBQVYsRUFBaUJDLGdCQUFqQixFQUFtQztBQUNsRCxNQUFJLENBQUMzUSxRQUFRLENBQUMwUSxLQUFELENBQWIsRUFBc0IsT0FBT0EsS0FBUDtBQUN0QixNQUFJMVAsRUFBSixFQUFRNFAsR0FBUjtBQUNBLE1BQUlELGdCQUFnQixJQUFJLFFBQVEzUCxFQUFFLEdBQUcwUCxLQUFLLENBQUNoTyxRQUFuQixLQUFnQyxVQUFwRCxJQUFrRSxDQUFDMUMsUUFBUSxDQUFDNFEsR0FBRyxHQUFHNVAsRUFBRSxDQUFDRyxJQUFILENBQVF1UCxLQUFSLENBQVAsQ0FBL0UsRUFBdUcsT0FBT0UsR0FBUDtBQUN2RyxNQUFJLFFBQVE1UCxFQUFFLEdBQUcwUCxLQUFLLENBQUNHLE9BQW5CLEtBQStCLFVBQS9CLElBQTZDLENBQUM3USxRQUFRLENBQUM0USxHQUFHLEdBQUc1UCxFQUFFLENBQUNHLElBQUgsQ0FBUXVQLEtBQVIsQ0FBUCxDQUExRCxFQUFrRixPQUFPRSxHQUFQO0FBQ2xGLE1BQUksQ0FBQ0QsZ0JBQUQsSUFBcUIsUUFBUTNQLEVBQUUsR0FBRzBQLEtBQUssQ0FBQ2hPLFFBQW5CLEtBQWdDLFVBQXJELElBQW1FLENBQUMxQyxRQUFRLENBQUM0USxHQUFHLEdBQUc1UCxFQUFFLENBQUNHLElBQUgsQ0FBUXVQLEtBQVIsQ0FBUCxDQUFoRixFQUF3RyxPQUFPRSxHQUFQO0FBQ3hHLFFBQU1oUixTQUFTLENBQUMseUNBQUQsQ0FBZjtBQUNELENBUEQsQzs7Ozs7Ozs7Ozs7QUNOQSxJQUFJbVAsRUFBRSxHQUFHLENBQVQ7QUFDQSxJQUFJK0IsT0FBTyxHQUFHekssSUFBSSxDQUFDMEssTUFBTCxFQUFkOztBQUVBdFIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVzRCxHQUFWLEVBQWU7QUFDOUIsU0FBTyxZQUFZbkQsTUFBTSxDQUFDbUQsR0FBRyxLQUFLOUIsU0FBUixHQUFvQixFQUFwQixHQUF5QjhCLEdBQTFCLENBQWxCLEdBQW1ELElBQW5ELEdBQTBELENBQUMsRUFBRStMLEVBQUYsR0FBTytCLE9BQVIsRUFBaUJwTyxRQUFqQixDQUEwQixFQUExQixDQUFqRTtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7QUNIQSxJQUFJa0UsVUFBVSxHQUFHckgsbUJBQU8sQ0FBQyxtRkFBRCxDQUF4Qjs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCa0gsVUFBVSxDQUFDLFdBQUQsRUFBYyxXQUFkLENBQVYsSUFBd0MsRUFBekQsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJdEMsTUFBTSxHQUFHL0UsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFDQSxJQUFJcUcsTUFBTSxHQUFHckcsbUJBQU8sQ0FBQyx1RUFBRCxDQUFwQjs7QUFDQSxJQUFJa08sR0FBRyxHQUFHbE8sbUJBQU8sQ0FBQyxpRUFBRCxDQUFqQjs7QUFDQSxJQUFJeVIsYUFBYSxHQUFHelIsbUJBQU8sQ0FBQyxxRkFBRCxDQUEzQjs7QUFFQSxJQUFJNEwsTUFBTSxHQUFHN0csTUFBTSxDQUFDNkcsTUFBcEI7QUFDQSxJQUFJekQsS0FBSyxHQUFHOUIsTUFBTSxDQUFDLEtBQUQsQ0FBbEI7O0FBRUFuRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUssSUFBVixFQUFnQjtBQUMvQixTQUFPMkgsS0FBSyxDQUFDM0gsSUFBRCxDQUFMLEtBQWdCMkgsS0FBSyxDQUFDM0gsSUFBRCxDQUFMLEdBQWNpUixhQUFhLElBQUk3RixNQUFNLENBQUNwTCxJQUFELENBQXZCLElBQ2hDLENBQUNpUixhQUFhLEdBQUc3RixNQUFILEdBQVlzQyxHQUExQixFQUErQixZQUFZMU4sSUFBM0MsQ0FERSxDQUFQO0FBRUQsQ0FIRCxDOzs7Ozs7Ozs7OztBQ1JBLElBQUk0RSxRQUFRLEdBQUdwRixtQkFBTyxDQUFDLDJFQUFELENBQXRCOztBQUNBLElBQUltRCxRQUFRLEdBQUduRCxtQkFBTyxDQUFDLDJGQUFELENBQXRCOztBQUVBLElBQUkwUixlQUFlLEdBQUc5TixNQUFNLENBQUNxQyxTQUE3QixDLENBRUE7QUFDQTs7QUFDQSxJQUFJOUMsUUFBUSxLQUFLdU8sZUFBZSxDQUFDdk8sUUFBakMsRUFBMkM7QUFDekNpQyxVQUFRLENBQUNzTSxlQUFELEVBQWtCLFVBQWxCLEVBQThCdk8sUUFBOUIsRUFBd0M7QUFBRXlLLFVBQU0sRUFBRTtBQUFWLEdBQXhDLENBQVI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNUWTs7QUFDYixJQUFJK0QsQ0FBQyxHQUFHM1IsbUJBQU8sQ0FBQyx1RUFBRCxDQUFmOztBQUNBLElBQUltTyxPQUFPLEdBQUduTyxtQkFBTyxDQUFDLHlFQUFELENBQXJCOztBQUNBLElBQUkrRSxNQUFNLEdBQUcvRSxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUNBLElBQUl1RyxJQUFJLEdBQUd2RyxtQkFBTyxDQUFDLG1FQUFELENBQWxCOztBQUNBLElBQUk0UixhQUFhLEdBQUc1UixtQkFBTyxDQUFDLCtHQUFELENBQTNCOztBQUNBLElBQUlvRixRQUFRLEdBQUdwRixtQkFBTyxDQUFDLDJFQUFELENBQXRCOztBQUNBLElBQUk2UixXQUFXLEdBQUc3UixtQkFBTyxDQUFDLG1GQUFELENBQXpCOztBQUNBLElBQUk4UixjQUFjLEdBQUc5UixtQkFBTyxDQUFDLDZGQUFELENBQTVCOztBQUNBLElBQUkrUixVQUFVLEdBQUcvUixtQkFBTyxDQUFDLGlGQUFELENBQXhCOztBQUNBLElBQUlTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyw2RUFBRCxDQUF0Qjs7QUFDQSxJQUFJd0IsU0FBUyxHQUFHeEIsbUJBQU8sQ0FBQywrRUFBRCxDQUF2Qjs7QUFDQSxJQUFJZ1MsVUFBVSxHQUFHaFMsbUJBQU8sQ0FBQyxpRkFBRCxDQUF4Qjs7QUFDQSxJQUFJMkcsT0FBTyxHQUFHM0csbUJBQU8sQ0FBQyxpRkFBRCxDQUFyQjs7QUFDQSxJQUFJMEosT0FBTyxHQUFHMUosbUJBQU8sQ0FBQyx5RUFBRCxDQUFyQjs7QUFDQSxJQUFJaVMsMkJBQTJCLEdBQUdqUyxtQkFBTyxDQUFDLHVIQUFELENBQXpDOztBQUNBLElBQUlrUyxrQkFBa0IsR0FBR2xTLG1CQUFPLENBQUMsaUdBQUQsQ0FBaEM7O0FBQ0EsSUFBSTBMLElBQUksR0FBRzFMLG1CQUFPLENBQUMsbUVBQUQsQ0FBUCxDQUE2QjZILEdBQXhDOztBQUNBLElBQUlzSyxTQUFTLEdBQUduUyxtQkFBTyxDQUFDLDZFQUFELENBQXZCOztBQUNBLElBQUlvUyxjQUFjLEdBQUdwUyxtQkFBTyxDQUFDLHlGQUFELENBQTVCOztBQUNBLElBQUlxUyxnQkFBZ0IsR0FBR3JTLG1CQUFPLENBQUMsK0ZBQUQsQ0FBOUI7O0FBQ0EsSUFBSXNTLDBCQUEwQixHQUFHdFMsbUJBQU8sQ0FBQyx1R0FBRCxDQUF4Qzs7QUFDQSxJQUFJdVMsT0FBTyxHQUFHdlMsbUJBQU8sQ0FBQyx5RUFBRCxDQUFyQjs7QUFDQSxJQUFJbUssU0FBUyxHQUFHbkssbUJBQU8sQ0FBQywrRUFBRCxDQUF2Qjs7QUFDQSxJQUFJd04sbUJBQW1CLEdBQUd4TixtQkFBTyxDQUFDLHVGQUFELENBQWpDOztBQUNBLElBQUl1RixRQUFRLEdBQUd2RixtQkFBTyxDQUFDLDZFQUFELENBQXRCOztBQUNBLElBQUlzQyxlQUFlLEdBQUd0QyxtQkFBTyxDQUFDLDZGQUFELENBQTdCOztBQUVBLElBQUkrTixPQUFPLEdBQUd6TCxlQUFlLENBQUMsU0FBRCxDQUE3QjtBQUNBLElBQUlrUSxPQUFPLEdBQUcsU0FBZDtBQUNBLElBQUkvRSxnQkFBZ0IsR0FBR0QsbUJBQW1CLENBQUMxSSxHQUEzQztBQUNBLElBQUkyTixnQkFBZ0IsR0FBR2pGLG1CQUFtQixDQUFDM0YsR0FBM0M7QUFDQSxJQUFJNkssdUJBQXVCLEdBQUdsRixtQkFBbUIsQ0FBQ3pGLFNBQXBCLENBQThCeUssT0FBOUIsQ0FBOUI7QUFDQSxJQUFJRyxrQkFBa0IsR0FBR2YsYUFBekI7QUFDQSxJQUFJdlIsU0FBUyxHQUFHMEUsTUFBTSxDQUFDMUUsU0FBdkI7QUFDQSxJQUFJMkUsUUFBUSxHQUFHRCxNQUFNLENBQUNDLFFBQXRCO0FBQ0EsSUFBSXNGLE9BQU8sR0FBR3ZGLE1BQU0sQ0FBQ3VGLE9BQXJCO0FBQ0EsSUFBSXNJLE1BQU0sR0FBRzdOLE1BQU0sQ0FBQzhOLEtBQXBCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHeEksT0FBTyxJQUFJQSxPQUFPLENBQUN3SSxRQUFsQztBQUNBLElBQUlDLEVBQUUsR0FBR0QsUUFBUSxJQUFJQSxRQUFRLENBQUNDLEVBQXJCLElBQTJCLEVBQXBDO0FBQ0EsSUFBSTNGLG9CQUFvQixHQUFHa0YsMEJBQTBCLENBQUNoTyxDQUF0RDtBQUNBLElBQUkwTywyQkFBMkIsR0FBRzVGLG9CQUFsQztBQUNBLElBQUk3QyxPQUFPLEdBQUc1RCxPQUFPLENBQUMyRCxPQUFELENBQVAsSUFBb0IsU0FBbEM7QUFDQSxJQUFJMkksY0FBYyxHQUFHLENBQUMsRUFBRWpPLFFBQVEsSUFBSUEsUUFBUSxDQUFDa08sV0FBckIsSUFBb0NuTyxNQUFNLENBQUNvTyxhQUE3QyxDQUF0QjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLG9CQUExQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLGtCQUF4QjtBQUNBLElBQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUlDLFFBQUosRUFBY0Msb0JBQWQsRUFBb0NDLGNBQXBDLEVBQW9EQyxVQUFwRDtBQUVBLElBQUlqTyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ2lOLE9BQUQsRUFBVSxZQUFZO0FBQ3pDO0FBQ0EsTUFBSXhILE9BQU8sR0FBRzJILGtCQUFrQixDQUFDaFQsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBZDs7QUFDQSxNQUFJb1UsS0FBSyxHQUFHLFlBQVk7QUFBRTtBQUFhLEdBQXZDOztBQUNBLE1BQUlDLFdBQVcsR0FBRyxDQUFDaEosT0FBTyxDQUFDcUMsV0FBUixHQUFzQixFQUF2QixFQUEyQlUsT0FBM0IsSUFBc0MsVUFBVWhMLElBQVYsRUFBZ0I7QUFDdEVBLFFBQUksQ0FBQ2dSLEtBQUQsRUFBUUEsS0FBUixDQUFKO0FBQ0QsR0FGRCxDQUp5QyxDQU96Qzs7O0FBQ0EsU0FBTyxFQUFFLENBQUN4SixPQUFPLElBQUksT0FBTzBKLHFCQUFQLElBQWdDLFVBQTVDLE1BQ0gsQ0FBQzlGLE9BQUQsSUFBWW5ELE9BQU8sQ0FBQyxTQUFELENBRGhCLEtBRUpBLE9BQU8sQ0FBQ2xMLElBQVIsQ0FBYWlVLEtBQWIsYUFBK0JDLFdBRjNCLENBR1A7QUFDQTtBQUNBO0FBTE8sS0FNSmpCLEVBQUUsQ0FBQ3hSLE9BQUgsQ0FBVyxLQUFYLE1BQXNCLENBTmxCLElBT0o0SSxTQUFTLENBQUM1SSxPQUFWLENBQWtCLFdBQWxCLE1BQW1DLENBQUMsQ0FQbEMsQ0FBUDtBQVFELENBaEJvQixDQUFyQjtBQWtCQSxJQUFJMlMsbUJBQW1CLEdBQUdyTyxNQUFNLElBQUksQ0FBQ29NLDJCQUEyQixDQUFDLFVBQVV0SSxRQUFWLEVBQW9CO0FBQ25GZ0osb0JBQWtCLENBQUN3QixHQUFuQixDQUF1QnhLLFFBQXZCLEVBQWlDLE9BQWpDLEVBQTBDLFlBQVk7QUFBRTtBQUFhLEdBQXJFO0FBQ0QsQ0FGK0QsQ0FBaEUsQyxDQUlBOztBQUNBLElBQUl5SyxVQUFVLEdBQUcsVUFBVWhVLEVBQVYsRUFBYztBQUM3QixNQUFJTixJQUFKO0FBQ0EsU0FBT1csUUFBUSxDQUFDTCxFQUFELENBQVIsSUFBZ0IsUUFBUU4sSUFBSSxHQUFHTSxFQUFFLENBQUNOLElBQWxCLEtBQTJCLFVBQTNDLEdBQXdEQSxJQUF4RCxHQUErRCxLQUF0RTtBQUNELENBSEQ7O0FBS0EsSUFBSStLLE1BQU0sR0FBRyxVQUFVRyxPQUFWLEVBQW1CL0MsS0FBbkIsRUFBMEJvTSxRQUExQixFQUFvQztBQUMvQyxNQUFJcE0sS0FBSyxDQUFDcU0sUUFBVixFQUFvQjtBQUNwQnJNLE9BQUssQ0FBQ3FNLFFBQU4sR0FBaUIsSUFBakI7QUFDQSxNQUFJQyxLQUFLLEdBQUd0TSxLQUFLLENBQUN1TSxTQUFsQjtBQUNBckMsV0FBUyxDQUFDLFlBQVk7QUFDcEIsUUFBSTlRLEtBQUssR0FBRzRHLEtBQUssQ0FBQzVHLEtBQWxCO0FBQ0EsUUFBSW9ULEVBQUUsR0FBR3hNLEtBQUssQ0FBQ0EsS0FBTixJQUFlc0wsU0FBeEI7QUFDQSxRQUFJblMsS0FBSyxHQUFHLENBQVosQ0FIb0IsQ0FJcEI7O0FBQ0EsV0FBT21ULEtBQUssQ0FBQ3BULE1BQU4sR0FBZUMsS0FBdEIsRUFBNkI7QUFDM0IsVUFBSXNULFFBQVEsR0FBR0gsS0FBSyxDQUFDblQsS0FBSyxFQUFOLENBQXBCO0FBQ0EsVUFBSXVULE9BQU8sR0FBR0YsRUFBRSxHQUFHQyxRQUFRLENBQUNELEVBQVosR0FBaUJDLFFBQVEsQ0FBQ0UsSUFBMUM7QUFDQSxVQUFJalYsT0FBTyxHQUFHK1UsUUFBUSxDQUFDL1UsT0FBdkI7QUFDQSxVQUFJQyxNQUFNLEdBQUc4VSxRQUFRLENBQUM5VSxNQUF0QjtBQUNBLFVBQUlzTCxNQUFNLEdBQUd3SixRQUFRLENBQUN4SixNQUF0QjtBQUNBLFVBQUl2SCxNQUFKLEVBQVk3RCxJQUFaLEVBQWtCK1UsTUFBbEI7O0FBQ0EsVUFBSTtBQUNGLFlBQUlGLE9BQUosRUFBYTtBQUNYLGNBQUksQ0FBQ0YsRUFBTCxFQUFTO0FBQ1AsZ0JBQUl4TSxLQUFLLENBQUM2TSxTQUFOLEtBQW9CcEIsU0FBeEIsRUFBbUNxQixpQkFBaUIsQ0FBQy9KLE9BQUQsRUFBVS9DLEtBQVYsQ0FBakI7QUFDbkNBLGlCQUFLLENBQUM2TSxTQUFOLEdBQWtCckIsT0FBbEI7QUFDRDs7QUFDRCxjQUFJa0IsT0FBTyxLQUFLLElBQWhCLEVBQXNCaFIsTUFBTSxHQUFHdEMsS0FBVCxDQUF0QixLQUNLO0FBQ0gsZ0JBQUk2SixNQUFKLEVBQVlBLE1BQU0sQ0FBQ0UsS0FBUDtBQUNaekgsa0JBQU0sR0FBR2dSLE9BQU8sQ0FBQ3RULEtBQUQsQ0FBaEIsQ0FGRyxDQUVzQjs7QUFDekIsZ0JBQUk2SixNQUFKLEVBQVk7QUFDVkEsb0JBQU0sQ0FBQ0MsSUFBUDtBQUNBMEosb0JBQU0sR0FBRyxJQUFUO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJbFIsTUFBTSxLQUFLK1EsUUFBUSxDQUFDMUosT0FBeEIsRUFBaUM7QUFDL0JwTCxrQkFBTSxDQUFDUyxTQUFTLENBQUMscUJBQUQsQ0FBVixDQUFOO0FBQ0QsV0FGRCxNQUVPLElBQUlQLElBQUksR0FBR3NVLFVBQVUsQ0FBQ3pRLE1BQUQsQ0FBckIsRUFBK0I7QUFDcEM3RCxnQkFBSSxDQUFDOEIsSUFBTCxDQUFVK0IsTUFBVixFQUFrQmhFLE9BQWxCLEVBQTJCQyxNQUEzQjtBQUNELFdBRk0sTUFFQUQsT0FBTyxDQUFDZ0UsTUFBRCxDQUFQO0FBQ1IsU0FuQkQsTUFtQk8vRCxNQUFNLENBQUN5QixLQUFELENBQU47QUFDUixPQXJCRCxDQXFCRSxPQUFPZSxLQUFQLEVBQWM7QUFDZCxZQUFJOEksTUFBTSxJQUFJLENBQUMySixNQUFmLEVBQXVCM0osTUFBTSxDQUFDQyxJQUFQO0FBQ3ZCdkwsY0FBTSxDQUFDd0MsS0FBRCxDQUFOO0FBQ0Q7QUFDRjs7QUFDRDZGLFNBQUssQ0FBQ3VNLFNBQU4sR0FBa0IsRUFBbEI7QUFDQXZNLFNBQUssQ0FBQ3FNLFFBQU4sR0FBaUIsS0FBakI7QUFDQSxRQUFJRCxRQUFRLElBQUksQ0FBQ3BNLEtBQUssQ0FBQzZNLFNBQXZCLEVBQWtDRSxXQUFXLENBQUNoSyxPQUFELEVBQVUvQyxLQUFWLENBQVg7QUFDbkMsR0F6Q1EsQ0FBVDtBQTBDRCxDQTlDRDs7QUFnREEsSUFBSWtMLGFBQWEsR0FBRyxVQUFVM1MsSUFBVixFQUFnQndLLE9BQWhCLEVBQXlCaUssTUFBekIsRUFBaUM7QUFDbkQsTUFBSXRGLEtBQUosRUFBV2dGLE9BQVg7O0FBQ0EsTUFBSTFCLGNBQUosRUFBb0I7QUFDbEJ0RCxTQUFLLEdBQUczSyxRQUFRLENBQUNrTyxXQUFULENBQXFCLE9BQXJCLENBQVI7QUFDQXZELFNBQUssQ0FBQzNFLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0EyRSxTQUFLLENBQUNzRixNQUFOLEdBQWVBLE1BQWY7QUFDQXRGLFNBQUssQ0FBQ3VGLFNBQU4sQ0FBZ0IxVSxJQUFoQixFQUFzQixLQUF0QixFQUE2QixJQUE3QjtBQUNBdUUsVUFBTSxDQUFDb08sYUFBUCxDQUFxQnhELEtBQXJCO0FBQ0QsR0FORCxNQU1PQSxLQUFLLEdBQUc7QUFBRTNFLFdBQU8sRUFBRUEsT0FBWDtBQUFvQmlLLFVBQU0sRUFBRUE7QUFBNUIsR0FBUjs7QUFDUCxNQUFJTixPQUFPLEdBQUc1UCxNQUFNLENBQUMsT0FBT3ZFLElBQVIsQ0FBcEIsRUFBbUNtVSxPQUFPLENBQUNoRixLQUFELENBQVAsQ0FBbkMsS0FDSyxJQUFJblAsSUFBSSxLQUFLNFMsbUJBQWIsRUFBa0NmLGdCQUFnQixDQUFDLDZCQUFELEVBQWdDNEMsTUFBaEMsQ0FBaEI7QUFDeEMsQ0FYRDs7QUFhQSxJQUFJRCxXQUFXLEdBQUcsVUFBVWhLLE9BQVYsRUFBbUIvQyxLQUFuQixFQUEwQjtBQUMxQ3lELE1BQUksQ0FBQzlKLElBQUwsQ0FBVW1ELE1BQVYsRUFBa0IsWUFBWTtBQUM1QixRQUFJMUQsS0FBSyxHQUFHNEcsS0FBSyxDQUFDNUcsS0FBbEI7QUFDQSxRQUFJOFQsWUFBWSxHQUFHQyxXQUFXLENBQUNuTixLQUFELENBQTlCO0FBQ0EsUUFBSXRFLE1BQUo7O0FBQ0EsUUFBSXdSLFlBQUosRUFBa0I7QUFDaEJ4UixZQUFNLEdBQUc0TyxPQUFPLENBQUMsWUFBWTtBQUMzQixZQUFJaEksT0FBSixFQUFhO0FBQ1hELGlCQUFPLENBQUMrSyxJQUFSLENBQWEsb0JBQWIsRUFBbUNoVSxLQUFuQyxFQUEwQzJKLE9BQTFDO0FBQ0QsU0FGRCxNQUVPbUksYUFBYSxDQUFDQyxtQkFBRCxFQUFzQnBJLE9BQXRCLEVBQStCM0osS0FBL0IsQ0FBYjtBQUNSLE9BSmUsQ0FBaEIsQ0FEZ0IsQ0FNaEI7O0FBQ0E0RyxXQUFLLENBQUM2TSxTQUFOLEdBQWtCdkssT0FBTyxJQUFJNkssV0FBVyxDQUFDbk4sS0FBRCxDQUF0QixHQUFnQ3lMLFNBQWhDLEdBQTRDRCxPQUE5RDtBQUNBLFVBQUk5UCxNQUFNLENBQUN2QixLQUFYLEVBQWtCLE1BQU11QixNQUFNLENBQUN0QyxLQUFiO0FBQ25CO0FBQ0YsR0FkRDtBQWVELENBaEJEOztBQWtCQSxJQUFJK1QsV0FBVyxHQUFHLFVBQVVuTixLQUFWLEVBQWlCO0FBQ2pDLFNBQU9BLEtBQUssQ0FBQzZNLFNBQU4sS0FBb0JyQixPQUFwQixJQUErQixDQUFDeEwsS0FBSyxDQUFDZ0QsTUFBN0M7QUFDRCxDQUZEOztBQUlBLElBQUk4SixpQkFBaUIsR0FBRyxVQUFVL0osT0FBVixFQUFtQi9DLEtBQW5CLEVBQTBCO0FBQ2hEeUQsTUFBSSxDQUFDOUosSUFBTCxDQUFVbUQsTUFBVixFQUFrQixZQUFZO0FBQzVCLFFBQUl3RixPQUFKLEVBQWE7QUFDWEQsYUFBTyxDQUFDK0ssSUFBUixDQUFhLGtCQUFiLEVBQWlDckssT0FBakM7QUFDRCxLQUZELE1BRU9tSSxhQUFhLENBQUNFLGlCQUFELEVBQW9CckksT0FBcEIsRUFBNkIvQyxLQUFLLENBQUM1RyxLQUFuQyxDQUFiO0FBQ1IsR0FKRDtBQUtELENBTkQ7O0FBUUEsSUFBSWdJLElBQUksR0FBRyxVQUFVNUgsRUFBVixFQUFjdUosT0FBZCxFQUF1Qi9DLEtBQXZCLEVBQThCcU4sTUFBOUIsRUFBc0M7QUFDL0MsU0FBTyxVQUFValUsS0FBVixFQUFpQjtBQUN0QkksTUFBRSxDQUFDdUosT0FBRCxFQUFVL0MsS0FBVixFQUFpQjVHLEtBQWpCLEVBQXdCaVUsTUFBeEIsQ0FBRjtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BLElBQUlDLGNBQWMsR0FBRyxVQUFVdkssT0FBVixFQUFtQi9DLEtBQW5CLEVBQTBCNUcsS0FBMUIsRUFBaUNpVSxNQUFqQyxFQUF5QztBQUM1RCxNQUFJck4sS0FBSyxDQUFDckYsSUFBVixFQUFnQjtBQUNoQnFGLE9BQUssQ0FBQ3JGLElBQU4sR0FBYSxJQUFiO0FBQ0EsTUFBSTBTLE1BQUosRUFBWXJOLEtBQUssR0FBR3FOLE1BQVI7QUFDWnJOLE9BQUssQ0FBQzVHLEtBQU4sR0FBY0EsS0FBZDtBQUNBNEcsT0FBSyxDQUFDQSxLQUFOLEdBQWN1TCxRQUFkO0FBQ0EzSSxRQUFNLENBQUNHLE9BQUQsRUFBVS9DLEtBQVYsRUFBaUIsSUFBakIsQ0FBTjtBQUNELENBUEQ7O0FBU0EsSUFBSXVOLGVBQWUsR0FBRyxVQUFVeEssT0FBVixFQUFtQi9DLEtBQW5CLEVBQTBCNUcsS0FBMUIsRUFBaUNpVSxNQUFqQyxFQUF5QztBQUM3RCxNQUFJck4sS0FBSyxDQUFDckYsSUFBVixFQUFnQjtBQUNoQnFGLE9BQUssQ0FBQ3JGLElBQU4sR0FBYSxJQUFiO0FBQ0EsTUFBSTBTLE1BQUosRUFBWXJOLEtBQUssR0FBR3FOLE1BQVI7O0FBQ1osTUFBSTtBQUNGLFFBQUl0SyxPQUFPLEtBQUszSixLQUFoQixFQUF1QixNQUFNaEIsU0FBUyxDQUFDLGtDQUFELENBQWY7QUFDdkIsUUFBSVAsSUFBSSxHQUFHc1UsVUFBVSxDQUFDL1MsS0FBRCxDQUFyQjs7QUFDQSxRQUFJdkIsSUFBSixFQUFVO0FBQ1JxUyxlQUFTLENBQUMsWUFBWTtBQUNwQixZQUFJc0QsT0FBTyxHQUFHO0FBQUU3UyxjQUFJLEVBQUU7QUFBUixTQUFkOztBQUNBLFlBQUk7QUFDRjlDLGNBQUksQ0FBQzhCLElBQUwsQ0FBVVAsS0FBVixFQUNFZ0ksSUFBSSxDQUFDbU0sZUFBRCxFQUFrQnhLLE9BQWxCLEVBQTJCeUssT0FBM0IsRUFBb0N4TixLQUFwQyxDQUROLEVBRUVvQixJQUFJLENBQUNrTSxjQUFELEVBQWlCdkssT0FBakIsRUFBMEJ5SyxPQUExQixFQUFtQ3hOLEtBQW5DLENBRk47QUFJRCxTQUxELENBS0UsT0FBTzdGLEtBQVAsRUFBYztBQUNkbVQsd0JBQWMsQ0FBQ3ZLLE9BQUQsRUFBVXlLLE9BQVYsRUFBbUJyVCxLQUFuQixFQUEwQjZGLEtBQTFCLENBQWQ7QUFDRDtBQUNGLE9BVlEsQ0FBVDtBQVdELEtBWkQsTUFZTztBQUNMQSxXQUFLLENBQUM1RyxLQUFOLEdBQWNBLEtBQWQ7QUFDQTRHLFdBQUssQ0FBQ0EsS0FBTixHQUFjc0wsU0FBZDtBQUNBMUksWUFBTSxDQUFDRyxPQUFELEVBQVUvQyxLQUFWLEVBQWlCLEtBQWpCLENBQU47QUFDRDtBQUNGLEdBcEJELENBb0JFLE9BQU83RixLQUFQLEVBQWM7QUFDZG1ULGtCQUFjLENBQUN2SyxPQUFELEVBQVU7QUFBRXBJLFVBQUksRUFBRTtBQUFSLEtBQVYsRUFBMkJSLEtBQTNCLEVBQWtDNkYsS0FBbEMsQ0FBZDtBQUNEO0FBQ0YsQ0EzQkQsQyxDQTZCQTs7O0FBQ0EsSUFBSXBDLE1BQUosRUFBWTtBQUNWO0FBQ0E4TSxvQkFBa0IsR0FBRyxTQUFTalQsT0FBVCxDQUFpQmdXLFFBQWpCLEVBQTJCO0FBQzlDMUQsY0FBVSxDQUFDLElBQUQsRUFBT1csa0JBQVAsRUFBMkJILE9BQTNCLENBQVY7QUFDQWhSLGFBQVMsQ0FBQ2tVLFFBQUQsQ0FBVDtBQUNBL0IsWUFBUSxDQUFDL1IsSUFBVCxDQUFjLElBQWQ7QUFDQSxRQUFJcUcsS0FBSyxHQUFHd0YsZ0JBQWdCLENBQUMsSUFBRCxDQUE1Qjs7QUFDQSxRQUFJO0FBQ0ZpSSxjQUFRLENBQUNyTSxJQUFJLENBQUNtTSxlQUFELEVBQWtCLElBQWxCLEVBQXdCdk4sS0FBeEIsQ0FBTCxFQUFxQ29CLElBQUksQ0FBQ2tNLGNBQUQsRUFBaUIsSUFBakIsRUFBdUJ0TixLQUF2QixDQUF6QyxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU83RixLQUFQLEVBQWM7QUFDZG1ULG9CQUFjLENBQUMsSUFBRCxFQUFPdE4sS0FBUCxFQUFjN0YsS0FBZCxDQUFkO0FBQ0Q7QUFDRixHQVZELENBRlUsQ0FhVjs7O0FBQ0F1UixVQUFRLEdBQUcsU0FBU2pVLE9BQVQsQ0FBaUJnVyxRQUFqQixFQUEyQjtBQUNwQ2pELG9CQUFnQixDQUFDLElBQUQsRUFBTztBQUNyQnZLLFVBQUksRUFBRXNLLE9BRGU7QUFFckI1UCxVQUFJLEVBQUUsS0FGZTtBQUdyQjBSLGNBQVEsRUFBRSxLQUhXO0FBSXJCckosWUFBTSxFQUFFLEtBSmE7QUFLckJ1SixlQUFTLEVBQUUsRUFMVTtBQU1yQk0sZUFBUyxFQUFFLEtBTlU7QUFPckI3TSxXQUFLLEVBQUVxTCxPQVBjO0FBUXJCalMsV0FBSyxFQUFFTTtBQVJjLEtBQVAsQ0FBaEI7QUFVRCxHQVhEOztBQVlBZ1MsVUFBUSxDQUFDMU4sU0FBVCxHQUFxQjRMLFdBQVcsQ0FBQ2Msa0JBQWtCLENBQUMxTSxTQUFwQixFQUErQjtBQUM3RDtBQUNBO0FBQ0FuRyxRQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjNlYsV0FBZCxFQUEyQkMsVUFBM0IsRUFBdUM7QUFDM0MsVUFBSTNOLEtBQUssR0FBR3lLLHVCQUF1QixDQUFDLElBQUQsQ0FBbkM7QUFDQSxVQUFJZ0MsUUFBUSxHQUFHdEgsb0JBQW9CLENBQUM4RSxrQkFBa0IsQ0FBQyxJQUFELEVBQU9TLGtCQUFQLENBQW5CLENBQW5DO0FBQ0ErQixjQUFRLENBQUNELEVBQVQsR0FBYyxPQUFPa0IsV0FBUCxJQUFzQixVQUF0QixHQUFtQ0EsV0FBbkMsR0FBaUQsSUFBL0Q7QUFDQWpCLGNBQVEsQ0FBQ0UsSUFBVCxHQUFnQixPQUFPZ0IsVUFBUCxJQUFxQixVQUFyQixJQUFtQ0EsVUFBbkQ7QUFDQWxCLGNBQVEsQ0FBQ3hKLE1BQVQsR0FBa0JYLE9BQU8sR0FBR0QsT0FBTyxDQUFDWSxNQUFYLEdBQW9CdkosU0FBN0M7QUFDQXNHLFdBQUssQ0FBQ2dELE1BQU4sR0FBZSxJQUFmO0FBQ0FoRCxXQUFLLENBQUN1TSxTQUFOLENBQWdCMUgsSUFBaEIsQ0FBcUI0SCxRQUFyQjtBQUNBLFVBQUl6TSxLQUFLLENBQUNBLEtBQU4sSUFBZXFMLE9BQW5CLEVBQTRCekksTUFBTSxDQUFDLElBQUQsRUFBTzVDLEtBQVAsRUFBYyxLQUFkLENBQU47QUFDNUIsYUFBT3lNLFFBQVEsQ0FBQzFKLE9BQWhCO0FBQ0QsS0FiNEQ7QUFjN0Q7QUFDQTtBQUNBLGFBQVMsVUFBVTRLLFVBQVYsRUFBc0I7QUFDN0IsYUFBTyxLQUFLOVYsSUFBTCxDQUFVNkIsU0FBVixFQUFxQmlVLFVBQXJCLENBQVA7QUFDRDtBQWxCNEQsR0FBL0IsQ0FBaEM7O0FBb0JBaEMsc0JBQW9CLEdBQUcsWUFBWTtBQUNqQyxRQUFJNUksT0FBTyxHQUFHLElBQUkySSxRQUFKLEVBQWQ7QUFDQSxRQUFJMUwsS0FBSyxHQUFHd0YsZ0JBQWdCLENBQUN6QyxPQUFELENBQTVCO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3JMLE9BQUwsR0FBZTBKLElBQUksQ0FBQ21NLGVBQUQsRUFBa0J4SyxPQUFsQixFQUEyQi9DLEtBQTNCLENBQW5CO0FBQ0EsU0FBS3JJLE1BQUwsR0FBY3lKLElBQUksQ0FBQ2tNLGNBQUQsRUFBaUJ2SyxPQUFqQixFQUEwQi9DLEtBQTFCLENBQWxCO0FBQ0QsR0FORDs7QUFPQXFLLDRCQUEwQixDQUFDaE8sQ0FBM0IsR0FBK0I4SSxvQkFBb0IsR0FBRyxVQUFVckIsQ0FBVixFQUFhO0FBQ2pFLFdBQU9BLENBQUMsS0FBSzRHLGtCQUFOLElBQTRCNUcsQ0FBQyxLQUFLOEgsY0FBbEMsR0FDSCxJQUFJRCxvQkFBSixDQUF5QjdILENBQXpCLENBREcsR0FFSGlILDJCQUEyQixDQUFDakgsQ0FBRCxDQUYvQjtBQUdELEdBSkQ7O0FBTUEsTUFBSSxDQUFDb0MsT0FBRCxJQUFZLE9BQU95RCxhQUFQLElBQXdCLFVBQXhDLEVBQW9EO0FBQ2xEa0MsY0FBVSxHQUFHbEMsYUFBYSxDQUFDM0wsU0FBZCxDQUF3Qm5HLElBQXJDLENBRGtELENBR2xEOztBQUNBc0YsWUFBUSxDQUFDd00sYUFBYSxDQUFDM0wsU0FBZixFQUEwQixNQUExQixFQUFrQyxTQUFTbkcsSUFBVCxDQUFjNlYsV0FBZCxFQUEyQkMsVUFBM0IsRUFBdUM7QUFDL0UsVUFBSWxVLElBQUksR0FBRyxJQUFYO0FBQ0EsYUFBTyxJQUFJaVIsa0JBQUosQ0FBdUIsVUFBVWhULE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZEa1Usa0JBQVUsQ0FBQ2xTLElBQVgsQ0FBZ0JGLElBQWhCLEVBQXNCL0IsT0FBdEIsRUFBK0JDLE1BQS9CO0FBQ0QsT0FGTSxFQUVKRSxJQUZJLENBRUM2VixXQUZELEVBRWNDLFVBRmQsQ0FBUDtBQUdELEtBTE8sQ0FBUixDQUprRCxDQVdsRDs7QUFDQSxRQUFJLE9BQU9oRCxNQUFQLElBQWlCLFVBQXJCLEVBQWlDakIsQ0FBQyxDQUFDO0FBQUU1TSxZQUFNLEVBQUUsSUFBVjtBQUFnQkwsZ0JBQVUsRUFBRSxJQUE1QjtBQUFrQ3lCLFlBQU0sRUFBRTtBQUExQyxLQUFELEVBQW1EO0FBQ25GO0FBQ0EwTSxXQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlMUIsS0FBZixFQUFzQjtBQUMzQixlQUFPaUIsY0FBYyxDQUFDTyxrQkFBRCxFQUFxQkMsTUFBTSxDQUFDN1EsS0FBUCxDQUFhZ0QsTUFBYixFQUFxQi9DLFNBQXJCLENBQXJCLENBQXJCO0FBQ0Q7QUFKa0YsS0FBbkQsQ0FBRDtBQU1sQztBQUNGOztBQUVEMlAsQ0FBQyxDQUFDO0FBQUU1TSxRQUFNLEVBQUUsSUFBVjtBQUFnQjhRLE1BQUksRUFBRSxJQUF0QjtBQUE0QjFQLFFBQU0sRUFBRU47QUFBcEMsQ0FBRCxFQUErQztBQUM5Q25HLFNBQU8sRUFBRWlUO0FBRHFDLENBQS9DLENBQUQ7QUFJQWIsY0FBYyxDQUFDYSxrQkFBRCxFQUFxQkgsT0FBckIsRUFBOEIsS0FBOUIsRUFBcUMsSUFBckMsQ0FBZDtBQUNBVCxVQUFVLENBQUNTLE9BQUQsQ0FBVjtBQUVBcUIsY0FBYyxHQUFHdE4sSUFBSSxDQUFDaU0sT0FBRCxDQUFyQixDLENBRUE7O0FBQ0FiLENBQUMsQ0FBQztBQUFFek4sUUFBTSxFQUFFc08sT0FBVjtBQUFtQjVNLE1BQUksRUFBRSxJQUF6QjtBQUErQk8sUUFBTSxFQUFFTjtBQUF2QyxDQUFELEVBQWtEO0FBQ2pEO0FBQ0E7QUFDQWpHLFFBQU0sRUFBRSxTQUFTQSxNQUFULENBQWdCa1csQ0FBaEIsRUFBbUI7QUFDekIsUUFBSUMsVUFBVSxHQUFHM0ksb0JBQW9CLENBQUMsSUFBRCxDQUFyQztBQUNBMkksY0FBVSxDQUFDblcsTUFBWCxDQUFrQmdDLElBQWxCLENBQXVCRCxTQUF2QixFQUFrQ21VLENBQWxDO0FBQ0EsV0FBT0MsVUFBVSxDQUFDL0ssT0FBbEI7QUFDRDtBQVBnRCxDQUFsRCxDQUFEO0FBVUEyRyxDQUFDLENBQUM7QUFBRXpOLFFBQU0sRUFBRXNPLE9BQVY7QUFBbUI1TSxNQUFJLEVBQUUsSUFBekI7QUFBK0JPLFFBQU0sRUFBRWdJLE9BQU8sSUFBSXRJO0FBQWxELENBQUQsRUFBNkQ7QUFDNUQ7QUFDQTtBQUNBbEcsU0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJILENBQWpCLEVBQW9CO0FBQzNCLFdBQU80UyxjQUFjLENBQUNqRSxPQUFPLElBQUksU0FBUzBGLGNBQXBCLEdBQXFDbEIsa0JBQXJDLEdBQTBELElBQTNELEVBQWlFblQsQ0FBakUsQ0FBckI7QUFDRDtBQUwyRCxDQUE3RCxDQUFEO0FBUUFtUyxDQUFDLENBQUM7QUFBRXpOLFFBQU0sRUFBRXNPLE9BQVY7QUFBbUI1TSxNQUFJLEVBQUUsSUFBekI7QUFBK0JPLFFBQU0sRUFBRStOO0FBQXZDLENBQUQsRUFBK0Q7QUFDOUQ7QUFDQTtBQUNBQyxLQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFheEssUUFBYixFQUF1QjtBQUMxQixRQUFJb0MsQ0FBQyxHQUFHLElBQVI7QUFDQSxRQUFJZ0ssVUFBVSxHQUFHM0ksb0JBQW9CLENBQUNyQixDQUFELENBQXJDO0FBQ0EsUUFBSXBNLE9BQU8sR0FBR29XLFVBQVUsQ0FBQ3BXLE9BQXpCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHbVcsVUFBVSxDQUFDblcsTUFBeEI7QUFDQSxRQUFJK0QsTUFBTSxHQUFHNE8sT0FBTyxDQUFDLFlBQVk7QUFDL0IsVUFBSXlELGVBQWUsR0FBR3hVLFNBQVMsQ0FBQ3VLLENBQUMsQ0FBQ3BNLE9BQUgsQ0FBL0I7QUFDQSxVQUFJc1csTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJaEgsT0FBTyxHQUFHLENBQWQ7QUFDQSxVQUFJaUgsU0FBUyxHQUFHLENBQWhCO0FBQ0F4TSxhQUFPLENBQUNDLFFBQUQsRUFBVyxVQUFVcUIsT0FBVixFQUFtQjtBQUNuQyxZQUFJNUosS0FBSyxHQUFHNk4sT0FBTyxFQUFuQjtBQUNBLFlBQUlrSCxhQUFhLEdBQUcsS0FBcEI7QUFDQUYsY0FBTSxDQUFDbkosSUFBUCxDQUFZbkwsU0FBWjtBQUNBdVUsaUJBQVM7QUFDVEYsdUJBQWUsQ0FBQ3BVLElBQWhCLENBQXFCbUssQ0FBckIsRUFBd0JmLE9BQXhCLEVBQWlDbEwsSUFBakMsQ0FBc0MsVUFBVXVCLEtBQVYsRUFBaUI7QUFDckQsY0FBSThVLGFBQUosRUFBbUI7QUFDbkJBLHVCQUFhLEdBQUcsSUFBaEI7QUFDQUYsZ0JBQU0sQ0FBQzdVLEtBQUQsQ0FBTixHQUFnQkMsS0FBaEI7QUFDQSxZQUFFNlUsU0FBRixJQUFldlcsT0FBTyxDQUFDc1csTUFBRCxDQUF0QjtBQUNELFNBTEQsRUFLR3JXLE1BTEg7QUFNRCxPQVhNLENBQVA7QUFZQSxRQUFFc1csU0FBRixJQUFldlcsT0FBTyxDQUFDc1csTUFBRCxDQUF0QjtBQUNELEtBbEJtQixDQUFwQjtBQW1CQSxRQUFJdFMsTUFBTSxDQUFDdkIsS0FBWCxFQUFrQnhDLE1BQU0sQ0FBQytELE1BQU0sQ0FBQ3RDLEtBQVIsQ0FBTjtBQUNsQixXQUFPMFUsVUFBVSxDQUFDL0ssT0FBbEI7QUFDRCxHQTdCNkQ7QUE4QjlEO0FBQ0E7QUFDQW9MLE1BQUksRUFBRSxTQUFTQSxJQUFULENBQWN6TSxRQUFkLEVBQXdCO0FBQzVCLFFBQUlvQyxDQUFDLEdBQUcsSUFBUjtBQUNBLFFBQUlnSyxVQUFVLEdBQUczSSxvQkFBb0IsQ0FBQ3JCLENBQUQsQ0FBckM7QUFDQSxRQUFJbk0sTUFBTSxHQUFHbVcsVUFBVSxDQUFDblcsTUFBeEI7QUFDQSxRQUFJK0QsTUFBTSxHQUFHNE8sT0FBTyxDQUFDLFlBQVk7QUFDL0IsVUFBSXlELGVBQWUsR0FBR3hVLFNBQVMsQ0FBQ3VLLENBQUMsQ0FBQ3BNLE9BQUgsQ0FBL0I7QUFDQStKLGFBQU8sQ0FBQ0MsUUFBRCxFQUFXLFVBQVVxQixPQUFWLEVBQW1CO0FBQ25DZ0wsdUJBQWUsQ0FBQ3BVLElBQWhCLENBQXFCbUssQ0FBckIsRUFBd0JmLE9BQXhCLEVBQWlDbEwsSUFBakMsQ0FBc0NpVyxVQUFVLENBQUNwVyxPQUFqRCxFQUEwREMsTUFBMUQ7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUxtQixDQUFwQjtBQU1BLFFBQUkrRCxNQUFNLENBQUN2QixLQUFYLEVBQWtCeEMsTUFBTSxDQUFDK0QsTUFBTSxDQUFDdEMsS0FBUixDQUFOO0FBQ2xCLFdBQU8wVSxVQUFVLENBQUMvSyxPQUFsQjtBQUNEO0FBNUM2RCxDQUEvRCxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVUEsSUFBTTNMLENBQUMsR0FBRyxDQUFWO0FBQ0FjLE9BQU8sQ0FBQ2QsQ0FBUixHQUFZQSxDQUFaO0FBQ0EsSUFBSUksQ0FBQyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBbUI7QUFDckNDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZGLFdBQU8sQ0FBQyxpQkFBRCxDQUFQO0FBQ0QsR0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdELENBSk8sQ0FBUjtBQUtBUSxPQUFPLENBQUNWLENBQVIsR0FBWUEsQ0FBWixDOzs7Ozs7Ozs7OztBQ1BBLElBQUk0VyxDQUFKLEMsQ0FFQTs7QUFDQUEsQ0FBQyxHQUFJLFlBQVc7QUFDZixTQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEdBQUMsR0FBR0EsQ0FBQyxJQUFJLElBQUkvUCxRQUFKLENBQWEsYUFBYixHQUFUO0FBQ0EsQ0FIRCxDQUdFLE9BQU9nUSxDQUFQLEVBQVU7QUFDWDtBQUNBLE1BQUksT0FBT3RQLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0NxUCxDQUFDLEdBQUdyUCxNQUFKO0FBQ2hDLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBOUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCa1csQ0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAuanNcIik7XG4iLCJjb25zdCBhID0gMVxyXG5jb25zb2xlLmxvZyhhKTtcclxubGV0IHggPSAoKT0+e1xyXG4gIGNvbnNvbGUubG9nKCd4Jyk7XHJcbiAgXHJcbn1cclxueCgpXHJcbmxldCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJlc29sdmUoJ29rJylcclxuICB9LCAxMDApO1xyXG59KVxyXG5wLnRoZW4oKHgpPT57XHJcbiAgY29uc29sZS5sb2coeClcclxufSlcclxubGV0IGFhID0gcmVxdWlyZSgnbi90ZXN0LmpzJylcclxuY29uc29sZS5sb2coJ25vZGVfbW9kdWxlcycpO1xyXG5jb25zb2xlLmxvZyhhYSk7XHJcbmFhLnAudGhlbihzPT57XHJcbiAgY29uc29sZS5sb2cocyk7XHJcbiAgXHJcbn0pXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgJyArIChuYW1lID8gbmFtZSArICcgJyA6ICcnKSArICdpbnZvY2F0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgaGlkZShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIE8gPSAnb2JqZWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09IE8gJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSBPICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gTyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09IE8gJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuICB9XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGhpZGUoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEFTX0VOVFJJRVMsIElTX0lURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgQVNfRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgc3RlcDtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEFTX0VOVFJJRVNcbiAgICAgICAgICA/IGJvdW5kRnVuY3Rpb24oYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIGJvdW5kRnVuY3Rpb24sIHN0ZXAudmFsdWUsIEFTX0VOVFJJRVMpO1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG5cbml0ZXJhdGUuc3RvcCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgcmVzdWx0KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbnZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBJU19OT0RFID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXG52YXIgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgJiYgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yLnZhbHVlO1xuXG52YXIgZmx1c2gsIGhlYWQsIGxhc3QsIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoSVNfTk9ERSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoSVNfTk9ERSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChNdXRhdGlvbk9ic2VydmVyICYmICEvKGlwaG9uZXxpcG9kfGlwYWQpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgdGhlbiA9IHByb21pc2UudGhlbjtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGVuLmNhbGwocHJvbWlzZSwgZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVldWVNaWNyb3Rhc2sgfHwgZnVuY3Rpb24gKGZuKSB7XG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYgKCFoZWFkKSB7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG5cbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgIT09ICdbb2JqZWN0IHpdJyA/IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59IDogdGVzdC50b1N0cmluZztcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhuYXRpdmVGdW5jdGlvblRvU3RyaW5nKS5zcGxpdCgndG9TdHJpbmcnKTtcblxuc2hhcmVkKCdpbnNwZWN0U291cmNlJywgZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xufSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgaGlkZSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBoaWRlKE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGhpZGUoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4yLjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG52YXIgc2V0ID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcnVuKGlkKTtcbiAgfTtcbn07XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4oZXZlbnQuZGF0YSk7XG59O1xuXG52YXIgcG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cbiAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQgfHwgIWNsZWFyKSB7XG4gIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMgJiYgIWZhaWxzKHBvc3QpKSB7XG4gICAgZGVmZXIgPSBwb3N0O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGxlbmd0aCwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgc3RvcmUgPSBzaGFyZWQoJ3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIFN5bWJvbFtuYW1lXVxuICAgIHx8IChOQVRJVkVfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZycpO1xuXG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKHRvU3RyaW5nICE9PSBPYmplY3RQcm90b3R5cGUudG9TdHJpbmcpIHtcbiAgcmVkZWZpbmUoT2JqZWN0UHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnbG9iYWwuZmV0Y2g7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5yZXNvbHZlKDEpO1xuICB2YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW1NQRUNJRVNdID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgcmV0dXJuICEoKElTX05PREUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICYmICghSVNfUFVSRSB8fCBwcm9taXNlWydmaW5hbGx5J10pXG4gICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xKTtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IGNoYWluW2luZGV4KytdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmIChoYW5kbGVyID0gZ2xvYmFsWydvbicgKyBuYW1lXSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBJU19VTkhBTkRMRUQgPSBpc1VuaGFuZGxlZChzdGF0ZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKElTX05PREUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoVU5IQU5ETEVEX1JFSkVDVElPTiwgcHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgc3RhdGUucmVqZWN0aW9uID0gSVNfTk9ERSB8fCBpc1VuaGFuZGxlZChzdGF0ZSkgPyBVTkhBTkRMRUQgOiBIQU5ETEVEO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJlamVjdGlvbiAhPT0gSEFORExFRCAmJiAhc3RhdGUucGFyZW50O1xufTtcblxudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcbiAgfSk7XG59O1xuXG52YXIgYmluZCA9IGZ1bmN0aW9uIChmbiwgcHJvbWlzZSwgc3RhdGUsIHVud3JhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm4ocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApO1xuICB9O1xufTtcblxudmFyIGludGVybmFsUmVqZWN0ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgbm90aWZ5KHByb21pc2UsIHN0YXRlLCB0cnVlKTtcbn07XG5cbnZhciBpbnRlcm5hbFJlc29sdmUgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgdmFyIHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKTtcbiAgICBpZiAodGhlbikge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlc29sdmUsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgd3JhcHBlciwgZXJyb3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICBzdGF0ZS5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbnRlcm5hbFJlamVjdChwcm9taXNlLCB7IGRvbmU6IGZhbHNlIH0sIGVycm9yLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoRk9SQ0VEKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB0aGlzLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHRoaXMsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHRoaXMsIHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB0eXBlOiBQUk9NSVNFLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBub3RpZmllZDogZmFsc2UsXG4gICAgICBwYXJlbnQ6IGZhbHNlLFxuICAgICAgcmVhY3Rpb25zOiBbXSxcbiAgICAgIHJlamVjdGlvbjogZmFsc2UsXG4gICAgICBzdGF0ZTogUEVORElORyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS50aGVuYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWFjdGlvbnMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgIT0gUEVORElORykgbm90aWZ5KHRoaXMsIHN0YXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbmF0aXZlVGhlbiA9IE5hdGl2ZVByb21pc2UucHJvdG90eXBlLnRoZW47XG5cbiAgICAvLyB3cmFwIG5hdGl2ZSBQcm9taXNlI3RoZW4gZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbiAgICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hdGl2ZVRoZW4uY2FsbCh0aGF0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICAvLyB3cmFwIGZldGNoIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGZldGNoOiBmdW5jdGlvbiBmZXRjaChpbnB1dCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBwYXRoW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsImNvbnN0IGEgPSAxXHJcbmV4cG9ydHMuYSA9IGFcclxubGV0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcmVzb2x2ZSgn5oiR5p2l6Ieqbm9kZV9tb2R1bGVzJylcclxuICB9LCAxMDApO1xyXG59KVxyXG5leHBvcnRzLnAgPSBwIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==