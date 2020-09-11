import React from "react";
import {Radio} from "../common/Radio/Radio";

export function JuniorPlus() {
    const changeThemeHandler = () => {

    }
    return (
        <div>
            <h1>Junior+ Page</h1>
            <div><span>Change theme: </span><Radio value={'Theme'} name={'theme'} onChange={changeThemeHandler} arr={['light', 'dark']}/></div>
        </div>
    )
}