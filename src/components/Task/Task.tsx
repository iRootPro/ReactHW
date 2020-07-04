import React, {useState} from 'react'

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


    return (
        <div>
            <h1>My tasks:</h1>
            <ul>
                {taskForList.map(task =>
                    <li key={task.id}>{task.n} : {task.p}
                        <button onClick={() => removedTaskById(task.id)}>X</button>
                    </li>)}
            </ul>
            <button onClick={() => priority('low')}>Low</button>
            <button onClick={() => priority('middle')}>Middle</button>
            <button onClick={() => priority('high')}>High</button>
            <button onClick={() => priority('all')}>All</button>
        </div>
    )
}


export default Task

