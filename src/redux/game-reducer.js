import {gamesAPI, roundAPI, speechAPI} from "../api/api";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const SET_SPEECH = 'SET_SPEECH'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const SET_ROUNDS = 'SET_ROUNDS'
const SET_CURRENT_USER_ROLE = 'SET_CURRENT_USER_ROLE'

let initialState = {
    allGames: [],
    currentGame: {topic: null},
    currentUserRole: null,
    speech: {},
    boards: {
        government: [],
        opposition: []
    },
    rounds: []
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
            return {
                ...state,
                currentGame: action.game

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
                boards: action.rounds
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
        default:
            return state
    }
}

export const setGames = (games) => ({type: SET_GAMES_DATA, games})
export const setSpeech = (speech) => ({type: SET_SPEECH, speech})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
export const setRounds = (rounds) => ({type: SET_ROUNDS, rounds})
export const setCurrentUserRole = (role) => ({type: SET_CURRENT_USER_ROLE, role})

export const getAllGames = () => (dispatch) => {
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
        })
}
export const getCurrentGame = (gameId) => (dispatch) => {
    gamesAPI.getCurrentGame(gameId)
        .then(data => {
            dispatch(setCurrentGame(data))
            dispatch(setCurrentUserRole(data.current_user_role))
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
    gamesAPI.updateGameTopic(gameId, topic)
        .then(data => {
            if(!data.error) {
                dispatch(getAllGames())
            }
        })
}
export const addPlayer = (gameId, userId) => (dispatch) => {
    gamesAPI.addPlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(setGames(data.games))
            }
        })
}
export const exitPlayerFromGame = (gameId, userId) => (dispatch) => {
    gamesAPI.deletePlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(getAllGames())
            }
        })
}
export const getRounds = (gameId) => (dispatch) => {
    roundAPI.getRounds(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data.boards))
                for(let board in data.boards) {
                    data.boards[board].map(round => dispatch(getSpeech(round.game_id, round.id)))
                }
            }
        })
}
export const setRoundRating = (roundId, value) => (dispatch) => {
    roundAPI.setRating(roundId, value)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data.boards))
            }
        })
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
    speechAPI.updateSpeech(speechId, speech)
        .then(data => {
            if(!data.error){
                dispatch(getSpeech(gameId, round))
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
export default gameReducer