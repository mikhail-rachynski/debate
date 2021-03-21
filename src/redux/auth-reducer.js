import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const  SIGN_OUT = 'SIGN_OUT'
const  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    currentUserId: null,
    name: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        case SIGN_OUT: {
            localStorage.clear()
            return {
                ...state,
                currentUserId: null,
                name: null,
                isAuth: false
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }

}

export const setUserData = (currentUserId, name) => ({type: SET_USER_DATA, payload: {currentUserId, name}})
export const signOut = () => ({type: SIGN_OUT})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const login = (formData) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(formData)
            .then(data => {
                localStorage.setItem("token", data.token)
                dispatch(setUserData(data.current_user.id, data.current_user.name))
                dispatch(toggleIsFetching(false))
            })
    }
}
export const signUp = (formData) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.signUp(formData)
            .then(data => {
                localStorage.setItem("token", data.token)
                dispatch(setUserData(data.current_user.id, data.current_user.name))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const authMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.authMe()
            .then(data => {
                dispatch(toggleIsFetching(false))
                if(!data.error) {
                    dispatch(setUserData(data.current_user.id, data.current_user.name))
                }
            })
    }
}

export default authReducer