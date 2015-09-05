'use strict';





var React = require('react');
var Adapter = require('src/');
require('weavecore');

var ScatterPlotTool = adapter.sessionTool.d3.ScatterPlotTool;
var C3ScatterPlotTool = adapter.sessionTool.c3.ScatterPlotTool;

var ScatterPlotChart = React.createClass({
    getInitialState(){
        return{
                    width: 400,
                    height: 300,
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

        var tool2 = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool2',C3ScatterPlotTool,false);
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
                            adapter.weaveInteractionPeer.doProbe(d.index);
                        }
                    },
                    onSelect: {
                        callback: function (keys) {
                            adapter.weaveInteractionPeer.activeHook = this;
                            if (keys.constructor === Array)
                               adapter.weaveInteractionPeer.doSelection(keys.map(function (key) {
                                    return key.index;
                                }), true);
                            else
                                adapter.weaveInteractionPeer.doSelection([keys.index], true);
                        }
                    }
                }
        );
        tool2.sessionData.xAxis.value = 'sodium';
        tool2.sessionData.yAxis.value = 'protein';


		return (
			<div className = 'App' >
            <h3>D3 Based Scatterplot (Interaction API - Probing and Selection, UI Action - MouseOver and Brushing )</h3>
            <div>{tool.ui}</div>
            <h3>C3 Based Scatterplot (Interaction API - Selection, UI Action - Tool Tip  and Mouse click)</h3>
            <div>{tool2.ui}</div>
            < /div >
		);
	}
});

module.exports = ScatterPlotChart;
