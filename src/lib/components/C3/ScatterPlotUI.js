import c3 from 'c3';
import React from 'react';



class C3ScatterPlot extends React.Component {
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

        this.getColumns = this.getColumns.bind(this);
    }



    initialize() {
        var chartUI = this;
        var _dataSourceTarget = this.sessionData.dataSourceWatcher.target;
        if (_dataSourceTarget) {
            //data.x data.y are ids - so make it x and y
            //unlike d3 c3 wont le tyou to load all data, it converts data specifed in columns to array fo json data style
            //so its important to set hide to keycolumnName which hleps in retrieving the the seleted data

            var config = {
                bindto: React.findDOMNode(this),
                padding: this.props.padding ? this.props.padding : {},
                size: this.props.size ? this.props.size : {},
                data: {
                    x: 'x',
                    y: 'y',
                    columns: [],
                    type: 'scatter',
                    selection: {
                        enabled: true,
                        multiple: true,
                        draggable: true

                    },
                    onselected: function () {
                        var selectedPoints = this.selected();
                        console.log('From c3 Selection selectedPoints Key', selectedPoints);
                        if (selectedPoints.constructor === Array) {
                            var keys = selectedPoints.map(function (point) {
                                return chartUI.hook.chart.yIndexToKeyColumn[point['index']];
                            })
                            console.log('From c3 Selection Multiple Key', keys);
                            chartUI.props.onSelect.callback.call(this, keys);

                        } else {
                            console.log('From c3 Selection Single Key', chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']])
                            chartUI.props.onSelect.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']]);
                        }


                    },
                    onmouseover: function (point) {
                        console.log('From c3 Probe Key', chartUI.hook.chart.yIndexToKeyColumn[point['index']])
                        chartUI.props.onProbe.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[point['index']]);
                    }
                },
                axis: {
                    x: {
                        label: this.state.xAxis,
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: this.state.yAxis
                    }
                },
                onmouseout: function () {
                    WeaveAPI.globalHashMap.getObject('selectionKeys').setSessionState([]);
                },
                legend: {
                    show: false
                }

            }
            this.hook.chart = c3.generate(config);
        } else {
            console.warn("No Data Found");
        }
    }

    //tied with d3 creation
    componentDidMount() {
        this.initialize();
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData.dataSourceWatcher).addImmediateCallback(this, this._setData, true);
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

    getColumns(xColumnName, yColumnName) {
        this.hook.chart.keyColumnToYIndex = {}
        this.hook.chart.yIndexToKeyColumn = {}
        var data = this.sessionData.dataSourceWatcher.target.data.getSessionState();
        var createIndex = false;
        if (!data[0].hasOwnProperty('index')) {
            console.warn("Its a good practise to set key column. failing to do so, will create a index as key column");
            createIndex = true;
        }

        var columns = [[], []];
        var keyCol = this.sessionData.keyColumn.value = this.sessionData.keyColumn.value ? this.sessionData.keyColumn.value : 'index';
        console.log('Key Column:', keyCol);
        columns[0].push('x');
        columns[1].push('y');
        // in c3 index value is mapped with Y axis value
        // So map our keycolumn value with Y index which aids in exact selection and probing
        data.forEach(function (object, i) {
            columns[0].push(object[xColumnName]);
            columns[1].push(object[yColumnName]);
            if (createIndex) object['index'] = i;
            this.hook.chart.keyColumnToYIndex[object[keyCol]] = i;
            this.hook.chart.yIndexToKeyColumn[i] = object[keyCol];
        }.bind(this));
        console.log(columns);

        return columns;
    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        if (this.hook.chart) {

            if (this.isXAxisChanged || this.isYAxisChanged || this.isDataChanged) {
                this.hook.chart.axis.labels({
                    x: this.state.xAxis,
                    y: this.state.yAxis
                });
                var rows = this.sessionData.dataSourceWatcher.target.data.getSessionState();
                var columns = this.getColumns(this.state.xAxis, this.state.yAxis);
                this.hook.chart.load({
                    columns: columns
                });
                this.isXAxisChanged = false;
                this.isYAxisChanged = false;
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
            return <div className = 'Chart' > < h2 > No Data < /h2> < /div > ;
        }
    }

}

module.exports = C3ScatterPlot;
