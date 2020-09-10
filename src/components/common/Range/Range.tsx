import React, {ChangeEvent, useCallback} from "react";
import classes from "./Range.module.css"

type PropsRangeType = {
    minValue: number
    maxValue: number
    value: number
    onChange: (value: number) => void
}

export const Range = React.memo((props: PropsRangeType) => {

    const callBackRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }, [props])
    return (
        <div>
                <div> <input className={classes.input} type={"range"} min={props.minValue} max={props.maxValue} value={props.value} onChange={callBackRangeChange}/></div>
                <div><span>{props.value}</span></div>
        </div>
    )
})