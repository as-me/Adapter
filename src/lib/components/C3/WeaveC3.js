import AbstractTool from "../AbstractTool.js";
import c3 from "c3";
import lodash from "lodash";


/* private
 * @param records array or records
 * @param attributes array of attributes to be normalized
 */
function _normalizeRecords(records, attributes) {

    // to avoid computing the stats at each iteration.
    var columnStatsCache = {};
    attributes.forEach(function (attr) {
        columnStatsCache[attr] = {
            min: lodash.min(lodash.pluck(records, attr)),
            max: lodash.max(lodash.pluck(records, attr))
        };
    });

    return records.map(function (record) {

        var obj = {};

        attributes.forEach(function (attr) {
            var min = columnStatsCache[attr].min;
            var max = columnStatsCache[attr].max;

            if (!min || !max || max - min === 0) {
                return 0;
            }

            if (record[attr]) {
                // console.log( (record[attr] - min) / (max - min));
                obj[attr] = (record[attr] - min) / (max - min);
            } else {
                // if any of the value above is null then
                // we can't normalize
                obj[attr] = null;
            }
        });

        return obj;
    });
}

export default class WeaveC3ScatterPlot extends AbstractTool {

    constructor(props) {
        super(props);
        this._visualizationPath = this.toolPath.push("children", "visualization");
        this._plotterPath = this.toolPath.pushPlotter("plot");

        this._dataXPath = this._plotterPath.push("dataX");
        this._dataYPath = this._plotterPath.push("dataY");
        this._xAxisPath = this.toolPath.pushPlotter("xAxis");
        this._yAxisPath = this.toolPath.pushPlotter("yAxis");

        this._fillStylePath = this._plotterPath.push("fill");
        this._lineStylePath = this._plotterPath.push("line");
        this._sizeByPath = this._plotterPath.push("sizeBy");

        this.plotterState = {};

        this._plotterPath.addCallback(() => {
            this.plotterState = this._plotterPath.getState();
            this._dataChanged();
        }, true);

        this._c3Options = {
            bindto: this.element,
            data: {
                rows: [],
                x: "x",
                xSort: false,
                type: "scatter", //,
                selection: {
                    enabled: true,
                    multiple: true,
                    draggable: true
                },
                color: (color, d) => {
                    if (this.records && d.hasOwnProperty("index")) {
                        var record = this.records[d.index];
                        return (record && record.fill && record.fill.color) ? record.fill.color : "#C0CDD1";
                    }
                    return "#C0CDD1";
                },
                onselected: (d) => {
                    if (d && d.hasOwnProperty("index")) {
                        this.toolPath.selection_keyset.addKeys([this.indexToKey[d.index]]);
                    }
                },
                onunselected: (d) => {
                    if (d && d.hasOwnProperty("index")) {
                        this.toolPath.selection_keyset.removeKeys([this.indexToKey[d.index]]);
                    }
                },
                onmouseover: (d) => {
                    if (d && d.hasOwnProperty("index")) {
                        this.toolPath.probe_keyset.setKeys([this.indexToKey[d.index]]);
                    }
                },
                onmouseout: (d) => {
                    if (d && d.hasOwnProperty("index")) {
                        this.toolPath.probe_keyset.setKeys([]);
                    }
                }
            },
            legend: {
                show: false
            },
            axis: {
                x: {
                    label: {
                        position: "outer-center"
                    },
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: {
                        position: "outer-middle"
                    },
                    tick: {
                        fit: false
                    }
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            point: {
                r: (d) => {
                    if (d.hasOwnProperty("index")) {
                        return this.normalizedPointSizes[d.index];
                    }

                }
            },
            onrendered: this._updateStyle.bind(this)
        };

        this.chart = c3.generate(this._c3Options);

        this._setupCallbacks();
    }

    _setupCallbacks() {
        var dataChanged = lodash.debounce(this._dataChanged.bind(this), 100);

        [this._dataXPath, this._dataYPath, this._sizeByPath, this._fillStylePath, this._lineStylePath].forEach((path) => {
            path.addCallback(dataChanged, true, false);
        });

        var axisChanged = lodash.debounce(this._axisChanged.bind(this), 100);
        [this._dataXPath, this._dataYPath, this._xAxisPath, this._yAxisPath].forEach((path) => {
            path.addCallback(axisChanged, true, false);
        });

        this.toolPath.selection_keyset.addCallback(this._selectionKeysChanged.bind(this), true, false);

        //console.log(this.toolPath.probe_keyset);
        this.toolPath.probe_keyset.addCallback(this._probedKeysChanged.bind(this), true, false);

    }

    resize() {
        this.chart.resize(this._getElementSize());
    }

    _axisChanged() {

        if (this.busy) {
            return;
        }

        this.chart.axis.labels({
            x: this._xAxisPath.push("overrideAxisName").getState() || this._dataXPath.getValue("weavedata.ColumnUtils.getTitle(this)"),
            y: this._yAxisPath.push("overrideAxisName").getState() || this._dataYPath.getValue("weavedata.ColumnUtils.getTitle(this)")
        });
    }

    _dataChanged() {
        if (this.busy) {
            return;
        }
        let mapping = {
            point: {
                x: this._dataXPath,
                y: this._dataYPath
            },
            size: this._sizeByPath,
            fill: {
                alpha: this._fillStylePath.push("alpha"),
                color: this._fillStylePath.push("color")
            },
            line: {
                alpha: this._lineStylePath.push("alpha"),
                color: this._lineStylePath.push("color"),
                caps: this._lineStylePath.push("caps")
            }
        };

        this.records = lodash.sortByOrder(this._plotterPath.retrieveRecords(mapping, this._plotterPath.push("filteredKeySet")), ["size", "id"], ["desc", "asc"]);

        this.keyToIndex = {};
        this.indexToKey = {};

        this.records.forEach((record, index) => {
            this.keyToIndex[record.id] = index;
            this.indexToKey[index] = record.id;
        });

        this.normalizedRecords = _normalizeRecords(this.records, ["size"]);

        this.normalizedPointSizes = this.normalizedRecords.map((normalizedRecord) => {
            if (this.plotterState && this.plotterState.sizeBy.length) {
                let minScreenRadius = this.plotterState.minScreenRadius;
                let maxScreenRadius = this.plotterState.maxScreenRadius;

                return (normalizedRecord && normalizedRecord.size ?
                    minScreenRadius + normalizedRecord.size * (maxScreenRadius - minScreenRadius) :
                    this.plotterState.defaultScreenRadius) || 1;
            } else {
                return (this.plotterState.defaultScreenRadius) || 1;
            }
        });

        this._axisChanged();
        this.busy = true;
        this.chart.load({
            data: lodash.pluck(this.records, "point"),
            unload: true,
            done: () => {
                this.busy = false;
            }
        });
    }

    _selectionKeysChanged() {
        var keys = this.toolPath.selection_keyset.getKeys();
        var indices = keys.map((key) => {
            return Number(this.keyToIndex[key]);
        });
        this.chart.select("y", indices, true);
    }

    _probedKeysChanged() {
        /*
        var keys = this.toolPath.probe_keyset.getKeys();
        var indices = keys.map( (key) => {
            return Number(this.keyToIndex[key]);
        });
        */
        // this.chart.select("y", indices, true);
    }

    _updateStyle() {
        d3.selectAll(this.element).selectAll("circle").style("opacity", 1)
            .style("stroke", "black")
            .style("stroke-opacity", 0.5);
    }

    destroy() {
        this.chart.destroy();
    }
}

//registerToolImplementation("weave.visualization.tools::ScatterPlotTool", WeaveC3ScatterPlot);
