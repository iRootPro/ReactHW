import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {HashRouter, NavLink, Route} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import {PreJunior} from "./components/PreJunior/PreJunior";
import {Header} from "./components/Header/Header";
import {Junior} from "./components/Junior/Junior";
import {JuniorPlus} from "./components/JuniorPlus/JuniorPlus";


function App() {
    type UserType = {
        id: string
        name: string
    }

    let [users, SetUsers] = useState<Array<UserType>>([
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Petr'}
    ])

    const addUser = (newUser: string) => {
        let user = {
            id: v1(),
            name: newUser
        }
        let newUsers = [user, ...users]
        SetUsers(newUsers)
    }

    const getCountUsers = () => {
        return users.length
    }


    return (
        <div className="App">

            <HashRouter>
                <Header/>
                <Route path={'/preJunior'} component={PreJunior}/>
                <Route path={'/Junior'} component={Junior}/>
                <Route path={'/JuniorPlus'} component={JuniorPlus}/>
            </HashRouter>
            {/*<Message author={'Alex'} message={'Hi, how are you?'} time={'20:00'}/>*/}
            {/*<Message author={'Sasha'} message={'Hi,fine'} time={'20:01'}/>*/}
            {/*<Message author={'Petr'} message={'Hello, friends'} time={'20:02'}/>*/}
            {/*<Task/>*/}
            {/*<div><h2>Add new user</h2></div>*/}
            {/*<HelloName addUser={addUser} getCountUsers={getCountUsers}/>*/}
            {/*<AllCommonComponents/>*/}
        </div>

    );
}


export default App;
