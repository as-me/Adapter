'use strict';

var React = require('react');
var ContentSection = require('lib/content-section');
var Row = require('lib/row');
var Section = require('lib/section');

var WeaveLayoutManager = require('lib/ui/WeaveLayoutManager');



var WeaveC3ScatterPlotPage = React.createClass({
    statics: {
        title: 'WeaveC3 - ScatterPlot Chart'
    },
    render() {

        return ( < ContentSection title = 'WeaveC3 - ScatterPlot Chart' >
            < Row >
            < Section colSpan = {
                2
            }
            className = "react-stockchart" > < WeaveLayoutManager / > < /Section> < /Row >

            < /ContentSection>
        );
    }
});

module.exports = WeaveC3ScatterPlotPage;
