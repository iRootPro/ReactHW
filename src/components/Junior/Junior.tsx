import React, {useState} from "react";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export function Junior() {

    let [valueSpan, setValueSpan] = useState('Default value')

    const onChangeEditableHandler = (value: string) => {
        setValueSpan(value)
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('value', valueSpan)
    }

    const restoreFromLocalStorage = () => {
        const valueFromLocalStorage = localStorage.getItem('value')
        if (valueFromLocalStorage) setValueSpan(valueFromLocalStorage)
    }
    return (
        <div><h1>Junior Page</h1>
        <div><h3>Editable component</h3></div>
           <EditableSpan value={valueSpan} onChange={onChangeEditableHandler}/>
           <div>
               <button onClick={saveToLocalStorage}>Save to Local Storage</button>
               <button onClick={restoreFromLocalStorage}>Restore from Local Storage</button>
           </div>
        </div>
    )
}