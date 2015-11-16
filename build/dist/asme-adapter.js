(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined), require("weavedata"), require("React"), require("d3chart"), require("c3"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define([, "weavedata", "React", "d3chart", "c3", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["AsmeAdapter"] = factory(require(undefined), require("weavedata"), require("React"), require("d3chart"), require("c3"), require("lodash"));
	else
		root["AsmeAdapter"] = factory(root[undefined], root["weavedata"], root["React"], root["d3chart"], root["c3"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	exports.AdapterInterface = __webpack_require__(1);
	exports.hook = {};

	exports.hook.C3Hook = __webpack_require__(2);
	exports.hook.D3Hook = __webpack_require__(3);

	exports.peer = {};
	exports.peer.WeaveJSPeer = __webpack_require__(4);

	exports.components = {};
	exports.components.AbstractTool = __webpack_require__(8);

	exports.components.D3 = {};
	exports.components.D3.ScatterPlotTool = __webpack_require__(9);

	exports.components.C3 = {};
	exports.components.C3.ScatterPlotTool = __webpack_require__(14);
	exports.components.C3.WeaveC3 = __webpack_require__(17);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.AdapterAPI = undefined.AdapterAPI || {};
	} else {
	    window.AdapterAPI = window.AdapterAPI || {};
	}

	AdapterAPI.peer = new adapter.peer.WeaveJSInterface();

/***/ },
/* 1 */
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
	    p.doSelection = function (keys) {
	        console.log('this hook doesnt have Selection API');
	    };

	    p.doProbe = function (key) {
	        console.log('this hook doesnt have Probe API');
	    };

	    adapter.Interface = Interface;
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter.hook = undefined.adapter.hook || {};
	} else {
	    window.adapter.hook = window.adapter.hook || {};
	}

	(function () {
	    function C3Interface(chart) {
	        adapter.Interface.call(this);
	        if (chart) this._chart = chart;

	        Object.defineProperty(this, 'chart', {
	            get: function get() {
	                return this._chart;
	            },
	            set: function set(chart) {
	                this._chart = chart;
	            }
	        });
	    }

	    C3Interface.prototype = new adapter.Interface();
	    C3Interface.prototype.constructor = C3Interface;

	    var p = C3Interface.prototype;

	    p.doProbe = function (key) {
	        if (!this.chart) {
	            console.error('Hook a C3 chart First');
	            return;
	        }
	        var yIndex = Number(this.chart.keyColumnToYIndex[key]);
	        this.chart.select(['y'], [yIndex], true);
	    };

	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     * @param columns: We need to give the the charts column ids like ['col1','col2']
	     * @param chart: we need to give chart instance generated in c3
	     */
	    p.doSelection = function (keys) {
	        if (!this.chart) {
	            console.error('Hook a c3 chart First');
	            return;
	        }

	        if (keys !== undefined) {
	            if (keys.constructor !== Array) console.log("Keys has to be an array ");
	        } else console.log("keys(Array)  is required");

	        if (keys.length > 0) {
	            var yIndices = keys.map((function (key) {
	                return Number(this.chart.keyColumnToYIndex[key]);
	            }).bind(this));
	            this.chart.select(['y'], yIndices, true);
	        } else this.chart.unselect();
	    };

	    adapter.hook.C3Interface = C3Interface;
	})();

/***/ },
/* 3 */
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
	        if (chart) this._chart = chart;

	        Object.defineProperty(this, 'chart', {
	            get: function get() {
	                return this._chart;
	            },
	            set: function set(chart) {
	                this._chart = chart;
	            }
	        });
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
	        if (!this.chart) {
	            console.log(this);
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.chart.select(keys);
	    };

	    p.doProbe = function (key) {
	        if (!this.chart) {
	            console.log(this);
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.chart.probe(key);
	    };

	    p.setData = function (sourceName, data) {
	        if (!this.chart) {
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.dataSource = sourceName;
	        this.chart.renderChart(data);
	    };

	    adapter.hook.D3Interface = D3Interface;
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module adapter.peer
	 */

	'use strict';

	__webpack_require__(5);

	//namespace
	__webpack_require__(6);
	__webpack_require__(7);
	if (typeof window === 'undefined') {
	    undefined.adapter.peer = undefined.adapter.peer || {};
	} else {
	    window.adapter.peer = window.adapter.peer || {};
	}

	(function () {

	    //constructor
	    /**
	     * @class WeaveJSInterface
	     * @extends Interface
	     * @constructor
	     */
	    function WeaveJSInterface() {
	        adapter.Interface.call(this);
	        this.activeHook = null;

	        // set Probe and Selection keys
	        Object.defineProperty(this, 'probeKeysPath', {
	            value: weave.path('defaultProbeKeySet').request('weavecore.LinkableVariable')
	        });

	        Object.defineProperty(this, 'selectionKeysPath', {
	            value: weave.path('defaultSelectionKeySet').request('weavecore.LinkableVariable')
	        });

	        Object.defineProperty(this, 'filterKeysPath', {
	            value: weave.path('defaultSubsetKeyFilter').request('weavecore.LinkableVariable')
	        });

	        Object.defineProperty(this, 'hooksPath', {
	            value: weave.path('hooks').request('weavecore.LinkableHashMap')
	        });

	        Object.defineProperty(this, 'dataSourcesPath', {
	            value: weave.path('dataSources').request('weavecore.LinkableHashMap')
	        });

	        Object.defineProperty(this, 'hooks', {
	            value: WeaveAPI.globalHashMap.getObject('hooks')
	        });

	        Object.defineProperty(this, 'dataSources', {
	            value: WeaveAPI.globalHashMap.getObject('dataSources')
	        });

	        this.selectionKeysPath.state([]);
	        this.probeKeysPath.state(null);

	        this.selectionKeysPath.addCallback(renderSelection.bind(this), false, true);
	        this.probeKeysPath.addCallback(renderProbe.bind(this), false, true);

	        this.hooks.childListCallbacks.addImmediateCallback(this, updateDataSource.bind(this), false, true);
	    }

	    WeaveJSInterface.prototype = new adapter.Interface();
	    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

	    function renderSelection() {
	        var keys = this.selectionKeysPath.getState();
	        console.log(keys);
	        var hookedTools = this.hooks.getObjects();
	        hookedTools.forEach((function (tool, index) {
	            if (tool.hook.chart !== this.activeHook) {
	                console.log(tool.hook, keys);
	                tool.hook.doSelection(keys);
	            }
	        }).bind(this));
	        this.activeHook = null;
	    }

	    function renderProbe() {
	        var key = this.probeKeysPath.getState();
	        var hookedTools = this.hooks.getObjects();
	        hookedTools.forEach((function (tool, index) {
	            if (tool.hook.chart !== this.activeHook) tool.hook.doProbe(key);
	        }).bind(this));
	        this.activeHook = null;
	    }

	    function updateDataSource() {
	        if (this.hooks.childListCallbacks.lastObjectAdded) {
	            var addedTool = this.hooks.childListCallbacks.lastObjectAdded;
	            addedTool.sessionData.dataSourceWatcher.targetPath = WeaveAPI.SessionManager.getPath(WeaveAPI.globalHashMap, this.dataSources.getObject(this.dataSources.getNames()[0]));
	        }
	        if (this.hooks.childListCallbacks.lastObjectRemoved) {
	            var removedTool = this.hooks.childListCallbacks.lastObjectRemoved;
	            removedTool.sessionData.dataSourceWatcher.dispose();
	            WeaveAPI.SessionManager.disposeObject(removedTool.sessionData);
	            WeaveAPI.SessionManager.disposeObject(removedTool);
	        }
	    }

	    var p = WeaveJSInterface.prototype;

	    /**
	     * This function renders on the visualization library , which are hooked to it
	     * @method doSelection
	     * @param {Array} keys We need to give the index value or Keys associated with that record [0,3,5].
	     */
	    p.doSelection = function (keys) {
	        keys = keys.length > 0 ? keys : [];
	        this.selectionKeysPath.state(keys);
	    };

	    /**
	     * This function renders on the visualization library , which are hooked to it
	     * @method doProbe
	     * @param {Object} key We need to give the index value or Key associated with that record.
	     */
	    p.doProbe = function (key) {
	        key = key !== undefined ? key : null;
	        this.probeKeysPath.state(key);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Class} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.requestHook = function (name, classDefn) {
	        return this.hooks.requestObject(name, classDefn, false);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Object} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.removeHook = function (name) {
	        return this.hooks.removeObject(name);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Class} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.requestDataSource = function (name, classDefn) {
	        return this.dataSources.requestObject(name, classDefn, false);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Object} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.removeDataSource = function (name) {
	        return this.dataSources.removeObject(name);
	    };

	    // p.register

	    adapter.peer.WeaveJSInterface = WeaveJSInterface;
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.session = undefined.adapter.session || {};
	} else {
	    window.adapter.session = window.adapter.session || {};
	}

	(function () {

	    Object.defineProperty(DataSource, 'NS', {
	        value: 'adapter.session'
	    });

	    Object.defineProperty(DataSource, 'CLASS_NAME', {
	        value: 'DataSource'
	    });

	    function DataSource() {

	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */
	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * To identify dataSource session objects
	         * @public
	         * @property IDataSource
	         * @readOnly
	         * @type Booloean
	         */
	        Object.defineProperty(this, 'IDataSource', {
	            value: true
	        });
	        /**
	         * @public
	         * @property data
	         * @readOnly
	         * @type weavecore.LinkableVariable
	         */
	        Object.defineProperty(this, 'data', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableVariable([]), updateColumns.bind(this))
	        });

	        this.columns = [];
	    }

	    function updateColumns() {
	        var records = this.data.getSessionState();
	        if (records.length) {
	            var row = records[0];
	            for (var key in row) this.columns.push(key);
	        }
	    }

	    // Prototypes
	    var p = DataSource.prototype;

	    p.getRecords = function () {
	        return this.data.getSessionState();
	    };

	    adapter.session.DataSource = DataSource;
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractTool = (function () {
	    function AbstractTool(props) {
	        _classCallCheck(this, AbstractTool);

	        this.props = props;
	        this.element = props.element;
	        this.toolPath = props.toolPath;
	    }

	    _createClass(AbstractTool, [{
	        key: "_getElementSize",
	        value: function _getElementSize() {
	            return {
	                width: this.element.clientWidth,
	                height: this.element.clientHeight
	            };
	        }
	    }, {
	        key: "resize",
	        value: function resize() {}
	    }, {
	        key: "destroy",
	        value: function destroy() {}
	    }]);

	    return AbstractTool;
	})();

	exports["default"] = AbstractTool;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ScatterPlotUI = __webpack_require__(11);

	var _ScatterPlotUI2 = _interopRequireDefault(_ScatterPlotUI);

	__webpack_require__(13);

	__webpack_require__(6);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs = undefined.adapter.libs || {};
	} else {
	    window.adapter.libs = window.adapter.libs || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs.d3 = undefined.adapter.libs.d3 || {};
	} else {
	    window.adapter.libs.d3 = window.adapter.libs.d3 || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.libs.d3'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {
	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */

	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property library
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'library', {
	            value: 'd3'
	        });

	        /**
	         * @public
	         * @property data
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'sessionData', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new adapter.session.ScatterPlot())
	        });

	        /**
	         * @public
	         * @property hook
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        Object.defineProperty(this, 'hook', {
	            value: new adapter.hook.D3Interface()
	        });
	    }

	    // Prototypes.
	    var p = ScatterPlot.prototype;

	    p.createUI = function (padding, size, interactions) {
	        /**
	         * @public
	         * @property ui
	         * @readOnly
	         * @type ReactElement
	         */
	        if (!this.ui) {
	            Object.defineProperty(this, 'ui', {
	                value: _react2['default'].createElement(_ScatterPlotUI2['default'], {
	                    sessionData: this.sessionData,
	                    padding: {
	                        top: padding.top,
	                        bottom: padding.bottom,
	                        left: padding.left,
	                        right: padding.right
	                    },
	                    size: {
	                        width: size.width,
	                        height: size.height
	                    },

	                    onProbe: interactions.onProbe,
	                    onSelect: interactions.onSelect,
	                    hook: this.hook
	                })
	            });
	        }
	    };

	    //TO-DO: Find a way for class part of Modules
	    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
	    // where as in module provide by webpack we can't get the constructor name.
	    adapter.libs.d3.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(12);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var D3ScatterPlot = (function (_React$Component) {
	    _inherits(D3ScatterPlot, _React$Component);

	    function D3ScatterPlot(props) {
	        _classCallCheck(this, D3ScatterPlot);

	        _get(Object.getPrototypeOf(D3ScatterPlot.prototype), 'constructor', this).call(this, props);
	        this.sessionData = props.sessionData;
	        this.hook = props.hook;
	        this.state = this.sessionData.getSessionStateValue();
	        this.initialize = this.initialize.bind(this);
	        this._setReactState = this._setReactState.bind(this);
	    }

	    _createClass(D3ScatterPlot, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _dataSourcePath = this.state.dataSourcePath;
	            //since key wasnt mentioned here it creates index column and name index as key column name
	            if (_dataSourcePath && _dataSourcePath.length > 0) {
	                var config = {
	                    container: _react2['default'].findDOMNode(this),
	                    margin: this.props.padding ? this.props.padding : {},
	                    size: this.props.size ? this.props.size : {},
	                    interactions: {
	                        onProbe: this.props.onProbe,
	                        onSelect: this.props.onSelect
	                    }
	                };
	                this.hook.chart = new d3Chart.Scatterplot();
	                this.hook.chart.create(config);
	                var path = this.state.dataSourcePath;
	                var rows = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
	                var data = {
	                    columns: {
	                        x: this.state.xAxis,
	                        y: this.state.yAxis

	                    },
	                    records: rows
	                };
	                console.log('d3', rows);
	                this.hook.chart.renderChart(data);
	            } else {
	                console.warn("No data");
	            }
	        }

	        //tied with d3 creation
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.initialize();
	            // make sure data update is called last , so that x and y axis property will be ready by then.
	            WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).addGroupedCallback(this, this._setReactState, true);
	        }
	    }, {
	        key: '_setReactState',
	        value: function _setReactState() {
	            if (!this.hook.chart) {
	                this.initialize();
	            }
	            this.setState(this.sessionData.getSessionStateValue());
	        }

	        //tied with d3 update
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (this.hook.chart) {
	                var path = this.state.dataSourcePath;
	                var rows = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
	                var data = {
	                    columns: {
	                        x: this.state.xAxis,
	                        y: this.state.yAxis

	                    },
	                    records: rows
	                };
	                this.hook.chart.renderChart(data);
	            }
	        }

	        //tied with d3 destruction
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).removeCallback(this._setReactState);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _dataSourcePath = this.state.dataSourcePath;
	            if (_dataSourcePath && _dataSourcePath.length > 0) {
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'Chart' },
	                    ' '
	                );
	            } else {
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'Chart' },
	                    ' ',
	                    _react2['default'].createElement(
	                        'h2',
	                        null,
	                        ' ',
	                        this.sessionData.dataSourceName,
	                        'dont have data '
	                    ),
	                    ' '
	                );
	            }
	        }
	    }]);

	    return D3ScatterPlot;
	})(_react2['default'].Component);

	module.exports = D3ScatterPlot;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.session = undefined.adapter.session || {};
	} else {
	    window.adapter.session = window.adapter.session || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.session'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {

	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */
	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property xAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'xAxis', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
	        });

	        /**
	         * @public
	         * @property yAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'yAxis', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
	        });

	        /**
	         * @public
	         * @property keyColumn
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'keyColumn', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
	        });

	        /**
	         * @public
	         * @property dataSourcePath
	         * @readOnly
	         * @type weavecore.LinkableVariable
	         */
	        Object.defineProperty(this, 'dataSourcePath', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableVariable([]))
	        });

	        /**
	         * @public
	         * @property dataSourceName
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, '_dataSourceWatcher', {
	            value: new weavecore.LinkableWatcher()
	        });

	        Object.defineProperty(this, 'dataSourceWatcher', {
	            get: function get() {
	                return this._dataSourceWatcher;
	            }
	        });

	        WeaveAPI.SessionManager.getCallbackCollection(this.dataSourceWatcher).addImmediateCallback(this, this._updateDataSourcePath.bind(this), true);
	    }

	    // Prototypes
	    var p = ScatterPlot.prototype;

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getSessionStateValue = function () {
	        return {
	            'xAxis': this.xAxis.value,
	            'yAxis': this.yAxis.value,
	            'dataSourcePath': this.dataSourcePath.getSessionState()
	        };
	    };

	    p._updateDataSourcePath = function () {
	        var path = this.dataSourceWatcher.targetPath;
	        this.dataSourcePath.setSessionState(path);
	    };

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getColumnProperties = function () {
	        return ['xAxis', 'yAxis'];
	    };

	    // getter function for react State Objects

	    /**
	     * @method getXAxisValue
	     * @return {Object}
	     */
	    p.getXAxisState = function () {
	        return {
	            'xAxis': this.xAxis.value
	        };
	    };

	    /**
	     * @method getYAxisValue
	     * @return {Object}
	     */
	    p.getYAxisState = function () {
	        return {
	            'yAxis': this.yAxis.value
	        };
	    };

	    /**
	     * @method getDataSourceState
	     * @return {Object}
	     */
	    p.getDataSourceState = function () {
	        return {
	            'dataSourcePath': this.dataSourcePath.getSessionState()
	        };
	    };

	    adapter.session.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ScatterPlotUI = __webpack_require__(15);

	var _ScatterPlotUI2 = _interopRequireDefault(_ScatterPlotUI);

	__webpack_require__(13);

	__webpack_require__(6);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs = undefined.adapter.libs || {};
	} else {
	    window.adapter.libs = window.adapter.libs || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs.c3 = undefined.adapter.libs.c3 || {};
	} else {
	    window.adapter.libs.c3 = window.adapter.libs.c3 || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.libs.c3'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {
	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */

	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property ns
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'ns', {
	            value: 'adapter.libs.c3'
	        });

	        /**
	         * @public
	         * @property library
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'library', {
	            value: 'c3'
	        });

	        /**
	         * @public
	         * @property data
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'sessionData', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new adapter.session.ScatterPlot())
	        });

	        /**
	         * @public
	         * @property hook
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        Object.defineProperty(this, 'hook', {
	            value: new adapter.hook.C3Interface()
	        });
	    }

	    // Prototypes.
	    var p = ScatterPlot.prototype;

	    p.createUI = function (padding, size, interactions) {
	        /**
	         * @public
	         * @property ui
	         * @readOnly
	         * @type ReactElement
	         */
	        if (!this.ui) {
	            Object.defineProperty(this, 'ui', {
	                value: _react2['default'].createElement(_ScatterPlotUI2['default'], {
	                    sessionData: this.sessionData,
	                    padding: {
	                        top: padding.top,
	                        bottom: padding.bottom,
	                        left: padding.left,
	                        right: padding.right
	                    },
	                    size: {
	                        width: size.width,
	                        height: size.height
	                    },
	                    height: size.height,
	                    onProbe: interactions.onProbe,
	                    onSelect: interactions.onSelect,
	                    hook: this.hook
	                })
	            });
	        }
	    };

	    //TO-DO: Find a way for class part of Modules
	    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
	    // where as in module provide by webpack we can't get the constructor name.
	    adapter.libs.c3.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _c3 = __webpack_require__(16);

	var _c32 = _interopRequireDefault(_c3);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var C3ScatterPlot = (function (_React$Component) {
	    _inherits(C3ScatterPlot, _React$Component);

	    function C3ScatterPlot(props) {
	        _classCallCheck(this, C3ScatterPlot);

	        _get(Object.getPrototypeOf(C3ScatterPlot.prototype), 'constructor', this).call(this, props);
	        this.sessionData = props.sessionData;
	        this.hook = props.hook;
	        this.state = this.sessionData.getSessionStateValue();
	        this.initialize = this.initialize.bind(this);
	        this._setReactState = this._setReactState.bind(this);

	        this.getColumns = this.getColumns.bind(this);
	    }

	    _createClass(C3ScatterPlot, [{
	        key: 'initialize',
	        value: function initialize() {
	            var chartUI = this;
	            var _dataSourcePath = this.state.dataSourcePath;
	            if (_dataSourcePath && _dataSourcePath.length > 0) {
	                //data.x data.y are ids - so make it x and y
	                //unlike d3 c3 wont le tyou to load all data, it converts data specifed in columns to array fo json data style
	                //so its important to set hide to keycolumnName which hleps in retrieving the the seleted data

	                var config = {
	                    bindto: _react2['default'].findDOMNode(this),
	                    padding: this.props.padding ? this.props.padding : {},
	                    size: this.props.size ? this.props.size : {},
	                    data: {
	                        x: 'x',
	                        y: 'y',
	                        columns: [],
	                        type: 'scatter',
	                        selection: {
	                            enabled: true,
	                            multiple: true,
	                            draggable: true

	                        },
	                        onselected: function onselected() {
	                            var selectedPoints = this.selected();
	                            //console.log('From c3 Selection selectedPoints Key', selectedPoints);
	                            if (selectedPoints.constructor === Array) {
	                                var keys = selectedPoints.map(function (point) {
	                                    return chartUI.hook.chart.yIndexToKeyColumn[point['index']];
	                                });
	                                //console.log('From c3 Selection Multiple Key', keys);
	                                chartUI.props.onSelect.callback.call(this, keys);
	                            } else {
	                                //console.log('From c3 Selection Single Key', chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']])
	                                chartUI.props.onSelect.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']]);
	                            }
	                        },
	                        onmouseover: function onmouseover(point) {
	                            //console.log('From c3 Probe Key', chartUI.hook.chart.yIndexToKeyColumn[point['index']])
	                            chartUI.props.onProbe.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[point['index']]);
	                        }
	                    },
	                    axis: {
	                        x: {
	                            label: this.state.xAxis,
	                            tick: {
	                                fit: false
	                            }
	                        },
	                        y: {
	                            label: this.state.yAxis
	                        }
	                    },
	                    onmouseout: function onmouseout() {
	                        WeaveAPI.globalHashMap.getObject('defaultSelectionKeySet').setSessionState([]);
	                    },
	                    legend: {
	                        show: false
	                    }

	                };
	                this.hook.chart = _c32['default'].generate(config);
	                var records = this.getColumns(this.state.xAxis, this.state.yAxis);
	                this.hook.chart.load({
	                    columns: records
	                });
	            } else {
	                console.warn("No Data Found");
	            }
	        }

	        //tied with d3 creation
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.initialize();
	            WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).addGroupedCallback(this, this._setReactState, true);
	        }
	    }, {
	        key: '_setReactState',
	        value: function _setReactState() {
	            if (!this.hook.chart) {
	                this.initialize();
	            }
	            this.setState(this.sessionData.getSessionStateValue());
	        }
	    }, {
	        key: 'getColumns',
	        value: function getColumns(xColumnName, yColumnName) {
	            this.hook.chart.keyColumnToYIndex = {};
	            this.hook.chart.yIndexToKeyColumn = {};
	            var path = this.state.dataSourcePath;
	            var data = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
	            var createIndex = false;
	            if (!data[0].hasOwnProperty('index')) {
	                console.warn("Its a good practise to set key column. failing to do so, will create a index as key column");
	                createIndex = true;
	            }

	            var columns = [[], []];
	            var keyCol = this.sessionData.keyColumn.value = this.sessionData.keyColumn.value ? this.sessionData.keyColumn.value : 'index';
	            console.log('Key Column:', keyCol);
	            columns[0].push('x');
	            columns[1].push('y');
	            // in c3 index value is mapped with Y axis value
	            // So map our keycolumn value with Y index which aids in exact selection and probing
	            data.forEach((function (object, i) {
	                if (createIndex) object['index'] = i;
	                if (typeof object[xColumnName] === 'string') {
	                    if (isNaN(Number(object[xColumnName]))) {
	                        columns[0].push(object['index']);
	                    } else {
	                        columns[0].push(Number(object[xColumnName]));
	                    }
	                } else {
	                    columns[0].push(object[xColumnName]);
	                }
	                if (typeof object[yColumnName] === 'string') {
	                    if (isNaN(Number(object[yColumnName]))) {
	                        columns[1].push(object['index']);
	                    } else {
	                        columns[1].push(Number(object[yColumnName]));
	                    }
	                } else {
	                    columns[1].push(object[yColumnName]);
	                }
	                this.hook.chart.keyColumnToYIndex[object[keyCol]] = i;
	                this.hook.chart.yIndexToKeyColumn[i] = object[keyCol];
	            }).bind(this));
	            console.log(columns);
	            return columns;
	        }

	        //tied with d3 update
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (this.hook.chart) {
	                this.hook.chart.axis.labels({
	                    x: this.state.xAxis,
	                    y: this.state.yAxis
	                });
	                var columns = this.getColumns(this.state.xAxis, this.state.yAxis);
	                this.hook.chart.load({
	                    columns: columns
	                });
	            }
	        }

	        //tied with d3 destruction
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).removeCallback(this._setReactState);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _target = this.sessionData.dataSourceWatcher.target;
	            if (_target) {
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'Chart' },
	                    ' '
	                );
	            } else {
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'Chart' },
	                    ' ',
	                    _react2['default'].createElement(
	                        'h2',
	                        null,
	                        ' No Data '
	                    ),
	                    ' '
	                );
	            }
	        }
	    }]);

	    return C3ScatterPlot;
	})(_react2['default'].Component);

	module.exports = C3ScatterPlot;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AbstractToolJs = __webpack_require__(8);

	var _AbstractToolJs2 = _interopRequireDefault(_AbstractToolJs);

	var _c3 = __webpack_require__(16);

	var _c32 = _interopRequireDefault(_c3);

	var _lodash = __webpack_require__(18);

	var _lodash2 = _interopRequireDefault(_lodash);

	/* private
	 * @param records array or records
	 * @param attributes array of attributes to be normalized
	 */
	function _normalizeRecords(records, attributes) {

	    // to avoid computing the stats at each iteration.
	    var columnStatsCache = {};
	    attributes.forEach(function (attr) {
	        columnStatsCache[attr] = {
	            min: _lodash2["default"].min(_lodash2["default"].pluck(records, attr)),
	            max: _lodash2["default"].max(_lodash2["default"].pluck(records, attr))
	        };
	    });

	    return records.map(function (record) {

	        var obj = {};

	        attributes.forEach(function (attr) {
	            var min = columnStatsCache[attr].min;
	            var max = columnStatsCache[attr].max;

	            if (!min || !max || max - min === 0) {
	                return 0;
	            }

	            if (record[attr]) {
	                // console.log( (record[attr] - min) / (max - min));
	                obj[attr] = (record[attr] - min) / (max - min);
	            } else {
	                // if any of the value above is null then
	                // we can't normalize
	                obj[attr] = null;
	            }
	        });

	        return obj;
	    });
	}

	var WeaveC3ScatterPlot = (function (_AbstractTool) {
	    _inherits(WeaveC3ScatterPlot, _AbstractTool);

	    function WeaveC3ScatterPlot(props) {
	        var _this = this;

	        _classCallCheck(this, WeaveC3ScatterPlot);

	        _get(Object.getPrototypeOf(WeaveC3ScatterPlot.prototype), "constructor", this).call(this, props);
	        this._visualizationPath = this.toolPath.push("children", "visualization");
	        this._plotterPath = this.toolPath.pushPlotter("plot");

	        this._dataXPath = this._plotterPath.push("dataX");
	        this._dataYPath = this._plotterPath.push("dataY");
	        this._xAxisPath = this.toolPath.pushPlotter("xAxis");
	        this._yAxisPath = this.toolPath.pushPlotter("yAxis");

	        this._fillStylePath = this._plotterPath.push("fill");
	        this._lineStylePath = this._plotterPath.push("line");
	        this._sizeByPath = this._plotterPath.push("sizeBy");

	        this.plotterState = {};

	        this._plotterPath.addCallback(function () {
	            _this.plotterState = _this._plotterPath.getState();
	            _this._dataChanged();
	        }, true);

	        this._c3Options = {
	            bindto: this.element,
	            data: {
	                rows: [],
	                x: "x",
	                xSort: false,
	                type: "scatter", //,
	                selection: {
	                    enabled: true,
	                    multiple: true,
	                    draggable: true
	                },
	                color: function color(_color, d) {
	                    if (_this.records && d.hasOwnProperty("index")) {
	                        var record = _this.records[d.index];
	                        return record && record.fill && record.fill.color ? record.fill.color : "#C0CDD1";
	                    }
	                    return "#C0CDD1";
	                },
	                onselected: function onselected(d) {
	                    if (d && d.hasOwnProperty("index")) {
	                        _this.toolPath.selection_keyset.addKeys([_this.indexToKey[d.index]]);
	                    }
	                },
	                onunselected: function onunselected(d) {
	                    if (d && d.hasOwnProperty("index")) {
	                        _this.toolPath.selection_keyset.removeKeys([_this.indexToKey[d.index]]);
	                    }
	                },
	                onmouseover: function onmouseover(d) {
	                    if (d && d.hasOwnProperty("index")) {
	                        _this.toolPath.probe_keyset.setKeys([_this.indexToKey[d.index]]);
	                    }
	                },
	                onmouseout: function onmouseout(d) {
	                    if (d && d.hasOwnProperty("index")) {
	                        _this.toolPath.probe_keyset.setKeys([]);
	                    }
	                }
	            },
	            legend: {
	                show: false
	            },
	            axis: {
	                x: {
	                    label: {
	                        position: "outer-center"
	                    },
	                    tick: {
	                        fit: false
	                    }
	                },
	                y: {
	                    label: {
	                        position: "outer-middle"
	                    },
	                    tick: {
	                        fit: false
	                    }
	                }
	            },
	            grid: {
	                x: {
	                    show: true
	                },
	                y: {
	                    show: true
	                }
	            },
	            point: {
	                r: function r(d) {
	                    if (d.hasOwnProperty("index")) {
	                        return _this.normalizedPointSizes[d.index];
	                    }
	                }
	            },
	            onrendered: this._updateStyle.bind(this)
	        };

	        this.chart = _c32["default"].generate(this._c3Options);

	        this._setupCallbacks();
	    }

	    //registerToolImplementation("weave.visualization.tools::ScatterPlotTool", WeaveC3ScatterPlot);

	    _createClass(WeaveC3ScatterPlot, [{
	        key: "_setupCallbacks",
	        value: function _setupCallbacks() {
	            var dataChanged = _lodash2["default"].debounce(this._dataChanged.bind(this), 100);

	            [this._dataXPath, this._dataYPath, this._sizeByPath, this._fillStylePath, this._lineStylePath].forEach(function (path) {
	                path.addCallback(dataChanged, true, false);
	            });

	            var axisChanged = _lodash2["default"].debounce(this._axisChanged.bind(this), 100);
	            [this._dataXPath, this._dataYPath, this._xAxisPath, this._yAxisPath].forEach(function (path) {
	                path.addCallback(axisChanged, true, false);
	            });

	            this.toolPath.selection_keyset.addCallback(this._selectionKeysChanged.bind(this), true, false);

	            //console.log(this.toolPath.probe_keyset);
	            this.toolPath.probe_keyset.addCallback(this._probedKeysChanged.bind(this), true, false);
	        }
	    }, {
	        key: "resize",
	        value: function resize() {
	            this.chart.resize(this._getElementSize());
	        }
	    }, {
	        key: "_axisChanged",
	        value: function _axisChanged() {

	            if (this.busy) {
	                return;
	            }

	            this.chart.axis.labels({
	                x: this._xAxisPath.push("overrideAxisName").getState() || this._dataXPath.getValue("weavedata.ColumnUtils.getTitle(this)"),
	                y: this._yAxisPath.push("overrideAxisName").getState() || this._dataYPath.getValue("weavedata.ColumnUtils.getTitle(this)")
	            });
	        }
	    }, {
	        key: "_dataChanged",
	        value: function _dataChanged() {
	            var _this2 = this;

	            if (this.busy) {
	                return;
	            }
	            var mapping = {
	                point: {
	                    x: this._dataXPath,
	                    y: this._dataYPath
	                },
	                size: this._sizeByPath,
	                fill: {
	                    alpha: this._fillStylePath.push("alpha"),
	                    color: this._fillStylePath.push("color")
	                },
	                line: {
	                    alpha: this._lineStylePath.push("alpha"),
	                    color: this._lineStylePath.push("color"),
	                    caps: this._lineStylePath.push("caps")
	                }
	            };

	            this.records = _lodash2["default"].sortByOrder(this._plotterPath.retrieveRecords(mapping, this._plotterPath.push("filteredKeySet")), ["size", "id"], ["desc", "asc"]);

	            this.keyToIndex = {};
	            this.indexToKey = {};

	            this.records.forEach(function (record, index) {
	                _this2.keyToIndex[record.id] = index;
	                _this2.indexToKey[index] = record.id;
	            });

	            this.normalizedRecords = _normalizeRecords(this.records, ["size"]);

	            this.normalizedPointSizes = this.normalizedRecords.map(function (normalizedRecord) {
	                if (_this2.plotterState && _this2.plotterState.sizeBy.length) {
	                    var minScreenRadius = _this2.plotterState.minScreenRadius;
	                    var maxScreenRadius = _this2.plotterState.maxScreenRadius;

	                    return (normalizedRecord && normalizedRecord.size ? minScreenRadius + normalizedRecord.size * (maxScreenRadius - minScreenRadius) : _this2.plotterState.defaultScreenRadius) || 1;
	                } else {
	                    return _this2.plotterState.defaultScreenRadius || 1;
	                }
	            });

	            this._axisChanged();
	            this.busy = true;
	            this.chart.load({
	                data: _lodash2["default"].pluck(this.records, "point"),
	                unload: true,
	                done: function done() {
	                    _this2.busy = false;
	                }
	            });
	        }
	    }, {
	        key: "_selectionKeysChanged",
	        value: function _selectionKeysChanged() {
	            var _this3 = this;

	            var keys = this.toolPath.selection_keyset.getKeys();
	            var indices = keys.map(function (key) {
	                return Number(_this3.keyToIndex[key]);
	            });
	            this.chart.select("y", indices, true);
	        }
	    }, {
	        key: "_probedKeysChanged",
	        value: function _probedKeysChanged() {
	            /*
	            var keys = this.toolPath.probe_keyset.getKeys();
	            var indices = keys.map( (key) => {
	                return Number(this.keyToIndex[key]);
	            });
	            */
	            // this.chart.select("y", indices, true);
	        }
	    }, {
	        key: "_updateStyle",
	        value: function _updateStyle() {
	            d3.selectAll(this.element).selectAll("circle").style("opacity", 1).style("stroke", "black").style("stroke-opacity", 0.5);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.chart.destroy();
	        }
	    }]);

	    return WeaveC3ScatterPlot;
	})(_AbstractToolJs2["default"]);

	exports["default"] = WeaveC3ScatterPlot;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=asme-adapter.js.map
