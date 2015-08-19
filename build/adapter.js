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

var _componentsAppJs = require('./components/App.js');

var _componentsAppJs2 = _interopRequireDefault(_componentsAppJs);

require('./components/D3/ScatterPlot.js');

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

},{"./AdapterInterface.js":1,"./Global.js":2,"./components/App.js":3,"./components/D3/ScatterPlot.js":4,"./hook/C3Hook.js":5,"./hook/D3Hook.js":6,"./peer/WeaveJSPeer.js":8,"d3":"d3","react":"react"}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9BZGFwdGVySW50ZXJmYWNlLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvR2xvYmFsLmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9jb21wb25lbnRzL0QzL1NjYXR0ZXJQbG90LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvaG9vay9DM0hvb2suanMiLCIvVXNlcnMvc2FuamF5L2dpdC9BZGFwdGVyL3NyYy9ob29rL0QzSG9vay5qcyIsIi9Vc2Vycy9zYW5qYXkvZ2l0L0FkYXB0ZXIvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3NhbmpheS9naXQvQWRhcHRlci9zcmMvcGVlci9XZWF2ZUpTUGVlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0FBQy9CLGNBQUssT0FBTyxHQUFHLFVBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUNyQyxNQUFNO0FBQ0gsVUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztDQUN6Qzs7QUFHRCxBQUFDLENBQUEsWUFBWTtBQUNULGFBQVMsU0FBUyxHQUFHLEVBQUU7QUFDdkIsUUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7Ozs7QUFLNUIsS0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7O0FBRW5DLEtBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUU5QixLQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxDQUFD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QyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLGdCQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzlCLENBQUMsQ0FBQztLQUNOOztBQUVELGFBQVMsV0FBVyxHQUFHO0FBQ25CLFlBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2RCxZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdEMsZ0JBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FFbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDOzs7OztBQUtuQyxLQUFDLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSxFQUFFO0FBQzVCLHdCQUFnQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEQsQ0FBQTs7QUFFRCxLQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQ3ZCLHdCQUFnQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkQsQ0FBQTs7QUFFRCxXQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0NBRXBELENBQUEsRUFBRSxDQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vbmFtZXNwYWNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSB0aGlzLmFkYXB0ZXIgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyID0gd2luZG93LmFkYXB0ZXIgfHwge307XG59XG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnRlcmZhY2UoKSB7fVxuICAgIHZhciBwID0gSW50ZXJmYWNlLnByb3RvdHlwZTtcbiAgICAvKlxuICAgICAqVGhpcyBmdW5jdGlvbiByZW5kZXJzIG9uIHRoZSB2aXN1YWxpemF0aW9uIGxpYnJhcnkgLCB3aGljaCBhcmUgaG9va2VkIHRvIGl0XG4gICAgICogQHBhcmFtIGtleXM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgaW5kZXggdmFsdWUgb3IgS2V5cyBhc3NvY2lhdGVkIHdpdGggdGhhdCByZWNvcmQgWzAsMyw1XVxuICAgICAqL1xuICAgIHAuZG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoa2V5cykge307XG5cbiAgICBwLmRvUHJvYmUgPSBmdW5jdGlvbiAoa2V5KSB7fTtcblxuICAgIHAuc2V0RGF0YSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHAuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgYWRhcHRlci5JbnRlcmZhY2UgPSBJbnRlcmZhY2U7XG5cbn0oKSk7XG4iLCJpbXBvcnQgJ3dlYXZlY29yZSc7XG5cbi8vbmFtZXNhcGNlXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSB0aGlzLmFkYXB0ZXIgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyID0gd2luZG93LmFkYXB0ZXIgfHwge307XG59XG5cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyLnNlc3Npb25EYXRhID0gdGhpcy5hZGFwdGVyLnNlc3Npb25EYXRhIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYWRhcHRlci5zZXNzaW9uRGF0YSA9IHdpbmRvdy5hZGFwdGVyLnNlc3Npb25EYXRhIHx8IHt9O1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdsb2JhbERhdGEoKSB7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcHJvcGVydHkgeEF4aXNcbiAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkYXRhU291cmNlJywge1xuICAgICAgICAgICAgdmFsdWU6IFdlYXZlQVBJLmdsb2JhbEhhc2hNYXAucmVxdWVzdE9iamVjdChcImRhdGFTb3VyY2VcIiwgd2VhdmVjb3JlLkxpbmthYmxlVmFyaWFibGUpXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICAvLyBQcm90b3R5cGVzXG4gICAgdmFyIHAgPSBHbG9iYWxEYXRhLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZ2V0U2Vzc2lvblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVibGljIG1ldGhvZHM6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWV0aG9kIGdldFNlc3Npb25TdGF0ZVZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICovXG4gICAgcC5nZXRTZXNzaW9uU3RhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdkYXRhU291cmNlJzogdGhpcy5kYXRhU291cmNlLmdldFNlc3Npb25TdGF0ZSgpXG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgYWRhcHRlci5zZXNzaW9uRGF0YS5HbG9iYWxEYXRhID0gbmV3IEdsb2JhbERhdGEoKTtcblxufSgpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTY2F0dGVyUGxvdCBmcm9tICcuL0QzL1NjYXR0ZXJQbG90LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICAgIGJvdHRvbTogMTAwLFxuICAgICAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICAgICAgbGVmdDogNzBcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZSA9ICdBcHAnID5cbiAgICAgICAgICAgIDwgU2NhdHRlclBsb3Qgd2lkdGggPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICBoZWlnaHQgPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRvcCA9IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9wXG4gICAgICAgIH1cbiAgICAgICAgYm90dG9tID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib3R0b21cbiAgICAgICAgfVxuICAgICAgICByaWdodCA9IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmlnaHRcbiAgICAgICAgfVxuICAgICAgICBsZWZ0ID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgIH1cbiAgICAgICAgLz4gPCAvZGl2ID4gO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFwiZDNjaGFydFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9uYW1lc2FwY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYWRhcHRlciA9IHRoaXMuYWRhcHRlciB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIgPSB3aW5kb3cuYWRhcHRlciB8fCB7fTtcbn1cblxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmFkYXB0ZXIuc2Vzc2lvbkRhdGEgPSB0aGlzLmFkYXB0ZXIuc2Vzc2lvbkRhdGEgfHwge307XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGFwdGVyLnNlc3Npb25EYXRhID0gd2luZG93LmFkYXB0ZXIuc2Vzc2lvbkRhdGEgfHwge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc2NhdHRlclBsb3REYXRhKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHByb3BlcnR5IF9sb2NhbEhNXG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZUhhc2hNYXBcbiAgICAgICAgICoqL1xuICAgICAgICB0aGlzLl9sb2NhbEhNID0gV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcC5yZXF1ZXN0T2JqZWN0KFwiRDNTY2F0dGVyUGxvdFwiLCB3ZWF2ZWNvcmUuTGlua2FibGVIYXNoTWFwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHByb3BlcnR5IGxvY2FsSGFzaE1hcFxuICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICogQHR5cGUgd2VhdmVjb3JlLkxpbmthYmxlSGFzaE1hcFxuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdsb2NhbEhhc2hNYXAnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fbG9jYWxITVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBwcm9wZXJ0eSB4QXhpc1xuICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICogQHR5cGUgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3hBeGlzJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2xvY2FsSE0ucmVxdWVzdE9iamVjdChcInhBeGlzXCIsIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHByb3BlcnR5IHlBeGlzXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAneUF4aXMnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fbG9jYWxITS5yZXF1ZXN0T2JqZWN0KFwieUF4aXNcIiwgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgZDNDaGFydC5TY2F0dGVycGxvdCgpO1xuICAgIH1cblxuICAgIC8vIFByb3RvdHlwZXNcbiAgICB2YXIgcCA9IHNjYXR0ZXJQbG90RGF0YS5wcm90b3R5cGU7XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kczpcbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGdldFNlc3Npb25TdGF0ZVZhbHVlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHAuZ2V0U2Vzc2lvblN0YXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAneEF4aXMnOiB0aGlzLnhBeGlzLnZhbHVlLFxuICAgICAgICAgICAgJ3lBeGlzJzogdGhpcy55QXhpcy52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhID0gbmV3IHNjYXR0ZXJQbG90RGF0YSgpO1xuXG59KCkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJQbG90IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc2V0UmVhY3RTdGF0ZSA9IHRoaXMuX3NldFJlYWN0U3RhdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvL3RpZWQgd2l0aCBkMyBjcmVhdGlvblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBSZWFjdC5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wcm9wcy50b3AsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnByb3BzLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnByb3BzLmxlZnQsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMucHJvcHMucmlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICAgICAgICB4OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICB5OiBcInByb3RlaW5cIixcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuY2hhcnQuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueEF4aXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuX3NldFJlYWN0U3RhdGUpO1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS55QXhpcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5fc2V0UmVhY3RTdGF0ZSk7XG5cbiAgICB9XG5cbiAgICAvL3RpZWQgd2l0aCBkMyB1cGRhdGVcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYWRhcHRlci5zZXNzaW9uRGF0YS5HbG9iYWxEYXRhLmdldERhdGEoKSk7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmNoYXJ0LnJlbmRlckNoYXJ0KGFkYXB0ZXIuc2Vzc2lvbkRhdGEuR2xvYmFsRGF0YS5nZXREYXRhKCkpO1xuICAgICAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5jaGFydC5zZXRYQXR0cmlidXRlKGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnhBeGlzLnZhbHVlKTtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEuY2hhcnQuc2V0WUF0dHJpYnV0ZShhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS55QXhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy90aWVkIHdpdGggZDMgZGVzdHJ1Y3Rpb25cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgYWRhcHRlci5zZXNzaW9uRGF0YS5zY2F0dGVyUGxvdERhdGEueEF4aXMucmVtb3ZlQ2FsbGJhY2sodGhpcy5fc2V0UmVhY3RTdGF0ZSk7XG4gICAgICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLnlBeGlzLnJlbW92ZUNhbGxiYWNrKHRoaXMuX3NldFJlYWN0U3RhdGUpO1xuICAgIH1cblxuICAgIF9zZXRSZWFjdFN0YXRlKCkge1xuICAgICAgICAvL1RPLURPOiBjaGVjayB3aGV0aGVyIGNvbHVtbiBOYW1lIGlzIFBhcnQgb2YgdGhlIGRhdGEgU291cmNlXG4gICAgICAgIGNvbnNvbGUubG9nKCdTY2F0dGVycGxvdCBDYWxsYmFjazonLCBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5nZXRTZXNzaW9uU3RhdGVWYWx1ZSgpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKGFkYXB0ZXIuc2Vzc2lvbkRhdGEuc2NhdHRlclBsb3REYXRhLmdldFNlc3Npb25TdGF0ZVZhbHVlKCkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmID0gJ2NvbnRhaW5lcidcbiAgICAgICAgY2xhc3NOYW1lID0gJ0NoYXJ0JyA+IDwgL2Rpdj47XG4gICAgfVxuXG59XG4iLCIvL25hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyLmhvb2sgPSB0aGlzLmFkYXB0ZXIuaG9vayB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIuaG9vayA9IHdpbmRvdy5hZGFwdGVyLmhvb2sgfHwge307XG59XG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDM0ludGVyZmFjZShjaGFydCkge1xuICAgICAgICBhZGFwdGVyLkludGVyZmFjZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgfVxuXG4gICAgQzNJbnRlcmZhY2UucHJvdG90eXBlID0gbmV3IGFkYXB0ZXIuSW50ZXJmYWNlKCk7XG4gICAgQzNJbnRlcmZhY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQzNJbnRlcmZhY2U7XG5cbiAgICB2YXIgcCA9IEMzSW50ZXJmYWNlLnByb3RvdHlwZTtcbiAgICAvKlxuICAgICAqVGhpcyBmdW5jdGlvbiByZW5kZXJzIG9uIHRoZSB2aXN1YWxpemF0aW9uIGxpYnJhcnkgLCB3aGljaCBhcmUgaG9va2VkIHRvIGl0XG4gICAgICogQHBhcmFtIGtleXM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgaW5kZXggdmFsdWUgb3IgS2V5cyBhc3NvY2lhdGVkIHdpdGggdGhhdCByZWNvcmQgWzAsMyw1XVxuICAgICAqIEBwYXJhbSBjb2x1bW5zOiBXZSBuZWVkIHRvIGdpdmUgdGhlIHRoZSBjaGFydHMgY29sdW1uIGlkcyBsaWtlIFsnY29sMScsJ2NvbDInXVxuICAgICAqIEBwYXJhbSBjaGFydDogd2UgbmVlZCB0byBnaXZlIGNoYXJ0IGluc3RhbmNlIGdlbmVyYXRlZCBpbiBjM1xuICAgICAqL1xuICAgIHAuZG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoa2V5cykge1xuXG4gICAgICAgIGlmIChrZXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChrZXlzLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgY29uc29sZS5sb2coXCJLZXlzIGhhcyB0byBiZSBhbiBhcnJheSBcIik7XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcImtleXMoQXJyYXkpICBpcyByZXF1aXJlZFwiKTtcblxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtZXJpY0tleXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ID0gTnVtYmVyKGtleSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnNlbGVjdCh0aGlzLmNoYXJ0LmNvbHVtbnMsIG51bWVyaWNLZXlzLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnVuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgYWRhcHRlci5ob29rLkMzSW50ZXJmYWNlID0gQzNJbnRlcmZhY2U7XG5cbn0oKSk7XG4iLCIvL25hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyLmhvb2sgPSB0aGlzLmFkYXB0ZXIuaG9vayB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIuaG9vayA9IHdpbmRvdy5hZGFwdGVyLmhvb2sgfHwge307XG59XG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEM0ludGVyZmFjZShjaGFydCkge1xuICAgICAgICBhZGFwdGVyLkludGVyZmFjZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBEM0ludGVyZmFjZS5wcm90b3R5cGUgPSBuZXcgYWRhcHRlci5JbnRlcmZhY2UoKTtcbiAgICBEM0ludGVyZmFjZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEM0ludGVyZmFjZTtcblxuICAgIHZhciBwID0gRDNJbnRlcmZhY2UucHJvdG90eXBlO1xuICAgIC8qXG4gICAgICpUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgb24gdGhlIHZpc3VhbGl6YXRpb24gbGlicmFyeSAsIHdoaWNoIGFyZSBob29rZWQgdG8gaXRcbiAgICAgKiBAcGFyYW0ga2V5czogV2UgbmVlZCB0byBnaXZlIHRoZSBpbmRleCB2YWx1ZSBvciBLZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHJlY29yZCBbMCwzLDVdXG4gICAgICogQHBhcmFtIGNvbHVtbnM6IFdlIG5lZWQgdG8gZ2l2ZSB0aGUgdGhlIGNoYXJ0cyBjb2x1bW4gaWRzIGxpa2UgWydjb2wxJywnY29sMiddXG4gICAgICogQHBhcmFtIGNoYXJ0OiB3ZSBuZWVkIHRvIGdpdmUgY2hhcnQgaW5zdGFuY2UgZ2VuZXJhdGVkIGluIGMzXG4gICAgICovXG4gICAgcC5kb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHRoaXMuY2hhcnQuc2VsZWN0KGtleXMpO1xuICAgIH1cblxuICAgIHAuZG9Qcm9iZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5jaGFydC5wcm9iZShrZXkpO1xuICAgIH1cblxuICAgIHAuc2V0RGF0YSA9IGZ1bmN0aW9uIChzb3VyY2VOYW1lLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHNvdXJjZU5hbWU7XG4gICAgICAgIHRoaXMuY2hhcnQucmVuZGVyQ2hhcnQoZGF0YSk7XG4gICAgfVxuXG4gICAgYWRhcHRlci5ob29rLkQzSW50ZXJmYWNlID0gRDNJbnRlcmZhY2U7XG5cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGQzIGZyb20gJ2QzJztcblxuaW1wb3J0IFwiLi9BZGFwdGVySW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgXCIuL2hvb2svQzNIb29rLmpzXCI7XG5pbXBvcnQgXCIuL2hvb2svRDNIb29rLmpzXCI7XG5pbXBvcnQgXCIuL3BlZXIvV2VhdmVKU1BlZXIuanNcIjtcblxuXG5pbXBvcnQgJy4vR2xvYmFsLmpzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0QzL1NjYXR0ZXJQbG90LmpzJztcblxuLypSZWFjdC5yZW5kZXIoIDwgQXBwIC8gPiAsIGRvY3VtZW50LmJvZHkpO1xuZDMuY3N2KFwidGVzdENlcmVhbC5jc3ZcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICBkLmluZGV4ID0gaTtcbiAgICByZXR1cm4gZDtcbn0sIGZ1bmN0aW9uIChlcnJvciwgcm93cykge1xuICAgIGFkYXB0ZXIuc2Vzc2lvbkRhdGEuR2xvYmFsRGF0YS5kYXRhU291cmNlLnNldFNlc3Npb25TdGF0ZShyb3dzKTtcbiAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS54QXhpcy52YWx1ZSA9ICduYW1lJztcbiAgICBhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS55QXhpcy52YWx1ZSA9ICdzb2RpdW0nO1xuXG59KTtcblxudmFyIHdlYXZlSW50ZXJhY3Rpb25QZWVyID0gbmV3IGFkYXB0ZXIucGVlci5XZWF2ZUpTSW50ZXJmYWNlKCk7XG5cbndlYXZlSW50ZXJhY3Rpb25QZWVyLmhvb2tzLnB1c2gobmV3IGFkYXB0ZXIuaG9vay5EM0ludGVyZmFjZShhZGFwdGVyLnNlc3Npb25EYXRhLnNjYXR0ZXJQbG90RGF0YS5jaGFydCkpOyovIiwiaW1wb3J0ICd3ZWF2ZWNvcmUnO1xuXG4vL25hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hZGFwdGVyLnBlZXIgPSB0aGlzLmFkYXB0ZXIucGVlciB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkYXB0ZXIucGVlciA9IHdpbmRvdy5hZGFwdGVyLnBlZXIgfHwge307XG59XG5cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIC8vc3RhdGljIERlY2xhcmF0aW9uXG4gICAgLy8gc2V0IFByb2JlIGFuZCBTZWxlY3Rpb24ga2V5c1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWF2ZUpTSW50ZXJmYWNlLCAncHJvYmVLZXlzJywge1xuICAgICAgICB2YWx1ZTogV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcC5yZXF1ZXN0T2JqZWN0KCdwcm9iZUtleXMnLCB3ZWF2ZWNvcmUuTGlua2FibGVWYXJpYWJsZSwgZmFsc2UpXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2VhdmVKU0ludGVyZmFjZSwgJ3NlbGVjdGlvbktleXMnLCB7XG4gICAgICAgIHZhbHVlOiBXZWF2ZUFQSS5nbG9iYWxIYXNoTWFwLnJlcXVlc3RPYmplY3QoJ3NlbGVjdGlvbktleXMnLCB3ZWF2ZWNvcmUuTGlua2FibGVWYXJpYWJsZSwgZmFsc2UpXG4gICAgfSk7XG5cbiAgICAvL2NvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gV2VhdmVKU0ludGVyZmFjZSgpIHtcbiAgICAgICAgYWRhcHRlci5JbnRlcmZhY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUhvb2sgPSBudWxsO1xuICAgICAgICBXZWF2ZUpTSW50ZXJmYWNlLnNlbGVjdGlvbktleXMuYWRkSW1tZWRpYXRlQ2FsbGJhY2soe30sIHJlbmRlclNlbGVjdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2VhdmVKU0ludGVyZmFjZS5wcm9iZUtleXMuYWRkSW1tZWRpYXRlQ2FsbGJhY2soe30sIHJlbmRlclByb2JlLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG5cbiAgICBXZWF2ZUpTSW50ZXJmYWNlLnByb3RvdHlwZSA9IG5ldyBhZGFwdGVyLkludGVyZmFjZSgpO1xuICAgIFdlYXZlSlNJbnRlcmZhY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2VhdmVKU0ludGVyZmFjZTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBXZWF2ZUpTSW50ZXJmYWNlLnNlbGVjdGlvbktleXMuZ2V0U2Vzc2lvblN0YXRlKCk7XG4gICAgICAgIHRoaXMuaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChob29rICE9IHRoaXMuYWN0aXZlaG9vaylcbiAgICAgICAgICAgICAgICBob29rLmRvU2VsZWN0aW9uKGtleXMpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlaG9vayA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2JlKCkge1xuICAgICAgICB2YXIga2V5ID0gV2VhdmVKU0ludGVyZmFjZS5wcm9iZUtleXMuZ2V0U2Vzc2lvblN0YXRlKCk7XG4gICAgICAgIHRoaXMuaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChob29rICE9IHRoaXMuYWN0aXZlaG9vaylcbiAgICAgICAgICAgICAgICBob29rLmRvUHJvYmUoa2V5KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZWhvb2sgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IFdlYXZlSlNJbnRlcmZhY2UucHJvdG90eXBlO1xuICAgIC8qXG4gICAgICpUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgb24gdGhlIHZpc3VhbGl6YXRpb24gbGlicmFyeSAsIHdoaWNoIGFyZSBob29rZWQgdG8gaXRcbiAgICAgKiBAcGFyYW0ga2V5czogV2UgbmVlZCB0byBnaXZlIHRoZSBpbmRleCB2YWx1ZSBvciBLZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHJlY29yZCBbMCwzLDVdXG4gICAgICovXG4gICAgcC5kb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIFdlYXZlSlNJbnRlcmZhY2Uuc2VsZWN0aW9uS2V5cy5zZXRTZXNzaW9uU3RhdGUoa2V5cyk7XG4gICAgfVxuXG4gICAgcC5kb1Byb2JlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBXZWF2ZUpTSW50ZXJmYWNlLnByb2JlS2V5cy5zZXRTZXNzaW9uU3RhdGUoa2V5KTtcbiAgICB9XG5cbiAgICBhZGFwdGVyLnBlZXIuV2VhdmVKU0ludGVyZmFjZSA9IFdlYXZlSlNJbnRlcmZhY2U7XG5cbn0oKSk7XG4iXX0=
