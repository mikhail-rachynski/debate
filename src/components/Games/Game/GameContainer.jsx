import React from "react"
import {connect} from "react-redux";
import {getGame} from "../../../redux/games-reducer";
import Game from "./Game";

class GameContainer extends React.Component {
    componentDidMount() {
        this.props.getGame(this.props.game.id)
    }
    render() {
        return <Game isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.games.isFetching
    }
}

export default connect(mapStateToProps, {getGame})(GameContainer)