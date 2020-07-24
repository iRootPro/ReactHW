import React, {ChangeEvent} from "react";
import classes from './CheckBox.module.css'


type PropsType = {
    checked: boolean
    class: 'big-checkbox' | 'middle-checkbox' | 'small-checkbox'
    onChange: (check: boolean) => void
}



export function CheckBox(props: PropsType) {
    return (
        <div>
            <input type="checkbox"
                   className={classes[props.class]}
                   checked={props.checked}
                   onChange={e => props.onChange(e.currentTarget.checked)}
            />
        </div>

    )
}