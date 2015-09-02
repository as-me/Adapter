/**
 * @module adapter.peer
 */

require('weavecore');

//namespace
if (typeof window === 'undefined') {
    this.adapter.peer = this.adapter.peer || {};
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

        Object.defineProperty(this, 'sessionable', {
            value: true
        });

        // set Probe and Selection keys
        Object.defineProperty(this, 'probeKeys', {
            value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
        });

        Object.defineProperty(this, 'selectionKeys', {
            value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
        });

        Object.defineProperty(this, 'hooks', {
            value: WeaveAPI.globalHashMap.requestObject('hooks', weavecore.LinkableHashmap, false)
        });

        this.selectionKeys.addImmediateCallback(this, renderSelection.bind(this));
        this.probeKeys.addImmediateCallback(this, renderProbe.bind(this));
    }



    WeaveJSInterface.prototype = new adapter.Interface();
    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

    function renderSelection() {
        var keys = WeaveJSInterface.selectionKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doSelection(keys);
            else
                this.activehook = null;
        });
    }

    function renderProbe() {
        var key = WeaveJSInterface.probeKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doProbe(key);
            else
                this.activehook = null;
        });
    }

    var p = WeaveJSInterface.prototype;

    /**
     * This function renders on the visualization library , which are hooked to it
     * @method doSelection
     * @param {Array} keys We need to give the index value or Keys associated with that record [0,3,5].
     */
    p.doSelection = function (keys) {
        this.selectionKeys.setSessionState(keys);
    }

    /**
     * This function renders on the visualization library , which are hooked to it
     * @method doProbe
     * @param {Object} key We need to give the index value or Key associated with that record.
     */
    p.doProbe = function (key) {
        this.probeKeys.setSessionState(key);
    }

    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Class} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.requestHook = function (name, classDefn) {
        return this.hooks.requestObject(name, classDefn, false);
    }

    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Object} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.deleteHook = function (name) {
        return this.hooks.removeObject(name);
    }

    p.loadSessionState = function () {

    }

    adapter.peer.WeaveJSInterface = WeaveJSInterface;

}());
