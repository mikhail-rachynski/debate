import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import gamesReducer from "./games-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import notificationReducer from "./notification-reducer";
import gameReducer from "./game-reducer";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    games: gamesReducer,
    game: gameReducer,
    users: usersReducer,
    app: appReducer,
    notifications: notificationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store