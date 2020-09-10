import React from "react";
import classes from './Input.module.css'

type PropsType = {
    class: 'green-input' | 'red-input' | 'standard-input'
    label?: string
    message?: string
    error?: string
    onChange: (value: string) => void
    value: string
    autoFocus?: boolean
    onBlur?: () => void
}

export const Input = React.memo((props: PropsType) => {
    return (
        <div className={props.error ? classes['red-input'] : classes[props.class]}>
            <label>{props.label}</label>
            <input
                type="text"
                value={props.value}
                onChange={e => props.onChange(e.currentTarget.value)}
                autoFocus={props.autoFocus ? true : false}
                onBlur={props.onBlur}
            />
            <div>{props.message}</div>
        </div>
    )
})
