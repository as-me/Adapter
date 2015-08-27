(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined), require("d3chart"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define([, "d3chart", "React"], factory);
	else if(typeof exports === 'object')
		exports["AsmeAdapter"] = factory(require(undefined), require("d3chart"), require("React"));
	else
		root["AsmeAdapter"] = factory(root[undefined], root["d3chart"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	exports.AdapterInterface = __webpack_require__(3);
	exports.hook = {};

	exports.hook.C3Hook = __webpack_require__(4);
	exports.hook.D3Hook = __webpack_require__(5);

	exports.peer = {};
	exports.peer.WeaveJSPeer = __webpack_require__(6);

	exports.components = {};

	exports.components.D3 = {};
	exports.components.D3.ScatterPlot = __webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.sessionData = undefined.adapter.sessionData || {};
	} else {
	    window.adapter.sessionData = window.adapter.sessionData || {};
	}

	(function () {
	    function GlobalData() {

	        /**
	         * @public
	         * @property xAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'dataSource', {
	            value: WeaveAPI.globalHashMap.requestObject("dataSource", weavecore.LinkableVariable)
	        });
	    }

	    // Prototypes
	    var p = GlobalData.prototype;

	    p.getData = function () {
	        return this.dataSource.getSessionState();
	    };
	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getSessionStateValue = function () {
	        return {
	            'dataSource': this.dataSource.getSessionState()
	        };
	    };

	    adapter.sessionData.GlobalData = new GlobalData();
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	(function () {
	    function Interface() {}
	    var p = Interface.prototype;
	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     */
	    p.doSelection = function (keys) {};

	    p.doProbe = function (key) {};

	    p.setData = function () {};
	    p.getData = function () {};

	    adapter.Interface = Interface;
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	//namespace
	"use strict";

	if (typeof window === 'undefined') {
	    undefined.adapter.hook = undefined.adapter.hook || {};
	} else {
	    window.adapter.hook = window.adapter.hook || {};
	}

	(function () {
	    function C3Interface(chart) {
	        adapter.Interface.call(this);
	        this.chart = chart;
	    }

	    C3Interface.prototype = new adapter.Interface();
	    C3Interface.prototype.constructor = C3Interface;

	    var p = C3Interface.prototype;
	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     * @param columns: We need to give the the charts column ids like ['col1','col2']
	     * @param chart: we need to give chart instance generated in c3
	     */
	    p.doSelection = function (keys) {

	        if (keys !== undefined) {
	            if (keys.constructor !== Array) console.log("Keys has to be an array ");
	        } else console.log("keys(Array)  is required");

	        if (keys.length > 0) {
	            var numericKeys = keys.map(function (key) {
	                if (key.constructor === String) return key = Number(key);else return key;
	            });
	            this.chart.select(this.chart.columns, numericKeys, true);
	        } else this.chart.unselect();
	    };

	    adapter.hook.C3Interface = C3Interface;
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter.hook = undefined.adapter.hook || {};
	} else {
	    window.adapter.hook = window.adapter.hook || {};
	}

	(function () {
	    function D3Interface(chart) {
	        adapter.Interface.call(this);
	        this.chart = chart;
	        this.dataSource;
	    }

	    D3Interface.prototype = new adapter.Interface();
	    D3Interface.prototype.constructor = D3Interface;

	    var p = D3Interface.prototype;
	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     * @param columns: We need to give the the charts column ids like ['col1','col2']
	     * @param chart: we need to give chart instance generated in c3
	     */
	    p.doSelection = function (keys) {
	        this.chart.select(keys);
	    };

	    p.doProbe = function (key) {
	        this.chart.probe(key);
	    };

	    p.setData = function (sourceName, data) {
	        this.dataSource = sourceName;
	        this.chart.renderChart(data);
	    };

	    adapter.hook.D3Interface = D3Interface;
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	//namespace
	if (typeof window === 'undefined') {
	    undefined.adapter.peer = undefined.adapter.peer || {};
	} else {
	    window.adapter.peer = window.adapter.peer || {};
	}

	(function () {
	    //static Declaration
	    // set Probe and Selection keys
	    Object.defineProperty(WeaveJSInterface, 'probeKeys', {
	        value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
	    });

	    Object.defineProperty(WeaveJSInterface, 'selectionKeys', {
	        value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
	    });

	    //constructor
	    function WeaveJSInterface() {
	        adapter.Interface.call(this);
	        this.hooks = [];
	        this.activeHook = null;
	        WeaveJSInterface.selectionKeys.addImmediateCallback({}, renderSelection.bind(this));
	        WeaveJSInterface.probeKeys.addImmediateCallback({}, renderProbe.bind(this));
	    }

	    WeaveJSInterface.prototype = new adapter.Interface();
	    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

	    function renderSelection() {
	        var keys = WeaveJSInterface.selectionKeys.getSessionState();
	        this.hooks.forEach(function (hook, index) {
	            if (hook != this.activehook) hook.doSelection(keys);else this.activehook = null;
	        });
	    }

	    function renderProbe() {
	        var key = WeaveJSInterface.probeKeys.getSessionState();
	        this.hooks.forEach(function (hook, index) {
	            if (hook != this.activehook) hook.doProbe(key);else this.activehook = null;
	        });
	    }

	    var p = WeaveJSInterface.prototype;
	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     */
	    p.doSelection = function (keys) {
	        WeaveJSInterface.selectionKeys.setSessionState(keys);
	    };

	    p.doProbe = function (key) {
	        WeaveJSInterface.probeKeys.setSessionState(key);
	    };

	    adapter.peer.WeaveJSInterface = WeaveJSInterface;
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(8);

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.sessionData = undefined.adapter.sessionData || {};
	} else {
	    window.adapter.sessionData = window.adapter.sessionData || {};
	}

	(function () {
	    function scatterPlotData() {
	        /**
	         * @private
	         * @property _localHM
	         * @type weavecore.LinkableHashMap
	         **/
	        this._localHM = WeaveAPI.globalHashMap.requestObject("D3ScatterPlot", weavecore.LinkableHashMap);
	        /**
	         * @public
	         * @property localHashMap
	         * @readOnly
	         * @type weavecore.LinkableHashMap
	         */
	        Object.defineProperty(this, 'localHashMap', {
	            value: this._localHM
	        });

	        /**
	         * @public
	         * @property xAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'xAxis', {
	            value: this._localHM.requestObject("xAxis", weavecore.LinkableString)
	        });

	        /**
	         * @public
	         * @property yAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'yAxis', {
	            value: this._localHM.requestObject("yAxis", weavecore.LinkableString)
	        });

	        this.chart = new d3Chart.Scatterplot();
	    }

	    // Prototypes
	    var p = scatterPlotData.prototype;

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getSessionStateValue = function () {
	        return {
	            'xAxis': this.xAxis.value,
	            'yAxis': this.yAxis.value
	        };
	    };

	    adapter.sessionData.scatterPlotData = new scatterPlotData();
	})();

	var ScatterPlot = (function (_React$Component) {
	    _inherits(ScatterPlot, _React$Component);

	    function ScatterPlot() {
	        _classCallCheck(this, ScatterPlot);

	        _get(Object.getPrototypeOf(ScatterPlot.prototype), 'constructor', this).call(this);
	        this._setReactState = this._setReactState.bind(this);
	    }

	    _createClass(ScatterPlot, [{
	        key: '_initializeDataLogic',
	        value: function _initializeDataLogic() {}

	        //tied with d3 creation
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var config = {
	                container: _react2['default'].findDOMNode(this),
	                margin: {
	                    top: this.props.top,
	                    bottom: this.props.bottom,
	                    left: this.props.left,
	                    right: this.props.right
	                },
	                size: {
	                    width: this.props.width,
	                    height: this.props.height
	                },
	                columns: {
	                    x: "name",
	                    y: "protein",
	                    key: "name"
	                }
	            };
	            adapter.sessionData.scatterPlotData.chart.create(config);
	            adapter.sessionData.scatterPlotData.chart.renderChart(adapter.sessionData.GlobalData.getData());

	            adapter.sessionData.scatterPlotData.xAxis.addGroupedCallback(this, this._setReactState);
	            adapter.sessionData.scatterPlotData.yAxis.addGroupedCallback(this, this._setReactState);
	        }

	        //tied with d3 update
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            console.log(adapter.sessionData.GlobalData.getData());
	            adapter.sessionData.scatterPlotData.chart.renderChart(adapter.sessionData.GlobalData.getData());
	            adapter.sessionData.scatterPlotData.chart.setXAttribute(adapter.sessionData.scatterPlotData.xAxis.value);
	            adapter.sessionData.scatterPlotData.chart.setYAttribute(adapter.sessionData.scatterPlotData.yAxis.value);
	        }

	        //tied with d3 destruction
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            adapter.sessionData.scatterPlotData.xAxis.removeCallback(this._setReactState);
	            adapter.sessionData.scatterPlotData.yAxis.removeCallback(this._setReactState);
	        }
	    }, {
	        key: '_setReactState',
	        value: function _setReactState() {
	            //TO-DO: check whether column Name is Part of the data Source
	            console.log('Scatterplot Callback:', adapter.sessionData.scatterPlotData.getSessionStateValue());

	            this.setState(adapter.sessionData.scatterPlotData.getSessionStateValue());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'Chart' },
	                ' '
	            );
	        }
	    }]);

	    return ScatterPlot;
	})(_react2['default'].Component);

	module.exports = ScatterPlot;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=asme-adapter.js.map
