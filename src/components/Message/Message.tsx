import React from "react";
import s from './Message.module.css'

type PropsType = {
    author: string,
    message: string,
    time: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={s.container}>
            <div className={s.messageWrap}>
                <div className={s.author}>{props.author}</div>
                <p className={s.message}>{props.message}</p>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}