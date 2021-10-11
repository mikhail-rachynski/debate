import React from 'react'
import {connect} from "react-redux";
import {
    addPlayer,
    deleteGame,
    exitPlayerFromGame,
    updateGameTopic,
    webSocketGames
} from "../../../redux/games-reducer";
import Game from "./Game";

const GameContainer = ({game, currentUserId,
                           isAuth,
                           updateGameTopic,
                           deleteGame,
                           addPlayer,
                           exitPlayerFromGame, kinds}) => {

    return <Game game={game}
                 currentUserId={currentUserId}
                 isAuth={isAuth}
                 updateGameTopic={updateGameTopic}
                 deleteGame={deleteGame}
                 addPlayer={addPlayer}
                 exitPlayerFromGame={exitPlayerFromGame}
                 kinds={kinds}
    />
}

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.currentUserId,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    addPlayer,
    exitPlayerFromGame,
    deleteGame,
    updateGameTopic,
    webSocketGames
})(GameContainer)