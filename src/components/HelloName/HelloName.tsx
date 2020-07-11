import React, {ChangeEvent, useState} from "react";

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
            <button onClick={() => addClickHandler(inputName)}>Hello</button>
            <div><span> Количество пользователей:
                { props.getCountUsers() }
            </span></div>
        </div>
    )
}