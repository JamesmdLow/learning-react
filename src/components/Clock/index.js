import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toDateString()}.</h2>
            </div>
        );
    }
}