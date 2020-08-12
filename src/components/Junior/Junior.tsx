import React, {useState} from "react";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Select} from "../common/Select/Select";
import {Radio} from "../common/Radio/Radio";


export function Junior() {

    let [valueSpan, setValueSpan] = useState('Default value')
    let [valueSelect, setValueSelect] = useState('one')
    let [valueRadio, setValueRadio] = useState('one')

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

    const onChangeHandler = (value: string) => {
        setValueSelect(value)
    }
    const onChangeRadioHandler = (value: string) => {
        setValueRadio(value)
    }
    return (
        <div><h1>Junior Page</h1>
            <div><h3>Editable component</h3></div>
            <EditableSpan value={valueSpan} onChange={onChangeEditableHandler}/>
            <div>
                <button onClick={saveToLocalStorage}>Save to Local Storage</button>
                <button onClick={restoreFromLocalStorage}>Restore from Local Storage</button>
            </div>
            <div>
                <div>
                    <h3>Select component</h3>
                </div>
                <div>
                    <Select arr={['one', 'two', 'three']} onChange={onChangeHandler} value={valueSelect}/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Radio component</h3>
                </div>
                <div>
                    <Radio
                        arr={['one', 'two', 'three']}
                        onChange={onChangeRadioHandler}
                        value={valueRadio}
                        name={'test'}/>
                </div>
            </div>
        </div>
    )
}