module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _RenderMonitor = __webpack_require__(2);

	var _RenderMonitor2 = _interopRequireDefault(_RenderMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  RenderMonitor: _RenderMonitor2.default
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ReportModal = __webpack_require__(4);

	var _ReportModal2 = _interopRequireDefault(_ReportModal);

	var _lifeCycleDecorator2 = __webpack_require__(7);

	var _lifeCycleDecorator3 = _interopRequireDefault(_lifeCycleDecorator2);

	var _PerformanceIcon = __webpack_require__(9);

	var _PerformanceIcon2 = _interopRequireDefault(_PerformanceIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {};

	var defaultOptions = {
	  disable: false,
	  consoleReport: true,
	  uiReport: true,
	  popperPosition: 'left'
	};

	var RenderMonitor = function RenderMonitor(Component) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var settings = _extends({}, defaultOptions, options);

	  if (settings.disable) {
	    return Component;
	  }

	  var componentName = Component.name;

	  var _lifeCycleDecorator = (0, _lifeCycleDecorator3.default)(Component, settings),
	      DecoratedComponent = _lifeCycleDecorator.DecoratedComponent,
	      componentReport = _lifeCycleDecorator.componentReport;

	  return function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	      _this.toggleUiReport = _this.toggleUiReport.bind(_this);

	      _this.state = {
	        showUiReport: false
	      };
	      return _this;
	    }

	    _createClass(_class, [{
	      key: 'toggleUiReport',
	      value: function toggleUiReport() {
	        this.setState({ showUiReport: !this.state.showUiReport });
	      }
	    }, {
	      key: 'renderWithUiReport',
	      value: function renderWithUiReport() {
	        var showUiReport = this.state.showUiReport;

	        return _react2.default.createElement(
	          'div',
	          { style: styles.container },
	          _react2.default.createElement(_PerformanceIcon2.default, {
	            style: styles.icon,
	            onClick: this.toggleUiReport
	          }),
	          _react2.default.createElement(DecoratedComponent, this.props),
	          showUiReport && _react2.default.createElement(_ReportModal2.default, {
	            componentName: componentName,
	            componentReport: componentReport
	          })
	        );
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return settings.uiReport ? this.renderWithUiReport() : _react2.default.createElement(DecoratedComponent, this.props);
	      }
	    }]);

	    return _class;
	  }(_react2.default.Component);
	};

	styles = {
	  container: {
	    position: 'relative'
	  },
	  icon: {
	    cursor: 'pointer',
	    position: 'absolute',
	    top: '5px',
	    right: '5px',
	    width: '20px',
	    height: '20px'
	  }
	};

	// Icon credit
	// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>

	exports.default = RenderMonitor;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _helper = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {};

	var ReportModal = function (_React$Component) {
	  _inherits(ReportModal, _React$Component);

	  function ReportModal() {
	    _classCallCheck(this, ReportModal);

	    return _possibleConstructorReturn(this, (ReportModal.__proto__ || Object.getPrototypeOf(ReportModal)).apply(this, arguments));
	  }

	  _createClass(ReportModal, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          componentName = _props.componentName,
	          componentReport = _props.componentReport;

	      return _react2.default.createElement(
	        'div',
	        { style: styles.modal },
	        _react2.default.createElement(
	          'span',
	          { style: styles.title },
	          componentName
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: styles.monitorInfo },
	          'Mount render time: ',
	          (0, _helper.performanceFormat)(componentReport.mountRenderTime),
	          'ms'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: styles.monitorInfo },
	          'Update render time: ',
	          (0, _helper.performanceFormat)(componentReport.updateRenderTime),
	          'ms'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: styles.monitorInfo },
	          'Unnecessary renders: ',
	          componentReport.unnecessaryRenders
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: styles.monitorInfo },
	          'Unnecessary renders total time: ',
	          (0, _helper.performanceFormat)(componentReport.unnecessaryRendersTotalTime),
	          'ms'
	        )
	      );
	    }
	  }]);

	  return ReportModal;
	}(_react2.default.Component);

	// ReportModal.propTypes = {
	//   componentName: React.PropTypes.string,
	//   componentReport: React.PropTypes.shape({
	//     mountRenderTime: React.PropTypes.number,
	//     updateRenderTime: React.PropTypes.number,
	//     unnecessaryRenders: React.PropTypes.number,
	//     unnecessaryRendersTotalTime: React.PropTypes.number,
	//   }),
	// };

	styles = {
	  modal: {
	    backgroundColor: 'white',
	    position: 'fixed',
	    bottom: '20px',
	    right: '20px',
	    border: 'solid 1px #ccc',
	    padding: '10px',
	    zIndex: 500
	  },
	  title: {
	    fontSize: '16px',
	    fontWeight: 700,
	    display: 'block'
	  },
	  monitorInfo: {
	    fontSize: '14px',
	    display: 'block'
	  }
	};

	exports.default = ReportModal;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.performanceFormat = exports.replaceLifeCycleEvent = exports.componentLog = exports.isStatelessComponent = undefined;

	var _isFunction = __webpack_require__(6);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isStatelessComponent = exports.isStatelessComponent = function isStatelessComponent(Component) {
	  return !Component.prototype.render;
	};

	var componentLog = exports.componentLog = function componentLog(Component, msg) {
	  return console.log(Component.name + ': ' + msg);
	};

	var replaceLifeCycleEvent = exports.replaceLifeCycleEvent = function replaceLifeCycleEvent(Component, lifecycle, eventTask) {
	  var originalEvent = Component.prototype[lifecycle];

	  Component.prototype[lifecycle] = function () {
	    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
	      parameters[_key] = arguments[_key];
	    }

	    eventTask.apply(this, parameters);

	    if ((0, _isFunction2.default)(originalEvent)) {
	      originalEvent.apply(this, parameters);
	    }
	  };
	};

	var performanceFormat = exports.performanceFormat = function performanceFormat(time) {
	  return time && time.toFixed(2);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("lodash/isFunction");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqual = __webpack_require__(8);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _helper = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lifeCycleDecorator = function lifeCycleDecorator(Component, settings) {
	  if ((0, _helper.isStatelessComponent)(Component)) {
	    (0, _helper.componentLog)(Component, 'Sorry, we don\'t support Stateless component at this moment');
	    return { DecoratedComponent: Component, componentReport: {} };
	  }

	  var componentMountStartTime = void 0;
	  var componentUpdateStartTime = void 0;

	  var componentReport = {
	    mountRenderTime: 0,
	    updateRenderTime: 0,
	    unnecessaryRenders: 0,
	    unnecessaryRendersTotalTime: 0
	  };

	  (0, _helper.replaceLifeCycleEvent)(Component, 'componentWillMount', function () {
	    componentMountStartTime = performance.now();
	  });

	  (0, _helper.replaceLifeCycleEvent)(Component, 'componentDidMount', function () {
	    componentReport.mountRenderTime = performance.now() - componentMountStartTime;

	    if (settings.consoleReport) {
	      (0, _helper.componentLog)(Component, 'mount and first render time ' + (0, _helper.performanceFormat)(componentReport.mountRenderTime) + 'ms');
	    }
	  });

	  (0, _helper.replaceLifeCycleEvent)(Component, 'componentWillUpdate', function () {
	    componentUpdateStartTime = performance.now();
	  });

	  (0, _helper.replaceLifeCycleEvent)(Component, 'componentDidUpdate', function (prevProps, prevState) {
	    componentReport.updateRenderTime = performance.now() - componentUpdateStartTime;

	    var withoutPropsChanges = (0, _isEqual2.default)(this.props, prevProps);
	    var withoutStateChanges = (0, _isEqual2.default)(this.state, prevState);

	    if (settings.consoleReport) {
	      (0, _helper.componentLog)(Component, 'update time ' + (0, _helper.performanceFormat)(componentReport.updateRenderTime) + 'ms');
	    }

	    if (withoutPropsChanges && withoutStateChanges) {
	      componentReport.unnecessaryRenders += 1;
	      componentReport.unnecessaryRendersTotalTime += componentReport.updateRenderTime;

	      if (settings.consoleReport) {
	        (0, _helper.componentLog)(Component, 'render not required, same props and state');
	        (0, _helper.componentLog)(Component, 'unnecessary renders ' + componentReport.unnecessaryRenders);

	        var unnecessaryRendersTotalTime = (0, _helper.performanceFormat)(componentReport.unnecessaryRendersTotalTime);
	        (0, _helper.componentLog)(Component, 'unnecessary renders total time ' + unnecessaryRendersTotalTime + 'ms');
	      }
	    }
	  });

	  return { DecoratedComponent: Component, componentReport: componentReport };
	};

	exports.default = lifeCycleDecorator;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("lodash/isEqual");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PerformanceIcon = function PerformanceIcon(props) {
	  return _react2.default.createElement(
	    "svg",
	    _extends({ version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px",
	      viewBox: "0 0 1000 1000", enableBackground: "new 0 0 1000 1000", xmlSpace: "preserve", width: 1000,
	      height: 1000 }, props),
	    _react2.default.createElement(
	      "metadata",
	      null,
	      " Svg Vector Icons : http://www.onlinewebfonts.com/icon"
	    ),
	    _react2.default.createElement(
	      "g",
	      null,
	      _react2.default.createElement("path", {
	        d: "M945.5,40.7H54.5C29.9,40.7,10,60.9,10,85.9v828.2c0,25,19.9,45.2,44.5,45.2h890.9c24.6,0,44.5-20.3,44.5-45.2V85.9C990,60.9,970.1,40.7,945.5,40.7z M928.9,898.3H71.1V101.7h857.7V898.3z" }),
	      _react2.default.createElement("path", {
	        d: "M125.7,693.9H874c7.7,0,13.9-6.3,13.9-14.1c0-70.9-19-160-51.8-217.4c-0.2-0.4,0.1-0.8-0.2-1.1c-0.2-0.4-0.7-0.4-0.9-0.8c-33.9-58.6-82.3-107.5-140.4-141.7c-0.3-0.3-0.3-0.8-0.7-1c-0.3-0.2-0.7,0-1.1-0.2c-56.9-33.2-122.7-52.3-192.9-52.3c-70.3,0-136,19.2-193,52.3c-0.4,0.2-0.8,0-1.1,0.2c-0.3,0.2-0.5,0.8-0.7,1c-58,34.2-106.4,83-140.2,141.5c-0.3,0.5-0.9,0.5-1.1,0.9c-0.3,0.3,0,0.9-0.2,1.2c-32.8,57.5-51.7,146.4-51.7,217.3C111.9,687.6,118,693.9,125.7,693.9z M202.3,495.2l63.6,34.3c2,1.1,4.3,1.6,6.6,1.6c4.5,0,8.8-2.1,11.2-6.1c3.6-5.8,1.4-13.2-4.8-16.6l-63.5-34.3c26.7-39.6,62.5-73.3,104.6-98.3l36.8,59.6c2.4,3.9,6.8,6.1,11.2,6.1c2.2,0,4.5-0.5,6.5-1.7c6.1-3.3,8.3-10.8,4.8-16.6l-36.9-59.9c43.1-21.3,93.1-33.8,144.7-35.6v68.8c0,6.7,3.1,12.1,10.2,12.1c7.1,0,11.5-5.4,11.5-12.1v-68.8c51.6,1.8,103,14.3,146,35.6L618,423.4c-3.6,5.8-1.4,13.2,4.8,16.6c2,1.1,4.3,1.7,6.5,1.7c4.5,0,8.8-2.2,11.2-6.1l36.8-59.7c42.2,25.1,78,58.7,104.7,98.3l-63.5,34.4c-6.2,3.3-8.3,10.8-4.8,16.6c2.4,4,6.8,6.1,11.3,6.1c2.2,0,4.5-0.6,6.5-1.6l63.6-34.4c22.8,40.4,36.8,109.3,38.8,157.7l-293,0.4c6-9.7,14.3-24.6,14.3-37c0-11.6-3.8-21.9-9.1-31.1l84.9-91.4c5.1-5.4,5.1-14.2,0-19.7c-5.1-5.6-13.3-5.5-18.3,0l-84.9,91.3c-8.7-5.6-16.9-14.2-27.7-14.2c-31.1,0-61.3,27.7-61.3,61.3c0,12.3,4.1,26.1,20.4,40.8l-295.4-0.4C165.8,604.4,179.6,535.6,202.3,495.2z" })
	    )
	  );
	};

	exports.default = PerformanceIcon;

/***/ })
/******/ ]);