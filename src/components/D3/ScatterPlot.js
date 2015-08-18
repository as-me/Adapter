import "d3chart";
import React from 'react';

//namesapce
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}


if (typeof window === 'undefined') {
    this.adapter.sessionData = this.adapter.sessionData || {};
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

}());


export default class ScatterPlot extends React.Component {
    constructor() {
        super();
        this._setReactState = this._setReactState.bind(this);
    }

    //tied with d3 creation
    componentDidMount() {
        var config = {
            container: React.findDOMNode(this),
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
        }
        adapter.sessionData.scatterPlotData.chart.create(config);

        adapter.sessionData.scatterPlotData.xAxis.addGroupedCallback(this, this._setReactState);
        adapter.sessionData.scatterPlotData.yAxis.addGroupedCallback(this, this._setReactState);

    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        console.log(adapter.sessionData.GlobalData.getData());
        adapter.sessionData.scatterPlotData.chart.renderChart(adapter.sessionData.GlobalData.getData());
        adapter.sessionData.scatterPlotData.chart.setXAttribute(adapter.sessionData.scatterPlotData.xAxis.value);
        adapter.sessionData.scatterPlotData.chart.setYAttribute(adapter.sessionData.scatterPlotData.yAxis.value);
    }

    //tied with d3 destruction
    componentWillUnmount() {
        adapter.sessionData.scatterPlotData.xAxis.removeCallback(this._setReactState);
        adapter.sessionData.scatterPlotData.yAxis.removeCallback(this._setReactState);
    }

    _setReactState() {
        //TO-DO: check whether column Name is Part of the data Source
        console.log('Scatterplot Callback:', adapter.sessionData.scatterPlotData.getSessionStateValue());

        this.setState(adapter.sessionData.scatterPlotData.getSessionStateValue());
    }

    render() {
        return <div ref = 'container'
        className = 'Chart' > < /div>;
    }

}
