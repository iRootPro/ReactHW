import React from "react";
import {Message} from "../Message/Message";
import Task from "../Task/Task";
import AllCommonComponents from "../AllComminComponents/AllCommonComponnents";

export function PreJunior() {
    return (
        <div>
            <div><h1>preJunior Page</h1></div>
            <Message author={'Alex'} message={'Hi, how are you?'} time={'20:00'}/>
            <Message author={'Sasha'} message={'Hi,fine'} time={'20:01'}/>
            <Message author={'Petr'} message={'Hello, friends'} time={'20:02'}/>
            <Task/>
            <div><h2>Add new user</h2></div>
            <AllCommonComponents/>
        </div>
    )
}