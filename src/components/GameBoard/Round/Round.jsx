import React from 'react'
import style from './Round.module.css'
import SpeechContainer from "./Speech/SpeechContainer";

class Round extends React.Component {
    render() {
        return (<div className={style.round}>
            <div className={style.roundItem}>
                <SpeechContainer roundId={this.props.roundId} roundType={this.props.roundType}/>
            </div>
        </div>)
    }
}

export default Round