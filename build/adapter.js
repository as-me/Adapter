(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

require('weavecore');

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

},{"weavecore":"weavecore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _D3ScatterPlotJs = require('./D3/ScatterPlot.js');

var _D3ScatterPlotJs2 = _interopRequireDefault(_D3ScatterPlotJs);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
        this.state = {
            width: 800,
            height: 400,
            top: 5,
            bottom: 100,
            right: 20,
            left: 70
        };
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'App' },
                _react2['default'].createElement(_D3ScatterPlotJs2['default'], { width: this.state.width,
                    height: this.state.height,
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: this.state.right,
                    left: this.state.left
                }),
                ' '
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./D3/ScatterPlot.js":4,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("d3chart");

var _react = require('react');

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

    //tied with d3 creation

    _createClass(ScatterPlot, [{
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
                { ref: 'container',
                    className: 'Chart' },
                ' '
            );
        }
    }]);

    return ScatterPlot;
})(_react2['default'].Component);

exports['default'] = ScatterPlot;
module.exports = exports['default'];

},{"d3chart":"d3chart","react":"react"}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("./AdapterInterface.js");

require("./hook/C3Hook.js");

require("./hook/D3Hook.js");

require("./peer/WeaveJSPeer.js");

require('./Global.js');

var _componentsAppJs = require('./components/App.js');

var _componentsAppJs2 = _interopRequireDefault(_componentsAppJs);

//import './components/D3/ScatterPlot.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

_react2["default"].render(_react2["default"].createElement(_componentsAppJs2["default"], null), document.body);

_d32["default"].csv("testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {
    adapter.sessionData.GlobalData.dataSource.setSessionState(rows);
    adapter.sessionData.scatterPlotData.xAxis.value = 'name';
    adapter.sessionData.scatterPlotData.yAxis.value = 'sodium';
});

var weaveInteractionPeer = new adapter.peer.WeaveJSInterface();

weaveInteractionPeer.hooks.push(new adapter.hook.D3Interface(adapter.sessionData.scatterPlotData.chart));

},{"./AdapterInterface.js":1,"./Global.js":2,"./components/App.js":3,"./hook/C3Hook.js":5,"./hook/D3Hook.js":6,"./peer/WeaveJSPeer.js":8,"d3":"d3","react":"react"}],8:[function(require,module,exports){
'use strict';

require('weavecore');

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

},{"weavecore":"weavecore"}]},{},[7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9BZGFwdGVySW50ZXJmYWNlLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvR2xvYmFsLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9jb21wb25lbnRzL0QzL1NjYXR0ZXJQbG90LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvaG9vay9DM0hvb2suanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9ob29rL0QzSG9vay5qcyIsIi9Vc2Vycy9zYW5qYXkvZ2l0L0FkYXB0ZXIvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvcGVlci9XZWF2ZUpTUGVlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0FBQy9CLGNBQUssT0FBTyxHQUFHLFVBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUNyQyxNQUFNO0FBQ0gsVUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUN6Qzs7QUFHRCxBQUFDLENBQUEsWUFBWTtBQUNULGFBQVMsU0FBUyxHQUFHLEVBQUU7QUFDdkIsUUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7Ozs7QUFLNUIsS0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7O0FBRW5DLEtBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUU5QixLQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxDQUFD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RUFBRTtBQUN0QyxnQkFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUVsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDTjs7QUFFRCxRQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Ozs7O0FBS25DLEtBQUMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxJQUFJLEVBQUU7QUFDNUIsd0JBQWdCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4RCxDQUFBOztBQUVELEtBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDdkIsd0JBQWdCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuRCxDQUFBOztBQUVELFdBQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Q0FFcEQsQ0FBQSxFQUFFLENBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9uYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlciA9IHRoaXMuYWRhcHRlciB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIgPSB3aW5kb3cuYWRhcHRlciB8fCB7fTtcbn1cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEludGVyZmFjZSgpIHt9XG4gICAgdmFyIHAgPSBJbnRlcmZhY2UucHJvdG90eXBlO1xuICAgIC8qXG4gICAgICpUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgb24gdGhlIHZpc3VhbGl6YXRpb24gbGlicmFyeSAsIHdoaWNoIGFyZSBob29rZWQgdG8gaXRcbiAgICAgKiBAcGFyYW0ga2V5czogV2UgbmVlZCB0byBnaXZlIHRoZSBpbmRleCB2YWx1ZSBvciBLZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHJlY29yZCBbMCwzLDVdXG4gICAgICovXG4gICAgcC5kb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChrZXlzKSB7fTtcblxuICAgIHAuZG9Qcm9iZSA9IGZ1bmN0aW9uIChrZXkpIHt9O1xuXG4gICAgcC5zZXREYXRhID0gZnVuY3Rpb24gKCkge307XG4gICAgcC5nZXREYXRhID0gZnVuY3Rpb24gKCkge307XG5cbiAgICBhZGFwdGVyLkludGVyZmFjZSA9IEludGVyZmFjZTtcblxufSgpKTtcbiIsImltcG9ydCAnd2VhdmVjb3JlJztcblxuLy9uYW1lc2FwY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlciA9IHRoaXMuYWRhcHRlciB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIgPSB3aW5kb3cuYWRhcHRlciB8fCB7fTtcbn1cblxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIuc2Vzc2lvbkRhdGEgPSB0aGlzLmFkYXB0ZXIuc2Vzc2lvbkRhdGEgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyLnNlc3Npb25EYXRhID0gd2luZG93LmFkYXB0ZXIuc2Vzc2lvbkRhdGEgfHwge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2xvYmFsRGF0YSgpIHtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBwcm9wZXJ0eSB4QXhpc1xuICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICogQHR5cGUgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RhdGFTb3VyY2UnLCB7XG4gICAgICAgICAgICB2YWx1ZTogV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcC5yZXF1ZXN0T2JqZWN0KFwiZGF0YVNvdXJjZVwiLCB3ZWF2ZWNvcmUuTGlua2FibGVWYXJpYWJsZSlcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIC8vIFByb3RvdHlwZXNcbiAgICB2YXIgcCA9IEdsb2JhbERhdGEucHJvdG90eXBlO1xuXG4gICAgcC5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5nZXRTZXNzaW9uU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwdWJsaWMgbWV0aG9kczpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0U2Vzc2lvblN0YXRlVmFsdWVcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICBwLmdldFNlc3Npb25TdGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2RhdGFTb3VyY2UnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U2Vzc2lvblN0YXRlKClcbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICBhZGFwdGVyLnNlc3Npb25EYXRhLkdsb2JhbERhdGEgPSBuZXcgR2xvYmFsRGF0YSgpO1xuXG59KCkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNjYXR0ZXJQbG90IGZyb20gJy4vRDMvU2NhdHRlclBsb3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgYm90dG9tOiAxMDAsXG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICBsZWZ0OiA3MFxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lID0gJ0FwcCcgPlxuICAgICAgICAgICAgPCBTY2F0dGVyUGxvdCB3aWR0aCA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdG9wID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgfVxuICAgICAgICBib3R0b20gPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJvdHRvbVxuICAgICAgICB9XG4gICAgICAgIHJpZ2h0ID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yaWdodFxuICAgICAgICB9XG4gICAgICAgIGxlZnQgPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxlZnRcbiAgICAgICAgfVxuICAgICAgICAvPiA8IC9kaXYgPiA7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgXCJkM2NoYXJ0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vL25hbWVzYXBjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyID0gdGhpcy5hZGFwdGVyIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlciA9IHdpbmRvdy5hZGFwdGVyIHx8IHt9O1xufVxuXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlci5zZXNzaW9uRGF0YSA9IHRoaXMuYWRhcHRlci5zZXNzaW9uRGF0YSB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIuc2Vzc2lvbkRhdGEgPSB3aW5kb3cuYWRhcHRlci5zZXNzaW9uRGF0YSB8fCB7fTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzY2F0dGVyUGxvdERhdGEoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcHJvcGVydHkgX2xvY2FsSE1cbiAgICAgICAgICogQHR5cGUgd2VhdmVjb3JlLkxpbmthYmxlSGFzaE1hcFxuICAgICAgICAgKiovXG4gICAgICAgIHRoaXMuX2xvY2FsSE0gPSBXZWF2ZUFQSS5nbG9iYWxIYXNoTWFwLnJlcXVlc3RPYmplY3QoXCJEM1NjYXR0ZXJQbG90XCIsIHdlYXZlY29yZS5MaW5rYWJsZUhhc2hNYXApO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcHJvcGVydHkgbG9jYWxIYXNoTWFwXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVIYXNoTWFwXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2xvY2FsSGFzaE1hcCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9sb2NhbEhNXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHByb3BlcnR5IHhBeGlzXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAneEF4aXMnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fbG9jYWxITS5yZXF1ZXN0T2JqZWN0KFwieEF4aXNcIiwgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcHJvcGVydHkgeUF4aXNcbiAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd5QXhpcycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9sb2NhbEhNLnJlcXVlc3RPYmplY3QoXCJ5QXhpc1wiLCB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBkM0NoYXJ0LlNjYXR0ZXJwbG90KCk7XG4gICAgfVxuXG4gICAgLy8gUHJvdG90eXBlc1xuICAgIHZhciBwID0gc2NhdHRlclBsb3REYXRhLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpYyBtZXRob2RzOlxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZ2V0U2Vzc2lvblN0YXRlVmFsdWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgcC5nZXRTZXNzaW9uU3RhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICd4QXhpcyc6IHRoaXMueEF4aXMudmFsdWUsXG4gICAgICAgICAgICAneUF4aXMnOiB0aGlzLnlBeGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEgPSBuZXcgc2NhdHRlclBsb3REYXRhKCk7XG5cbn0oKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlclBsb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zZXRSZWFjdFN0YXRlID0gdGhpcy5fc2V0UmVhY3RTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vdGllZCB3aXRoIGQzIGNyZWF0aW9uXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICBjb250YWluZXI6IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRvcCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucHJvcHMuYm90dG9tLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMucHJvcHMubGVmdCxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5wcm9wcy5yaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgICAgIHg6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHk6IFwicHJvdGVpblwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5jaGFydC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS54QXhpcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5fc2V0UmVhY3RTdGF0ZSk7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnlBeGlzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLl9zZXRSZWFjdFN0YXRlKTtcblxuICAgIH1cblxuICAgIC8vdGllZCB3aXRoIGQzIHVwZGF0ZVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhZGFwdGVyLnNlc3Npb25EYXRhLkdsb2JhbERhdGEuZ2V0RGF0YSgpKTtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuY2hhcnQucmVuZGVyQ2hhcnQoYWRhcHRlci5zZXNzaW9uRGF0YS5HbG9iYWxEYXRhLmdldERhdGEoKSk7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmNoYXJ0LnNldFhBdHRyaWJ1dGUoYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueEF4aXMudmFsdWUpO1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5jaGFydC5zZXRZQXR0cmlidXRlKGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnlBeGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvL3RpZWQgd2l0aCBkMyBkZXN0cnVjdGlvblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS54QXhpcy5yZW1vdmVDYWxsYmFjayh0aGlzLl9zZXRSZWFjdFN0YXRlKTtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueUF4aXMucmVtb3ZlQ2FsbGJhY2sodGhpcy5fc2V0UmVhY3RTdGF0ZSk7XG4gICAgfVxuXG4gICAgX3NldFJlYWN0U3RhdGUoKSB7XG4gICAgICAgIC8vVE8tRE86IGNoZWNrIHdoZXRoZXIgY29sdW1uIE5hbWUgaXMgUGFydCBvZiB0aGUgZGF0YSBTb3VyY2VcbiAgICAgICAgY29uc29sZS5sb2coJ1NjYXR0ZXJwbG90IENhbGxiYWNrOicsIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmdldFNlc3Npb25TdGF0ZVZhbHVlKCkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuZ2V0U2Vzc2lvblN0YXRlVmFsdWUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiByZWYgPSAnY29udGFpbmVyJ1xuICAgICAgICBjbGFzc05hbWUgPSAnQ2hhcnQnID4gPCAvZGl2PjtcbiAgICB9XG5cbn1cbiIsIi8vbmFtZXNwYWNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIuaG9vayA9IHRoaXMuYWRhcHRlci5ob29rIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlci5ob29rID0gd2luZG93LmFkYXB0ZXIuaG9vayB8fCB7fTtcbn1cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEMzSW50ZXJmYWNlKGNoYXJ0KSB7XG4gICAgICAgIGFkYXB0ZXIuSW50ZXJmYWNlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG5cbiAgICBDM0ludGVyZmFjZS5wcm90b3R5cGUgPSBuZXcgYWRhcHRlci5JbnRlcmZhY2UoKTtcbiAgICBDM0ludGVyZmFjZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDM0ludGVyZmFjZTtcblxuICAgIHZhciBwID0gQzNJbnRlcmZhY2UucHJvdG90eXBlO1xuICAgIC8qXG4gICAgICpUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgb24gdGhlIHZpc3VhbGl6YXRpb24gbGlicmFyeSAsIHdoaWNoIGFyZSBob29rZWQgdG8gaXRcbiAgICAgKiBAcGFyYW0ga2V5czogV2UgbmVlZCB0byBnaXZlIHRoZSBpbmRleCB2YWx1ZSBvciBLZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHJlY29yZCBbMCwzLDVdXG4gICAgICogQHBhcmFtIGNvbHVtbnM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgdGhlIGNoYXJ0cyBjb2x1bW4gaWRzIGxpa2UgWydjb2wxJywnY29sMiddXG4gICAgICogQHBhcmFtIGNoYXJ0OiB3ZSBuZWVkIHRvIGdpdmUgY2hhcnQgaW5zdGFuY2UgZ2VuZXJhdGVkIGluIGMzXG4gICAgICovXG4gICAgcC5kb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChrZXlzKSB7XG5cbiAgICAgICAgaWYgKGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGtleXMuY29uc3RydWN0b3IgIT09IEFycmF5KSBjb25zb2xlLmxvZyhcIktleXMgaGFzIHRvIGJlIGFuIGFycmF5IFwiKTtcbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwia2V5cyhBcnJheSkgIGlzIHJlcXVpcmVkXCIpO1xuXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW1lcmljS2V5cyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmNvbnN0cnVjdG9yID09PSBTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgPSBOdW1iZXIoa2V5KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuc2VsZWN0KHRoaXMuY2hhcnQuY29sdW1ucywgbnVtZXJpY0tleXMsIHRydWUpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2hhcnQudW5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICBhZGFwdGVyLmhvb2suQzNJbnRlcmZhY2UgPSBDM0ludGVyZmFjZTtcblxufSgpKTtcbiIsIi8vbmFtZXNwYWNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIuaG9vayA9IHRoaXMuYWRhcHRlci5ob29rIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlci5ob29rID0gd2luZG93LmFkYXB0ZXIuaG9vayB8fCB7fTtcbn1cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEQzSW50ZXJmYWNlKGNoYXJ0KSB7XG4gICAgICAgIGFkYXB0ZXIuSW50ZXJmYWNlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIEQzSW50ZXJmYWNlLnByb3RvdHlwZSA9IG5ldyBhZGFwdGVyLkludGVyZmFjZSgpO1xuICAgIEQzSW50ZXJmYWNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEQzSW50ZXJmYWNlO1xuXG4gICAgdmFyIHAgPSBEM0ludGVyZmFjZS5wcm90b3R5cGU7XG4gICAgLypcbiAgICAgKlRoaXMgZnVuY3Rpb24gcmVuZGVycyBvbiB0aGUgdmlzdWFsaXphdGlvbiBsaWJyYXJ5ICwgd2hpY2ggYXJlIGhvb2tlZCB0byBpdFxuICAgICAqIEBwYXJhbSBrZXlzOiBXZSBuZWVkIHRvIGdpdmUgdGhlIGluZGV4IHZhbHVlIG9yIEtleXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcmVjb3JkIFswLDMsNV1cbiAgICAgKiBAcGFyYW0gY29sdW1uczogV2UgbmVlZCB0byBnaXZlIHRoZSB0aGUgY2hhcnRzIGNvbHVtbiBpZHMgbGlrZSBbJ2NvbDEnLCdjb2wyJ11cbiAgICAgKiBAcGFyYW0gY2hhcnQ6IHdlIG5lZWQgdG8gZ2l2ZSBjaGFydCBpbnN0YW5jZSBnZW5lcmF0ZWQgaW4gYzNcbiAgICAgKi9cbiAgICBwLmRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgdGhpcy5jaGFydC5zZWxlY3Qoa2V5cyk7XG4gICAgfVxuXG4gICAgcC5kb1Byb2JlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmNoYXJ0LnByb2JlKGtleSk7XG4gICAgfVxuXG4gICAgcC5zZXREYXRhID0gZnVuY3Rpb24gKHNvdXJjZU5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gc291cmNlTmFtZTtcbiAgICAgICAgdGhpcy5jaGFydC5yZW5kZXJDaGFydChkYXRhKTtcbiAgICB9XG5cbiAgICBhZGFwdGVyLmhvb2suRDNJbnRlcmZhY2UgPSBEM0ludGVyZmFjZTtcblxufSgpKTtcbiIsImltcG9ydCBcIi4vQWRhcHRlckludGVyZmFjZS5qc1wiO1xuaW1wb3J0IFwiLi9ob29rL0MzSG9vay5qc1wiO1xuaW1wb3J0IFwiLi9ob29rL0QzSG9vay5qc1wiO1xuaW1wb3J0IFwiLi9wZWVyL1dlYXZlSlNQZWVyLmpzXCI7XG5cblxuaW1wb3J0ICcuL0dsb2JhbC5qcydcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qcyc7XG4vL2ltcG9ydCAnLi9jb21wb25lbnRzL0QzL1NjYXR0ZXJQbG90LmpzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkMyBmcm9tICdkMyc7XG5cblxuXG5SZWFjdC5yZW5kZXIoIDwgQXBwIC8gPiAsIGRvY3VtZW50LmJvZHkpO1xuXG5kMy5jc3YoXCJ0ZXN0Q2VyZWFsLmNzdlwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgIGQuaW5kZXggPSBpO1xuICAgIHJldHVybiBkO1xufSwgZnVuY3Rpb24gKGVycm9yLCByb3dzKSB7XG4gICAgYWRhcHRlci5zZXNzaW9uRGF0YS5HbG9iYWxEYXRhLmRhdGFTb3VyY2Uuc2V0U2Vzc2lvblN0YXRlKHJvd3MpO1xuICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnhBeGlzLnZhbHVlID0gJ25hbWUnO1xuICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnlBeGlzLnZhbHVlID0gJ3NvZGl1bSc7XG5cbn0pO1xuXG52YXIgd2VhdmVJbnRlcmFjdGlvblBlZXIgPSBuZXcgYWRhcHRlci5wZWVyLldlYXZlSlNJbnRlcmZhY2UoKTtcblxud2VhdmVJbnRlcmFjdGlvblBlZXIuaG9va3MucHVzaChuZXcgYWRhcHRlci5ob29rLkQzSW50ZXJmYWNlKGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmNoYXJ0KSk7XG4iLCJpbXBvcnQgJ3dlYXZlY29yZSc7XG5cbi8vbmFtZXNwYWNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIucGVlciA9IHRoaXMuYWRhcHRlci5wZWVyIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlci5wZWVyID0gd2luZG93LmFkYXB0ZXIucGVlciB8fCB7fTtcbn1cblxuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgLy9zdGF0aWMgRGVjbGFyYXRpb25cbiAgICAvLyBzZXQgUHJvYmUgYW5kIFNlbGVjdGlvbiBrZXlzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYXZlSlNJbnRlcmZhY2UsICdwcm9iZUtleXMnLCB7XG4gICAgICAgIHZhbHVlOiBXZWF2ZUFQSS5nbG9iYWxIYXNoTWFwLnJlcXVlc3RPYmplY3QoJ3Byb2JlS2V5cycsIHdlYXZlY29yZS5MaW5rYWJsZVZhcmlhYmxlLCBmYWxzZSlcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWF2ZUpTSW50ZXJmYWNlLCAnc2VsZWN0aW9uS2V5cycsIHtcbiAgICAgICAgdmFsdWU6IFdlYXZlQVBJLmdsb2JhbEhhc2hNYXAucmVxdWVzdE9iamVjdCgnc2VsZWN0aW9uS2V5cycsIHdlYXZlY29yZS5MaW5rYWJsZVZhcmlhYmxlLCBmYWxzZSlcbiAgICB9KTtcblxuICAgIC8vY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBXZWF2ZUpTSW50ZXJmYWNlKCkge1xuICAgICAgICBhZGFwdGVyLkludGVyZmFjZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmhvb2tzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlSG9vayA9IG51bGw7XG4gICAgICAgIFdlYXZlSlNJbnRlcmZhY2Uuc2VsZWN0aW9uS2V5cy5hZGRJbW1lZGlhdGVDYWxsYmFjayh7fSwgcmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWF2ZUpTSW50ZXJmYWNlLnByb2JlS2V5cy5hZGRJbW1lZGlhdGVDYWxsYmFjayh7fSwgcmVuZGVyUHJvYmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIFdlYXZlSlNJbnRlcmZhY2UucHJvdG90eXBlID0gbmV3IGFkYXB0ZXIuSW50ZXJmYWNlKCk7XG4gICAgV2VhdmVKU0ludGVyZmFjZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWF2ZUpTSW50ZXJmYWNlO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IFdlYXZlSlNJbnRlcmZhY2Uuc2VsZWN0aW9uS2V5cy5nZXRTZXNzaW9uU3RhdGUoKTtcbiAgICAgICAgdGhpcy5ob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGhvb2sgIT0gdGhpcy5hY3RpdmVob29rKVxuICAgICAgICAgICAgICAgIGhvb2suZG9TZWxlY3Rpb24oa2V5cyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVob29rID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvYmUoKSB7XG4gICAgICAgIHZhciBrZXkgPSBXZWF2ZUpTSW50ZXJmYWNlLnByb2JlS2V5cy5nZXRTZXNzaW9uU3RhdGUoKTtcbiAgICAgICAgdGhpcy5ob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGhvb2sgIT0gdGhpcy5hY3RpdmVob29rKVxuICAgICAgICAgICAgICAgIGhvb2suZG9Qcm9iZShrZXkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlaG9vayA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwID0gV2VhdmVKU0ludGVyZmFjZS5wcm90b3R5cGU7XG4gICAgLypcbiAgICAgKlRoaXMgZnVuY3Rpb24gcmVuZGVycyBvbiB0aGUgdmlzdWFsaXphdGlvbiBsaWJyYXJ5ICwgd2hpY2ggYXJlIGhvb2tlZCB0byBpdFxuICAgICAqIEBwYXJhbSBrZXlzOiBXZSBuZWVkIHRvIGdpdmUgdGhlIGluZGV4IHZhbHVlIG9yIEtleXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcmVjb3JkIFswLDMsNV1cbiAgICAgKi9cbiAgICBwLmRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgV2VhdmVKU0ludGVyZmFjZS5zZWxlY3Rpb25LZXlzLnNldFNlc3Npb25TdGF0ZShrZXlzKTtcbiAgICB9XG5cbiAgICBwLmRvUHJvYmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIFdlYXZlSlNJbnRlcmZhY2UucHJvYmVLZXlzLnNldFNlc3Npb25TdGF0ZShrZXkpO1xuICAgIH1cblxuICAgIGFkYXB0ZXIucGVlci5XZWF2ZUpTSW50ZXJmYWNlID0gV2VhdmVKU0ludGVyZmFjZTtcblxufSgpKTtcbiJdfQ==
