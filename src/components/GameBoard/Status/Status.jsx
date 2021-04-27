import React from 'react'
import style from './Status.module.css'

class Status extends React.Component {
    render() {

        return(<div className={style.status}>
            <div className={style.topic}>{this.props.currentGame.topic}</div>
            <div className={style.role}>{this.props.currentUserRole}</div>
        </div>)
    }
}

export default Status