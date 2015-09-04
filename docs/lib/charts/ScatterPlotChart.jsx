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
        var tool = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool',ScatterPlotTool,false);
        tool.createUI({
                        top: this.state.top,
                        bottom: this.state.bottom,
                        right: this.state.right,
                        left: this.state.left
                    },
                    {
                        width: this.state.width,
                        height: this.state.height
                    },
                    {
                        onProbe: {
                            showToolTip: true,
                            callback: function(d) {
                                adapter.weaveInteractionPeer.activeHook = this;
                                adapter.weaveInteractionPeer.doProbe(d);
                            }
                        },
                        onSelect: {
                            callback: function (keys) {
                                adapter.weaveInteractionPeer.activeHook = this;
                                adapter.weaveInteractionPeer.doSelection(keys);
                            }
                        }
                    }
        );
        tool.sessionData.xAxis.value = 'name';
        tool.sessionData.yAxis.value = 'fat';

        var tool2 = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool2',ScatterPlotTool,false);
        tool2.createUI({
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: this.state.right,
                    left: this.state.left
                },
                {
                    width: this.state.width,
                    height: this.state.height
                },
                {
                    onProbe: {
                        showToolTip: true,
                        callback: function(d) {
                            adapter.weaveInteractionPeer.activeHook = this;
                            adapter.weaveInteractionPeer.doProbe(d);
                        }
                    },
                    onSelect: {
                        callback: function (keys) {
                            adapter.weaveInteractionPeer.activeHook = this;
                            adapter.weaveInteractionPeer.doSelection(keys);
                        }
                    }
                }
        );
        tool2.sessionData.xAxis.value = 'name';
        tool2.sessionData.yAxis.value = 'protein';


		return (
			<div className = 'App' >
            {tool.ui}
            {tool2.ui}< /div >
		);
	}
});

module.exports = ScatterPlotChart;
