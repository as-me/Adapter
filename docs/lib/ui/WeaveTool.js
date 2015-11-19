import 'lodash';
import React from "react";
import WeaveC3ScatterPlot from "../charts/WeaveC3ScatterPlot.js";
import WeavePanelManager from "./WeavePanelManager.js";

class WeaveTool extends React.Component {

    constructor(props) {
        super(props);
        this.toolPath = props.toolPath;
        this.toolProps = props.toolProps;
        this.state = {};
        var toolType = props.toolClass;
        /*if(toolType === "weave.visualization.tools::ExternalTool" && this.toolPath && this.toolPath.getType("toolClass")) {
            toolType = this.toolPath.getState("toolClass");
        }*/
        this.ToolClass = WeavePanelManager.getToolImplementation(toolType);
        console.log(this.ToolClass);
    }

    componentDidMount() {
        this.element = ReactDOM.findDOMNode(this);
        this.header = ReactDOM.findDOMNode(this.refs.header);
        if (React.Component.isPrototypeOf(this.ToolClass)) {
            this.tool = this.refs.tool;
        } else {
            this.tool = new this.ToolClass(_.merge({
                element: ReactDOM.findDOMNode(this.refs.toolDiv),
                toolPath: this.toolPath
            }));
        }
    }

    componentWillUnmount() {
        if (this.tool.destroy) {
            this.tool.destroy();
        }
    }

    componentDidUpdate() {
        if (this.tool.resize) {
            this.tool.resize();
        }
    }

    render() {

        var reactTool = "";
        if (React.Component.isPrototypeOf(this.ToolClass)) {
            reactTool = React.createElement(this.ToolClass, _.merge({
                key: "tool",
                ref: "tool",
                toolPath: this.toolPath
            }, this.toolProps));
        }

        var toolHeight = "100%";

        if (this.element) {
            toolHeight = this.element.clientHeight - this.header.clientHeight;
        }

        return ( < div >
            < div ref = "header"
            style = {
                {
                    height: "25px",
                    width: "100%"
                }
            } >
            < div draggable = {
                true
            }
            /> < /div > < div style = {
                {
                    position: "relative",
                    width: "100%",
                    height: toolHeight,
                    padding: 16
                }
            } >
            < div ref = "toolDiv"
            style = {
                {
                    width: "100%",
                    height: "100%",
                    maxHeight: toolHeight
                }
            }
            /> < /div > < /div>
        );
    }
}
module.exports = WeaveTool;
/**/

//onDragOver={this.props.onDragOver} onDragEnd={this.props.onDragEnd}>
