import axios from "axios";

export const requestApi = {

    postRequest(isChecked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {
            success: isChecked
        })
    }


}