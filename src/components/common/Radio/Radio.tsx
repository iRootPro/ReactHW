import React, {ChangeEvent} from "react";

type PropsType = {
    value: string
    name: string
    onChange: (value: string) => void
    arr: Array<string>
}


export const Radio = (props: PropsType) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return (
        <>
            {
                props.arr.map((item, index) => (
                    <div key={index}>
                        <label key={index}>{item}
                            <input
                                type={'radio'}
                                checked={props.value === item}
                                value={item}
                                name={props.name}
                                onChange={onChange}
                                key={index}/>
                        </label>
                    </div>))
            }
        </>
    )
}