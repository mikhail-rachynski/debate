import {combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import {reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    menuState: menuReducer,
    form: formReducer
})

let store = createStore(reducers)
window.store = store

export default store