import React from 'react'
import {connect} from "react-redux";
import Status from "./Status";

class StatusContainer extends React.Component {
    render() {
        return <Status {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentGame: state.game.currentGame,
        currentUserRole: state.game.currentGame.current_user_role
    }
}
export default connect(mapStateToProps, null)(StatusContainer)