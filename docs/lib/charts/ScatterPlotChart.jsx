'use strict';
var React = require('react');
var Adapter = require('src/');
require('weavecore');

var D3ScatterPlotTool = adapter.libs.d3.ScatterPlot;
var C3ScatterPlotTool = adapter.libs.c3.ScatterPlot;



var ScatterPlotChart = React.createClass({
    getInitialState(){
        return{
                    top: 5,
                    bottom: 100,
                    right: 20,
                    left: 70
                };
    },



	render() {
        var tool = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool',D3ScatterPlotTool,false);
        tool.createUI({
                        top: this.state.top,
                        bottom: this.state.bottom,
                        right: this.state.right,
                        left: this.state.left
                    },
                    {

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
        tool.sessionData.dataSourceName.value = 'cereal';
        tool.sessionData.xAxis.value = 'fat';
        tool.sessionData.yAxis.value = 'index';

        var tool2 = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool2',C3ScatterPlotTool,false);
        tool2.createUI({
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: this.state.right,
                    left: this.state.left
                },
                {

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
        tool2.sessionData.dataSourceName.value = 'cereal';
        tool2.sessionData.xAxis.value = 'fat';
        tool2.sessionData.yAxis.value = 'index';

        var tool3 = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool3',C3ScatterPlotTool,false);
        tool3.createUI({
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: this.state.right,
                    left: this.state.left
                },
                {

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
        tool3.sessionData.dataSourceName.value = 'cereal';
        tool3.sessionData.xAxis.value = 'index';
        tool3.sessionData.yAxis.value = 'fat';


		return (
			<div className = 'App' >

            <h4>D3 Scatterplot (Interaction API - Probing  Selection, UI Action - MouseOver and Brushing )</h4>
            <div>{tool.ui}</div>
            <h4>C3 Scatterplot (Interaction API - Selection(key),Selection(keys), UI Action - MouseOver  and Drag-Selection)</h4>
            <div>{tool2.ui}</div>
            < /div >
		);
	}
});

module.exports = ScatterPlotChart;



