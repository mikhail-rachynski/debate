import {gamesAPI} from "../api/api";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const UPDATE_GAME_DATA = 'UPDATE_GAME_DATA'
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
        case UPDATE_GAME_DATA: {
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
export const updateGameData = (games) => ({type: UPDATE_GAME_DATA, games})
export const setSpeech = (speech) => ({type: SET_SPEECH, speech})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
export const setRounds = (rounds) => ({type: SET_ROUNDS, rounds})

export const getAllGames = () => (dispatch) => {
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
        })
}

export const addPlayer = (gameId, userId) => (dispatch) => {
    gamesAPI.addPlayer(gameId, userId)
        .then(data => {
            if(!data.error) {
                dispatch(updateGameData(data.games))
            }
        })
}
export const getRounds = (gameId) => (dispatch) => {
    gamesAPI.get_rounds(gameId)
        .then(data => {
            if(!data.error){
                dispatch(setRounds(data))
                data.map(round => dispatch(getSpeech(round.game_id, round.id)))

            }
        })
}
export const getSpeech = (gameId, round) => (dispatch) => {
    gamesAPI.get_speech(gameId, round)
        .then(data => {
            if(!data.error){
                switch (data.round_type) {
                    case "first_faction": {
                        return dispatch(setSpeech({
                            first_faction: data.speech
                        }))
                    }
                    case "second_faction": {
                        return dispatch(setSpeech({
                            second_faction: data.speech
                        }))
                    }
                    case "third_faction": {
                        return dispatch(setSpeech({
                            third_faction: data.speech
                        }))
                    }
                    case "fourth_faction": {
                        return dispatch(setSpeech({
                            fourth_faction: data.speech
                        }))
                    }
                }
            }
        })
}
export const pushSpeech = (gameId, round, text) => (dispatch) => {
    gamesAPI.push_speech(gameId, round, text)
        .then(data => {
            if(!data.error){
                // dispatch(setSpeech(data.speech))
                dispatch(getSpeech(gameId, round))
            }
        })
}

export default gameReducer