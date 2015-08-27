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
