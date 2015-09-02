'use strict';





var React = require('react');
var Adapter = require('src/');
require('weavecore');

var ScatterPlotTool = adapter.sessionTool.d3.ScatterPlotTool;

var ScatterPlotChart = React.createClass({
getInitialState(){
return{
            width: 800,
            height: 400,
            top: 5,
            bottom: 100,
            right: 20,
            left: 70
        };
},
	render() {
    var tool = WeaveAPI.globalHashMap.requestObject('ScatterPlotTool',ScatterPlotTool,false);
    tool.createUI({
                top: this.state.top,
                bottom: this.state.bottom,
                right: this.state.right,
                left: this.state.left
            },
            {
                width: this.state.width,
                height: this.state.height
            });
            tool.sessionData.xAxis.value = 'name';
             tool.sessionData.yAxis.value = 'fat';

       /* var tool =  WeaveAPI.SessionManager.registerLinkableChild(WeaveAPI.globalHashMap,new ScatterPlotTool(
            {
                top: this.state.top,
                bottom: this.state.bottom,
                right: this.state.right,
                left: this.state.left
            },
            {
                width: this.state.width,
                height: this.state.height
            }
            ),false);*/
		return (
			<div className = 'App' >
            {tool.ui} < /div >
		);
	}
});

module.exports = ScatterPlotChart;
