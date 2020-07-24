import React from "react";
import classes from './Input.module.css'

type PropsType = {
    class: 'green-input' | 'red-input' | 'standard-input'
    label?: string
    message?: string
    error?: string
}

export function Input(props: PropsType) {
    return (
        <div className={props.error ? 'red-input' :props.class}>
            <label>{props.label}</label>
            <input type="text"/>
            <div>{props.message}</div>
        </div>
    )
}
