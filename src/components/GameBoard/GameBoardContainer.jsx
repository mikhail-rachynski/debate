import React, {useEffect} from 'react'
import {connect} from "react-redux";
import style from "./GamesBoard.module.css"
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {
    getCurrentGame,
    getRounds,
    resetCurrentGame,
    resetGameNotification, saveGameRatings, setRatingChange,
    webSocketGame
} from "../../redux/game-reducer";
import StatusContainer from "./Status/StatusContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import GameNotificationContainer from "./GameNotification/GameNotificationContainer";
import RatingDialog from "./RatingDialog/RatingDialog";

const GameBoardContainer = (props) => {
    useEffect(() => {
        const gameId = props.match.params.id
        props.getCurrentGame(gameId)
        props.getRounds(gameId)
        props.webSocketGame(gameId)
        return () => {
            props.webSocketGame(gameId)
            props.resetCurrentGame()
            props.setRatingChange(false)
        }},[])

    const closeGameNotification = () => {
        props.resetGameNotification()
    }


    return <div className={style.board}>
        <div className={style.status}>
            <StatusContainer/>
        </div>
        <div className={style.options}>
        </div>
        <div className={style.teams}>
            <TeamsContainer />
        </div>
        {props.gameNotificationId === props.currentGameId &&
        <GameNotificationContainer closeGameNotification={closeGameNotification}/> }
        {props.currentUserRole === "referee" && props.currentGameStatus === "finished" &&
        <RatingDialog currentGameId={props.currentGameId}
                      ratingChange={props.ratingChange}
                      setRatingChange={props.setRatingChange}
                      changedRoundRatings={props.changedRoundRatings}
                      saveGameRatings={props.saveGameRatings}/>
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
        gameNotificationId: state.game.gameNotification.id,
        currentGameId: state.game.currentGame.id,
        currentUserRole: state.game.currentGame.current_user_role,
        currentGameStatus: state.game.currentGame.status,
        ratingChange: state.game.ratingChange,
        changedRoundRatings: state.game.changedRoundRatings
    }
}

export default compose(connect(mapStateToProps, {getCurrentGame,
    resetCurrentGame,
    getRounds,
    webSocketGame,
    resetGameNotification,
    setRatingChange,
    saveGameRatings }), withRouter)(GameBoardContainer)