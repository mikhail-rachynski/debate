import {gamesAPI} from "../api/api";
import {webSocket} from "../api/ws";
import {toggleIsFetching} from "./app-reducer";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const SET_GAME = 'SET_GAME'
const DELETE_GAME = 'DELETE_GAME'
const SET_STATUS = 'SET_STATUS'
const CHANGE_GAME_USERS = 'CHANGE_GAME_USERS'

let initialState = {
    allGames: []
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GAMES_DATA: {
            return {
                ...state,
                allGames: action.games
            }
        }
        case SET_GAME: {
            return {
                ...state,
                allGames: [...state.allGames, action.game]
            }
        }
        case DELETE_GAME: {
            return {
                ...state,
                allGames: state.allGames.filter((game) => game.id !== action.gameId)
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

        default:
            return state
    }
}

export const setGames = (games) => ({type: SET_GAMES_DATA, games})
export const setGame = (game) => ({type: SET_GAME, game})
export const deletingGame = (gameId) => ({type: DELETE_GAME, gameId})
export const setStatus = (gameId, status) => ({type: SET_STATUS, gameId, status})
export const changeGameUsers = (gameId, users) => ({type: CHANGE_GAME_USERS, gameId, users})

export const getAllGames = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
            dispatch(toggleIsFetching(false))
        })
}

export const newGame = (topic) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.newGame(topic)
        .then(data => {
            if(!data.error) {
                dispatch(toggleIsFetching(false))
            }
        })
}
export const updateGameTopic = (gameId, topic) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.updateGameTopic(gameId, topic)
        .then(data => {
            if(!data.error) {
                dispatch(toggleIsFetching(false))
            }
        })
}
export const deleteGame = (gameId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.deleteGame(gameId)
        .then(data => {
            if(!data.error){
                dispatch(toggleIsFetching(false))
            }
        })
}
export const addPlayer = (gameId, userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.addPlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(toggleIsFetching(false))
            }
        })
}
export const exitPlayerFromGame = (gameId, userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.deletePlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(toggleIsFetching(false))
            }
        })
}


export const webSocketGames = () => async (dispatch) => {
    const cable = webSocket.subscribe()
    const room = `Games`
    let subscription = cable.subscriptions.subscriptions.filter(item => JSON.parse(item.identifier).room === room)[0]
    if(!subscription) {
        cable.subscriptions.create({ channel: "DebateChannel", room: room }, {
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
        cable.subscriptions.remove(subscription)
    }
}

export default gamesReducer