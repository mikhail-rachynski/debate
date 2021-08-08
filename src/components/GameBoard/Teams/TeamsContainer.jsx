import React, {useEffect, useState} from 'react'
import style from './Teams.module.css'
import {connect} from "react-redux";
import RoundContainer from "./Round/RoundContainer";

const TeamsContainer = ({rounds}) => {
    const [government, setGovernment] = useState([])
    const [opposition, setOpposition] = useState([])

    const roundMapper = (team) => {
        return rounds.filter(round => round.team === team)
    }
    useEffect(() => {
        setGovernment(roundMapper("government"))
        setOpposition(roundMapper("opposition"))
    },[rounds])

    return <div>{rounds.length > 0
        ? <div className={style.teams}>
            <div className={style.government}>
                <div className={style.title}>Government</div>
                <RoundContainer rounds={government}/>
            </div>
            <div className={style.opposition}>
                <div className={style.title}>Opposition</div>
                <RoundContainer rounds={opposition}/>
            </div>
        </div>
        : <div>GAME IS NOT STARTED</div>}
    </div>

}
const mapStateToProps = (state) => {
    return {
        rounds: state.games.rounds
    }
}

export default connect(mapStateToProps, null)(TeamsContainer)