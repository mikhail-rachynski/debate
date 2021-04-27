import React from 'react'
import {connect} from "react-redux";
import {pushSpeech, setRoundRating} from "../../../../redux/game-reducer";
import Round from "./Round";

class RoundContainer extends React.Component {
    render() {
        return <div>{this.props.rounds
            .sort((a, b) => (a.id > b.id) ? 1 : -1)
            .map(round =>
            <Round key={round.id}
                   roundId={round.id}
                   roundType={round.round_type}
                   rating={round.rating}
                   setRoundRating={this.props.setRoundRating}
                   {...this.props}
                   />)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        speech: state.games.speech,
        // rounds: state.games.rounds,
        currentGame: state.games.currentGame,
        isAuth: state.auth.isAuth,
        currentUserId: state.auth.currentUserId,
        currentUserRole: state.games.currentUserRole
    }
}

export default connect(mapStateToProps, {pushSpeech, setRoundRating})(RoundContainer)