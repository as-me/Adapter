!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("d3"),require(void 0),require("d3chart"),require("c3")):"function"==typeof define&&define.amd?define(["React","d3",,"d3chart","c3"],t):"object"==typeof exports?exports.AsmeAdapter=t(require("React"),require("d3"),require(void 0),require("d3chart"),require("c3")):e.AsmeAdapter=t(e.React,e.d3,e[void 0],e.d3chart,e.c3)}(this,function(e,t,a,i,o){return webpackJsonpAsmeAdapter([0,2],[function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return e=e.replace(/\s+/g,""),e=e.replace(/_+/g,""),e=e.toLowerCase()}function n(){var e=location.hash.replace("#/",""),t=b.filter(function(t){return s(t.title)===s(e)}),a=0===t.length?b[0]:t[0],n=function(e){function t(e){i(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.handleRouteChange=this.handleRouteChange.bind(this),this.state={selectedPage:a}}return o(t,e),r(t,[{key:"handleRouteChange",value:function(){var e=location.hash.replace("#/",""),t=b.filter(function(t){return s(t.title)===s(e)});t.length>0&&this.setState({selectedPage:t[0]})}},{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.handleRouteChange,!1)}},{key:"render",value:function(){var e=this,t=this.state.selectedPage;return l.createElement("div",null,l.createElement(h,null),l.createElement(p,null,l.createElement(u,null,l.createElement(f,null," ",b.map(function(t,a){return l.createElement(v,{key:a,current:t===e.state.selectedPage,title:t.title})})," ")," ")," ",l.createElement(t,null)," ")," ")}}]),t}(l.Component);l.render(l.createElement(n,null),document.getElementById("chart-goes-here"))}var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),c=function(e,t,a){for(var i=!0;i;){var o=e,s=t,n=a;r=l=c=void 0,i=!1,null===o&&(o=Function.prototype);var r=Object.getOwnPropertyDescriptor(o,s);if(void 0!==r){if("value"in r)return r.value;var c=r.get;return void 0===c?void 0:c.call(n)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=s,a=n,i=!0}},l=a(1),d=a(2);d.time.format("%Y-%m-%d").parse;a(3),a(7);var h=a(10),u=a(11),p=a(12),f=a(14),v=a(15),b=[a(16),a(20),a(36)];d.csv("data/testCereal.csv",function(e,t){return e.index=t,e},function(e,t){console.log("rows: ",t),AdapterAPI.peer.requestDataSource("cereal",adapter.session.DataSource).data.setSessionState(t),n(),WeaveAPI.log=new weavecore.SessionStateLog(WeaveAPI.globalHashMap)})},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t,a){var i=a(4);"string"==typeof i&&(i=[[e.id,i,""]]);a(6)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,a){t=e.exports=a(5)(),t.push([e.id,"body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px}.point{fill:#999;stroke:#fff}.point.selected{fill:red;fill-opacity:1}.node{fill:none;stroke:none}.brush .extent,.node{shape-rendering:crispEdges}.brush .extent{stroke:#fff;fill-opacity:.125}.selected{fill:#afa2dc;stroke:#2f225d}.axis{font:10px sans-serif}p{font:9pt sans-serif;margin:0 0 2px;padding:0}.axis line,.axis path{fill:none;stroke:#000;shape-rendering:crispEdges}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<t.length;o++){var n=t[o];"number"==typeof n[0]&&i[n[0]]||(a&&!n[2]?n[2]=a:a&&(n[2]="("+n[2]+") and ("+a+")"),e.push(n))}},e}},function(e,t,a){function i(e,t){for(var a=0;a<e.length;a++){var i=e[a],o=h[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(r(i.parts[s],t))}else{for(var n=[],s=0;s<i.parts.length;s++)n.push(r(i.parts[s],t));h[i.id]={id:i.id,refs:1,parts:n}}}}function o(e){for(var t=[],a={},i=0;i<e.length;i++){var o=e[i],s=o[0],n=o[1],r=o[2],c=o[3],l={css:n,media:r,sourceMap:c};a[s]?a[s].parts.push(l):t.push(a[s]={id:s,parts:[l]})}return t}function s(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function n(){var e=document.createElement("link"),t=f();return e.rel="stylesheet",t.appendChild(e),e}function r(e,t){var a,i,o;if(t.singleton){var r=b++;a=v||(v=s()),i=c.bind(null,a,r,!1),o=c.bind(null,a,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=n(),i=d.bind(null,a),o=function(){a.parentNode.removeChild(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(),i=l.bind(null,a),o=function(){a.parentNode.removeChild(a)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function c(e,t,a,i){var o=a?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var s=document.createTextNode(o),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(s,n[t]):e.appendChild(s)}}function l(e,t){var a=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function d(e,t){var a=t.css,i=(t.media,t.sourceMap);i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var h={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0;e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var a=o(e);return i(a,t),function(e){for(var s=[],n=0;n<a.length;n++){var r=a[n],c=h[r.id];c.refs--,s.push(c)}if(e){var l=o(e);i(l,t)}for(var n=0;n<s.length;n++){var c=s[n];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete h[c.id]}}}};var y=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){var i=a(8);"string"==typeof i&&(i=[[e.id,i,""]]);a(6)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,a){t=e.exports=a(5)(),t.push([e.id,"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */aside table{border:1;border-spacing:1px;border-collapse:collapse;max-width:100%;margin-bottom:20px}aside table tbody>tr>td,aside table tbody>tr>th,aside table tfoot>tr>td,aside table tfoot>tr>th,aside table thead>tr>td,aside table thead>tr>th{padding:8px;line-height:1.42857;vertical-align:top;border-top:1px solid #ddd}a.button{background:transparent url("+a(9)+") 0 0 no-repeat;width:203px;height:5pc;padding-left:60px;color:#fff!important}a.button small{display:inline;font-size:13px;margin-top:15px}.jumbotron{background:#000;padding:0;color:#fff}.jumbotron a{color:#ff0}.top-spacing{padding-top:10px}.navbar{background-color:#000}.navbar a{color:#fff}.navbar-fixed-top{border:0}.sidebar{display:none}@media (min-width:768px){.sidebar{position:fixed;top:51px;bottom:0;left:0;z-index:1000;display:block;padding:20px;overflow-x:hidden;overflow-y:auto;background-color:#f5f5f5;border-right:1px solid #eee}}.nav-sidebar{margin-right:-21px;margin-bottom:20px;margin-left:-20px}.nav-sidebar>li>a{padding-right:20px;padding-left:20px}.nav-sidebar>.active a,.nav-sidebar>.active a:focus,.nav-sidebar>.active a:hover{color:#fff;background-color:#000}.main{padding:20px}@media (min-width:768px){.main{padding-right:40px;padding-left:40px}}.main .page-header{margin-top:0}",""])},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"Nav",render:function(){return i.createElement("nav",{className:"navbar navbar-fixed-top"},i.createElement("div",{className:"container-fluid"},i.createElement("div",{className:"navbar-header"},i.createElement("a",{className:"navbar-brand",href:"index.html"},"As~Me Adapter"))))}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"SideBar",render:function(){return i.createElement("div",{className:"col-sm-3 col-md-2 sidebar"},this.props.children)}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=a(13),s=i.createClass({displayName:"MainContainer",render:function(){return i.createElement("div",{className:"container-fluid",id:"MainContainer"},i.createElement(o,null,this.props.children))}});e.exports=s},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"Row",propTypes:{title:i.PropTypes.string,anchor:i.PropTypes.string},render:function(){var e=this.props.anchor||this.props.title,t=this.props.title?i.createElement("h4",null,i.createElement("a",{id:e,href:"#"+e},this.props.title)):null;return i.createElement("div",{className:"row"},t,this.props.children)}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"MenuGroup",render:function(){return i.createElement("ul",{className:"nav nav-sidebar"},this.props.children)}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"MenuItem",propTypes:{current:i.PropTypes.bool.isRequired,title:i.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!1}},render:function(){var e=this.props.current?"active":"";return i.createElement("li",{className:e},i.createElement("a",{href:"#/"+this.props.title},this.props.title))}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=a(17),s=a(13),n=a(18),r=i.createClass({displayName:"GettingStartedPage",statics:{title:"Getting Started"},render:function(){return i.createElement(o,{title:r.title},i.createElement(s,null,i.createElement(n,{colSpan:2},i.createElement("aside",{dangerouslySetInnerHTML:{__html:a(19)}}))))}});e.exports=r},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"ContentSection",propTypes:{title:i.PropTypes.string.isRequired},render:function(){return i.createElement("div",{id:"ContentSection",className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},i.createElement("h1",{className:"page-header"},this.props.title),this.props.children)}});e.exports=o},function(e,t,a){"use strict";var i=a(1),o=i.createClass({displayName:"Section",propTypes:{colSpan:i.PropTypes.number.isRequired,title:i.PropTypes.string},getDefaultProps:function(){return{colSpan:1}},render:function(){var e=this.props.className+" col-md-"+6*this.props.colSpan,t=this.props.title?i.createElement("h4",null,this.props.title):null;return i.createElement("div",{className:e},t,this.props.children)}});e.exports=o},function(e,t){e.exports='<h3>Installation</h3><pre><code class=language-sh>npm install https://github.com/as-me/Adapter.git --save\n</code></pre><p>edit the <code>index.html</code> to use the below</p><pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>script</span> <span class=hljs-attribute>type</span>=<span class=hljs-value>"text/javascript"</span> <span class=hljs-attribute>src</span>=<span class=hljs-value>"node_modules/asme-adapter/build/dist/asme-adapter.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-title>script</span>&gt;</span>\n</code></pre><p>instead of</p><pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>script</span> <span class=hljs-attribute>type</span>=<span class=hljs-value>"text/javascript"</span> <span class=hljs-attribute>src</span>=<span class=hljs-value>"//asme.github.io/Adapter/dist/asme-adapter.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-title>script</span>&gt;</span>\n</code></pre><p>You should be good to go</p>'},function(e,t,a){"use strict";var i=a(1);a(21);var o=a(17),s=a(13),n=a(18),r=a(22),c=i.createClass({displayName:"ScatterPlotPage",statics:{title:"ScatterPlot Chart"},render:function(){var e=i.createElement(r,null);return console.log(e),i.createElement(o,{title:c.title},i.createElement(s,null,i.createElement(n,{colSpan:2,className:"react-stockchart"},e)))}});e.exports=c},function(e,t){e.exports=a},function(e,t,a){"use strict";var i=a(1);a(23);a(21);var o=adapter.libs.d3.ScatterPlot,s=adapter.libs.c3.ScatterPlot,n=i.createClass({displayName:"ScatterPlotChart",getInitialState:function(){return{top:5,bottom:100,right:20,left:70}},render:function(){var e=AdapterAPI.peer.requestHook("ScatterPlotTool",o,!1);e.createUI({top:this.state.top,bottom:this.state.bottom,right:this.state.right,left:this.state.left},{},{onProbe:{showToolTip:!0,callback:function(e){AdapterAPI.peer.activeHook=this,AdapterAPI.peer.doProbe(e)}},onSelect:{callback:function(e){AdapterAPI.peer.activeHook=this,AdapterAPI.peer.doSelection(e)}}}),e.sessionData.xAxis.value="fat",e.sessionData.yAxis.value="index";var t=AdapterAPI.peer.requestHook("ScatterPlotTool2",s,!1);return t.createUI({top:this.state.top,bottom:this.state.bottom,right:this.state.right,left:this.state.left},{},{onProbe:{showToolTip:!0,callback:function(e){AdapterAPI.peer.activeHook=this,AdapterAPI.peer.doProbe(e)}},onSelect:{callback:function(e){AdapterAPI.peer.activeHook=this,AdapterAPI.peer.doSelection(e)}}}),t.sessionData.xAxis.value="fat",t.sessionData.yAxis.value="index",i.createElement("div",{className:"App"},i.createElement("h4",null,"D3 Scatterplot (Interaction API - Probing  Selection, UI Action - MouseOver and Brushing )"),i.createElement("div",null,e.ui),i.createElement("h4",null,"C3 Scatterplot (Interaction API - Selection(key),Selection(keys), UI Action - MouseOver  and Drag-Selection)"),i.createElement("div",null,t.ui))}});e.exports=n},function(e,t,a){"use strict";t.AdapterInterface=a(24),t.hook={},t.hook.C3Hook=a(25),t.hook.D3Hook=a(26),t.peer={},t.peer.WeaveJSPeer=a(27),t.components={},t.components.D3={},t.components.D3.ScatterPlotTool=a(29),t.components.C3={},t.components.C3.ScatterPlotTool=a(33),"undefined"==typeof window?(void 0).AdapterAPI=(void 0).AdapterAPI||{}:window.AdapterAPI=window.AdapterAPI||{},AdapterAPI.peer=new adapter.peer.WeaveJSInterface},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},function(){function e(){}var t=e.prototype;t.doSelection=function(e){console.log("this hook doesnt have Selection API")},t.doProbe=function(e){console.log("this hook doesnt have Probe API")},adapter.Interface=e}()},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter.hook=(void 0).adapter.hook||{}:window.adapter.hook=window.adapter.hook||{},function(){function e(e){adapter.Interface.call(this),e&&(this._chart=e),Object.defineProperty(this,"chart",{get:function(){return this._chart},set:function(e){this._chart=e}})}e.prototype=new adapter.Interface,e.prototype.constructor=e;var t=e.prototype;t.doProbe=function(e){if(!this.chart)return void console.error("Hook a C3 chart First");var t=Number(this.chart.keyColumnToYIndex[e]);this.chart.select(["y"],[t],!0)},t.doSelection=function(e){if(!this.chart)return void console.error("Hook a c3 chart First");if(void 0!==e?e.constructor!==Array&&console.log("Keys has to be an array "):console.log("keys(Array)  is required"),e.length>0){var t=e.map(function(e){return Number(this.chart.keyColumnToYIndex[e])}.bind(this));this.chart.select(["y"],t,!0)}else this.chart.unselect()},adapter.hook.C3Interface=e}()},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter.hook=(void 0).adapter.hook||{}:window.adapter.hook=window.adapter.hook||{},function(){function e(e){adapter.Interface.call(this),e&&(this._chart=e),Object.defineProperty(this,"chart",{get:function(){return this._chart},set:function(e){this._chart=e}}),this.dataSource}e.prototype=new adapter.Interface,e.prototype.constructor=e;var t=e.prototype;t.doSelection=function(e){return this.chart?void this.chart.select(e):(console.log(this),void console.log("Hook a d3 chart First"))},t.doProbe=function(e){return this.chart?void this.chart.probe(e):(console.log(this),void console.log("Hook a d3 chart First"))},t.setData=function(e,t){return this.chart?(this.dataSource=e,void this.chart.renderChart(t)):void console.log("Hook a d3 chart First")},adapter.hook.D3Interface=e}()},function(e,t,a){"use strict";a(28),a(21),"undefined"==typeof window?(void 0).adapter.peer=(void 0).adapter.peer||{}:window.adapter.peer=window.adapter.peer||{},function(){function e(){adapter.Interface.call(this),this.activeHook=null,Object.defineProperty(this,"probeKeys",{value:WeaveAPI.globalHashMap.requestObject("probeKeys",weavecore.LinkableVariable,!1)}),Object.defineProperty(this,"selectionKeys",{value:WeaveAPI.globalHashMap.requestObject("selectionKeys",weavecore.LinkableVariable,!1)}),Object.defineProperty(this,"hooks",{value:WeaveAPI.globalHashMap.requestObject("hooks",weavecore.LinkableHashMap,!1)}),Object.defineProperty(this,"dataSources",{value:WeaveAPI.globalHashMap.requestObject("dataSources",weavecore.LinkableHashMap,!1)}),this.selectionKeys.setSessionState([]),this.probeKeys.setSessionState(null),this.selectionKeys.addImmediateCallback(this,t.bind(this)),this.probeKeys.addImmediateCallback(this,a.bind(this)),this.hooks.childListCallbacks.addImmediateCallback(this,i.bind(this))}function t(){var e=this.selectionKeys.getSessionState(),t=this.hooks.getObjects();t.forEach(function(t,a){t.hook.chart!=this.activeHook&&t.hook.doSelection(e)}.bind(this)),this.activeHook=null}function a(){var e=this.probeKeys.getSessionState(),t=this.hooks.getObjects();t.forEach(function(t,a){t.hook.chart!=this.activeHook&&t.hook.doProbe(e)}.bind(this)),this.activeHook=null}function i(){if(this.hooks.childListCallbacks.lastObjectAdded){var e=this.hooks.childListCallbacks.lastObjectAdded;e.sessionData.dataSourceWatcher.targetPath=WeaveAPI.SessionManager.getPath(WeaveAPI.globalHashMap,this.dataSources.getObject(this.dataSources.getNames()[0]))}if(this.hooks.childListCallbacks.lastObjectRemoved){var t=this.hooks.childListCallbacks.lastObjectRemoved;t.sessionData.dataSourceWatcher.dispose()}}e.prototype=new adapter.Interface,e.prototype.constructor=e;var o=e.prototype;o.doSelection=function(e){e=e.length>0?e:[],this.selectionKeys.setSessionState(e)},o.doProbe=function(e){e=void 0!==e?e:null,this.probeKeys.setSessionState(e)},o.requestHook=function(e,t){return this.hooks.requestObject(e,t,!1)},o.removeHook=function(e){return this.hooks.removeObject(e)},o.requestDataSource=function(e,t){return this.dataSources.requestObject(e,t,!1)},o.removeDataSource=function(e){return this.dataSources.removeObject(e)},adapter.peer.WeaveJSInterface=e}()},function(e,t,a){"use strict";a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.session=(void 0).adapter.session||{}:window.adapter.session=window.adapter.session||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"IDataSource",{value:!0}),Object.defineProperty(this,"data",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableVariable([]),t.bind(this))}),this.columns=[]}function t(){var e=this.data.getSessionState();if(e.length){var t=e[0];for(var a in t)this.columns.push(a)}}Object.defineProperty(e,"NS",{value:"adapter.session"}),Object.defineProperty(e,"CLASS_NAME",{value:"DataSource"});e.prototype;adapter.session.DataSource=e}()},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=a(1),s=i(o),n=a(30),r=i(n);a(32),a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.libs=(void 0).adapter.libs||{}:window.adapter.libs=window.adapter.libs||{},"undefined"==typeof window?(void 0).adapter.libs.d3=(void 0).adapter.libs.d3||{}:window.adapter.libs.d3=window.adapter.libs.d3||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"library",{value:"d3"}),Object.defineProperty(this,"sessionData",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new adapter.session.ScatterPlot)}),Object.defineProperty(this,"hook",{value:new adapter.hook.D3Interface})}Object.defineProperty(e,"NS",{value:"adapter.libs.d3"}),Object.defineProperty(e,"CLASS_NAME",{value:"ScatterPlot"});var t=e.prototype;t.createUI=function(e,t,a){this.ui||Object.defineProperty(this,"ui",{value:s["default"].createElement(r["default"],{sessionData:this.sessionData,padding:{top:e.top,bottom:e.bottom,left:e.left,right:e.right},size:{width:t.width,height:t.height},onProbe:a.onProbe,onSelect:a.onSelect,hook:this.hook})})},adapter.libs.d3.ScatterPlot=e}()},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),r=function(e,t,a){for(var i=!0;i;){var o=e,s=t,n=a;r=l=c=void 0,i=!1,null===o&&(o=Function.prototype);var r=Object.getOwnPropertyDescriptor(o,s);if(void 0!==r){if("value"in r)return r.value;var c=r.get;return void 0===c?void 0:c.call(n)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=s,a=n,i=!0}};a(31);var c=a(1),l=i(c),d=function(e){function t(e){o(this,t),r(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.sessionData=e.sessionData,this.hook=e.hook,this.state=this.sessionData.getSessionStateValue(),this.initialize=this.initialize.bind(this),this._setXAxis=this._setXAxis.bind(this),this._setYAxis=this._setYAxis.bind(this),this._setData=this._setData.bind(this),this.isXAxisChanged=!1,this.isYAxisChanged=!1,this.isDataChanged=!1}return s(t,e),n(t,[{key:"initialize",value:function(){var e=this.sessionData.dataSourceWatcher.target;if(e){var t={container:l["default"].findDOMNode(this),margin:this.props.padding?this.props.padding:{},size:this.props.size?this.props.size:{},interactions:{onProbe:this.props.onProbe,onSelect:this.props.onSelect}};this.hook.chart=new d3Chart.Scatterplot,this.hook.chart.create(t)}else console.warn("No data")}},{key:"componentDidMount",value:function(){this.initialize(),WeaveAPI.SessionManager.getCallbackCollection(this.sessionData.dataSourceWatcher).addGroupedCallback(this,this._setData,!0),this.sessionData.xAxis.addImmediateCallback(this,this._setXAxis),this.sessionData.yAxis.addImmediateCallback(this,this._setYAxis)}},{key:"_setXAxis",value:function(){this.isXAxisChanged=!0,this.setState(this.sessionData.getXAxisState())}},{key:"_setYAxis",value:function(){this.isYAxisChanged=!0,this.setState(this.sessionData.getYAxisState())}},{key:"_setData",value:function(){this.isDataChanged=!0,this.hook.chart||this.initialize(),this.setState(this.sessionData.getDataSourceState())}},{key:"componentDidUpdate",value:function(e,t){if(this.hook.chart&&(this.isXAxisChanged&&(this.hook.chart.setXAttribute(this.state.xAxis),this.isXAxisChanged=!1),this.isYAxisChanged&&(this.hook.chart.setYAttribute(this.state.yAxis),this.isYAxisChanged=!1),this.isDataChanged)){var a=this.sessionData.dataSourceWatcher.target.data.getSessionState(),i={columns:{x:this.state.xAxis,y:this.state.yAxis},records:a};this.hook.chart.renderChart(i),this.isDataChanged=!1}}},{key:"componentWillUnmount",value:function(){this.sessionData.xAxis.removeCallback(this._setXAxis),this.sessionData.yAxis.removeCallback(this._setYAxis),this.sessionData.dataSourceWatcher.dispose()}},{key:"render",value:function(){var e=this.sessionData.dataSourceWatcher.target;return e?l["default"].createElement("div",{className:"Chart"}," "):l["default"].createElement("div",{className:"Chart"}," ",l["default"].createElement("h2",null," ",this.sessionData.dataSourceName,"dont have data ")," ")}}]),t}(l["default"].Component);e.exports=d},function(e,t){e.exports=i},function(e,t,a){"use strict";a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.session=(void 0).adapter.session||{}:window.adapter.session=window.adapter.session||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"xAxis",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableString(""))}),Object.defineProperty(this,"yAxis",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableString(""))}),Object.defineProperty(this,"keyColumn",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableString(""))}),Object.defineProperty(this,"_dataSourceWatcher",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableWatcher)}),Object.defineProperty(this,"dataSourceWatcher",{get:function(){return this._dataSourceWatcher}})}Object.defineProperty(e,"NS",{value:"adapter.session"}),Object.defineProperty(e,"CLASS_NAME",{value:"ScatterPlot"});var t=e.prototype;t.getSessionStateValue=function(){return{xAxis:this.xAxis.value,yAxis:this.yAxis.value}},t.getColumnProperties=function(){return["xAxis","yAxis"]},t.getXAxisState=function(){return{xAxis:this.xAxis.value}},t.getYAxisState=function(){return{yAxis:this.yAxis.value}},t.getDataSourceState=function(){return{dataSource:this._dataSourceWatcher.target}},adapter.session.ScatterPlot=e}()},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=a(1),s=i(o),n=a(34),r=i(n);a(32),a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.libs=(void 0).adapter.libs||{}:window.adapter.libs=window.adapter.libs||{},"undefined"==typeof window?(void 0).adapter.libs.c3=(void 0).adapter.libs.c3||{}:window.adapter.libs.c3=window.adapter.libs.c3||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"ns",{value:"adapter.libs.c3"}),Object.defineProperty(this,"library",{value:"c3"}),Object.defineProperty(this,"sessionData",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new adapter.session.ScatterPlot)}),Object.defineProperty(this,"hook",{value:new adapter.hook.C3Interface})}Object.defineProperty(e,"NS",{value:"adapter.libs.c3"}),Object.defineProperty(e,"CLASS_NAME",{value:"ScatterPlot"});var t=e.prototype;t.createUI=function(e,t,a){this.ui||Object.defineProperty(this,"ui",{value:s["default"].createElement(r["default"],{sessionData:this.sessionData,padding:{top:e.top,bottom:e.bottom,left:e.left,right:e.right},size:{width:t.width,height:t.height},height:t.height,onProbe:a.onProbe,onSelect:a.onSelect,hook:this.hook})})},adapter.libs.c3.ScatterPlot=e}()},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),r=function(e,t,a){for(var i=!0;i;){var o=e,s=t,n=a;r=l=c=void 0,i=!1,null===o&&(o=Function.prototype);var r=Object.getOwnPropertyDescriptor(o,s);if(void 0!==r){if("value"in r)return r.value;var c=r.get;return void 0===c?void 0:c.call(n)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=s,a=n,i=!0}},c=a(35),l=i(c),d=a(1),h=i(d),u=function(e){function t(e){o(this,t),r(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.sessionData=e.sessionData,this.hook=e.hook,this.state=this.sessionData.getSessionStateValue(),this.initialize=this.initialize.bind(this),this._setXAxis=this._setXAxis.bind(this),this._setYAxis=this._setYAxis.bind(this),this._setData=this._setData.bind(this),this.isXAxisChanged=!1,this.isYAxisChanged=!1,this.isDataChanged=!1,this.getColumns=this.getColumns.bind(this)}return s(t,e),n(t,[{key:"initialize",value:function(){var e=this,t=this.sessionData.dataSourceWatcher.target;if(t){var a={bindto:h["default"].findDOMNode(this),padding:this.props.padding?this.props.padding:{},size:this.props.size?this.props.size:{},data:{x:"x",y:"y",columns:[],type:"scatter",selection:{enabled:!0,multiple:!0,draggable:!0},onselected:function(){var t=this.selected();if(console.log("From c3 Selection selectedPoints Key",t),
t.constructor===Array){var a=t.map(function(t){return e.hook.chart.yIndexToKeyColumn[t.index]});console.log("From c3 Selection Multiple Key",a),e.props.onSelect.callback.call(this,a)}else console.log("From c3 Selection Single Key",e.hook.chart.yIndexToKeyColumn[t.index]),e.props.onSelect.callback.call(this,e.hook.chart.yIndexToKeyColumn[t.index])},onmouseover:function(t){console.log("From c3 Probe Key",e.hook.chart.yIndexToKeyColumn[t.index]),e.props.onProbe.callback.call(this,e.hook.chart.yIndexToKeyColumn[t.index])}},axis:{x:{label:this.state.xAxis,tick:{fit:!1}},y:{label:this.state.yAxis}},onmouseout:function(){WeaveAPI.globalHashMap.getObject("selectionKeys").setSessionState([])},legend:{show:!1}};this.hook.chart=l["default"].generate(a)}else console.warn("No Data Found")}},{key:"componentDidMount",value:function(){this.initialize(),WeaveAPI.SessionManager.getCallbackCollection(this.sessionData.dataSourceWatcher).addGroupedCallback(this,this._setData,!0),this.sessionData.xAxis.addImmediateCallback(this,this._setXAxis),this.sessionData.yAxis.addImmediateCallback(this,this._setYAxis)}},{key:"_setXAxis",value:function(){this.isXAxisChanged=!0,this.setState(this.sessionData.getXAxisState())}},{key:"_setYAxis",value:function(){this.isYAxisChanged=!0,this.setState(this.sessionData.getYAxisState())}},{key:"_setData",value:function(){this.isDataChanged=!0,this.hook.chart||this.initialize(),this.setState(this.sessionData.getDataSourceState())}},{key:"getColumns",value:function(e,t){this.hook.chart.keyColumnToYIndex={},this.hook.chart.yIndexToKeyColumn={};var a=this.sessionData.dataSourceWatcher.target.data.getSessionState(),i=!1;a[0].hasOwnProperty("index")||(console.warn("Its a good practise to set key column. failing to do so, will create a index as key column"),i=!0);var o=[[],[]],s=this.sessionData.keyColumn.value=this.sessionData.keyColumn.value?this.sessionData.keyColumn.value:"index";return console.log("Key Column:",s),o[0].push("x"),o[1].push("y"),a.forEach(function(a,n){o[0].push(a[e]),o[1].push(a[t]),i&&(a.index=n),this.hook.chart.keyColumnToYIndex[a[s]]=n,this.hook.chart.yIndexToKeyColumn[n]=a[s]}.bind(this)),console.log(o),o}},{key:"componentDidUpdate",value:function(e,t){if(this.hook.chart&&(this.isXAxisChanged||this.isYAxisChanged||this.isDataChanged)){this.hook.chart.axis.labels({x:this.state.xAxis,y:this.state.yAxis});var a=(this.sessionData.dataSourceWatcher.target.data.getSessionState(),this.getColumns(this.state.xAxis,this.state.yAxis));this.hook.chart.load({columns:a}),this.isXAxisChanged=!1,this.isYAxisChanged=!1,this.isDataChanged=!1}}},{key:"componentWillUnmount",value:function(){this.sessionData.xAxis.removeCallback(this._setXAxis),this.sessionData.yAxis.removeCallback(this._setYAxis),this.sessionData.dataSourceWatcher.dispose()}},{key:"render",value:function(){var e=this.sessionData.dataSourceWatcher.target;return e?h["default"].createElement("div",{className:"Chart"}," "):h["default"].createElement("div",{className:"Chart"}," ",h["default"].createElement("h2",null," No Data ")," ")}}]),t}(h["default"].Component);e.exports=u},function(e,t){e.exports=o},function(e,t,a){"use strict";var i=a(1),o=a(17),s=a(13),n=a(18),r=i.createClass({displayName:"ComingSoonPage",statics:{title:"Coming soon..."},render:function(){return i.createElement(o,{title:r.title},i.createElement(s,null,i.createElement(n,{colSpan:2},i.createElement("aside",{dangerouslySetInnerHTML:{__html:a(37)}}))))}});e.exports=r},function(e,t){e.exports="<h4>C3</h4><ul><li>ScatterPlot</li><li>BarChart</li></ul><h4>D3Chart</h4><ul><li><del>Scatterplot</del></li><li>Barchart</li></ul><h4>Other Libraries</h4><ul><li>NVD3</li><li>HighChart</li></ul>"}])});
//# sourceMappingURL=asme-adapter-documentation.js.map
