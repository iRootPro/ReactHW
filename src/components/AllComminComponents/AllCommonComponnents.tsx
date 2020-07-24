import React, {useState} from "react";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {CheckBox} from "../common/CheckBox/CheckBox";


function AllCommonComponents() {
    const [value, setValue] = useState<string>('')

    const onChangeInputHandler = (newValue: string) => {
        setValue(newValue)
    }


    const [check, setCheck] = useState<boolean>(false)
    const onChangeCheckBoxHandler = (newValue: boolean) => {
        setCheck(!check)
    }

    return (
        <div>
            <div>My common components:</div>
            <hr/>
            <div>Inputs</div>
            <div>
                <Input
                    label={'Username'}
                    message={'Username is required'}
                    class={'green-input'}
                    onChange={onChangeInputHandler}
                    value={value}
                />
                <Input
                    label={'Password'}
                    message={'Password is required'}
                    class={'red-input'}
                    onChange={onChangeInputHandler}
                    value={value}
                />
                <Input
                    class={'standard-input'}
                    onChange={onChangeInputHandler}
                    value={value}
                />
            </div>
            <br/>
            <br/>
            <hr/>
            <div>Buttons:</div>
            <div>
                <Button class={'standard-btn'} name={'OK'}/>
                <Button class={'red-btn'} name={'Cancel'}/>
                <Button class={'green-btn'} name={'Submit'}/>
            </div>
            <hr/>
            <div>CheckBoxes</div>

            <div>
                <CheckBox checked={check} class={'small-checkbox'} onChange={onChangeCheckBoxHandler}/>
                <CheckBox checked={check} class={'middle-checkbox'} onChange={onChangeCheckBoxHandler}/>
                <CheckBox checked={check} class={'big-checkbox'} onChange={onChangeCheckBoxHandler} />
            </div>

        </div>
    )
}

export default AllCommonComponents