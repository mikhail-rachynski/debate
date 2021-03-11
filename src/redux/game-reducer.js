import {gamesAPI} from "../api/api";

const SET_GAMES_DATA = 'SET_GAMES_DATA'
const UPDATE_GAME_DATA = 'UPDATE_GAME_DATA'

let initialState = {
    allGames: []
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
            debugger
            return {
                ...state,
                allGames: [action.games]
            }
        }
        default:
            return state
    }

}

export const setGames = (games) => ({type: SET_GAMES_DATA, games})
export const updateGameData = (game) => ({type: UPDATE_GAME_DATA, game})

export const getAllGames = () => (dispatch) => {
    gamesAPI.getGames()
        .then(data => {
            dispatch(setGames(data.games))
        })
}

export const addPlayer = (gameId, userId) => (dispatch) => {
    gamesAPI.addPlayer(gameId, userId)
        .then(data => {
            if(!data.error){
                dispatch(updateGameData(data))
            }
        })
}

export default gameReducer