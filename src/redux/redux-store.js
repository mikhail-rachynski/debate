import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import gameReducer from "./game-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    games: gameReducer,
    users: usersReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store