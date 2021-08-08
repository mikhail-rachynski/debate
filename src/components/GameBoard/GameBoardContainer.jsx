import React from 'react'
import {connect} from "react-redux";
import style from "./GamesBoard.module.css"
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {getGame, getRounds, webSocketGame} from "../../redux/game-reducer";
import StatusContainer from "./Status/StatusContainer";
import TeamsContainer from "./Teams/TeamsContainer";

class GameBoardContainer extends React.Component {
    componentDidMount() {
        const gameId = this.props.match.params.id
        this.props.getCurrentGame(gameId)
        this.props.getRounds(gameId)
        this.props.webSocketGame(gameId)
    }
    componentWillUnmount() {
        this.props.webSocketGame()
    }
    render() {
        return <div className={style.board}>
            <div className={style.status}>
                <StatusContainer/>
            </div>
            <div className={style.teams}>
                <TeamsContainer />
            </div>
        </div>
    }
}

export default compose(connect(null, {getCurrentGame: getGame, getRounds, webSocketGame}), withRouter)(GameBoardContainer)