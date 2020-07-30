import React, {Component} from 'react';

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        if (this.props.signedIn) {
            return (
                <div>
                    <div>Welcome home {this.props.username}</div>
                    <div>Count is {this.state.count}</div>
                </div>
            )
        }
        return (
            <div>You need to login!</div>
        )
    }
}