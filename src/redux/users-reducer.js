import {usersAPI} from "../api/api";

const SET_USER = 'SET_USER'

let initialize = {
    users: []
}

const usersReducer = (state = initialize, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        default:
            return state
    }
}

export const setUser = (user) => ({type: SET_USER, user})

export const getUser = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUser(data))
            })
    }
}

export default usersReducer