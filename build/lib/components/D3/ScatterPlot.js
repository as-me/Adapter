'use strict';

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
