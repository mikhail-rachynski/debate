import React from 'react'
import {connect} from "react-redux";
import {addPlayer, getAllGames} from "../../redux/game-reducer";
import Games from "./Games";

class GamesContainer extends React.Component{
    componentDidMount() {
        this.props.getAllGames()
    }

    render() {
        return <Games games={this.props.games}
                      userId={this.props.userId}
                      addPlayer={this.props.addPlayer}/>
    }
}

let mapStateToProps = (state) => {
    return {
        games: state.games.allGames,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {getAllGames, addPlayer})(GamesContainer)