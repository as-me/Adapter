import 'weavecore';

//namesapce
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}

if (typeof window === 'undefined') {
    this.adapter.session = this.adapter.session || {};
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
    }

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

}());
