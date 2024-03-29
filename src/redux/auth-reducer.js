import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const  SIGN_OUT = 'SIGN_OUT'
const  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    currentUserId: null,
    userName: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...action.payload,
                isAuth: true
            }
        }
        case SIGN_OUT: {
            localStorage.clear()
            return {
                currentUserId: null,
                userName: null,
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

export const setUserData = (currentUserId, userName) => ({type: SET_USER_DATA, payload: {currentUserId, userName}})
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
                window.location.reload()
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
                window.location.reload()
            })
    }
}

export const authMe = () => async (dispatch) => {
    let data = await authAPI.authMe()
    if(!data.error) {
        dispatch(setUserData(data.current_user.id, data.current_user.name))
    }
}

export default authReducer