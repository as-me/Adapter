'use strict';





var React = require('react');
var Adapter = require('src/');

var ScatterPlot = Adapter.components.D3.ScatterPlot;

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
		return (
			<div className = 'App' >
            < ScatterPlot width = {
                this.state.width
            }
        height = {
            this.state.height
        }
        top = {
            this.state.top
        }
        bottom = {
            this.state.bottom
        }
        right = {
            this.state.right
        }
        left = {
            this.state.left
        }
        /> < /div >
		);
	}
});

module.exports = ScatterPlotChart;
