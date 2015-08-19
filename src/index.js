import React from 'react';
import d3 from 'd3';

import "./AdapterInterface.js";
import "./hook/C3Hook.js";
import "./hook/D3Hook.js";
import "./peer/WeaveJSPeer.js";


import './Global.js'
import './components/App.js';

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
