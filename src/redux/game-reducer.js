import {gamesAPI, speechAPI} from "../api/api";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const SET_SPEECH = 'SET_SPEECH'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const SET_ROUNDS = 'SET_ROUNDS'

let initialState = {
    allGames: [],
    currentGame: null,
    speech: {
        first_faction: [],
        second_faction: [],
        third_faction: [],
        fourth_faction: []
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
        default:
            return state
    }

}

export const setGames = (games) => ({type: SET_GAMES_DATA, games})
export const setSpeech = (speech) => ({type: SET_SPEECH, speech})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
export const setRounds = (rounds) => ({type: SET_ROUNDS, rounds})

export const getAllGames = () => (dispatch) => {
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
        })
}
export const newGame = (topic) => (dispatch) => {
    gamesAPI.newGame(topic)
        .then(data => {
            if(!data.error) {
                dispatch(getAllGames())
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
    gamesAPI.getRounds(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data))
                data.map(round => dispatch(getSpeech(round.game_id, round.id)))

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