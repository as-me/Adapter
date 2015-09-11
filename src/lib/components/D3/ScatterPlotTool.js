import React from 'react';
import ScatterPlot from './ScatterPlot';
import 'weavecore';

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

if (typeof window === 'undefined') {
    this.adapter.sessionData.d3 = this.adapter.sessionData.d3 || {};
} else {
    window.adapter.sessionData.d3 = window.adapter.sessionData.d3 || {};
}


(function () {

    Object.defineProperty(ScatterPlotData, 'NS', {
        value: 'adapter.sessionData.d3'
    });

    Object.defineProperty(ScatterPlotData, 'CLASS_NAME', {
        value: 'ScatterPlotData'
    });

    function ScatterPlotData() {

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
            value: 'adapter.sessionData.d3'
        });

        /**
         * @public
         * @property xAxis
         * @readOnly
         * @type weavecore.LinkableString
         */
        Object.defineProperty(this, 'xAxis', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString())
        });

        /**
         * @public
         * @property yAxis
         * @readOnly
         * @type weavecore.LinkableString
         */
        Object.defineProperty(this, 'yAxis', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString('yAxis'))
        });

        this.chart;


    }

    // Prototypes
    var p = ScatterPlotData.prototype;

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


    /**
     * @method getXAxisValue
     * @return {Object}
     */
    p.getXAxisValue = function () {
        return {
            'xAxis': this.xAxis.value
        };
    };

    /**
     * @method getYAxisValue
     * @return {Object}
     */
    p.getYAxisValue = function () {
        return {
            'yAxis': this.yAxis.value
        };
    };


    adapter.sessionData.d3.ScatterPlotData = ScatterPlotData;

}());


if (typeof window === 'undefined') {
    this.adapter.sessionTool = this.adapter.sessionTool || {};
} else {
    window.adapter.sessionTool = window.adapter.sessionTool || {};
}

if (typeof window === 'undefined') {
    this.adapter.sessionTool.d3 = this.adapter.sessionTool.d3 || {};
} else {
    window.adapter.sessionTool.d3 = window.adapter.sessionTool.d3 || {};
}

(function () {


    Object.defineProperty(ScatterPlotTool, 'NS', {
        value: 'adapter.sessionTool.d3'
    });

    Object.defineProperty(ScatterPlotTool, 'CLASS_NAME', {
        value: 'ScatterPlotTool'
    });

    function ScatterPlotTool() {
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
            value: 'adapter.sessionTool.d3'
        });

        /**
         * @public
         * @property data
         * @readOnly
         * @type String
         */
        Object.defineProperty(this, 'sessionData', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new adapter.sessionData.d3.ScatterPlotData())
        });

        /**
         * @public
         * @property chart
         * @readOnly
         * @type d3Chart.Scatterplot
         */
        /*Object.defineProperty(this, 'chart', {
            value: new d3Chart.Scatterplot()
        });*/

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
    var p = ScatterPlotTool.prototype;

    p.createUI = function (padding, size, interactions) {
        console.log('createUI');
        /**
         * @public
         * @property ui
         * @readOnly
         * @type ReactElement
         */
        if (!this.ui) {
            Object.defineProperty(this, 'ui', {
                value: React.createElement(ScatterPlot, {
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
    }


    //TO-DO: Find a way for class part of Modules
    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
    // where as in module provide by webpack we can't get the constructor name.
    adapter.sessionTool.d3.ScatterPlotTool = ScatterPlotTool;
}());
