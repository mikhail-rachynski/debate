import * as axios from "axios";

let token = localStorage.token

const URL = 'http://192.168.1.50:5000/api/v1/'

const instance = axios.create({
    // withCredentials: true,
    baseURL: URL,
    headers: {
        'Authorization' : `Bearer ${token}`
    }
})

const NonAuthInstance = axios.create({
    baseURL: URL,
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
    },
    get_rounds(gameId)
    {
        return NonAuthInstance.get(`games/${gameId}/get_rounds`)
            .then(response => {
                return response.data
            })
    },
    push_speech(gameId, round, text)
    {
        return instance.post(`games/${gameId}/push_speech`, {round: round, text: text})
            .then(response => {
                return response.data
            })
    },
    get_speech(gameId, round)
    {
        return NonAuthInstance.get(`games/${gameId}/get_speech?round=${round}`)
            .then(response => {
                return response.data
            })
    },
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