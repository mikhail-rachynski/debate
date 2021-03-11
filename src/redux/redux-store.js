import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import {reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import gameReducer from "./game-reducer";

let reducers = combineReducers({
    menuState: menuReducer,
    auth: authReducer,
    form: formReducer,
    games: gameReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store