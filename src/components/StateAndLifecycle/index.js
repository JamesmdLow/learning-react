import React from 'react';

export class TickingClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
