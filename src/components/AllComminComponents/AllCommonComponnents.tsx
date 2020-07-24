import React from "react";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {CheckBox} from "../common/CheckBox/CheckBox";

function AllCommonComponents() {
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
                />
                <Input
                    label={'Password'}
                    message={'Password is required'}
                    class={'red-input'}
                />
                <Input
                    class={'standard-input'}
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
                <CheckBox checked={true} class={'small-checkbox'}/>
                <CheckBox checked={false} class={'middle-checkbox'}/>
                <CheckBox checked={true} class={'big-checkbox'}/>
            </div>

        </div>
    )
}

export default AllCommonComponents