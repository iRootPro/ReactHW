import React from "react";
import {Range} from "../Range/Range";

type PropsTwoRangeType = {
    minValueFrom: number
    maxValueFrom: number
    minValueBefore: number
    maxValueBefore: number
    fromValue: number
    beforeValue: number
    onChangeFromPrice: (value: number) => void
    onChangeBeforePrice: (value: number) => void

}

export const TwoRange = React.memo((props: PropsTwoRangeType) => {
    const fromPriceHandler = (valueFrom: number) => {
        props.onChangeFromPrice(valueFrom)
    }
    const beforePriceHandler = (valueBefore: number) => {
        props.onChangeBeforePrice(valueBefore)
    }
    return (
        <div>
          <div><span>$ from</span> <Range minValue={props.minValueFrom} maxValue={props.maxValueFrom} value={props.fromValue} onChange={fromPriceHandler}/></div>
          <div><span># before</span> <Range minValue={props.minValueBefore} maxValue={props.maxValueBefore} value={props.beforeValue} onChange={beforePriceHandler}/></div>
        </div>
    )
})