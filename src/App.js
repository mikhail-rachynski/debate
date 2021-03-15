import './App.css';
import React from "react";
import {Route} from 'react-router-dom';
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/Signup/Signup";
import HeaderContainer from "./components/Header/HeaderContainer";
import Signout from "./components/Auth/Signout/Signout";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";
import GamesContainer from "./components/Games/GamesContainer";

function App() {
    return (
        <div className="container">
            <div className="header">
                <HeaderContainer />
            </div>

            <div className="content">
                <Route exact path='/' render={() => <GamesContainer /> } />
                <Route path='/game/:id' render={() => <GameBoardContainer /> } />
                <Route path='/login' render={() => <Login /> } />
                <Route path='/signup' render={() => <SignUp /> } />
                <Route path='/signout' render={() => <Signout /> } />
            </div>

        </div>
    );
}

export default App;