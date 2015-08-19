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
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

require("./AdapterInterface.js");

require("./hook/C3Hook.js");

require("./hook/D3Hook.js");

require("./peer/WeaveJSPeer.js");

require('./Global.js');

require('./components/App.js');

/*React.render( < App / > , document.body);
d3.csv("testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {
    adapter.sessionData.GlobalData.dataSource.setSessionState(rows);
    adapter.sessionData.scatterPlotData.xAxis.value = 'name';
    adapter.sessionData.scatterPlotData.yAxis.value = 'sodium';

});

var weaveInteractionPeer = new adapter.peer.WeaveJSInterface();

weaveInteractionPeer.hooks.push(new adapter.hook.D3Interface(adapter.sessionData.scatterPlotData.chart));*/

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9BZGFwdGVySW50ZXJmYWNlLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvR2xvYmFsLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9jb21wb25lbnRzL0QzL1NjYXR0ZXJQbG90LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvaG9vay9DM0hvb2suanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9ob29rL0QzSG9vay5qcyIsIi9Vc2Vycy9zYW5qYXkvZ2l0L0FkYXB0ZXIvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvcGVlci9XZWF2ZUpTUGVlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0FBQy9CLGNBQUssT0FBTyxHQUFHLFVBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUNyQyxNQUFNO0FBQ0gsVUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUN6Qzs7QUFHRCxBQUFDLENBQUEsWUFBWTtBQUNULGFBQVMsU0FBUyxHQUFHLEVBQUU7QUFDdkIsUUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7Ozs7QUFLNUIsS0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7O0FBRW5DLEtBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUU5QixLQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxDQUFD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SUFBSSxFQUFFLEtBQUssRUFBRTtBQUN0QyxnQkFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDTjs7QUFFRCxhQUFTLFdBQVcsR0FBRztBQUNuQixZQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDdkQsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLGdCQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBRWxCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzlCLENBQUMsQ0FBQztLQUNOOztBQUVELFFBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7Ozs7QUFLbkMsS0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRTtBQUM1Qix3QkFBZ0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hELENBQUE7O0FBRUQsS0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUN2Qix3QkFBZ0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25ELENBQUE7O0FBRUQsV0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztDQUVwRCxDQUFBLEVBQUUsQ0FBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL25hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyID0gdGhpcy5hZGFwdGVyIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlciA9IHdpbmRvdy5hZGFwdGVyIHx8IHt9O1xufVxuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJmYWNlKCkge31cbiAgICB2YXIgcCA9IEludGVyZmFjZS5wcm90b3R5cGU7XG4gICAgLypcbiAgICAgKlRoaXMgZnVuY3Rpb24gcmVuZGVycyBvbiB0aGUgdmlzdWFsaXphdGlvbiBsaWJyYXJ5ICwgd2hpY2ggYXJlIGhvb2tlZCB0byBpdFxuICAgICAqIEBwYXJhbSBrZXlzOiBXZSBuZWVkIHRvIGdpdmUgdGhlIGluZGV4IHZhbHVlIG9yIEtleXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcmVjb3JkIFswLDMsNV1cbiAgICAgKi9cbiAgICBwLmRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKGtleXMpIHt9O1xuXG4gICAgcC5kb1Byb2JlID0gZnVuY3Rpb24gKGtleSkge307XG5cbiAgICBwLnNldERhdGEgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBwLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGFkYXB0ZXIuSW50ZXJmYWNlID0gSW50ZXJmYWNlO1xuXG59KCkpO1xuIiwiaW1wb3J0ICd3ZWF2ZWNvcmUnO1xuXG4vL25hbWVzYXBjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyID0gdGhpcy5hZGFwdGVyIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlciA9IHdpbmRvdy5hZGFwdGVyIHx8IHt9O1xufVxuXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlci5zZXNzaW9uRGF0YSA9IHRoaXMuYWRhcHRlci5zZXNzaW9uRGF0YSB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIuc2Vzc2lvbkRhdGEgPSB3aW5kb3cuYWRhcHRlci5zZXNzaW9uRGF0YSB8fCB7fTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHbG9iYWxEYXRhKCkge1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHByb3BlcnR5IHhBeGlzXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGF0YVNvdXJjZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiBXZWF2ZUFQSS5nbG9iYWxIYXNoTWFwLnJlcXVlc3RPYmplY3QoXCJkYXRhU291cmNlXCIsIHdlYXZlY29yZS5MaW5rYWJsZVZhcmlhYmxlKVxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgLy8gUHJvdG90eXBlc1xuICAgIHZhciBwID0gR2xvYmFsRGF0YS5wcm90b3R5cGU7XG5cbiAgICBwLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmdldFNlc3Npb25TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHB1YmxpYyBtZXRob2RzOlxuICAgICAgICAvKipcbiAgICAgICAgICogQG1ldGhvZCBnZXRTZXNzaW9uU3RhdGVWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgIHAuZ2V0U2Vzc2lvblN0YXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnZGF0YVNvdXJjZSc6IHRoaXMuZGF0YVNvdXJjZS5nZXRTZXNzaW9uU3RhdGUoKVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuR2xvYmFsRGF0YSA9IG5ldyBHbG9iYWxEYXRhKCk7XG5cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NhdHRlclBsb3QgZnJvbSAnLi9EMy9TY2F0dGVyUGxvdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgICBib3R0b206IDEwMCxcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIGxlZnQ6IDcwXG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWUgPSAnQXBwJyA+XG4gICAgICAgICAgICA8IFNjYXR0ZXJQbG90IHdpZHRoID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgaGVpZ2h0ID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0b3AgPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcFxuICAgICAgICB9XG4gICAgICAgIGJvdHRvbSA9IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYm90dG9tXG4gICAgICAgIH1cbiAgICAgICAgcmlnaHQgPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgbGVmdCA9IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGVmdFxuICAgICAgICB9XG4gICAgICAgIC8+IDwgL2RpdiA+IDtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBcImQzY2hhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vbmFtZXNhcGNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSB0aGlzLmFkYXB0ZXIgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyID0gd2luZG93LmFkYXB0ZXIgfHwge307XG59XG5cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyLnNlc3Npb25EYXRhID0gdGhpcy5hZGFwdGVyLnNlc3Npb25EYXRhIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlci5zZXNzaW9uRGF0YSA9IHdpbmRvdy5hZGFwdGVyLnNlc3Npb25EYXRhIHx8IHt9O1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHNjYXR0ZXJQbG90RGF0YSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwcm9wZXJ0eSBfbG9jYWxITVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVIYXNoTWFwXG4gICAgICAgICAqKi9cbiAgICAgICAgdGhpcy5fbG9jYWxITSA9IFdlYXZlQVBJLmdsb2JhbEhhc2hNYXAucmVxdWVzdE9iamVjdChcIkQzU2NhdHRlclBsb3RcIiwgd2VhdmVjb3JlLkxpbmthYmxlSGFzaE1hcCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBwcm9wZXJ0eSBsb2NhbEhhc2hNYXBcbiAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZUhhc2hNYXBcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbG9jYWxIYXNoTWFwJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2xvY2FsSE1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcHJvcGVydHkgeEF4aXNcbiAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd4QXhpcycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9sb2NhbEhNLnJlcXVlc3RPYmplY3QoXCJ4QXhpc1wiLCB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBwcm9wZXJ0eSB5QXhpc1xuICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICogQHR5cGUgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3lBeGlzJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2xvY2FsSE0ucmVxdWVzdE9iamVjdChcInlBeGlzXCIsIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IGQzQ2hhcnQuU2NhdHRlcnBsb3QoKTtcbiAgICB9XG5cbiAgICAvLyBQcm90b3R5cGVzXG4gICAgdmFyIHAgPSBzY2F0dGVyUGxvdERhdGEucHJvdG90eXBlO1xuXG4gICAgLy8gcHVibGljIG1ldGhvZHM6XG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBnZXRTZXNzaW9uU3RhdGVWYWx1ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBwLmdldFNlc3Npb25TdGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3hBeGlzJzogdGhpcy54QXhpcy52YWx1ZSxcbiAgICAgICAgICAgICd5QXhpcyc6IHRoaXMueUF4aXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YSA9IG5ldyBzY2F0dGVyUGxvdERhdGEoKTtcblxufSgpKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyUGxvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NldFJlYWN0U3RhdGUgPSB0aGlzLl9zZXRSZWFjdFN0YXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy90aWVkIHdpdGggZDMgY3JlYXRpb25cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogUmVhY3QuZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucHJvcHMudG9wLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wcm9wcy5ib3R0b20sXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5wcm9wcy5sZWZ0LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnByb3BzLnJpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2x1bW5zOiB7XG4gICAgICAgICAgICAgICAgeDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgeTogXCJwcm90ZWluXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmNoYXJ0LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnhBeGlzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLl9zZXRSZWFjdFN0YXRlKTtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueUF4aXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuX3NldFJlYWN0U3RhdGUpO1xuXG4gICAgfVxuXG4gICAgLy90aWVkIHdpdGggZDMgdXBkYXRlXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkYXB0ZXIuc2Vzc2lvbkRhdGEuR2xvYmFsRGF0YS5nZXREYXRhKCkpO1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5jaGFydC5yZW5kZXJDaGFydChhZGFwdGVyLnNlc3Npb25EYXRhLkdsb2JhbERhdGEuZ2V0RGF0YSgpKTtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuY2hhcnQuc2V0WEF0dHJpYnV0ZShhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS54QXhpcy52YWx1ZSk7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmNoYXJ0LnNldFlBdHRyaWJ1dGUoYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueUF4aXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8vdGllZCB3aXRoIGQzIGRlc3RydWN0aW9uXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnhBeGlzLnJlbW92ZUNhbGxiYWNrKHRoaXMuX3NldFJlYWN0U3RhdGUpO1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS55QXhpcy5yZW1vdmVDYWxsYmFjayh0aGlzLl9zZXRSZWFjdFN0YXRlKTtcbiAgICB9XG5cbiAgICBfc2V0UmVhY3RTdGF0ZSgpIHtcbiAgICAgICAgLy9UTy1ETzogY2hlY2sgd2hldGhlciBjb2x1bW4gTmFtZSBpcyBQYXJ0IG9mIHRoZSBkYXRhIFNvdXJjZVxuICAgICAgICBjb25zb2xlLmxvZygnU2NhdHRlcnBsb3QgQ2FsbGJhY2s6JywgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuZ2V0U2Vzc2lvblN0YXRlVmFsdWUoKSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5nZXRTZXNzaW9uU3RhdGVWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IHJlZiA9ICdjb250YWluZXInXG4gICAgICAgIGNsYXNzTmFtZSA9ICdDaGFydCcgPiA8IC9kaXY+O1xuICAgIH1cblxufVxuIiwiLy9uYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlci5ob29rID0gdGhpcy5hZGFwdGVyLmhvb2sgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyLmhvb2sgPSB3aW5kb3cuYWRhcHRlci5ob29rIHx8IHt9O1xufVxuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQzNJbnRlcmZhY2UoY2hhcnQpIHtcbiAgICAgICAgYWRhcHRlci5JbnRlcmZhY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cblxuICAgIEMzSW50ZXJmYWNlLnByb3RvdHlwZSA9IG5ldyBhZGFwdGVyLkludGVyZmFjZSgpO1xuICAgIEMzSW50ZXJmYWNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEMzSW50ZXJmYWNlO1xuXG4gICAgdmFyIHAgPSBDM0ludGVyZmFjZS5wcm90b3R5cGU7XG4gICAgLypcbiAgICAgKlRoaXMgZnVuY3Rpb24gcmVuZGVycyBvbiB0aGUgdmlzdWFsaXphdGlvbiBsaWJyYXJ5ICwgd2hpY2ggYXJlIGhvb2tlZCB0byBpdFxuICAgICAqIEBwYXJhbSBrZXlzOiBXZSBuZWVkIHRvIGdpdmUgdGhlIGluZGV4IHZhbHVlIG9yIEtleXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcmVjb3JkIFswLDMsNV1cbiAgICAgKiBAcGFyYW0gY29sdW1uczogV2UgbmVlZCB0byBnaXZlIHRoZSB0aGUgY2hhcnRzIGNvbHVtbiBpZHMgbGlrZSBbJ2NvbDEnLCdjb2wyJ11cbiAgICAgKiBAcGFyYW0gY2hhcnQ6IHdlIG5lZWQgdG8gZ2l2ZSBjaGFydCBpbnN0YW5jZSBnZW5lcmF0ZWQgaW4gYzNcbiAgICAgKi9cbiAgICBwLmRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKGtleXMpIHtcblxuICAgICAgICBpZiAoa2V5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoa2V5cy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIGNvbnNvbGUubG9nKFwiS2V5cyBoYXMgdG8gYmUgYW4gYXJyYXkgXCIpO1xuICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coXCJrZXlzKEFycmF5KSAgaXMgcmVxdWlyZWRcIik7XG5cbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG51bWVyaWNLZXlzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29uc3RydWN0b3IgPT09IFN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSA9IE51bWJlcihrZXkpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGFydC5zZWxlY3QodGhpcy5jaGFydC5jb2x1bW5zLCBudW1lcmljS2V5cywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5jaGFydC51bnNlbGVjdCgpO1xuICAgIH1cblxuICAgIGFkYXB0ZXIuaG9vay5DM0ludGVyZmFjZSA9IEMzSW50ZXJmYWNlO1xuXG59KCkpO1xuIiwiLy9uYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlci5ob29rID0gdGhpcy5hZGFwdGVyLmhvb2sgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyLmhvb2sgPSB3aW5kb3cuYWRhcHRlci5ob29rIHx8IHt9O1xufVxuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRDNJbnRlcmZhY2UoY2hhcnQpIHtcbiAgICAgICAgYWRhcHRlci5JbnRlcmZhY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgRDNJbnRlcmZhY2UucHJvdG90eXBlID0gbmV3IGFkYXB0ZXIuSW50ZXJmYWNlKCk7XG4gICAgRDNJbnRlcmZhY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRDNJbnRlcmZhY2U7XG5cbiAgICB2YXIgcCA9IEQzSW50ZXJmYWNlLnByb3RvdHlwZTtcbiAgICAvKlxuICAgICAqVGhpcyBmdW5jdGlvbiByZW5kZXJzIG9uIHRoZSB2aXN1YWxpemF0aW9uIGxpYnJhcnkgLCB3aGljaCBhcmUgaG9va2VkIHRvIGl0XG4gICAgICogQHBhcmFtIGtleXM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgaW5kZXggdmFsdWUgb3IgS2V5cyBhc3NvY2lhdGVkIHdpdGggdGhhdCByZWNvcmQgWzAsMyw1XVxuICAgICAqIEBwYXJhbSBjb2x1bW5zOiBXZSBuZWVkIHRvIGdpdmUgdGhlIHRoZSBjaGFydHMgY29sdW1uIGlkcyBsaWtlIFsnY29sMScsJ2NvbDInXVxuICAgICAqIEBwYXJhbSBjaGFydDogd2UgbmVlZCB0byBnaXZlIGNoYXJ0IGluc3RhbmNlIGdlbmVyYXRlZCBpbiBjM1xuICAgICAqL1xuICAgIHAuZG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICB0aGlzLmNoYXJ0LnNlbGVjdChrZXlzKTtcbiAgICB9XG5cbiAgICBwLmRvUHJvYmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuY2hhcnQucHJvYmUoa2V5KTtcbiAgICB9XG5cbiAgICBwLnNldERhdGEgPSBmdW5jdGlvbiAoc291cmNlTmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBzb3VyY2VOYW1lO1xuICAgICAgICB0aGlzLmNoYXJ0LnJlbmRlckNoYXJ0KGRhdGEpO1xuICAgIH1cblxuICAgIGFkYXB0ZXIuaG9vay5EM0ludGVyZmFjZSA9IEQzSW50ZXJmYWNlO1xuXG59KCkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkMyBmcm9tICdkMyc7XG5cbmltcG9ydCBcIi4vQWRhcHRlckludGVyZmFjZS5qc1wiO1xuaW1wb3J0IFwiLi9ob29rL0MzSG9vay5qc1wiO1xuaW1wb3J0IFwiLi9ob29rL0QzSG9vay5qc1wiO1xuaW1wb3J0IFwiLi9wZWVyL1dlYXZlSlNQZWVyLmpzXCI7XG5cblxuaW1wb3J0ICcuL0dsb2JhbC5qcydcbmltcG9ydCAnLi9jb21wb25lbnRzL0FwcC5qcyc7XG5cbi8qUmVhY3QucmVuZGVyKCA8IEFwcCAvID4gLCBkb2N1bWVudC5ib2R5KTtcbmQzLmNzdihcInRlc3RDZXJlYWwuY3N2XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgZC5pbmRleCA9IGk7XG4gICAgcmV0dXJuIGQ7XG59LCBmdW5jdGlvbiAoZXJyb3IsIHJvd3MpIHtcbiAgICBhZGFwdGVyLnNlc3Npb25EYXRhLkdsb2JhbERhdGEuZGF0YVNvdXJjZS5zZXRTZXNzaW9uU3RhdGUocm93cyk7XG4gICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueEF4aXMudmFsdWUgPSAnbmFtZSc7XG4gICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueUF4aXMudmFsdWUgPSAnc29kaXVtJztcblxufSk7XG5cbnZhciB3ZWF2ZUludGVyYWN0aW9uUGVlciA9IG5ldyBhZGFwdGVyLnBlZXIuV2VhdmVKU0ludGVyZmFjZSgpO1xuXG53ZWF2ZUludGVyYWN0aW9uUGVlci5ob29rcy5wdXNoKG5ldyBhZGFwdGVyLmhvb2suRDNJbnRlcmZhY2UoYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuY2hhcnQpKTsqLyIsImltcG9ydCAnd2VhdmVjb3JlJztcblxuLy9uYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlci5wZWVyID0gdGhpcy5hZGFwdGVyLnBlZXIgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyLnBlZXIgPSB3aW5kb3cuYWRhcHRlci5wZWVyIHx8IHt9O1xufVxuXG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgICAvL3N0YXRpYyBEZWNsYXJhdGlvblxuICAgIC8vIHNldCBQcm9iZSBhbmQgU2VsZWN0aW9uIGtleXNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2VhdmVKU0ludGVyZmFjZSwgJ3Byb2JlS2V5cycsIHtcbiAgICAgICAgdmFsdWU6IFdlYXZlQVBJLmdsb2JhbEhhc2hNYXAucmVxdWVzdE9iamVjdCgncHJvYmVLZXlzJywgd2VhdmVjb3JlLkxpbmthYmxlVmFyaWFibGUsIGZhbHNlKVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYXZlSlNJbnRlcmZhY2UsICdzZWxlY3Rpb25LZXlzJywge1xuICAgICAgICB2YWx1ZTogV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcC5yZXF1ZXN0T2JqZWN0KCdzZWxlY3Rpb25LZXlzJywgd2VhdmVjb3JlLkxpbmthYmxlVmFyaWFibGUsIGZhbHNlKVxuICAgIH0pO1xuXG4gICAgLy9jb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIFdlYXZlSlNJbnRlcmZhY2UoKSB7XG4gICAgICAgIGFkYXB0ZXIuSW50ZXJmYWNlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaG9va3MgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVIb29rID0gbnVsbDtcbiAgICAgICAgV2VhdmVKU0ludGVyZmFjZS5zZWxlY3Rpb25LZXlzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHt9LCByZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYXZlSlNJbnRlcmZhY2UucHJvYmVLZXlzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHt9LCByZW5kZXJQcm9iZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxuXG4gICAgV2VhdmVKU0ludGVyZmFjZS5wcm90b3R5cGUgPSBuZXcgYWRhcHRlci5JbnRlcmZhY2UoKTtcbiAgICBXZWF2ZUpTSW50ZXJmYWNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFdlYXZlSlNJbnRlcmZhY2U7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gV2VhdmVKU0ludGVyZmFjZS5zZWxlY3Rpb25LZXlzLmdldFNlc3Npb25TdGF0ZSgpO1xuICAgICAgICB0aGlzLmhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2ssIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaG9vayAhPSB0aGlzLmFjdGl2ZWhvb2spXG4gICAgICAgICAgICAgICAgaG9vay5kb1NlbGVjdGlvbihrZXlzKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZWhvb2sgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9iZSgpIHtcbiAgICAgICAgdmFyIGtleSA9IFdlYXZlSlNJbnRlcmZhY2UucHJvYmVLZXlzLmdldFNlc3Npb25TdGF0ZSgpO1xuICAgICAgICB0aGlzLmhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2ssIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaG9vayAhPSB0aGlzLmFjdGl2ZWhvb2spXG4gICAgICAgICAgICAgICAgaG9vay5kb1Byb2JlKGtleSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVob29rID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHAgPSBXZWF2ZUpTSW50ZXJmYWNlLnByb3RvdHlwZTtcbiAgICAvKlxuICAgICAqVGhpcyBmdW5jdGlvbiByZW5kZXJzIG9uIHRoZSB2aXN1YWxpemF0aW9uIGxpYnJhcnkgLCB3aGljaCBhcmUgaG9va2VkIHRvIGl0XG4gICAgICogQHBhcmFtIGtleXM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgaW5kZXggdmFsdWUgb3IgS2V5cyBhc3NvY2lhdGVkIHdpdGggdGhhdCByZWNvcmQgWzAsMyw1XVxuICAgICAqL1xuICAgIHAuZG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICBXZWF2ZUpTSW50ZXJmYWNlLnNlbGVjdGlvbktleXMuc2V0U2Vzc2lvblN0YXRlKGtleXMpO1xuICAgIH1cblxuICAgIHAuZG9Qcm9iZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgV2VhdmVKU0ludGVyZmFjZS5wcm9iZUtleXMuc2V0U2Vzc2lvblN0YXRlKGtleSk7XG4gICAgfVxuXG4gICAgYWRhcHRlci5wZWVyLldlYXZlSlNJbnRlcmZhY2UgPSBXZWF2ZUpTSW50ZXJmYWNlO1xuXG59KCkpO1xuIl19
