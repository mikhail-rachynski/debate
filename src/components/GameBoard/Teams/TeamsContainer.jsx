import React from 'react'
import style from './Teams.module.css'
import {connect} from "react-redux";
import RoundContainer from "./Round/RoundContainer";

class TeamsContainer extends React.Component {
    render() {
        return (<div className={style.teams}>
            <div className={style.government}>
                <div className={style.title}>Government</div>
                <RoundContainer rounds={this.props.boards.government}/>
            </div>
            <div className={style.opposition}>
                <div className={style.title}>Opposition</div>
                <RoundContainer rounds={this.props.boards.opposition}/>
            </div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        boards: state.games.boards
    }
}

export default connect(mapStateToProps, null)(TeamsContainer)