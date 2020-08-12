import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {PreJunior} from "./components/PreJunior/PreJunior";
import {Header} from "./components/Header/Header";
import {Junior} from "./components/Junior/Junior";
import {JuniorPlus} from "./components/JuniorPlus/JuniorPlus";


function App() {

    return (
        <div className="App">

            <HashRouter>
                <Header/>
                <Route path={'/preJunior'} component={PreJunior}/>
                <Route path={'/Junior'} component={Junior}/>
                <Route path={'/JuniorPlus'} component={JuniorPlus}/>
            </HashRouter>
        </div>

    );
}


export default App;
