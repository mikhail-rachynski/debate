import React from 'react'
import {connect} from "react-redux";
import {addPlayer, deleteGame, exitPlayerFromGame, getAllGames, updateGameTopic} from "../../redux/game-reducer";
import Games from "./Games";

class GamesContainer extends React.Component{
    componentDidMount() {
        this.props.getAllGames()
    }

    render() {
        return <Games {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        games: state.games.allGames,
        currentUserId: state.auth.currentUserId,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    getAllGames,
    addPlayer,
    exitPlayerFromGame,
    deleteGame,
    updateGameTopic,
})(GamesContainer)