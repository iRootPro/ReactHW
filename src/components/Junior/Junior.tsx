import React, {useCallback, useState} from "react";
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
import {Range} from "../common/Range/Range"
import {TwoRange} from "../common/2Range/TwoRange";

export function Junior() {

    let [valueSpan, setValueSpan] = useState('Default value')
    let [valueSelect, setValueSelect] = useState('one')
    let [valueRadio, setValueRadio] = useState('one')
    let [people, setPeople] = useState<Array<{ id: string, name: string, age: number }>>(
        [
            {id: '1', name: 'Alex', age: 18},
            {id: '2', name: 'Sasha', age: 9},
            {id: '3', name: 'Anastasiya', age: 35},
            {id: '4', name: 'Ivan', age: 15},
            {id: '5', name: 'Lena', age: 18},
        ]
    )
    let [valueRange, setValueRange] = useState<number>(0)
    let [valueFrom, setValueFrom] = useState<number>(0)
    let [valueBefore, setValueBefore] = useState<number>(0)

    const onChangeEditableHandler = useCallback((value: string) => {
        setValueSpan(value)
    }, [setValueSpan])

    const saveToLocalStorage = () => {
        localStorage.setItem('value', valueSpan)
    }

    const restoreFromLocalStorage = () => {
        const valueFromLocalStorage = localStorage.getItem('value')
        if (valueFromLocalStorage) setValueSpan(valueFromLocalStorage)
    }

    const onChangeHandler = useCallback((value: string) => {
        setValueSelect(value)
    }, [setValueSelect])
    const onChangeRadioHandler = useCallback((value: string) => {
        setValueRadio(value)
    }, [setValueRadio])

    const upButtonHandler = useCallback(() => {
        setPeople(hwReducer(people, {type: 'SORT', payload: 'up'}))
    }, [setPeople, people])

    const downButtonHandler = useCallback(() => {
        setPeople(hwReducer(people, {type: 'SORT', payload: 'down'}))
    }, [setPeople, people])
    const checkButtonHandler = useCallback(() => {
        setPeople(hwReducer(people, {type: 'CHECK', payload: '18'}))
    }, [setPeople, people])

    const onChangeRangeHandler = useCallback((value: number) => {
        setValueRange(value)
    }, [setValueRange])

    const onChangeFromPriceHandler = useCallback((value: number) => {
        setValueFrom(value)
    }, [setValueFrom])

    const onChangeBeforePriceHandler = useCallback((value: number) => {
        setValueBefore(value)
    }, [setValueBefore])

    const loading = useSelector<AppRootStateType, loaderStateType>(state => state.loading)
    let dispatch = useDispatch()

    const loadingButtonHandler = useCallback(() => {
        dispatch(changeStatusLoadingAC(true))
        setTimeout(() => {
            dispatch(changeStatusLoadingAC(false))
        }, 3000)
    }, [dispatch])

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
                {people.map(man => <div key={man.id}>id: {man.id}, name: {man.name}, age: {man.age}</div>)}
            </div>
            <div style={{padding: '10px'}}>
                <Button class={"standard-btn"} name={'UP'} callBackHandler={upButtonHandler}/>
                <Button class={"standard-btn"} name={'DOWN'} callBackHandler={downButtonHandler}/>
                <Button class={"standard-btn"} name={'18'} callBackHandler={checkButtonHandler}/>
            </div>
            <Time/>
            <div>
                <h2>Preloader</h2>
                <div>
                    <div> {loading.loading ? <Preloader/> : null} </div>
                    <button onClick={loadingButtonHandler}>Loading</button>
                </div>
            </div>
            <div>
                <h2>Range common component</h2>
                <Range minValue={0} maxValue={10} value={valueRange} onChange={onChangeRangeHandler}/>
            </div>
            <div>
                <h2>2 Range</h2>
                <TwoRange
                    minValueFrom={0}
                    maxValueFrom={100}
                    minValueBefore={0}
                    maxValueBefore={50}
                    fromValue={valueFrom}
                    beforeValue={valueBefore}
                    onChangeFromPrice={onChangeFromPriceHandler}
                    onChangeBeforePrice={onChangeBeforePriceHandler}/>
            </div>
        </div>
    )
}