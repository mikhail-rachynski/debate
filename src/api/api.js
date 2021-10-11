import * as axios from "axios";

const URL = 'https://api.kosma.keenetic.link/api/v1/'

const instance = axios.create({
    baseURL: URL
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.token;
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


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
        return instance.get(`users/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const gamesAPI = {
    getGames(kind)
    {
        return instance.get(`games?kind=${kind}`)
            .then(response => {
                return response.data
            })
    },
    getGame(gameId)
    {
        return instance.get('games/' + gameId)
            .then(response => {
                return response.data
            })
    },
    newGame(newGame)
    {
        return instance.post(`games`, newGame)
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
    updateGameTopic(game)
    {
        return instance.put(`games/` + game.gameId, {topic: game.topic, kind_id: game.kind_id})
            .then(response => {
                return response.data
            })
    },
    addPlayer(gameId)
    {
        return instance.post(`games/${gameId}/add_player`)
            .then(response => {
                return response.data
            })
    },
    deletePlayer(gameId)
    {
        return instance.delete(`games/${gameId}/delete_player`)
            .then(response => {
                return response.data
            })
    },
}

export const kindsAPI = {
    getKinds()
    {
        return instance.get(`kinds`)
            .then(response => {
                return response.data
            })
    },
    newKind(name)
    {
        return instance.post(`kinds`, {name: name})
            .then(response => {
                return response.data
            })
    }
}

export const roundAPI = {
    getRounds(gameId)
    {
        return instance.get(`rounds?game=${gameId}`)
            .then(response => {
                return response.data
            })
    },
    saveRating(gameId, rounds)
    {
        return instance.post(`games/${gameId}/set_rating`, {ratings: rounds})
            .then(response => {
                return response.data
            })
    }
}

export const speechAPI = {
    pushSpeech(round, text, replyTo)
    {
        return instance.post(`speeches/`, {round: round, text: text, reply: replyTo})
            .then(response => {
                return response.data
            })
    },
    getSpeeches(gameId)
    {
        return instance.get(`speeches?game=${gameId}`)
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
    updateSpeech(speechId, text)
    {
        return instance.put('speeches/' + speechId, {text: text})
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    signUp(formData)
    {
        return instance.post(`signup`, {user: {email: formData.email,
                password: formData.password,
                name: formData.name}})
            .then(response => {
                return response.data
            })
    },
    login(formData)
    {
        return instance.post(`login`, {user: {email: formData.email, password: formData.password}})
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