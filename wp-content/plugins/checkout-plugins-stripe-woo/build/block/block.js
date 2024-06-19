/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "react")) :
  0;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

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

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
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
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var usePrevious = function usePrevious(value) {
    var ref = React.useRef(value);
    React.useEffect(function () {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  var isUnknownObject = function isUnknownObject(raw) {
    return raw !== null && _typeof(raw) === 'object';
  };
  var isPromise = function isPromise(raw) {
    return isUnknownObject(raw) && typeof raw.then === 'function';
  }; // We are using types to enforce the `stripe` prop in this lib,
  // but in an untyped integration `stripe` could be anything, so we need
  // to do some sanity validation to prevent type errors.

  var isStripe = function isStripe(raw) {
    return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
  };

  var PLAIN_OBJECT_STR = '[object Object]';
  var isEqual = function isEqual(left, right) {
    if (!isUnknownObject(left) || !isUnknownObject(right)) {
      return left === right;
    }

    var leftArray = Array.isArray(left);
    var rightArray = Array.isArray(right);
    if (leftArray !== rightArray) return false;
    var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
    var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
    if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
    // fallback to reference check.

    if (!leftPlainObject && !leftArray) return left === right;
    var leftKeys = Object.keys(left);
    var rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) return false;
    var keySet = {};

    for (var i = 0; i < leftKeys.length; i += 1) {
      keySet[leftKeys[i]] = true;
    }

    for (var _i = 0; _i < rightKeys.length; _i += 1) {
      keySet[rightKeys[_i]] = true;
    }

    var allKeys = Object.keys(keySet);

    if (allKeys.length !== leftKeys.length) {
      return false;
    }

    var l = left;
    var r = right;

    var pred = function pred(key) {
      return isEqual(l[key], r[key]);
    };

    return allKeys.every(pred);
  };

  var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
    if (!isUnknownObject(options)) {
      return null;
    }

    return Object.keys(options).reduce(function (newOptions, key) {
      var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

      if (immutableKeys.includes(key)) {
        if (isUpdated) {
          console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
        }

        return newOptions;
      }

      if (!isUpdated) {
        return newOptions;
      }

      return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
    }, null);
  };

  var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
  // integration `stripe` could be anything, so we need to do some sanity
  // validation to prevent type errors.

  var validateStripe = function validateStripe(maybeStripe) {
    var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INVALID_STRIPE_ERROR;

    if (maybeStripe === null || isStripe(maybeStripe)) {
      return maybeStripe;
    }

    throw new Error(errorMsg);
  };

  var parseStripeProp = function parseStripeProp(raw) {
    var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INVALID_STRIPE_ERROR;

    if (isPromise(raw)) {
      return {
        tag: 'async',
        stripePromise: Promise.resolve(raw).then(function (result) {
          return validateStripe(result, errorMsg);
        })
      };
    }

    var stripe = validateStripe(raw, errorMsg);

    if (stripe === null) {
      return {
        tag: 'empty'
      };
    }

    return {
      tag: 'sync',
      stripe: stripe
    };
  };

  var registerWithStripeJs = function registerWithStripeJs(stripe) {
    if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
      return;
    }

    stripe._registerWrapper({
      name: 'react-stripe-js',
      version: "2.4.0"
    });

    stripe.registerAppInfo({
      name: 'react-stripe-js',
      version: "2.4.0",
      url: 'https://stripe.com/docs/stripe-js/react'
    });
  };

  var _excluded = ["on", "session"];
  var CustomCheckoutSdkContext = /*#__PURE__*/React.createContext(null);
  CustomCheckoutSdkContext.displayName = 'CustomCheckoutSdkContext';
  var parseCustomCheckoutSdkContext = function parseCustomCheckoutSdkContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CustomCheckoutProvider> provider."));
    }

    return ctx;
  };
  var CustomCheckoutContext = /*#__PURE__*/React.createContext(null);
  CustomCheckoutContext.displayName = 'CustomCheckoutContext';
  var extractCustomCheckoutContextValue = function extractCustomCheckoutContextValue(customCheckoutSdk, sessionState) {
    if (!customCheckoutSdk) {
      return null;
    }

    var _on = customCheckoutSdk.on,
        _session = customCheckoutSdk.session,
        actions = _objectWithoutProperties(customCheckoutSdk, _excluded);

    if (!sessionState) {
      return _objectSpread2(_objectSpread2({}, actions), customCheckoutSdk.session());
    }

    return _objectSpread2(_objectSpread2({}, actions), sessionState);
  };
  var INVALID_STRIPE_ERROR$1 = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
  var CustomCheckoutProvider = function CustomCheckoutProvider(_ref) {
    var rawStripeProp = _ref.stripe,
        options = _ref.options,
        children = _ref.children;
    var parsed = React.useMemo(function () {
      return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
    }, [rawStripeProp]); // State used to trigger a re-render when sdk.session is updated

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        session = _React$useState2[0],
        setSession = _React$useState2[1];

    var _React$useState3 = React.useState(function () {
      return {
        stripe: parsed.tag === 'sync' ? parsed.stripe : null,
        customCheckoutSdk: null
      };
    }),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        ctx = _React$useState4[0],
        setContext = _React$useState4[1];

    var safeSetContext = function safeSetContext(stripe, customCheckoutSdk) {
      setContext(function (ctx) {
        if (ctx.stripe && ctx.customCheckoutSdk) {
          return ctx;
        }

        return {
          stripe: stripe,
          customCheckoutSdk: customCheckoutSdk
        };
      });
    }; // Ref used to avoid calling initCustomCheckout multiple times when options changes


    var initCustomCheckoutCalledRef = React.useRef(false);
    React.useEffect(function () {
      var isMounted = true;

      if (parsed.tag === 'async' && !ctx.stripe) {
        parsed.stripePromise.then(function (stripe) {
          if (stripe && isMounted && !initCustomCheckoutCalledRef.current) {
            // Only update context if the component is still mounted
            // and stripe is not null. We allow stripe to be null to make
            // handling SSR easier.
            initCustomCheckoutCalledRef.current = true;
            stripe.initCustomCheckout(options).then(function (customCheckoutSdk) {
              if (customCheckoutSdk) {
                safeSetContext(stripe, customCheckoutSdk);
                customCheckoutSdk.on('change', setSession);
              }
            });
          }
        });
      } else if (parsed.tag === 'sync' && parsed.stripe && !initCustomCheckoutCalledRef.current) {
        initCustomCheckoutCalledRef.current = true;
        parsed.stripe.initCustomCheckout(options).then(function (customCheckoutSdk) {
          if (customCheckoutSdk) {
            safeSetContext(parsed.stripe, customCheckoutSdk);
            customCheckoutSdk.on('change', setSession);
          }
        });
      }

      return function () {
        isMounted = false;
      };
    }, [parsed, ctx, options, setSession]); // Warn on changes to stripe prop

    var prevStripe = usePrevious(rawStripeProp);
    React.useEffect(function () {
      if (prevStripe !== null && prevStripe !== rawStripeProp) {
        console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
      }
    }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

    var prevOptions = usePrevious(options);
    React.useEffect(function () {
      var _prevOptions$elements, _options$elementsOpti;

      if (!ctx.customCheckoutSdk) {
        return;
      }

      if (options.clientSecret && !isUnknownObject(prevOptions) && !isEqual(options.clientSecret, prevOptions.clientSecret)) {
        console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
      }

      var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
      var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;

      if (currentAppearance && !isEqual(currentAppearance, previousAppearance)) {
        ctx.customCheckoutSdk.changeAppearance(currentAppearance);
      }
    }, [options, prevOptions, ctx.customCheckoutSdk]); // Attach react-stripe-js version to stripe.js instance

    React.useEffect(function () {
      registerWithStripeJs(ctx.stripe);
    }, [ctx.stripe]);
    var customCheckoutContextValue = React.useMemo(function () {
      return extractCustomCheckoutContextValue(ctx.customCheckoutSdk, session);
    }, [ctx.customCheckoutSdk, session]);

    if (!ctx.customCheckoutSdk) {
      return null;
    }

    return /*#__PURE__*/React.createElement(CustomCheckoutSdkContext.Provider, {
      value: ctx
    }, /*#__PURE__*/React.createElement(CustomCheckoutContext.Provider, {
      value: customCheckoutContextValue
    }, children));
  };
  CustomCheckoutProvider.propTypes = {
    stripe: propTypes.any,
    options: propTypes.shape({
      clientSecret: propTypes.string.isRequired,
      elementsOptions: propTypes.object
    }).isRequired
  };
  var useCustomCheckoutSdkContextWithUseCase = function useCustomCheckoutSdkContextWithUseCase(useCaseString) {
    var ctx = React.useContext(CustomCheckoutSdkContext);
    return parseCustomCheckoutSdkContext(ctx, useCaseString);
  };
  var useElementsOrCustomCheckoutSdkContextWithUseCase = function useElementsOrCustomCheckoutSdkContextWithUseCase(useCaseString) {
    var customCheckoutSdkContext = React.useContext(CustomCheckoutSdkContext);
    var elementsContext = React.useContext(ElementsContext);

    if (customCheckoutSdkContext && elementsContext) {
      throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CustomCheckoutProvider> and <Elements> providers."));
    }

    if (customCheckoutSdkContext) {
      return parseCustomCheckoutSdkContext(customCheckoutSdkContext, useCaseString);
    }

    return parseElementsContext(elementsContext, useCaseString);
  };
  var useCustomCheckout = function useCustomCheckout() {
    // ensure it's in CustomCheckoutProvider
    useCustomCheckoutSdkContextWithUseCase('calls useCustomCheckout()');
    var ctx = React.useContext(CustomCheckoutContext);

    if (!ctx) {
      throw new Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
    }

    return ctx;
  };

  var ElementsContext = /*#__PURE__*/React.createContext(null);
  ElementsContext.displayName = 'ElementsContext';
  var parseElementsContext = function parseElementsContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    }

    return ctx;
  };
  var CartElementContext = /*#__PURE__*/React.createContext(null);
  CartElementContext.displayName = 'CartElementContext';
  var parseCartElementContext = function parseCartElementContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    }

    return ctx;
  };
  /**
   * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
   * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
   *
   * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
   * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
   * Pass the returned `Promise` to `Elements`.
   *
   * @docs https://stripe.com/docs/stripe-js/react#elements-provider
   */

  var Elements = function Elements(_ref) {
    var rawStripeProp = _ref.stripe,
        options = _ref.options,
        children = _ref.children;
    var parsed = React.useMemo(function () {
      return parseStripeProp(rawStripeProp);
    }, [rawStripeProp]);

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        cart = _React$useState2[0],
        setCart = _React$useState2[1];

    var _React$useState3 = React.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        cartState = _React$useState4[0],
        setCartState = _React$useState4[1]; // For a sync stripe instance, initialize into context


    var _React$useState5 = React.useState(function () {
      return {
        stripe: parsed.tag === 'sync' ? parsed.stripe : null,
        elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
      };
    }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        ctx = _React$useState6[0],
        setContext = _React$useState6[1];

    React.useEffect(function () {
      var isMounted = true;

      var safeSetContext = function safeSetContext(stripe) {
        setContext(function (ctx) {
          // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
          if (ctx.stripe) return ctx;
          return {
            stripe: stripe,
            elements: stripe.elements(options)
          };
        });
      }; // For an async stripePromise, store it in context once resolved


      if (parsed.tag === 'async' && !ctx.stripe) {
        parsed.stripePromise.then(function (stripe) {
          if (stripe && isMounted) {
            // Only update Elements context if the component is still mounted
            // and stripe is not null. We allow stripe to be null to make
            // handling SSR easier.
            safeSetContext(stripe);
          }
        });
      } else if (parsed.tag === 'sync' && !ctx.stripe) {
        // Or, handle a sync stripe instance going from null -> populated
        safeSetContext(parsed.stripe);
      }

      return function () {
        isMounted = false;
      };
    }, [parsed, ctx, options]); // Warn on changes to stripe prop

    var prevStripe = usePrevious(rawStripeProp);
    React.useEffect(function () {
      if (prevStripe !== null && prevStripe !== rawStripeProp) {
        console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
      }
    }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

    var prevOptions = usePrevious(options);
    React.useEffect(function () {
      if (!ctx.elements) {
        return;
      }

      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

      if (updates) {
        ctx.elements.update(updates);
      }
    }, [options, prevOptions, ctx.elements]); // Attach react-stripe-js version to stripe.js instance

    React.useEffect(function () {
      registerWithStripeJs(ctx.stripe);
    }, [ctx.stripe]);
    return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
      value: ctx
    }, /*#__PURE__*/React.createElement(CartElementContext.Provider, {
      value: {
        cart: cart,
        setCart: setCart,
        cartState: cartState,
        setCartState: setCartState
      }
    }, children));
  };
  Elements.propTypes = {
    stripe: propTypes.any,
    options: propTypes.object
  };
  var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
    var ctx = React.useContext(ElementsContext);
    return parseElementsContext(ctx, useCaseMessage);
  };
  var DUMMY_CART_ELEMENT_CONTEXT = {
    cart: null,
    cartState: null,
    setCart: function setCart() {},
    setCartState: function setCartState() {}
  };
  var useCartElementContextWithUseCase = function useCartElementContextWithUseCase(useCaseMessage) {
    var isInCustomCheckout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var ctx = React.useContext(CartElementContext);

    if (isInCustomCheckout) {
      return DUMMY_CART_ELEMENT_CONTEXT;
    }

    return parseCartElementContext(ctx, useCaseMessage);
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
   */

  var useElements = function useElements() {
    var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
        elements = _useElementsContextWi.elements;

    return elements;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
   */

  var useStripe = function useStripe() {
    var _useElementsOrCustomC = useElementsOrCustomCheckoutSdkContextWithUseCase('calls useStripe()'),
        stripe = _useElementsOrCustomC.stripe;

    return stripe;
  };
  /**
   * @docs https://stripe.com/docs/payments/checkout/cart-element
   */

  var useCartElement = function useCartElement() {
    var _useCartElementContex = useCartElementContextWithUseCase('calls useCartElement()'),
        cart = _useCartElementContex.cart;

    return cart;
  };
  /**
   * @docs https://stripe.com/docs/payments/checkout/cart-element
   */

  var useCartElementState = function useCartElementState() {
    var _useCartElementContex2 = useCartElementContextWithUseCase('calls useCartElementState()'),
        cartState = _useCartElementContex2.cartState;

    return cartState;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
   */

  var ElementsConsumer = function ElementsConsumer(_ref2) {
    var children = _ref2.children;
    var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

    return children(ctx);
  };
  ElementsConsumer.propTypes = {
    children: propTypes.func.isRequired
  };

  var useAttachEvent = function useAttachEvent(element, event, cb) {
    var cbDefined = !!cb;
    var cbRef = React.useRef(cb); // In many integrations the callback prop changes on each render.
    // Using a ref saves us from calling element.on/.off every render.

    React.useEffect(function () {
      cbRef.current = cb;
    }, [cb]);
    React.useEffect(function () {
      if (!cbDefined || !element) {
        return function () {};
      }

      var decoratedCb = function decoratedCb() {
        if (cbRef.current) {
          cbRef.current.apply(cbRef, arguments);
        }
      };

      element.on(event, decoratedCb);
      return function () {
        element.off(event, decoratedCb);
      };
    }, [cbDefined, event, element, cbRef]);
  };

  var capitalized = function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var createElementComponent = function createElementComponent(type, isServer) {
    var displayName = "".concat(capitalized(type), "Element");

    var ClientElement = function ClientElement(_ref) {
      var id = _ref.id,
          className = _ref.className,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          onBlur = _ref.onBlur,
          onFocus = _ref.onFocus,
          onReady = _ref.onReady,
          onChange = _ref.onChange,
          onEscape = _ref.onEscape,
          onClick = _ref.onClick,
          onLoadError = _ref.onLoadError,
          onLoaderStart = _ref.onLoaderStart,
          onNetworksChange = _ref.onNetworksChange,
          onCheckout = _ref.onCheckout,
          onLineItemClick = _ref.onLineItemClick,
          onConfirm = _ref.onConfirm,
          onCancel = _ref.onCancel,
          onShippingAddressChange = _ref.onShippingAddressChange,
          onShippingRateChange = _ref.onShippingRateChange;
      var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
      var elements = 'elements' in ctx ? ctx.elements : null;
      var customCheckoutSdk = 'customCheckoutSdk' in ctx ? ctx.customCheckoutSdk : null;

      var _React$useState = React.useState(null),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          element = _React$useState2[0],
          setElement = _React$useState2[1];

      var elementRef = React.useRef(null);
      var domNode = React.useRef(null);

      var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">"), 'customCheckoutSdk' in ctx),
          setCart = _useCartElementContex.setCart,
          setCartState = _useCartElementContex.setCartState; // For every event where the merchant provides a callback, call element.on
      // with that callback. If the merchant ever changes the callback, removes
      // the old callback with element.off and then call element.on with the new one.


      useAttachEvent(element, 'blur', onBlur);
      useAttachEvent(element, 'focus', onFocus);
      useAttachEvent(element, 'escape', onEscape);
      useAttachEvent(element, 'click', onClick);
      useAttachEvent(element, 'loaderror', onLoadError);
      useAttachEvent(element, 'loaderstart', onLoaderStart);
      useAttachEvent(element, 'networkschange', onNetworksChange);
      useAttachEvent(element, 'lineitemclick', onLineItemClick);
      useAttachEvent(element, 'confirm', onConfirm);
      useAttachEvent(element, 'cancel', onCancel);
      useAttachEvent(element, 'shippingaddresschange', onShippingAddressChange);
      useAttachEvent(element, 'shippingratechange', onShippingRateChange);
      var readyCallback;

      if (type === 'cart') {
        readyCallback = function readyCallback(event) {
          setCartState(event);
          onReady && onReady(event);
        };
      } else if (onReady) {
        if (type === 'expressCheckout') {
          // Passes through the event, which includes visible PM types
          readyCallback = onReady;
        } else {
          // For other Elements, pass through the Element itself.
          readyCallback = function readyCallback() {
            onReady(element);
          };
        }
      }

      useAttachEvent(element, 'ready', readyCallback);
      var changeCallback = type === 'cart' ? function (event) {
        setCartState(event);
        onChange && onChange(event);
      } : onChange;
      useAttachEvent(element, 'change', changeCallback);
      var checkoutCallback = type === 'cart' ? function (event) {
        setCartState(event);
        onCheckout && onCheckout(event);
      } : onCheckout;
      useAttachEvent(element, 'checkout', checkoutCallback);
      React.useLayoutEffect(function () {
        if (elementRef.current === null && domNode.current !== null && (elements || customCheckoutSdk)) {
          var newElement = null;

          if (customCheckoutSdk) {
            newElement = customCheckoutSdk.createElement(type, options);
          } else if (elements) {
            newElement = elements.create(type, options);
          }

          if (type === 'cart' && setCart) {
            // we know that elements.create return value must be of type StripeCartElement if type is 'cart',
            // we need to cast because typescript is not able to infer which overloaded method is used based off param type
            setCart(newElement);
          } // Store element in a ref to ensure it's _immediately_ available in cleanup hooks in StrictMode


          elementRef.current = newElement; // Store element in state to facilitate event listener attachment

          setElement(newElement);

          if (newElement) {
            newElement.mount(domNode.current);
          }
        }
      }, [elements, customCheckoutSdk, options, setCart]);
      var prevOptions = usePrevious(options);
      React.useEffect(function () {
        if (!elementRef.current) {
          return;
        }

        var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

        if (updates) {
          elementRef.current.update(updates);
        }
      }, [options, prevOptions]);
      React.useLayoutEffect(function () {
        return function () {
          if (elementRef.current && typeof elementRef.current.destroy === 'function') {
            try {
              elementRef.current.destroy();
              elementRef.current = null;
            } catch (error) {// Do nothing
            }
          }
        };
      }, []);
      return /*#__PURE__*/React.createElement("div", {
        id: id,
        className: className,
        ref: domNode
      });
    }; // Only render the Element wrapper in a server environment.


    var ServerElement = function ServerElement(props) {
      // Validate that we are in the right context by calling useElementsContextWithUseCase.
      var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
      useCartElementContextWithUseCase("mounts <".concat(displayName, ">"), 'customCheckoutSdk' in ctx);
      var id = props.id,
          className = props.className;
      return /*#__PURE__*/React.createElement("div", {
        id: id,
        className: className
      });
    };

    var Element = isServer ? ServerElement : ClientElement;
    Element.propTypes = {
      id: propTypes.string,
      className: propTypes.string,
      onChange: propTypes.func,
      onBlur: propTypes.func,
      onFocus: propTypes.func,
      onReady: propTypes.func,
      onEscape: propTypes.func,
      onClick: propTypes.func,
      onLoadError: propTypes.func,
      onLoaderStart: propTypes.func,
      onNetworksChange: propTypes.func,
      onCheckout: propTypes.func,
      onLineItemClick: propTypes.func,
      onConfirm: propTypes.func,
      onCancel: propTypes.func,
      onShippingAddressChange: propTypes.func,
      onShippingRateChange: propTypes.func,
      options: propTypes.object
    };
    Element.displayName = displayName;
    Element.__elementType = type;
    return Element;
  };

  var isServer = typeof window === 'undefined';

  var EmbeddedCheckoutContext = /*#__PURE__*/React.createContext(null);
  EmbeddedCheckoutContext.displayName = 'EmbeddedCheckoutProviderContext';
  var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext() {
    var ctx = React.useContext(EmbeddedCheckoutContext);

    if (!ctx) {
      throw new Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
    }

    return ctx;
  };
  var INVALID_STRIPE_ERROR$2 = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
  var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider(_ref) {
    var rawStripeProp = _ref.stripe,
        options = _ref.options,
        children = _ref.children;
    var parsed = React.useMemo(function () {
      return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$2);
    }, [rawStripeProp]);
    var embeddedCheckoutPromise = React.useRef(null);
    var loadedStripe = React.useRef(null);

    var _React$useState = React.useState({
      embeddedCheckout: null
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        ctx = _React$useState2[0],
        setContext = _React$useState2[1];

    React.useEffect(function () {
      // Don't support any ctx updates once embeddedCheckout or stripe is set.
      if (loadedStripe.current || embeddedCheckoutPromise.current) {
        return;
      }

      var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout(stripe) {
        if (loadedStripe.current || embeddedCheckoutPromise.current) return;
        loadedStripe.current = stripe;
        embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then(function (embeddedCheckout) {
          setContext({
            embeddedCheckout: embeddedCheckout
          });
        });
      }; // For an async stripePromise, store it once resolved


      if (parsed.tag === 'async' && !loadedStripe.current && options.clientSecret) {
        parsed.stripePromise.then(function (stripe) {
          if (stripe) {
            setStripeAndInitEmbeddedCheckout(stripe);
          }
        });
      } else if (parsed.tag === 'sync' && !loadedStripe.current && options.clientSecret) {
        // Or, handle a sync stripe instance going from null -> populated
        setStripeAndInitEmbeddedCheckout(parsed.stripe);
      }
    }, [parsed, options, ctx, loadedStripe]);
    React.useEffect(function () {
      // cleanup on unmount
      return function () {
        // If embedded checkout is fully initialized, destroy it.
        if (ctx.embeddedCheckout) {
          embeddedCheckoutPromise.current = null;
          ctx.embeddedCheckout.destroy();
        } else if (embeddedCheckoutPromise.current) {
          // If embedded checkout is still initializing, destroy it once
          // it's done. This could be caused by unmounting very quickly
          // after mounting.
          embeddedCheckoutPromise.current.then(function () {
            embeddedCheckoutPromise.current = null;

            if (ctx.embeddedCheckout) {
              ctx.embeddedCheckout.destroy();
            }
          });
        }
      };
    }, [ctx.embeddedCheckout]); // Attach react-stripe-js version to stripe.js instance

    React.useEffect(function () {
      registerWithStripeJs(loadedStripe);
    }, [loadedStripe]); // Warn on changes to stripe prop.
    // The stripe prop value can only go from null to non-null once and
    // can't be changed after that.

    var prevStripe = usePrevious(rawStripeProp);
    React.useEffect(function () {
      if (prevStripe !== null && prevStripe !== rawStripeProp) {
        console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
      }
    }, [prevStripe, rawStripeProp]); // Warn on changes to options.

    var prevOptions = usePrevious(options);
    React.useEffect(function () {
      if (prevOptions == null) {
        return;
      }

      if (options == null) {
        console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
        return;
      }

      if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
        console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.');
      }

      if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
        console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
      }
    }, [prevOptions, options]);
    return /*#__PURE__*/React.createElement(EmbeddedCheckoutContext.Provider, {
      value: ctx
    }, children);
  };

  var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement(_ref) {
    var id = _ref.id,
        className = _ref.className;

    var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(),
        embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;

    var isMounted = React.useRef(false);
    var domNode = React.useRef(null);
    React.useLayoutEffect(function () {
      if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
        embeddedCheckout.mount(domNode.current);
        isMounted.current = true;
      } // Clean up on unmount


      return function () {
        if (isMounted.current && embeddedCheckout) {
          try {
            embeddedCheckout.unmount();
            isMounted.current = false;
          } catch (e) {// Do nothing.
            // Parent effects are destroyed before child effects, so
            // in cases where both the EmbeddedCheckoutProvider and
            // the EmbeddedCheckout component are removed at the same
            // time, the embeddedCheckout instance will be destroyed,
            // which causes an error when calling unmount.
          }
        }
      };
    }, [embeddedCheckout]);
    return /*#__PURE__*/React.createElement("div", {
      ref: domNode,
      id: id,
      className: className
    });
  }; // Only render the wrapper in a server environment.


  var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement(_ref2) {
    var id = _ref2.id,
        className = _ref2.className;
    // Validate that we are in the right context by calling useEmbeddedCheckoutContext.
    useEmbeddedCheckoutContext();
    return /*#__PURE__*/React.createElement("div", {
      id: id,
      className: className
    });
  };

  var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardElement = createElementComponent('card', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardNumberElement = createElementComponent('cardNumber', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardExpiryElement = createElementComponent('cardExpiry', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardCvcElement = createElementComponent('cardCvc', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var FpxBankElement = createElementComponent('fpxBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IbanElement = createElementComponent('iban', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IdealBankElement = createElementComponent('idealBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var P24BankElement = createElementComponent('p24Bank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var EpsBankElement = createElementComponent('epsBank', isServer);
  var PaymentElement = createElementComponent('payment', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var ExpressCheckoutElement = createElementComponent('expressCheckout', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AddressElement = createElementComponent('address', isServer);
  /**
   * @deprecated
   * Use `AddressElement` instead.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/elements/cart-element
   */

  var CartElement = createElementComponent('cart', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PaymentMethodMessagingElement = createElementComponent('paymentMethodMessaging', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

  exports.AddressElement = AddressElement;
  exports.AffirmMessageElement = AffirmMessageElement;
  exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
  exports.AuBankAccountElement = AuBankAccountElement;
  exports.CardCvcElement = CardCvcElement;
  exports.CardElement = CardElement;
  exports.CardExpiryElement = CardExpiryElement;
  exports.CardNumberElement = CardNumberElement;
  exports.CartElement = CartElement;
  exports.CustomCheckoutProvider = CustomCheckoutProvider;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.EmbeddedCheckout = EmbeddedCheckout;
  exports.EmbeddedCheckoutProvider = EmbeddedCheckoutProvider;
  exports.EpsBankElement = EpsBankElement;
  exports.ExpressCheckoutElement = ExpressCheckoutElement;
  exports.FpxBankElement = FpxBankElement;
  exports.IbanElement = IbanElement;
  exports.IdealBankElement = IdealBankElement;
  exports.LinkAuthenticationElement = LinkAuthenticationElement;
  exports.P24BankElement = P24BankElement;
  exports.PaymentElement = PaymentElement;
  exports.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
  exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
  exports.ShippingAddressElement = ShippingAddressElement;
  exports.useCartElement = useCartElement;
  exports.useCartElementState = useCartElementState;
  exports.useCustomCheckout = useCustomCheckout;
  exports.useElements = useElements;
  exports.useStripe = useStripe;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "2.2.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./src/woo-block/index.js":
/*!********************************!*\
  !*** ./src/woo-block/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/woo-block/style.scss");
/* harmony import */ var _payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods */ "./src/woo-block/payment-methods/index.js");



/***/ }),

/***/ "./src/woo-block/payment-methods/alipay/index.js":
/*!*******************************************************!*\
  !*** ./src/woo-block/payment-methods/alipay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");







const PAYMENT_METHOD = 'cpsw_alipay';
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-alipay-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const AlipayContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlipayElement, {
    ...props
  }));
};
const AlipayElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const paymentType = 'alipay';
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.useProcessCheckoutError)({
    responseTypes: emitResponse.responseTypes,
    emitResponse,
    eventRegistration
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-alipay-container  cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('description', 'cpsw_alipay_data')
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('mode', 'cpsw_alipay_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('test_mode_description', 'cpsw_alipay_data')
    }
  }));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('icons', 'cpsw_alipay_data'),
    gateway: "cpsw_alipay_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('CPSW Alipay', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('order_button_text', 'cpsw_alipay_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.canDoLocalPayments)(props, 'cpsw_alipay_data'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: AlipayContent,
    confirmMethod: "confirmAlipayPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: AlipayContent
  })
});

/***/ }),

/***/ "./src/woo-block/payment-methods/bancontact/index.js":
/*!***********************************************************!*\
  !*** ./src/woo-block/payment-methods/bancontact/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");







const PAYMENT_METHOD = 'cpsw_bancontact';
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-alipay-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const BancontactContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BancontactElement, {
    ...props
  }));
};
const BancontactElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const paymentType = 'bancontact';
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.useProcessCheckoutError)({
    responseTypes: emitResponse.responseTypes,
    emitResponse,
    eventRegistration
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-bancontact-container cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('description', 'cpsw_bancontact_data')
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('mode', 'cpsw_bancontact_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw_test_description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('test_mode_description', 'cpsw_bancontact_data')
    }
  }));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('icons', 'cpsw_bancontact_data'),
    gateway: "cpsw_bancontact_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('CPSW Bancontact', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('order_button_text', 'cpsw_bancontact_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.canDoLocalPayments)(props, 'cpsw_bancontact_data'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: BancontactContent,
    confirmMethod: "confirmBancontactPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: BancontactContent
  })
});

/***/ }),

/***/ "./src/woo-block/payment-methods/credit-card/index.js":
/*!************************************************************!*\
  !*** ./src/woo-block/payment-methods/credit-card/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_card_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-card-form.js */ "./src/woo-block/payment-methods/credit-card/stripe-card-form.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_process_payment_intent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../use-process-payment-intent.js */ "./src/woo-block/payment-methods/use-process-payment-intent.js");
/* harmony import */ var _use_after_process_payment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../use-after-process-payment.js */ "./src/woo-block/payment-methods/use-after-process-payment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);









const CreditCardElement = props => {
  const {
    billing,
    shippingData,
    emitResponse,
    eventRegistration,
    activePaymentMethod,
    shouldSavePayment,
    anyError
  } = props;
  const {
    onPaymentSetup
  } = eventRegistration;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  const getPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    const elementNeedToGet = _utils_js__WEBPACK_IMPORTED_MODULE_7__.isInlineCC ? _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement : _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardNumberElement;
    return {
      card: elements?.getElement(elementNeedToGet)
    };
  }, [stripe, elements]);
  (0,_use_process_payment_intent_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentSetup,
    shouldSavePayment,
    getPaymentMethodArgs,
    activePaymentMethod,
    anyError
  });
  (0,_use_after_process_payment_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-description-container cpsw-stripe-card-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_card_form_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }), 'test' === (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('mode') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-test-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Test Mode Enabled: ', 'checkout-plugins-stripe-woo')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Use demo card 4242424242424242 with any future date and CVV. ', 'checkout-plugins-stripe-woo'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Check more ', 'checkout-plugins-stripe-woo'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://stripe.com/docs/testing",
    referrerPolicy: "noopener",
    target: "_blank",
    rel: "noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('demo cards', 'checkout-plugins-stripe-woo'))));
};
const CreditCardContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [anyError, setAnyError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  props = {
    ...props,
    anyError,
    setAnyError
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CreditCardElement, {
    ...props
  }));
};
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-stripe-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('description')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: 'cpsw_stripe',
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('icons')
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Credit Card', 'checkout-plugins-stripe-woo'),
  canMakePayment: () => _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: CreditCardContent
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: CreditCardContent
  }),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('order_button_text')),
  supports: {
    showSavedCards: _utils_js__WEBPACK_IMPORTED_MODULE_7__.shouldSaveCC,
    showSaveOption: _utils_js__WEBPACK_IMPORTED_MODULE_7__.shouldSaveCC
  }
});

/***/ }),

/***/ "./src/woo-block/payment-methods/credit-card/stripe-card-form.js":
/*!***********************************************************************!*\
  !*** ./src/woo-block/payment-methods/credit-card/stripe-card-form.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





const handleCardType = (cardType, handleError) => {
  const allowedCardTypes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSettings)('allowed_cards');
  if (!allowedCardTypes?.length) {
    return;
  }

  // Check if card type is allowed.
  const isCardPresent = allowedCardTypes.indexOf(cardType) > -1;

  // Check if card type is not allowed and card type is not unknown.
  if (!isCardPresent && 'unknown' !== cardType) {
    const getCardType = _utils_js__WEBPACK_IMPORTED_MODULE_2__.defaultCards?.[cardType] ? _utils_js__WEBPACK_IMPORTED_MODULE_2__.defaultCards[cardType] : cardType;
    const getCardTypeText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
    // translators: %s - Type of card that is not allowed.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%s card type is not allowed', 'checkout-plugins-stripe-woo'), getCardType);
    const setErrorMessage = {
      cc_card_type: getCardTypeText
    };

    /**
     * Set error message, this will br prevent to submit the form.
     */
    const previousErrors = {
      ...handleError.anyError
    };
    handleError.setAnyError({
      ...previousErrors,
      ...setErrorMessage
    });
    return getCardTypeText;
  }

  // Check if any error is present then remove it.
  if (handleError.anyError?.cc_card_type) {
    const previousErrors = {
      ...handleError.anyError
    };
    delete previousErrors.cc_card_type;
    handleError.setAnyError({
      ...previousErrors
    });
  }
};

/**
 * This is the default options for the Stripe Elements.
 * and based on the state condition we are changing the options.
 */
const elementOptions = {
  style: {
    base: {
      iconColor: '#666EE8',
      color: '#31325F',
      fontSize: '16px',
      lineHeight: 1.375,
      // With a font-size of 16px, line-height will be 22px.
      '::placeholder': {
        color: '#fff'
      }
    }
  },
  classes: {
    focus: 'focused',
    empty: 'empty',
    invalid: 'has-error'
  }
};

/**
 * This hook is used to set and modify the options for the Stripe Elements.
 *
 * @param {Object} overloadedOptions - This option is used to set the option from element level.
 */
const useElementOptions = overloadedOptions => {
  const [isActive, setIsActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({
    ...elementOptions,
    ...overloadedOptions
  });
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  // We are using useEffect to set the options based on the isActive state.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const color = isActive ? '#CFD7E0' : '#fff';
    setOptions(prevOptions => {
      const showIcon = typeof prevOptions.showIcon !== 'undefined' ? {
        showIcon: isActive
      } : {};
      return {
        ...prevOptions,
        style: {
          ...prevOptions.style,
          base: {
            ...prevOptions.style.base,
            '::placeholder': {
              color
            }
          }
        },
        ...showIcon
      };
    });
  }, [isActive]);

  // This function is used to set the isActive perticular element.
  const onActive = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(isEmpty => {
    if (!isEmpty) {
      setIsActive(true);
    } else {
      setIsActive(prevActive => !prevActive);
    }
  }, [setIsActive]);

  // This function is used to set the error for the perticular element.
  return {
    options,
    onActive,
    error,
    setError
  };
};
const ExtendedForm = props => {
  /**
   * This state is used to check if the element is empty or not.
   */
  const [isEmpty, setIsEmpty] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({
    cardNumber: true,
    cardExpiry: true,
    cardCvc: true
  });

  /**
   * This hook is used to set the options for the Stripe Elements.
   */
  const optionsData = useElementOptions({
    showIcon: true
  });
  const optionsDataExp = useElementOptions({
    showIcon: false
  });
  const optionsDataCvv = useElementOptions({
    showIcon: false
  });
  const {
    options: cardNumOptions,
    onActive: cardNumOnActive,
    error: cardNumError,
    setError: cardNumSetError
  } = optionsData;
  const {
    options: cardExpiryOptions,
    onActive: cardExpiryOnActive,
    error: cardExpiryError,
    setError: cardExpirySetError
  } = optionsDataExp;
  const {
    options: cardCvcOptions,
    onActive: cardCvcOnActive,
    error: cardCvcError,
    setError: cardCvcSetError
  } = optionsDataCvv;

  // This function is used for handle the on change event of the Stripe Elements and based on the incoming value we are setting the error.
  const errorCallback = (errorSetter, elementId) => event => {
    let cardTypeHandel = '';

    // This condition is use for perform the card type validation.
    if (elementId === 'cardNumber') {
      cardTypeHandel = handleCardType(event.brand, props);
      if (cardTypeHandel) {
        const createErrorObj = {
          code: 'cc_card_type',
          message: cardTypeHandel
        };
        errorSetter(createErrorObj);
        setIsEmpty({
          ...isEmpty,
          [elementId]: false
        });
        return;
      }
    }
    if (event.error) {
      errorSetter(event.error);
    } else {
      errorSetter('');
    }
    setIsEmpty({
      ...isEmpty,
      [elementId]: event.empty
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-stripe-form-custom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-cc-input-container cpsw-cc-number-element"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardNumberElement, {
    onChange: errorCallback(cardNumSetError, 'cardNumber'),
    options: cardNumOptions,
    className: "cpsw-cc-inputs",
    id: "cpsw-cc-number-element-id",
    onFocus: () => cardNumOnActive(isEmpty.cardNumber),
    onBlur: () => cardNumOnActive(isEmpty.cardNumber)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cpsw-cc-number-element-id"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Card Number', 'checkout-plugins-stripe-woo')), cardNumError?.code && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.cardElementInCompleteError, {
    errorCode: cardNumError.code,
    message: 'cc_card_type' === cardNumError.code ? cardNumError.message : null
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-cc-cvc-expiry-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-cc-input-container cpsw-cc-expiry-element"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardExpiryElement, {
    id: "cpsw-cc-expiry-element-id",
    onChange: errorCallback(cardExpirySetError, 'cardExpiry'),
    options: cardExpiryOptions,
    className: "cpsw-cc-inputs",
    onFocus: () => cardExpiryOnActive(isEmpty.cardExpiry),
    onBlur: () => cardExpiryOnActive(isEmpty.cardExpiry)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cpsw-cc-expiry-element-id"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Expiry Date', 'checkout-plugins-stripe-woo')), cardExpiryError?.code && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.cardElementInCompleteError, {
    errorCode: cardExpiryError.code
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-cc-input-container cpsw-cc-cvc-element"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardCvcElement, {
    id: "cpsw-cc-cvc-element-id",
    onChange: errorCallback(cardCvcSetError, 'cardCvc'),
    options: cardCvcOptions,
    className: "cpsw-cc-inputs",
    onFocus: () => cardCvcOnActive(isEmpty.cardCvc),
    onBlur: () => cardCvcOnActive(isEmpty.cardCvc)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "cpsw-cc-cvc-element-id"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('CVV/CVC', 'checkout-plugins-stripe-woo')), cardCvcError?.code && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.cardElementInCompleteError, {
    errorCode: cardCvcError.code
  }))));
};
const StripeCardForm = props => {
  // If card type is not inline then return the default form this setting is available in the payment settings page.
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__.isInlineCC) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExtendedForm, {
      ...props
    });
  }
  const style = {
    base: {
      color: '#32325d'
    }
  };
  const cardOptions = {
    hidePostalCode: true,
    style
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-stripe-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardElement, {
    onChange: e => {
      // This function is used for perform the card type validation.
      handleCardType(e.brand, props);
    },
    options: cardOptions
  }), props.anyError?.cc_card_type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.cardElementInCompleteError, {
    errorCode: "cc_card_type",
    message: props.anyError.cc_card_type
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeCardForm);

/***/ }),

/***/ "./src/woo-block/payment-methods/ideal/ideal-form.js":
/*!***********************************************************!*\
  !*** ./src/woo-block/payment-methods/ideal/ideal-form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const IdealForm = ({
  setIsValid
}) => {
  //This is for changing default style options of the Stripe Element IdealBankElement.
  const idealStyle = {
    base: {
      padding: '10px 12px',
      color: '#32325d',
      fontSize: '16px'
    }
  };
  const onChange = e => setIsValid(!e.empty);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsValid(false);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-ideal-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.IdealBankElement, {
    options: {
      style: idealStyle
    },
    onChange: onChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdealForm);

/***/ }),

/***/ "./src/woo-block/payment-methods/ideal/index.js":
/*!******************************************************!*\
  !*** ./src/woo-block/payment-methods/ideal/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ideal_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ideal-form.js */ "./src/woo-block/payment-methods/ideal/ideal-form.js");
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");








const PAYMENT_METHOD = 'cpsw_ideal';
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-ideal-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const IdealContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IdealElement, {
    ...props
  }));
};
const IdealElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  const getPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    return {
      ideal: elements?.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.IdealBankElement)
    };
  }, [stripe, elements]);
  const {
    setIsValid
  } = (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    getPaymentMethodArgs,
    activePaymentMethod,
    element,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    getPaymentMethodArgs,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-ideal-container cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('description', 'cpsw_ideal_data')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ideal_form_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setIsValid: setIsValid
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('mode', 'cpsw_ideal_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('test_mode_description', 'cpsw_ideal_data')
    }
  }));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('icons', 'cpsw_ideal_data'),
    gateway: "cpsw_ideal_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('CPSW Ideal', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('order_button_text', 'cpsw_ideal_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.canDoLocalPayments)(props),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: IdealContent,
    confirmMethod: "confirmIdealPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: IdealContent
  })
});

/***/ }),

/***/ "./src/woo-block/payment-methods/index.js":
/*!************************************************!*\
  !*** ./src/woo-block/payment-methods/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credit_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-card */ "./src/woo-block/payment-methods/credit-card/index.js");
/* harmony import */ var _ideal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ideal */ "./src/woo-block/payment-methods/ideal/index.js");
/* harmony import */ var _alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alipay */ "./src/woo-block/payment-methods/alipay/index.js");
/* harmony import */ var _klarna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klarna */ "./src/woo-block/payment-methods/klarna/index.js");
/* harmony import */ var _sepa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sepa */ "./src/woo-block/payment-methods/sepa/index.js");
/* harmony import */ var _wechat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wechat */ "./src/woo-block/payment-methods/wechat/index.js");
/* harmony import */ var _p24__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./p24 */ "./src/woo-block/payment-methods/p24/index.js");
/* harmony import */ var _bancontact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bancontact */ "./src/woo-block/payment-methods/bancontact/index.js");









/***/ }),

/***/ "./src/woo-block/payment-methods/klarna/index.js":
/*!*******************************************************!*\
  !*** ./src/woo-block/payment-methods/klarna/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







const PAYMENT_METHOD = 'cpsw_klarna';
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-klarna-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const KlarnaContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_4__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_4__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(KlarnaElement, {
    ...props
  }));
};
const KlarnaElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const paymentType = 'klarna';
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__.useProcessCheckoutError)({
    responseTypes: emitResponse.responseTypes,
    emitResponse,
    eventRegistration
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-klarna-container cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_4__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSettings)('description', 'cpsw_klarna_data')
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSettings)('mode', 'cpsw_klarna_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Test verification code:', 'checkout-plugins-stripe-woo'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "111000")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSettings)('test_mode_description', 'cpsw_klarna_data')
    }
  })));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_4__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSettings)('icons', 'cpsw_klarna_data'),
    gateway: "cpsw_klarna_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('CPSW klarna', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSettings)('order_button_text', 'cpsw_klarna_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.canDoLocalPayments)(props, 'cpsw_klarna_data'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: KlarnaContent,
    confirmMethod: "confirmKlarnaPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: KlarnaContent
  })
});

/***/ }),

/***/ "./src/woo-block/payment-methods/local-payment-methods.js":
/*!****************************************************************!*\
  !*** ./src/woo-block/payment-methods/local-payment-methods.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalPaymentAfterProcessing: () => (/* binding */ LocalPaymentAfterProcessing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useProcessCheckoutError: () => (/* binding */ useProcessCheckoutError)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/woo-block/payment-methods/utils.js");



const LocalPaymentIntent = ({
  billing,
  onPaymentProcessing,
  emitResponse,
  activePaymentMethod,
  shouldSavePayment = false,
  paymentType = 'ideal',
  getPaymentMethodArgs = () => ({}),
  PAYMENT_METHOD
}) => {
  const {
    billingData
  } = billing;
  const {
    responseTypes
  } = emitResponse;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const currentPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(getPaymentMethodArgs);
  const [isValid, setIsValid] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    currentPaymentMethodArgs.current = getPaymentMethodArgs;
  }, [getPaymentMethodArgs]);
  const getCreatePaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const args = {
      type: paymentType,
      billing_details: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBillingAddress)(billingData)
    };
    return {
      ...args,
      ...currentPaymentMethodArgs.current()
    };
  }, [billingData, paymentType, getPaymentMethodArgs]);
  const getSuccessResponse = paymentMethodId => {
    const response = {
      meta: {
        paymentMethodData: {
          payment_method_created: paymentMethodId,
          payment_local_nonce: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSettings)(`stripe_local_nonce`, `${PAYMENT_METHOD}_data`)
        }
      }
    };
    return response;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // This action will be called when we click on place order button.
    const unsubscribeProcessingPayment = onPaymentProcessing(async () => {
      if (activePaymentMethod !== PAYMENT_METHOD) {
        return null;
      }

      // Show error message in payment method section.
      // Display an error if no banks are selected from the bank list in the select box.
      if (!isValid) {
        const validityMessage = paymentType === 'sepa_debit' ? cpsw_global_settings.empty_sepa_iban_message : cpsw_global_settings.empty_bank_message;
        return {
          type: emitResponse.responseTypes.ERROR,
          message: validityMessage,
          messageContext: emitResponse.noticeContexts.PAYMENTS
        };
      }
      try {
        // Creating the payment method.
        const result = await stripe.createPaymentMethod(getCreatePaymentMethodArgs());
        if (result?.error) {
          return {
            type: emitResponse.responseTypes.ERROR,
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)(result.error.code, result.error.message, `${PAYMENT_METHOD}_data`),
            messageContext: emitResponse.noticeContexts.PAYMENTS
          };
        }

        // Get payment method id from the stripe.
        const paymentMethodId = result?.paymentMethod?.id;

        // If there is no payment method id, throw processing error
        if (!paymentMethodId) {
          throw new _utils_js__WEBPACK_IMPORTED_MODULE_2__.StripeError({
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)('processing_error', null)
          });
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.ensureSuccessResponse)(responseTypes, getSuccessResponse(paymentMethodId));
      } catch (e) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
      }
    });
    return () => unsubscribeProcessingPayment();
  }, [billingData, onPaymentProcessing, stripe, isValid, activePaymentMethod, shouldSavePayment]);
  return {
    setIsValid,
    isValid
  };
};
const LocalPaymentAfterProcessing = ({
  billing,
  eventRegistration,
  responseTypes,
  activePaymentMethod,
  shouldSavePayment = false,
  getPaymentMethodArgs = () => ({}),
  emitResponse,
  PAYMENT_METHOD,
  confirmMethod,
  paymentType,
  paymentMethodOptions = {}
}) => {
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const {
    billingData
  } = billing;
  const currentPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(getPaymentMethodArgs);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    currentPaymentMethodArgs.current = getPaymentMethodArgs;
  }, [getPaymentMethodArgs]);
  const {
    onCheckoutAfterProcessingWithSuccess
  } = eventRegistration;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Regarding this action : When we click on place order button then process will go to the backend and then come back to the frontend so based on the condition this action will be called.
    const unsubscribeAfterProcessingWithSuccess = onCheckoutAfterProcessingWithSuccess(async props => {
      if (activePaymentMethod !== PAYMENT_METHOD) {
        return null;
      }
      const intentSecret = props?.processingResponse?.paymentDetails?.intent_secret;
      const verificationUrl = props?.processingResponse?.paymentDetails?.verification_url;
      if (!intentSecret) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
      }

      // If all the required data is present, call the confirmation method.
      return await stripe[confirmMethod](intentSecret, {
        payment_method: {
          ...currentPaymentMethodArgs.current(),
          billing_details: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBillingAddress)(billingData)
        },
        payment_method_options: paymentMethodOptions,
        return_url: cpsw_global_settings.get_home_url + verificationUrl
      }).then(result => {
        let errorMessage = result?.error?.message;
        // Todo : This need to be updated once error handling on Klarna gateway get updated
        errorMessage = errorMessage?.replace(new RegExp('`billing_details\\[address\\]\\[country\\]`', 'g'), 'Billing country');
        // Show error if there is any after confirmation method.
        if (result?.error) {
          return {
            type: emitResponse.responseTypes.ERROR,
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)(result.error?.code, errorMessage),
            messageContext: emitResponse.noticeContexts.PAYMENTS
          };
        }
        const paymentStatus = result?.paymentIntent?.status;
        if (!paymentStatus) {
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
        }

        //According to payment status redirect to the verification url.
        if (['succeeded', 'requires_capture'].includes(paymentStatus) || paymentType === 'sepa_debit' && ['pending', 'processing'].includes(paymentStatus)) {
          return {
            type: emitResponse.responseTypes.SUCCESS,
            redirectUrl: verificationUrl
          };
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
      });
    });
    return () => {
      unsubscribeAfterProcessingWithSuccess();
    };
  }, [stripe, responseTypes, onCheckoutAfterProcessingWithSuccess, activePaymentMethod, shouldSavePayment]);
};
const useProcessCheckoutError = ({
  responseTypes,
  emitResponse,
  eventRegistration
}) => {
  const {
    onCheckoutAfterProcessingWithError
  } = eventRegistration;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Regarding this action : When we click on place order button the process will go to the backend and then come back to the frontend. so then based on the condition this action will be called.
    // This action called when process get failed after checkout processing
    const unsubscribe = onCheckoutAfterProcessingWithError(props => {
      const stripeError = props?.processingResponse?.paymentDetails?.stripeError;

      // Show the error message
      if (stripeError) {
        return {
          type: emitResponse.responseTypes.ERROR,
          message: stripeError,
          messageContext: emitResponse.noticeContexts.PAYMENTS
        };
      }
      return null;
    });
    return () => unsubscribe();
  }, [responseTypes, onCheckoutAfterProcessingWithError]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalPaymentIntent);

/***/ }),

/***/ "./src/woo-block/payment-methods/p24/index.js":
/*!****************************************************!*\
  !*** ./src/woo-block/payment-methods/p24/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _p24_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./p24-form.js */ "./src/woo-block/payment-methods/p24/p24-form.js");
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");








const PAYMENT_METHOD = 'cpsw_p24';
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-p24-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const P24Content = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_7__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PrzelewyElement, {
    ...props
  }));
};
const PrzelewyElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  const getPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    return {
      p24: elements?.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.P24BankElement)
    };
  }, [stripe, elements]);
  const paymentType = 'p24';
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    getPaymentMethodArgs,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_5__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    getPaymentMethodArgs,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-p24-container cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('description', 'cpsw_p24_data')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_p24_form_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('mode', 'cpsw_p24_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('test_mode_description', 'cpsw_p24_data')
    }
  }));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_7__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('icons', 'cpsw_p24_data'),
    gateway: "cpsw_p24_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('CPSW P24', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.getSettings)('order_button_text', 'cpsw_p24_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.canDoLocalPayments)(props),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: P24Content,
    confirmMethod: "confirmP24Payment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: P24Content
  })
});

/***/ }),

/***/ "./src/woo-block/payment-methods/p24/p24-form.js":
/*!*******************************************************!*\
  !*** ./src/woo-block/payment-methods/p24/p24-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);


const P24Form = () => {
  //Custom styling can be passed to options when creating an Element.
  const p24Style = {
    base: {
      padding: '10px 12px',
      color: '#32325d',
      fontSize: '16px'
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-p24-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.P24BankElement, {
    options: {
      style: p24Style
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (P24Form);

/***/ }),

/***/ "./src/woo-block/payment-methods/sepa/index.js":
/*!*****************************************************!*\
  !*** ./src/woo-block/payment-methods/sepa/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");
/* harmony import */ var _sepa_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sepa-form.js */ "./src/woo-block/payment-methods/sepa/sepa-form.js");








const PAYMENT_METHOD = 'cpsw_sepa';
const paymentType = 'sepa_debit';
const shouldSave = 'yes' === (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('enable_saved_cards', 'cpsw_sepa_data');
const supportFeatures = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('features', 'cpsw_sepa_data') ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('features', 'cpsw_sepa_data') : ['products'];
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-sepa-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const SepaContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SepaElement, {
    ...props
  }));
};
const SepaElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  const getPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    return {
      sepa_debit: elements?.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.IbanElement)
    };
  }, [stripe, elements]);
  const {
    setIsValid
  } = (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD,
    getPaymentMethodArgs
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod,
    getPaymentMethodArgs,
    paymentType
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.useProcessCheckoutError)({
    responseTypes: emitResponse.responseTypes,
    emitResponse,
    eventRegistration
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-sepa-card-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('description', 'cpsw_sepa_data')
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('local_payment_description', 'cpsw_sepa_data'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sepa_form_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setIsValid: setIsValid
  })), (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('mode', 'cpsw_sepa_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw_stripe_test_description",
    dangerouslySetInnerHTML: {
      __html: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('test_mode_description', 'cpsw_sepa_data')
    }
  }));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('icons', 'cpsw_sepa_data'),
    gateway: "cpsw_sepa_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('CPSW SEPA', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('order_button_text', 'cpsw_sepa_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.canDoLocalPayments)(props, 'cpsw_sepa_data'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: SepaContent,
    confirmMethod: "confirmSepaDebitPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: SepaContent
  }),
  supports: {
    showSavedCards: shouldSave,
    showSaveOption: shouldSave,
    features: supportFeatures ? supportFeatures : ['products']
  }
});

/***/ }),

/***/ "./src/woo-block/payment-methods/sepa/sepa-form.js":
/*!*********************************************************!*\
  !*** ./src/woo-block/payment-methods/sepa/sepa-form.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const SepaForm = ({
  setIsValid
}) => {
  // Custom styling can be passed as options when creating an Element.
  const ibanStyle = {
    base: {
      color: '#32325d',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      },
      ':-webkit-autofill': {
        color: '#32325d'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
      ':-webkit-autofill': {
        color: '#fa755a'
      }
    }
  };
  const ibanOptions = {
    supportedCountries: ['SEPA'],
    // Elements can use a placeholder as an example IBAN that reflects
    // the IBAN format of your customer's country. If you know your
    // customer's country, we recommend that you pass it to the Element as the
    // placeholderCountry.
    placeholderCountry: 'DE',
    style: ibanStyle
  };
  const onChange = e => setIsValid(!e.empty);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsValid(false);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-sepa-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-sepa-iban-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "iban"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('IBAN.', 'checkout-plugins-stripe-woo'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required"
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.IbanElement, {
    options: ibanOptions,
    onChange: onChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SepaForm);

/***/ }),

/***/ "./src/woo-block/payment-methods/use-after-process-payment.js":
/*!********************************************************************!*\
  !*** ./src/woo-block/payment-methods/use-after-process-payment.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/woo-block/payment-methods/utils.js");



const useAfterProcessingPayment = ({
  eventRegistration,
  responseTypes,
  activePaymentMethod,
  shouldSavePayment = false,
  emitResponse
}) => {
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const {
    onCheckoutSuccess
  } = eventRegistration;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Regarding this action : When we click on place order button then process will go to the backend and then come back to the frontend so based on the condition this action will be called.
    const unsubscribeAfterProcessingWithSuccess = onCheckoutSuccess(async props => {
      if (activePaymentMethod !== _utils_js__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_METHOD) {
        return null;
      }
      const intentSecret = props?.processingResponse?.paymentDetails?.intent_secret;
      const verificationUrl = props?.processingResponse?.paymentDetails?.verification_url;
      if (!intentSecret || !verificationUrl) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
      }

      // If everything is fine all the required data is present then we will call the confirmCardPayment method.
      return await stripe.confirmCardPayment(intentSecret, {}).then(result => {
        if (result?.error?.code) {
          let errorCode = result.error.code;

          // If card is declined then we will modify the error code to get proper localized message.
          if ('card_declined' === result.error.code && result?.error?.decline_code) {
            errorCode = result.error.decline_code;
          }
          return {
            type: emitResponse.responseTypes.ERROR,
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)(errorCode, result.error.message),
            messageContext: emitResponse.noticeContexts.PAYMENTS
          };
        }
        const paymentStatus = result?.paymentIntent?.status;
        if (!paymentStatus) {
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
        }

        /**
         * If payment status is succeeded or requires_capture then we will redirect to the verification url.
         * Regarding requires_capture : https://stripe.com/docs/payments/capture-later
         * Regarding succeeded : https://stripe.com/docs/payments/payment-intents/quickstart#succeed
         *
         * In the payment setting page we have charge type option in case of the charge payment status should be succeeded and in case of authorize payment status should be requires_capture.
         */
        if ('succeeded' === paymentStatus || 'requires_capture' === paymentStatus) {
          return {
            type: emitResponse.responseTypes.SUCCESS,
            redirectUrl: verificationUrl
          };
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.paymentProcessingError)(emitResponse);
      });
    });
    return () => {
      unsubscribeAfterProcessingWithSuccess();
    };
  }, [stripe, responseTypes, onCheckoutSuccess, activePaymentMethod, shouldSavePayment]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAfterProcessingPayment);

/***/ }),

/***/ "./src/woo-block/payment-methods/use-process-payment-intent.js":
/*!*********************************************************************!*\
  !*** ./src/woo-block/payment-methods/use-process-payment-intent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StripeError: () => (/* binding */ StripeError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/woo-block/payment-methods/utils.js");



class StripeError extends Error {
  constructor(error) {
    super(error.message);
    this.error = error;
  }
}
const useProcessPaymentIntent = ({
  billing,
  onPaymentSetup,
  emitResponse,
  activePaymentMethod,
  paymentType = 'card',
  getPaymentMethodArgs = () => ({}),
  anyError
}) => {
  const {
    billingData
  } = billing;
  const {
    responseTypes
  } = emitResponse;
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const currentPaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(getPaymentMethodArgs);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    currentPaymentMethodArgs.current = getPaymentMethodArgs;
  }, [getPaymentMethodArgs]);
  const getCreatePaymentMethodArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const args = {
      type: paymentType,
      billing_details: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBillingAddress)(billingData)
    };
    return {
      ...args,
      ...currentPaymentMethodArgs.current()
    };
  }, [billingData, paymentType, getPaymentMethodArgs]);
  const getSuccessResponse = paymentMethodId => {
    const response = {
      meta: {
        paymentMethodData: {
          payment_method_created: paymentMethodId,
          payment_cc_nonce: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSettings)('stripe_cc_nonce')
        }
      }
    };
    return response;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // This action will be called when we click on place order button.
    const unsubscribeProcessingPayment = onPaymentSetup(async () => {
      if (activePaymentMethod !== _utils_js__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_METHOD) {
        return null;
      }

      // Check if any error is present then show error.
      const getErrorLength = Object.keys(anyError).length;
      if (getErrorLength) {
        // Show every error with <br> tag.
        let errorMessage = '';
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(anyError)) {
          errorMessage += value + '<br>';
        }

        // Show error message in payment method section.
        return {
          type: emitResponse.responseTypes.ERROR,
          message: errorMessage,
          messageContext: emitResponse.noticeContexts.PAYMENTS
        };
      }
      try {
        // Creating the payment method.
        const result = await stripe.createPaymentMethod(getCreatePaymentMethodArgs());
        if (result?.error) {
          return {
            type: emitResponse.responseTypes.ERROR,
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)(result.error.code, result.error.message),
            messageContext: emitResponse.noticeContexts.PAYMENTS
          };
        }

        // We have got the payment method id from the stripe.
        const paymentMethodId = result?.paymentMethod?.id;
        if (!paymentMethodId) {
          throw new StripeError({
            message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)('processing_error', null)
          });
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.ensureSuccessResponse)(responseTypes, getSuccessResponse(paymentMethodId));
      } catch (e) {
        throw new StripeError({
          message: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStripeLocalizedMessage)('processing_error', null)
        });
      }
    });
    return () => unsubscribeProcessingPayment();
  }, [billingData, onPaymentSetup, stripe, activePaymentMethod, anyError]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProcessPaymentIntent);

/***/ }),

/***/ "./src/woo-block/payment-methods/utils.js":
/*!************************************************!*\
  !*** ./src/woo-block/payment-methods/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAYMENT_METHOD: () => (/* binding */ PAYMENT_METHOD),
/* harmony export */   StripeError: () => (/* binding */ StripeError),
/* harmony export */   canDoLocalPayments: () => (/* binding */ canDoLocalPayments),
/* harmony export */   cardElementInCompleteError: () => (/* binding */ cardElementInCompleteError),
/* harmony export */   defaultCards: () => (/* binding */ defaultCards),
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   ensureSuccessResponse: () => (/* binding */ ensureSuccessResponse),
/* harmony export */   getBillingAddress: () => (/* binding */ getBillingAddress),
/* harmony export */   getLabel: () => (/* binding */ getLabel),
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   getStripeLocalizedMessage: () => (/* binding */ getStripeLocalizedMessage),
/* harmony export */   initStripe: () => (/* binding */ initStripe),
/* harmony export */   isInlineCC: () => (/* binding */ isInlineCC),
/* harmony export */   paymentProcessingError: () => (/* binding */ paymentProcessingError),
/* harmony export */   shouldSaveCC: () => (/* binding */ shouldSaveCC)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const PAYMENT_METHOD = 'cpsw_stripe';
const getSettings = (key, gateway = 'cpsw_stripe_data') => {
  const returnValue = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)(gateway)?.[key];
  return returnValue ? returnValue : null;
};
const getLabel = ({
  icons,
  gateway,
  ...props
}) => {
  const {
    PaymentMethodLabel,
    PaymentMethodIcons
  } = props.components;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `cpsw-label-container ${PAYMENT_METHOD}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethodLabel, {
    text: getSettings('label', gateway)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethodIcons, {
    icons: icons,
    align: "left"
  }));
};
const shouldSaveCC = 'yes' === getSettings('enable_saved_cards');
const isInlineCC = 'yes' === getSettings('inline_cc');
const getStripeLocalizedMessage = (type, message, gateway) => {
  const stripeLocalized = getSettings('error_messages', gateway);
  return stripeLocalized?.[type] ? stripeLocalized[type] : message;
};
const initStripe = new Promise(resolve => {
  const publishableKey = getSettings('public_key');
  const stripeParams = {
    stripeAccount: getSettings('account_id')
  };
  (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)(publishableKey, stripeParams).then(stripe => {
    resolve(stripe);
  }).catch(err => {
    resolve({
      error: err
    });
  });
});
const getBillingAddress = billingData => {
  const billingDetails = {
    name: `${billingData.first_name} ${billingData.last_name}`,
    address: {
      city: billingData?.city || null,
      country: billingData?.country || null,
      line1: billingData?.address_1 || null,
      line2: billingData?.address_2 || null,
      postal_code: billingData?.postcode || null,
      state: billingData?.state || null
    }
  };
  if (billingData?.phone) {
    billingDetails.phone = billingData.phone;
  }
  if (billingData?.email) {
    billingDetails.email = billingData.email;
  }
  return billingDetails;
};
const ensureSuccessResponse = (responseTypes, data = {}) => {
  return {
    type: responseTypes.SUCCESS,
    ...data
  };
};
const paymentProcessingError = emitResponse => ({
  type: emitResponse.responseTypes.ERROR,
  message: getStripeLocalizedMessage('processing_error', null),
  messageContext: emitResponse.noticeContexts.PAYMENTS
});
const canDoLocalPayments = ({
  billingData,
  cartTotals
}, gateway = 'cpsw_ideal_data') => {
  const {
    currency_code: currencyCode
  } = cartTotals;
  const {
    country
  } = billingData;
  const gatewaySupportedCountries = JSON.parse(getSettings('supported_countries', gateway));
  let canMakePayment = true;

  // Check if the supported countries for the gateway include the billing country.
  if (gatewaySupportedCountries !== null && (Array.isArray(gatewaySupportedCountries[currencyCode]) ? !gatewaySupportedCountries[currencyCode].includes(country) : Array.isArray(gatewaySupportedCountries) && !gatewaySupportedCountries.includes(country))) {
    return false;
  }
  const countries = getSettings('countries', gateway);
  const allowedCountryType = getSettings('allowed_countries', gateway);
  if (countries !== null) {
    if (allowedCountryType === 'all_except') {
      canMakePayment = !countries.includes(country);
    } else if (allowedCountryType === 'specific') {
      canMakePayment = countries.includes(country);
    }
  }
  return canMakePayment;
};
class StripeError extends Error {
  constructor(error) {
    super(error.message);
    this.error = error;
  }
}
const description = ({
  text
}) => {
  if (!text) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-stripe-blocks-payment-methoddesc"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, text));
};
const cardElementInCompleteError = ({
  errorCode,
  message = null
}) => {
  if (!errorCode) {
    return null;
  }
  let showMessage = message;
  if (!message) {
    showMessage = getStripeLocalizedMessage(errorCode, null);
    // If errorCode is not present in the localized message then show warning message with errorCode in console and ignore linting error for console.warn.
    if (!showMessage) {
      // eslint-disable-next-line no-console
      console.warn(`Error code ${errorCode} is not present in the localized message. Please add it in the settings.`);
    }
  }
  if (!showMessage) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-validation-error"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, showMessage));
};

/**
 * These are the default card types supported by Stripe.
 */
const defaultCards = {
  mastercard: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('MasterCard', 'checkout-plugins-stripe-woo'),
  visa: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Visa', 'checkout-plugins-stripe-woo'),
  amex: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('American Express', 'checkout-plugins-stripe-woo'),
  discover: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Discover', 'checkout-plugins-stripe-woo'),
  jcb: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('JCB', 'checkout-plugins-stripe-woo'),
  diners: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Diners Club', 'checkout-plugins-stripe-woo'),
  unionpay: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('UnionPay', 'checkout-plugins-stripe-woo')
};

/***/ }),

/***/ "./src/woo-block/payment-methods/wechat/index.js":
/*!*******************************************************!*\
  !*** ./src/woo-block/payment-methods/wechat/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-payment-methods.js */ "./src/woo-block/payment-methods/local-payment-methods.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./src/woo-block/payment-methods/utils.js");







const PAYMENT_METHOD = 'cpsw_wechat';
const paymentMethodOptions = {
  wechat_pay: {
    client: 'web'
  }
};
const PaymentMethod = ({
  Component,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-wechat-blocks-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  })));
};
const WechatContent = props => {
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe.catch(getError => {
      setError(getError);
    });
  }, []);
  if (error) {
    throw new Error(error);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
    stripe: _utils_js__WEBPACK_IMPORTED_MODULE_6__.initStripe
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WechatElement, {
    ...props
  }));
};
const WechatElement = ({
  billing,
  shippingData,
  emitResponse,
  eventRegistration,
  activePaymentMethod,
  shouldSavePayment,
  element,
  confirmMethod
}) => {
  const {
    onPaymentProcessing
  } = eventRegistration;
  const paymentType = 'wechat_pay';
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    billing,
    shippingData,
    emitResponse,
    onPaymentProcessing,
    shouldSavePayment,
    activePaymentMethod,
    element,
    paymentType,
    PAYMENT_METHOD
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.LocalPaymentAfterProcessing)({
    billing,
    eventRegistration,
    responseTypes: emitResponse.responseTypes,
    activePaymentMethod,
    shouldSavePayment,
    emitResponse,
    PAYMENT_METHOD,
    confirmMethod,
    paymentMethodOptions
  });
  (0,_local_payment_methods_js__WEBPACK_IMPORTED_MODULE_4__.useProcessCheckoutError)({
    responseTypes: emitResponse.responseTypes,
    emitResponse,
    eventRegistration
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpsw-wechat-container  cpsw-description-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.description, {
    text: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('description', 'cpsw_wechat_data')
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('mode', 'cpsw_wechat_data') === 'test' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cpsw-test-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Test Mode Enabled: ', 'checkout-plugins-stripe-woo')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('A QR code will pop up, scan and pay with WeChat.', 'checkout-plugins-stripe-woo')));
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
  name: PAYMENT_METHOD,
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_6__.getLabel, {
    icons: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('icons', 'cpsw_wechat_data'),
    gateway: "cpsw_wechat_data"
  }),
  ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('CPSW Wechat', 'checkout-plugins-stripe-woo'),
  placeOrderButtonLabel: String((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.getSettings)('order_button_text', 'cpsw_wechat_data')),
  canMakePayment: props => (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.canDoLocalPayments)(props, 'cpsw_wechat_data'),
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: WechatContent,
    confirmMethod: "confirmWechatPayPayment"
  }),
  edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaymentMethod, {
    Component: WechatContent
  })
});

/***/ }),

/***/ "./src/woo-block/style.scss":
/*!**********************************!*\
  !*** ./src/woo-block/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@woocommerce/blocks-registry":
/*!******************************************!*\
  !*** external ["wc","wcBlocksRegistry"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["wcBlocksRegistry"];

/***/ }),

/***/ "@woocommerce/settings":
/*!************************************!*\
  !*** external ["wc","wcSettings"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["wcSettings"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block": 0,
/******/ 			"./style-block": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcheckout_plugins_stripe_woo"] = globalThis["webpackChunkcheckout_plugins_stripe_woo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-block"], () => (__webpack_require__("./src/woo-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=block.js.map