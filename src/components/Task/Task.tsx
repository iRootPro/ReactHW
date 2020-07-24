import React, {useState} from 'react'
import {Button} from "../common/Button/Button";

type TaskType = {
    id: number
    n: string
    p: 'hight' | 'low' | 'middle' | 'all'
}

type FilteredType = 'all' | 'low' | 'middle' | 'high'

const tasks: Array<TaskType> =
    [
        {id: 1, n: "работа", p: "hight"},
        {id: 2, n: "аниме", p: "low"},
        {id: 3, n: "игры", p: "middle"},
        {id: 4, n: "реакт", p: "hight"},
        {id: 5, n: "хтмл", p: "low"}
    ]


function Task() {

    let [tasks, setTasks] = useState(
        [
            {id: 1, n: "работа", p: "high"},
            {id: 2, n: "аниме", p: "low"},
            {id: 3, n: "игры", p: "middle"},
            {id: 4, n: "реакт", p: "high"},
            {id: 5, n: "хтмл", p: "low"}
        ]
    )

    let [filter, setFilter] = useState<FilteredType>('all')

    let taskForList = tasks

    if (filter === 'low') taskForList = taskForList.filter(task => task.p === 'low')
    if (filter === 'middle') taskForList = taskForList.filter(task => task.p === 'middle')
    if (filter === 'high') taskForList = taskForList.filter(task => task.p === 'high')

    function removedTaskById(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    function priority(p: FilteredType) {
        setFilter(p)
    }

    const lowButtonHandler = () => priority('low')
    const middleButtonHandler = () => priority('middle')
    const highButtonHandler = () => priority('high')
    const allButtonHandler = () => priority('all')


    return (
        <div>
            <h1>My tasks:</h1>
            <ul>
                {taskForList.map(task =>
                    <li key={task.id}>{task.n} : {task.p}
                        <Button class={"standard-btn"} name={'X'} callBackHandler={() => removedTaskById(task.id)}/>
                    </li>)}
            </ul>
            <Button name={'Low'} class={"standard-btn"} callBackHandler={lowButtonHandler}/>
            <Button name={'Middle'} class={"standard-btn"} callBackHandler={middleButtonHandler}/>
            <Button name={'High'} class={"standard-btn"} callBackHandler={highButtonHandler}/>
            <Button name={'All'} class={"standard-btn"} callBackHandler={allButtonHandler}/>

        </div>
    )
}


export default Task

