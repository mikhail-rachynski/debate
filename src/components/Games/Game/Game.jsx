import React from 'react'
import style from './Game.module.css'
import {ImExit} from 'react-icons/im';
import {
    MdPlayArrow,
    MdPeopleOutline,
    BiPauseCircle,
    IoGameControllerOutline,
    BsChevronCompactDown,
    BsChevronCompactUp,
    BiKey, FaFlagCheckered
} from "react-icons/all";
import {NavLink} from "react-router-dom";
import Details from "./Details/Details";

class Game extends React.Component {
    state = {
        editMode: false,
        viewDetails: this.props.gameDetailsOpened,
        topic: this.props.game.topic
    }
    viewDetails = (e) => {
        e.stopPropagation()
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }
    play = () => {
        this.props.addPlayer(this.props.game.id, this.props.currentUserId)
    }
    exit = () => {
        this.props.exitPlayerFromGame(this.props.game.id, this.props.currentUserId)
    }
    deleteCurrentGame = () => {
        this.props.deleteGame(this.props.game.id)
    }
    onTopicChange = (e) => {
        this.setState( {
            topic: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateGameTopic(this.props.game.id, this.state.topic)
    }
    status = () => {
        switch(this.props.game.status){
            case "waiting": {
                return this.props.game.users && this.props.game.users.some(item => item.id === this.props.currentUserId)
                    ? <ImExit title="Exit"
                              onClick={this.exit}/>
                    : this.props.isAuth
                        ? <MdPlayArrow title="Play"
                                       onClick={this.play}/>
                        : <BiKey title="Login or register"/>
            }
            case "progress": {
                return <NavLink to={"/game/" + this.props.game.id}>
                    <IoGameControllerOutline title="Game started" />
                </NavLink>
            }
            case "pause": {
                return <BiPauseCircle />
            }
            case "finished": {
                return <NavLink to={"/game/" + this.props.game.id}>
                    <FaFlagCheckered title="Game finished" />
                </NavLink>
            }
        }

    }

    render() {
        return <div>
            <div className={style.game}>
                <div className={style.details}
                     onClick={this.viewDetails}>
                    {!this.state.viewDetails
                        ? <BsChevronCompactDown/>
                        : <BsChevronCompactUp/>}
                </div>
                {!this.state.editMode &&
                <NavLink className={style.topic} to={"/game/" + this.props.game.id}>
                    {this.state.topic}</NavLink>
                }
                {this.state.editMode &&
                <input onChange={this.onTopicChange}
                       autoFocus={true}
                       onBlur={this.deActivateEditMode}
                       value={this.state.topic}/>
                }
                <div className={style.rating}>
                    <div className={style.scale}
                         style={{width: `${this.props.game.score}%`}}/>
                </div>
                <div className={style.users} onClick={this.viewDetails}>
                    <MdPeopleOutline size="1em"/> {this.props.game.users && this.props.game.users.length}
                </div>
                <div className={style.status}>
                    {this.status()}
                </div>
            </div>
            {
                this.state.viewDetails
                    ? <Details users={this.props.game.users}
                               editable={this.props.game.editable}
                               time={this.props.game.time}
                               gameId={this.props.game.id}
                               editMode={this.state.editMode}
                               activateEditMode={this.activateEditMode}
                               deActivateEditMode={this.deActivateEditMode}
                               deleteCurrentGame={this.deleteCurrentGame} />
                    : null
            }
        </div>
    }
}

export default Game