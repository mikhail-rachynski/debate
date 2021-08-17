import React from 'react'
import {connect} from "react-redux";
import {
    addPlayer,
    deleteGame,
    exitPlayerFromGame,
    getAllGames,
    updateGameTopic,
    webSocketGames
} from "../../redux/games-reducer";
import Games from "./Games";

class GamesContainer extends React.Component{
    componentDidMount() {
        this.props.getAllGames()
        this.props.webSocketGames(true)
    }
    componentWillUnmount() {
        this.props.webSocketGames(false)
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
    webSocketGames
})(GamesContainer)