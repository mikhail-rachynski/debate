import * as axios from "axios";
let token = localStorage.token
const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://192.168.3.44:5000/api/v1/',
    headers: {
        'Authorization' : `Bearer ${token}`
    }
})

const NonAuthInstance = axios.create({
    baseURL: 'http://192.168.3.44:5000/api/v1/',
})


export const usersAPI = {
    getUsers()
    {
        return instance.get(`users`)
            .then(response => {
                return response.data
            })
    }

}

export const gamesAPI = {
    getGames()
    {
        return NonAuthInstance.get(`games`)
            .then(response => {
                return response.data
            })
    },
    addPlayer(gameId, userId)
    {
        return instance.post(`games/${gameId}/add_player`, {user_id: userId})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    signUp(formData)
    {
        return NonAuthInstance.post(`signup`, {user: {email: formData.email,
                password: formData.password,
                name: formData.name}})
            .then(response => {
                return response.data
            })
    },
    login(formData)
    {
        return NonAuthInstance.post(`login`, {user: {email: formData.email, password: formData.password}})
            .then(response => {
                return response.data
            })
    },
    authMe()
    {
        return instance.get(`logged_in`)
            .then(response => {
                return response.data
            })
    }
}