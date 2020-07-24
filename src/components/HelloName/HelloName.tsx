import React, {ChangeEvent, useState} from "react";
import {Button} from "../common/Button/Button";

type PropsType = {
    addUser: (newUser: string) => void
    getCountUsers: () => number
}


export const HelloName = (props: PropsType) => {

    let [inputName, SetInputName] = useState('')

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        SetInputName(e.currentTarget.value)
    }

    const addClickHandler = (inputName: string) => {
        if (inputName) {
            props.addUser(inputName)
            SetInputName('')
            alert(`Hello ${inputName}`)
        }

    }

    return (
        <div>
            <input type="text" value={inputName} onChange={onChangeInputName}/>
            <Button name={'Hello'} callBackHandler={() => addClickHandler(inputName)} class={"standard-btn"}/>
            <div><span> Количество пользователей:
                { props.getCountUsers() }
            </span></div>
        </div>
    )
}