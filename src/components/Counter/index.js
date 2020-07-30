import React, {Component} from 'react'; // when we use {} it means that it's not a default export, read up on export default
// class component


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (

            <div>
                {this.state.count}
                <button onClick={this.handleIncrement}>
                    Counter increment
                </button>
            </div>
        )
    }
}
