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
        }
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

}());
