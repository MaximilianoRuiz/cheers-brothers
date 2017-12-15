import React, { Component } from 'react';

// Assets

class Info extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleCountClick = this.handleCountClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleCountClick(e){
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('render');
        return (
            <div className="Info">
                <h1>{this.state.count}</h1>
                <button id="result" onClick={this.handleCountClick}>+</button>
            </div>
        );
    }
}


export default Info;