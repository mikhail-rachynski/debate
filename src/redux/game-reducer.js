import {gamesAPI, roundAPI, speechAPI} from "../api/api";
import {webSocket} from "../api/ws";
import {toggleIsFetching} from "./app-reducer";


const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const RESET_CURRENT_GAME = 'RESET_CURRENT_GAME'

const SET_ROUNDS = 'SET_ROUNDS'
const SET_ROUND = 'SET_ROUND'
const SET_RATING = 'SET_RATING'

const SET_SPEECHES = 'SET_SPEECHES'
const SET_SPEECH = 'SET_SPEECH'
const CHANGE_SPEECH = 'CHANGE_SPEECH'
const REMOVE_SPEECH = 'REMOVE_SPEECH'

let initialState = {
    currentGame: {},
    speeches: [],
    rounds: [],
    isFetching: false
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_GAME: {
            return {
                ...state,
                currentGame: action.game
            }
        }
        case RESET_CURRENT_GAME: {
            return {
                ...state,
                currentGame: {}
            }
        }

        case SET_ROUNDS: {
            return {
                ...state,
                rounds: action.rounds
            }
        }
        case SET_ROUND: {
            return {
                ...state,
                rounds: [...state.rounds, action.round]
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


        case SET_SPEECHES: {
            return {
                ...state,
                speeches: action.speeches
            }
        }
        case SET_SPEECH: {
            return {
                ...state,
                speeches: [...state.speeches, action.speech]
            }
        }
        case CHANGE_SPEECH: {
            return {
                ...state,
                speeches: state.speeches.map(speech => speech.id === action.speech.id ? action.speech : speech)
            }
        }
        case REMOVE_SPEECH: {
            return {
                ...state,
                speeches: state.speeches.filter((speech) => speech.id !== action.speechId)
            }
        }

        default:
            return state
    }
}

export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
export const resetCurrentGame = () => ({type: RESET_CURRENT_GAME})

export const setRounds = (rounds) => ({type: SET_ROUNDS, rounds})
export const setRound = (round) => ({type: SET_ROUND, round})
export const setRating = (roundId, rating) => ({type: SET_RATING, roundId, rating})

export const setSpeeches = (speeches) => ({type: SET_SPEECHES, speeches})
export const setSpeech = (speech) => ({type: SET_SPEECH, speech})
export const changeSpeech = (speech) => ({type: CHANGE_SPEECH, speech})
export const removeSpeech = (speechId) => ({type: REMOVE_SPEECH, speechId})

export const getCurrentGame = (gameId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    gamesAPI.getGame(gameId)
        .then(data => {
            dispatch(setCurrentGame(data))
            dispatch(toggleIsFetching(false))
        })
}

export const getRounds = (gameId) => (dispatch) => {
    roundAPI.getRounds(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data.rounds))
            }
        })
}
export const setRoundRating = (roundId, value) => async () => {
    await roundAPI.setRating(roundId, value)
}

export const getSpeeches = (gameId) => (dispatch) => {
    speechAPI.getSpeeches(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setSpeeches(data.speeches))
            }
        })
}
export const pushSpeech = (gameId, round, speech) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    speechAPI.pushSpeech(round, speech)
        .then(data => {
            if(!data.error){
                dispatch(toggleIsFetching(false))
                // dispatch(getSpeeches(gameId, round))
            }
        })
}
export const updateSpeech = (speechId, speech) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    speechAPI.updateSpeech(speechId, speech)
        .then(data => {
            if(!data.error){
                dispatch(toggleIsFetching(false))
            }
        })
}
export const deleteSpeech = (speechId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    speechAPI.deleteSpeech(speechId)
        .then(data => {
            if(!data.error){
                dispatch(toggleIsFetching(false))
            }
        })
}

export const webSocketGame = (gameId) => async (dispatch) => {
    const cable = webSocket.subscribe()
    const room = `Game_${gameId}`
    let subscription = cable.subscriptions.subscriptions.filter(item => JSON.parse(item.identifier).room === room)[0]
    if(!subscription) {
        cable.subscriptions.create({ channel: "DebateChannel", room: room }, {
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
                    case "set_new_speech": {
                        dispatch(setSpeech(data.speech))
                        break
                    }
                    case "edit_speech": {
                        dispatch(changeSpeech(data.speech))
                        break
                    }
                    case "remove_speech": {
                        dispatch(removeSpeech(data.speech.id))
                        break
                    }
                }
            }
        })
    } else {
        cable.subscriptions.remove(subscription)
    }
}

export default gameReducer