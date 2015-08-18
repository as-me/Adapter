import React from 'react';

import ScatterPlot from './D3/ScatterPlot.js';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            width: 800,
            height: 400,
            top: 5,
            bottom: 100,
            right: 20,
            left: 70
        };

    }



    render() {
        return <div className = 'App' >
            < ScatterPlot width = {
                this.state.width
            }
        height = {
            this.state.height
        }
        top = {
            this.state.top
        }
        bottom = {
            this.state.bottom
        }
        right = {
            this.state.right
        }
        left = {
            this.state.left
        }
        /> < /div > ;
    }

}
