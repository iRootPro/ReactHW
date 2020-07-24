import React from "react";

type PropsType = {
    checked: boolean
    class: 'big-checkbox' | 'middle-checkbox' | 'small-checkbox'
}

export function CheckBox(props: PropsType) {
    return (
        <div>
            <input type="checkbox" className={props.class} checked={props.checked}/>
        </div>

    )
}