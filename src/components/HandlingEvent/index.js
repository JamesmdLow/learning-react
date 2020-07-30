import React from 'react';

export class HandlingEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'james',
            input: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    handleClick = () => {
        this.setState({
            name: this.state.input
        })
    }

   render() {
        return (
            <div>
                <input type={'text'} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click me</button>
                {/*<a href="#" onClick={this.handleClick}>*/}
                {/*    Click me*/}
                {/*</a>*/}
                {/*<h1 onClick={this.handleClick}>James</h1>*/}
            </div>
        )
   }
}