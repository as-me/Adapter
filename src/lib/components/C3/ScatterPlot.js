import c3 from 'c3';
import React from 'react';



class D3ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this._setReactState = this._setReactState.bind(this);
    }

    //tied with d3 creation
    componentDidMount() {

        var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
        console.log(data);
        var columns = [[], [], []];
        columns[0].push(this.sessionData.xAxis.value);
        columns[1].push(this.sessionData.yAxis.value);
        columns[2].push('index');
        var records = data.map(function (object) {
            columns[0].push(object[this.sessionData.xAxis.value]);
            columns[1].push(object[this.sessionData.yAxis.value]);
            columns[2].push(object['index']);
        }.bind(this))

        var config = {
            bindto: React.findDOMNode(this),
            padding: {
                top: this.props.top,
                bottom: this.props.bottom,
                left: this.props.left,
                right: this.props.right
            },
            size: {
                width: this.props.width,
                height: this.props.height
            },
            data: {
                x: this.sessionData.xAxis.value,
                y: this.sessionData.yAxis.value,
                columns: columns,
                type: 'scatter',
                selection: {
                    enabled: true,
                    multiple: true,
                    draggable: true

                },
                hide: ['index'],
                onselected: this.props.onSelect.callback,
                onmouseover: this.props.onProbe.callback
            },
            axis: {
                x: {
                    label: this.sessionData.xAxis.value

                },
                y: {
                    label: this.sessionData.yAxis.value
                }
            },
            legend: {
                show: false
            }
        }


        WeaveAPI.globalHashMap.getObject('dataSource').addGroupedCallback(this, this._setReactState);

        this.sessionData.chart = c3.generate(config);
        this.props.hook.setChart(this.sessionData.chart);

        this.sessionData.xAxis.addGroupedCallback(this, this._setReactState);
        this.sessionData.yAxis.addGroupedCallback(this, this._setReactState);


    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        this.sessionData.chart.setXAttribute(this.sessionData.xAxis.value);
        this.sessionData.chart.setYAttribute(this.sessionData.yAxis.value);
    }

    //tied with d3 destruction
    componentWillUnmount() {
        this.sessionData.xAxis.removeCallback(this._setReactState);
        this.sessionData.yAxis.removeCallback(this._setReactState);
        WeaveAPI.globalHashMap.getObject('dataSource').removeCallback(this._setReactState);
    }


    _setReactState() {
        //this wil call render function which in turn calls componentDidUpdate
        this.setState(this.sessionData.getSessionStateValue());
    }

    render() {
        return <div className = 'Chart' > < /div>;
    }

}

module.exports = D3ScatterPlot;
