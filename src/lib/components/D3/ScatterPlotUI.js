import "d3chart";
import React from 'react';

class D3ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this.hook = props.hook;
        this.state = this.sessionData.getSessionStateValue();
        this.initialize = this.initialize.bind(this);
        this._setXAxis = this._setXAxis.bind(this);
        this._setYAxis = this._setYAxis.bind(this);
        this._setData = this._setData.bind(this);
        this.isXAxisChanged = false;
        this.isYAxisChanged = false;
        this.isDataChanged = false;
    }



    initialize() {
        var _dataSourceTarget = this.sessionData.dataSourceWatcher.target;
        //since key wasnt mentioned here it creates index column and name index as key column name
        if (_dataSourceTarget) {
            var config = {
                container: React.findDOMNode(this),
                margin: this.props.padding ? this.props.padding : {},
                size: this.props.size ? this.props.size : {},
                interactions: {
                    onProbe: this.props.onProbe,
                    onSelect: this.props.onSelect
                }
            }
            this.hook.chart = new d3Chart.Scatterplot();
            this.hook.chart.create(config);
        } else {
            console.warn("No data");
        }
    }

    //tied with d3 creation
    componentDidMount() {
        this.initialize();
        // make sure data update is called last , so that x and y axis property will be ready by then.
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData.dataSourceWatcher).addGroupedCallback(this, this._setData, true);
        this.sessionData.xAxis.addImmediateCallback(this, this._setXAxis);
        this.sessionData.yAxis.addImmediateCallback(this, this._setYAxis);
    }

    _setXAxis() {
        this.isXAxisChanged = true;
        //this wil call render function which in turn calls componentDidUpdate
        this.setState(this.sessionData.getXAxisState());

    }
    _setYAxis() {
        this.isYAxisChanged = true;
        //this wil call render function which in turn calls componentDidUpdate
        this.setState(this.sessionData.getYAxisState());

    }
    _setData() {
        this.isDataChanged = true;
        //this wil call render function which in turn calls componentDidUpdate
        if (!this.hook.chart) {
            this.initialize();
        }
        this.setState(this.sessionData.getDataSourceState());

    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        if (this.hook.chart) {
            if (this.isXAxisChanged) {
                this.hook.chart.setXAttribute(this.state.xAxis);
                this.isXAxisChanged = false;
            }
            if (this.isYAxisChanged) {
                this.hook.chart.setYAttribute(this.state.yAxis);
                this.isYAxisChanged = false;
            }
            if (this.isDataChanged) {
                var rows = this.sessionData.dataSourceWatcher.target.data.getSessionState();
                var data = {
                    columns: {
                        x: this.state.xAxis,
                        y: this.state.yAxis

                    },
                    records: rows
                };
                this.hook.chart.renderChart(data);
                this.isDataChanged = false;
            }
        }

    }

    //tied with d3 destruction
    componentWillUnmount() {
        this.sessionData.xAxis.removeCallback(this._setXAxis);
        this.sessionData.yAxis.removeCallback(this._setYAxis);
        this.sessionData.dataSourceWatcher.dispose();
    }

    render() {
        var _target = this.sessionData.dataSourceWatcher.target;
        if (_target) {
            return <div className = 'Chart' > < /div>;
        } else {
            return <div className = 'Chart' > < h2 > {
                this.sessionData.dataSourceName
            }
            dont have data < /h2> < /div > ;
        }
    }

}

module.exports = D3ScatterPlot;
