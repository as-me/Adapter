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
         * @property dataSourceName
         * @readOnly
         * @type weavecore.LinkableString
         */
        Object.defineProperty(this, '_dataSourceWatcher', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableWatcher())
        });


        Object.defineProperty(this, 'dataSourceWatcher', {
            get: function () {
                return this._dataSourceWatcher;
            }
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
            'yAxis': this.yAxis.value
        };

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
     * @method getYAxisValue
     * @return {Object}
     */
    p.getDataSourceState = function () {
        return {
            'dataSource': this._dataSourceWatcher.target
        };
    };


    adapter.session.ScatterPlot = ScatterPlot;

}());
