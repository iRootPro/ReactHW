import React, {useState} from "react";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Select} from "../common/Select/Select";
import {Radio} from "../common/Radio/Radio";
import {Button} from '../common/Button/Button'
import {hwReducer} from "../../homeWorkReducer";
import {Time} from "../Time/Time"
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {changeStatusLoadingAC, loaderStateType} from "../../redux/preloader-reducer";

export function Junior() {

    let [valueSpan, setValueSpan] = useState('Default value')
    let [valueSelect, setValueSelect] = useState('one')
    let [valueRadio, setValueRadio] = useState('one')
    let [people, setPeople] = useState<Array<{ id: string, name: string, age: number }>> (
        [
            {id: '1', name: 'Alex', age: 18},
            {id: '2', name: 'Sasha', age: 9},
            {id: '3', name: 'Anastasiya', age: 35},
            {id: '4', name: 'Ivan', age: 15},
            {id: '5', name: 'Lena', age: 18},
        ]
    )

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

    const upButtonHandler = () => {
        setPeople(hwReducer(people, {type: 'SORT', payload: 'up'}))
    }
    const downButtonHandler = () => {
        setPeople(hwReducer(people, {type: 'SORT', payload: 'down'}))
    }
    const checkButtonHandler = () => {
        setPeople(hwReducer(people, {type: 'CHECK', payload: '18'}))
    }

    const loading = useSelector<AppRootStateType, loaderStateType>(state => state.loading)
    let dispatch = useDispatch()

    const loadingButtonHandler = () => {
        dispatch(changeStatusLoadingAC(true))
        setTimeout(() => {
            dispatch(changeStatusLoadingAC(false))
        }, 3000)
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
            <div><h3>hwReducer</h3></div>
            <div>
                { people.map(man => <div key={man.id}>id: {man.id}, name: {man.name}, age: {man.age}</div>) }
            </div>
            <div style={{ padding: '10px'}}>
                <Button class={"standard-btn"} name={'UP'} callBackHandler={upButtonHandler}/>
                <Button class={"standard-btn"} name={'DOWN'} callBackHandler={downButtonHandler}/>
                <Button class={"standard-btn"} name={'18'} callBackHandler={checkButtonHandler}/>
            </div>
           <Time/>
            <div>
                <h2>Preloader</h2>
                <div>
                    <div> { loading.loading ? <Preloader/> : null } </div>
                    <button onClick={loadingButtonHandler}>Loading</button>
                </div>
            </div>
        </div>
    )
}