import React, {useState} from "react";
import moment from "moment/moment";
import {Button} from "@material-ui/core";


export function Time() {
    const [timerId, setTimerId] = useState<number>()
    const [time, setTime] = useState(moment().format('LTS'))
    const [date, setDate] = useState(moment().format('LL'))
    const [showBlock, setShowBlock] = useState<boolean>(false)

    const startHandler = () => {
        clearInterval(timerId)
        const id = window.setInterval(() => setTime(moment().format('LTS')), 1000)
        setDate(moment().format('LL'))
        console.log(id)
        setTimerId(id)
    }

    const stopHandler = () => {
        clearInterval(timerId)
    }

    const onMouseMoveHandler = () => {
        setShowBlock(true)
    }
    const onMouseOverHandler = () => {
        setShowBlock(false)
    }

    const styles = {
        display: showBlock ? 'inline' : 'none',
        width: '300px',
        height: '50px',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        color: '#0000cc',
    }
    return (
        <div>
            <div>
                <h2>Task 9</h2>
            </div>
            <div onMouseEnter={onMouseMoveHandler} onMouseLeave={onMouseOverHandler}>
                {time}
                <div style={styles}>
                    {date}
                </div>
            </div>

            <div>
                <Button onClick={startHandler}>Start</Button>
                <Button onClick={stopHandler}>Stop</Button>
            </div>
        </div>
    )
}