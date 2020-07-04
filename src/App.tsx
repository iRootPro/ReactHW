import React from 'react';
import './App.css';
import {Message} from "./components/Message/Message";
import OnOff from "./components/OnOff/OnOff";
import Task from "./components/Task/Task";

function App() {
    return (
        <div className="App">
            <Message author={'Alex'} message={'Hi, how are you?'} time={'20:00'}/>
            <Message author={'Sasha'} message={'Hi,fine'} time={'20:01'}/>
            <Message author={'Petr'} message={'Hello, friends'} time={'20:02'}/>
            <Task/>
        </div>

    );
}


export default App;
