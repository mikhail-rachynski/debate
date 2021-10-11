import React from 'react'
import {connect} from "react-redux";
import GameNotification from "./GameNotification";
import {compose} from "redux";
import {withPopUp} from "../../../hoc/PopUp/withPopUp";

const GameNotificationContainer = ({gameNotification, closeGameNotification}) => {
    return <div>
        <GameNotification gameNotification={gameNotification}/>
        <button onClick={closeGameNotification}>Close</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        gameNotification: state.game.gameNotification.message
    }
}
export default compose(connect(mapStateToProps, null), withPopUp)(GameNotificationContainer)