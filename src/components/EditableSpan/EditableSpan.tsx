import React, {ChangeEvent, useState} from "react";
import {Input} from "../common/Input/Input";

type PropsType = {
    value: string
    onChange: (value: string) => void
}

export function EditableSpan(props: PropsType) {

    let [editMode, setEditMode] = useState<boolean>(false)

    const dblClickSpanHandler = () => {
        setEditMode(true)
    }

    const onchangeInputHandler = (value: string) => {
        props.onChange(value)
    }

    const onBlurHandler = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode ?
                <Input
                    autoFocus={true}
                    value={props.value}
                    onChange={onchangeInputHandler}
                    class={'standard-input'}
                    onBlur={onBlurHandler}/>
                : <span
                    onDoubleClick={dblClickSpanHandler}>
                    {props.value}
            </span>}
        </div>
    )
}