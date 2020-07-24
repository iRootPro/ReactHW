import React from "react";

type PropsType = {
    name: string
    class: 'standard-btn' | 'green-btn' | 'red-btn'
    callBackHandler?: () => void
}

export function Button(props: PropsType) {
    return (
            <button className={props.class} onClick={props.callBackHandler}>{props.name}</button>
    )
}