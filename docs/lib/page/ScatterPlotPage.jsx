'use strict';

var React = require('react');
var ContentSection = require('lib/content-section');
var Row = require('lib/row');
var Section = require('lib/section');

var ScatterPlotChart = require('lib/charts/ScatterPlotChart');

var ScatterPlotPage = React.createClass({
	statics: {
		title: 'ScatterPlot Chart'
	},
	render() {
		return (
			<ContentSection title={ScatterPlotPage.title}>
				<Row>
					<Section colSpan={2} className="react-stockchart">
						<ScatterPlotChart data={this.props.someData} />
					</Section>
				</Row>

			</ContentSection>
		);
	}
});

module.exports = ScatterPlotPage;
