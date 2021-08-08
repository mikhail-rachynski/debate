import {gamesAPI, roundAPI, speechAPI} from "../api/api";
import {webSocket} from "../api/ws";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const SET_SPEECH = 'SET_SPEECH'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const RESET_CURRENT_GAME = 'RESET_CURRENT_GAME'
const SET_ROUNDS = 'SET_ROUNDS'
const SET_CURRENT_USER_ROLE = 'SET_CURRENT_USER_ROLE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CHANGE_GAME_USERS = 'CHANGE_GAME_USERS'
const SET_RATING = 'SET_RATING'
const SET_ROUND = 'SET_ROUND'
const SET_GAME = 'SET_GAME'
const DELETE_GAME = 'DELETE_GAME'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    allGames: [],
    currentGame: {},
    currentUserRole: null,
    speech: {},
    boards: {
        government: [],
        opposition: []
    },
    rounds: [],
    isFetching: false
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GAMES_DATA: {
            return {
                ...state,
                allGames: action.games
            }
        }
        case SET_CURRENT_GAME: {
            let allGames = state.allGames.map((item) => item.id === action.game.id ? action.game : item)
            return {
                ...state,
                allGames: allGames,
                currentGame: action.game

            }
        }
        case RESET_CURRENT_GAME: {
            return {
                ...state,
                currentGame: {}

            }
        }
        case SET_CURRENT_USER_ROLE: {
            return {
                ...state,
                currentUserRole: action.role
            }
        }
        case SET_ROUNDS: {
            return {
                ...state,
                rounds: action.rounds
            }
        }
        case SET_SPEECH: {
            return {
                ...state,
                speech: {
                    ...state.speech,
                    ...action.speech
                }
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case CHANGE_GAME_USERS: {
            let allGames = state.allGames.map((item) => {
                    if (item.id === action.gameId) {
                        item.users = action.users
                        return item
                    } else {
                        return item
                    }
                }
            )
            return {
                ...state,
                allGames: allGames
            }
        }
        case SET_STATUS: {
            let allGames = state.allGames.map((item) => {
                if (item.id === action.gameId) {
                    item.status = action.status
                    return item
                } else {
                    return item
                }
            })
            return {
                ...state,
                allGames: allGames
            }
        }
        case SET_RATING: {
            let allRounds = state.rounds.map((item) => {
                if(item.id === action.roundId){
                    item.rating = action.rating
                    return item
                } else {
                    return item
                }
            })
            return {
                ...state,
                rounds: allRounds
            }
        }
        case SET_ROUND: {
            return {
                ...state,
                rounds: [...state.rounds, action.round]
            }
        }
        case SET_GAME: {
            return {
                ...state,
                allGames: [...state.allGames, action.game]
            }
        }
        case DELETE_GAME: {
            let allGames = state.allGames.filter((item) => item.id !== action.gameId)
            return {
                ...state,
                allGames: allGames
            }
        }
        default:
            return state
    }
}

export const setGames = (games) => ({type: SET_GAMES_DATA, games})
export const setSpeech = (speech) => ({type: SET_SPEECH, speech})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
export const resetCurrentGame = () => ({type: RESET_CURRENT_GAME})
export const setRounds = (rounds) => ({type: SET_ROUNDS, rounds})
export const setCurrentUserRole = (role) => ({type: SET_CURRENT_USER_ROLE, role})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const changeGameUsers = (gameId, users) => ({type: CHANGE_GAME_USERS, gameId, users})
export const setStatus = (gameId, status) => ({type: SET_STATUS, gameId, status})
export const setRating = (roundId, rating) => ({type: SET_RATING, roundId, rating})
export const setRound = (round) => ({type: SET_ROUND, round})
export const setGame = (game) => ({type: SET_GAME, game})
export const deletingGame = (gameId) => ({type: DELETE_GAME, gameId})

export const getAllGames = () => (dispatch) => {
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
        })
}
export const getGame = (gameId) => (dispatch) => {
    dispatch(resetCurrentGame())
    dispatch(toggleIsFetching(true))
    gamesAPI.getGame(gameId)
        .then(data => {
            dispatch(setCurrentGame(data))
            dispatch(setCurrentUserRole(data.current_user_role))
            dispatch(toggleIsFetching(false))
        })
}
export const newGame = (topic) => (dispatch) => {
    gamesAPI.newGame(topic)
        .then(data => {
            if(!data.error) {
                dispatch(setGames(data.games))
            }
        })
}
export const updateGameTopic = (gameId, topic) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.updateGameTopic(gameId, topic)
        .then(data => {
            if(!data.error) {
                dispatch(getGame(gameId))
                dispatch(toggleIsFetching(false))
            }
        })
}
export const addPlayer = (gameId, userId) => (dispatch) => {
    gamesAPI.addPlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(getGame(gameId))
            }
        })
}
export const exitPlayerFromGame = (gameId, userId) => (dispatch) => {
    gamesAPI.deletePlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(getGame(gameId))
            }
        })
}
export const getRounds = (gameId) => (dispatch) => {
    roundAPI.getRounds(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data.rounds))
                data.rounds.map(round => dispatch(getSpeech(round.game_id, round.id)))

            }
        })
}
export const setRoundRating = (roundId, value) => async () => {
    await roundAPI.setRating(roundId, value)
}

export const deleteGame = (gameId) => (dispatch) => {
    gamesAPI.deleteGame(gameId)
        .then(data => {
            if(!data.error){
                dispatch(getAllGames())
            }
        })
}
export const getSpeech = (gameId, round) => (dispatch) => {
    speechAPI.getSpeeches(gameId, round)
        .then(data => {
            if(!data.error){
                dispatch(setSpeech({[data.round_type]: data.speech}))
            }
        })
}
export const pushSpeech = (gameId, round, speech) => (dispatch) => {
    speechAPI.pushSpeech(round, speech)
        .then(data => {
            if(!data.error){
                dispatch(getSpeech(gameId, round))
            }
        })
}
export const updateSpeech = (gameId, round, speechId, speech) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    speechAPI.updateSpeech(speechId, speech)
        .then(data => {
            if(!data.error){
                dispatch(getSpeech(gameId, round))
                dispatch(toggleIsFetching(false))
            }
        })
}
export const deleteSpeech = (gameId, round, speechId) => (dispatch) => {
    speechAPI.deleteSpeech(speechId)
        .then(data => {
            if(!data.error){
                dispatch(getSpeech(gameId, round))
            }
        })
}

export const webSocketGames = (status) => async (dispatch) => {
    const cable = webSocket.subscribe()
    if(status) {
        cable.subscriptions.create({ channel: "DebateChannel", room: "Games" }, {
            received(data) {
                switch (data.action) {
                    case "add_game": {
                        dispatch(setGame(data.game))
                        break
                    }
                    case "delete_game": {
                        dispatch(deletingGame(data.gameId))
                        break
                    }
                    case "add_player":
                    case "delete_player":
                    case "set_status": {
                        dispatch(changeGameUsers(data.gameId, data.users))
                        break
                    }
                    case "set_start_game_status":
                    case "set_finish_game_status": {
                        dispatch(setStatus(data.gameId, data.status))
                        break
                    }
                }
            }
        })
    } else {
        let subscription = cable.subscriptions.subscriptions[0]
        cable.subscriptions.remove(subscription)
    }
}


export const webSocketGame = (gameId=null) => async (dispatch) => {
    const cable = webSocket.subscribe()
    if(gameId) {
        cable.subscriptions.create({ channel: "DebateChannel", room: `Game_${gameId}` }, {
            received(data) {
                switch (data.action) {
                    case "set_rating": {
                        dispatch(setRating(data.roundId, data.rating))
                        break
                    }
                    case "round_start": {
                        dispatch(setRound(data.round))
                        break
                    }
                }
            }
        })
    } else {
        let subscription = cable.subscriptions.subscriptions[0]
        cable.subscriptions.remove(subscription)
    }
}

export default gameReducer