import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://192.168.3.44:5000/api/v1/',
})

export const usersAPI = {
    getUsers()
    {
        return instance.get(`users`)
            .then(response => {
                debugger
                return response.data
            })
    }

}