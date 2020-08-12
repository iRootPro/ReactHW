import React, {ChangeEvent} from "react";


type PropsType = {
    arr: Array<string>
    onChange: (value: string) => void
    value: string
}


export const Select = (props: PropsType) => {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value) {
            props.onChange(e.currentTarget.value)
        }

    }
    return (
        <select onChange={onChange} value={props.value}>
            {
                props.arr.map((item, index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })
            }
        </select>
    )
}