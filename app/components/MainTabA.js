import React from 'react';

// var Mtb = React.createClass({
export default class Mta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor');
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <div className="component">
                <div>State: {this.state.count}</div>
                <button onClick={this.increment}>Increment State</button>
            </div>
        );
    }
}

