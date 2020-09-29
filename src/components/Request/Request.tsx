import React, {ChangeEvent, useCallback, useState} from "react";
import {requestApi} from "../../api/request";

export const Request = React.memo(() => {

    const [response, setResponse] = useState<string>('')

    let isChecked: boolean = false

    const checkBoxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        isChecked = e.currentTarget.checked
    }, [])

    const onClickHandler = useCallback(() => {
        requestApi.postRequest(isChecked)
            .then(res => setResponse(JSON.stringify(res.data.info)))
            .catch(e => setResponse(JSON.stringify(e.message)))
    }, [isChecked])

    return (
        <div>
            <input type={'button'} value={'Request'} onClick={onClickHandler}/>
            <input type={'checkbox'} onChange={(e) => checkBoxHandler(e)}/>
            <div>
                { response === '' ? 'no request' : response }
            </div>
        </div>
    )
})