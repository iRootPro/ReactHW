import React from "react";
import classes from './CheckBox.module.css'


type PropsType = {
    checked: boolean
    class: 'big-checkbox' | 'middle-checkbox' | 'small-checkbox'
    onChange: (check: boolean) => void
}



export const CheckBox = React.memo((props: PropsType) => {
    return (
        <div>
            <input type="checkbox"
                   className={classes[props.class]}
                   checked={props.checked}
                   onChange={e => props.onChange(e.currentTarget.checked)}
            />
        </div>
    )
})