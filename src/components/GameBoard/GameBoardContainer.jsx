import React from 'react'
import {connect} from "react-redux";
import Status from "./Status/Status";
import style from "./GamesBoard.module.css"
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {getRounds, setCurrentGame} from "../../redux/game-reducer";
import RoundContainer from "./Round/RoundContainer";

class GameBoardContainer extends React.Component {
    componentDidMount() {
        const gameId = this.props.match.params.id
        this.props.setCurrentGame(gameId)
        this.props.getRounds(gameId)
    }
    render() {
        return <div className={style.board}>
            <div className={style.status}>
                <Status/>
            </div>
            <div className={style.table}>
                <RoundContainer/>
            </div>
        </div>
    }
}


export default compose(connect(null, {setCurrentGame, getRounds}), withRouter)(GameBoardContainer)