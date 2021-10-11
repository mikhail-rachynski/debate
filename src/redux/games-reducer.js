import {gamesAPI, kindsAPI} from "../api/api";
import {webSocket} from "../api/ws";
import {toggleIsFetching} from "./app-reducer";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const SET_GAME = 'SET_GAME'
const UPDATE_GAME = 'UPDATE_GAME'
const SET_FULL_GAME_DATA = 'SET_FULL_GAME_DATA'
const DELETE_GAME = 'DELETE_GAME'
const SET_STATUS = 'SET_STATUS'
const SET_SCORE = 'SET_SCORE'
const CHANGE_GAME_USERS = 'CHANGE_GAME_USERS'
const SET_KINDS = 'SET_KINDS'
const SET_KIND = 'SET_KIND'

let initialState = {
    games: [],
    currentKind: 0,
    kinds: []
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GAMES_DATA: {
            return {
                ...state,
                games: action.games,
                currentKind: action.kind
            }
        }
        case SET_GAME: {
            return {
                ...state,
                games: [...state.games, action.game]
            }
        }
        case UPDATE_GAME: {
            return {
                ...state,
                games: state.games.map(game => game.id === action.game.id ? action.game : game)
            }
        }
        case SET_FULL_GAME_DATA: {
            return {
                ...state,
                games: state.games.map(game => game.id === action.game.id ? action.game : game)
            }
        }
        case DELETE_GAME: {
            return {
                ...state,
                games: state.games.filter((game) => game.id !== action.gameId)
            }
        }
        case SET_STATUS: {
            let games = state.games.map((item) => {
                if (item.id === action.gameId) {
                    item.status = action.status
                    return item
                } else {
                    return item
                }
            })
            return {
                ...state,
                games: games
            }
        }
        case SET_SCORE: {
            let games = state.games.map((item) => {
                if (item.id === action.gameId) {
                    item.score = action.score
                    return item
                } else {
                    return item
                }
            })
            return {
                ...state,
                games: games
            }
        }
        case CHANGE_GAME_USERS: {
            let games = state.games.map((item) => {
                    if (item.id === action.gameId) {
                        item.users = action.users
                        item.users_count = action.users_count
                        return item
                    } else {
                        return item
                    }
                }
            )
            return {
                ...state,
                games: games
            }
        }
        case SET_KINDS: {
            return {
                ...state,
                kinds: action.kinds
            }
        }
        case SET_KIND: {
            return {
                ...state,
                kinds: [...state.kinds, action.kind]
            }
        }

        default:
            return state
    }
}

export const setGames = (kind, games) => ({type: SET_GAMES_DATA, kind, games})
export const setGame = (game) => ({type: SET_GAME, game})
export const updateGame = (game) => ({type: UPDATE_GAME, game})
export const setFullGameData = (game) => ({type: SET_FULL_GAME_DATA, game})
export const deletingGame = (gameId) => ({type: DELETE_GAME, gameId})
export const setStatus = (gameId, status) => ({type: SET_STATUS, gameId, status})
export const setScore = (gameId, score) => ({type: SET_SCORE, gameId, score})
export const setKinds = (kinds) => ({type: SET_KINDS, kinds})
export const setKind = (kind) => ({type: SET_KIND, kind})

export const getGames = (kind=0) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.getGames(kind)
        .then(data => {
            dispatch(setGames(data.kind, data.games))
            dispatch(toggleIsFetching(false))
        })
}
export const getFullGameData = (gameId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.getGame(gameId)
        .then(data => {
            dispatch(setFullGameData(data))
            dispatch(toggleIsFetching(false))
        })
}
export const newGame = (newGame) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.newGame(newGame)
        .then(data => {
            if(!data.error) {
                dispatch(toggleIsFetching(false))
            }
        })
}
export const updateGameTopic = (game) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.updateGameTopic(game)
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
export const getKinds = () => (dispatch) => {
    kindsAPI.getKinds()
        .then(data => {
            if(!data.error) {
                dispatch(setKinds(data.kinds))
            }
        })
}
export const createNewKind = (name) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    kindsAPI.newKind(name)
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
                    case "update_game": {
                        dispatch(updateGame(data.game))
                        break
                    }
                    case "delete_game": {
                        dispatch(deletingGame(data.gameId))
                        break
                    }
                    case "add_player":
                    case "delete_player": {
                        dispatch(getFullGameData(data.gameId))
                        break
                    }
                    case "set_game_status": {
                        dispatch(setStatus(data.gameId, data.status))
                        break
                    }
                    case "set_game_score": {
                        dispatch(setScore(data.gameId, data.score))
                        break
                    }
                    case "set_new_kind": {
                        dispatch(setKind(data.kind))
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