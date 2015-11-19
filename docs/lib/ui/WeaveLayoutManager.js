//import WeaveTool from "./WeaveTool";
var WeaveTool = require('./WeaveTool');
console.log(WeaveTool);

var React = require('react');
var Adapter = require('src/');
require('weavetool');


class WeaveLayoutManager extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        var toolSessionPath = AdapterAPI.peer.requestHookPath('ScatterPlotTool', 'weavetool.ScatterPlotTool');

        return ( < div className = 'App' >

            < WeaveTool ref = "ScatterPlotTool"
            key = "ScatterPlotTool"
            toolClass = 'weavetool.ScatterPlotTool'
            toolPath = {
                toolSessionPath
            }
            /> < /div >
        );
    }
}

module.exports = WeaveLayoutManager;
//export default WeaveLayoutManager;

/**/
