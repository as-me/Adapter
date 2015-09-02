import "d3chart";
import React from 'react';



class ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this._setReactState = this._setReactState.bind(this);
    }

    //tied with d3 creation
    componentDidMount() {
        var config = {
            container: React.findDOMNode(this),
            margin: {
                top: this.props.top,
                bottom: this.props.bottom,
                left: this.props.left,
                right: this.props.right
            },
            size: {
                width: this.props.width,
                height: this.props.height
            },
            columns: {
                x: "name",
                y: "protein",
                key: "name"
            }
        }

        var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
        WeaveAPI.globalHashMap.getObject('dataSource').addGroupedCallback(this, this._setReactState);

        this.sessionData.chart.create(config);
        this.sessionData.chart.renderChart(data);
        this.sessionData.xAxis.addGroupedCallback(this, this._setReactState);
        this.sessionData.yAxis.addGroupedCallback(this, this._setReactState);


    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
        this.sessionData.chart.renderChart(data);
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
        //TO-DO: check whether column Name is Part of the data Source
        console.log('Scatterplot Callback:');

        //this wil call render function which in turn calls componentDidUpdate
        this.setState(this.sessionData.getSessionStateValue());
    }

    render() {
        return <div className = 'Chart' > < /div>;
    }

}

module.exports = ScatterPlot;
