import React, {useCallback} from "react";
import {Radio} from "../common/Radio/Radio";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {changeTheme, themeStateType} from "../../redux/theme-reducer";
import classes from "./JuniorPlus.module.css"

export function JuniorPlus() {
    const theme = useSelector<AppRootStateType, themeStateType>(state => state.theme)
    const dispatch = useDispatch()

    const changeThemeHandler = useCallback((value: string) => {
        dispatch(changeTheme(value))
    }, [dispatch])
    return (
        <div className={ theme.theme === "light" ? classes.light: classes.dark }>
            <h1>Junior+ Page</h1>
            <div><span>Change theme: </span><Radio value={theme.theme} name={'theme'} onChange={changeThemeHandler} arr={['light', 'dark']}/></div>
        </div>
    )
}