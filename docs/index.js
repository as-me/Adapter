/*'use strict';
var React = require('react');
var d3 = require('d3');

require('../src/styles/react-stockcharts');
require('stylesheets/asme-adapter');

var ReadME = require('md/MAIN.md');

document.getElementById("content").innerHTML = ReadME;


d3.csv("data/testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {
    React.render( < App / > , document.body);
    adapter.sessionData.GlobalData.dataSource.setSessionState(rows);
    adapter.sessionData.scatterPlotData.xAxis.value = 'name';
    adapter.sessionData.scatterPlotData.yAxis.value = 'sodium';

});*/


'use strict';
/**/
var React = require('react');
var d3 = require('d3');

require('../src/styles/asme-adapter');
require('stylesheets/asme-adapter-docs');

var ReadME = require('md/MAIN.md');

document.getElementById("content").innerHTML = ReadME;


//require('./examples/freezer-example');
