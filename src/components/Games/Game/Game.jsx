import React from 'react'
import style from './Game.module.css'
import Details from "./Details/Details";

class Game extends React.Component {
    state = {
        viewDetails: false,
        game: this.props.game
    }
    ViewDetails = () => {
        this.setState({
            viewDetails: this.state.viewDetails ? false : true
        })
    }
    playButtonState = (e) => {
        e.stopPropagation()

        this.props.addPlayer(this.state.game.id, this.props.userId)
    }
    componentDidUpdate(prevProps, prevState ) {
        if(prevProps.game !== this.props.game) {
            this.setState({
                game: this.props.game
            })
        }
    }
    render() {
        return (<div><div onClick={this.ViewDetails} className={style.game}>
            <div className={style.topic}>{this.state.game.topic}</div>
            <div className={style.users}>{this.state.game.users_count}</div>
            <span className={style.status}>{this.state.game.status}</span>
            <button onClick={this.playButtonState} disabled={this.state.game.status === "progress"} className={style.option}>Play</button>
        </div>{this.state.viewDetails ? <Details users={this.state.game.users} gameId={this.state.game.id}/> : null}</div>)
    }
}

export default Game