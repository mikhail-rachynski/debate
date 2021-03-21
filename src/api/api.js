import * as axios from "axios";

const URL = 'http://192.168.1.50:5000/api/v1/'

const instance = axios.create({
    // withCredentials: true,
    baseURL: URL,
    headers: {
        'Authorization' : `Bearer ${localStorage.token}`
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
    },
    getProfile(userId)
    {
        return NonAuthInstance.get(`users/${userId}`)
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
    newGame(topic)
    {
        return instance.post(`games`, topic)
            .then(response => {
                return response.data
            })
    },
    deleteGame(gameId)
    {
        return instance.delete(`games/` + gameId)
            .then(response => {
                return response.data
            })
    },
    updateGameTopic(gameId, topic)
    {
        return instance.put(`games/` + gameId, {topic: topic})
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
    deletePlayer(gameId, userId)
    {
        return instance.delete(`games/${gameId}/delete_player`, {data: {user_id: userId}})
            .then(response => {
                return response.data
            })
    },
    getRounds(gameId)
    {
        return NonAuthInstance.get(`games/${gameId}/get_rounds`)
            .then(response => {
                return response.data
            })
    },

}

export const speechAPI = {
    pushSpeech(round, speech)
    {
        return instance.post(`speeches/`, {round: round, speech: speech})
            .then(response => {
                return response.data
            })
    },
    getSpeeches(gameId, round)
    {
        return NonAuthInstance.get(`speeches?round=${round}`)
            .then(response => {
                return response.data
            })
    },
    deleteSpeech(speechId)
    {
        return instance.delete('speeches/' + speechId)
            .then(response => {
                return response.data
            })
    },
    updateSpeech(speechId, speech)
    {
        return instance.put('speeches/' + speechId, {speech: speech})
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