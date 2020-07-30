import React, {Component} from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterWithProps from "./components/CounterWithProps";
import {ConditionalRendering} from "./components/ConditionalRendering";
import Clock from "./components/Clock";
import {TickingClock} from "./components/StateAndLifecycle";
import {HandlingEvent} from "./components/HandlingEvent";
import ListsAndKeys from "./components/ListsAndKeys";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter/>*/}
                {/*<CounterWithProps count={10}/>*/}
                {/*<ConditionalRendering signedIn={true} username='James'/>*/}
                {/*<Clock/>*/}
                {/*<TickingClock/>*/}
                {/*<HandlingEvent/>*/}
                <ListsAndKeys/>
            </div>
        );
    }
}

export default App;
