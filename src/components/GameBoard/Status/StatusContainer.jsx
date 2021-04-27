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
        currentGame: state.games.currentGame,
        currentUserRole: state.games.currentUserRole
    }
}
export default connect(mapStateToProps, null)(StatusContainer)