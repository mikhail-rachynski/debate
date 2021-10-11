import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getSpeeches, pushSpeech, setRoundRating} from "../../../../redux/game-reducer";
import Round from "./Round";

const RoundContainer = (props) => {
    useEffect(() => {
        props.currentGame.id &&
        props.getSpeeches(props.currentGame.id)
    },[props.currentGame.id])

    return <div>{props.rounds
        .sort((a, b) => (a.id > b.id) ? 1 : -1)
        .map(round =>
            <Round key={round.id}
                   roundId={round.id}
                   roundType={round.round_type}
                   team={round.team}
                   rating={round.rating}
                   startTime={round.created_at}
                   setRoundRating={props.setRoundRating}
                   ratingChange={props.ratingChange}
                   changedRoundRatings={props.changedRoundRatings}
                   {...props}
            />)}
    </div>
}

const mapStateToProps = (state) => {
    return {
        currentGame: state.game.currentGame,
        isAuth: state.auth.isAuth,
        currentUserId: state.auth.currentUserId,
        currentUserRole: state.game.currentGame.current_user_role,
        ratingChange: state.game.ratingChange,
        changedRoundRatings: state.game.changedRoundRatings
    }
}

export default connect(mapStateToProps, {pushSpeech, setRoundRating, getSpeeches})(RoundContainer)