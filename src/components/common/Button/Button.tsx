import React from "react";
import classes from './Button.module.css'

type PropsType = {
    name: string
    class: 'standard-btn' | 'green-btn' | 'red-btn'
    callBackHandler?: () => void
}

export function Button(props: PropsType) {
    return (
            <button className={classes[props.class]} onClick={props.callBackHandler}>{props.name}</button>
    )
}