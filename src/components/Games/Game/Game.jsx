import React from 'react'
import style from './Game.module.css'
import Details from "./Details/Details";
import {ImExit} from 'react-icons/im';
import {MdPlayArrow,
    MdPeopleOutline,
    BiPauseCircle,
    BiTime,
    IoGameControllerOutline,
    BsChevronCompactDown,
    BsChevronCompactUp,
    BiKey
} from "react-icons/all";
import {NavLink} from "react-router-dom";

class Game extends React.Component {
    state = {
        editMode: false,
        viewDetails: false,
        topic: this.props.game.topic
    }
    viewDetails = () => {
        this.setState({
            viewDetails: this.state.viewDetails ? false : true
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
                return this.props.game.users.some(item => item.id === this.props.currentUserId)
                    ? <ImExit title="Exit"
                              onClick={this.exit}/>
                    : this.props.isAuth
                        ? <MdPlayArrow title="Play"
                                       onClick={this.play}/>
                        : <BiKey title="Login or register"/>
            }
            case "progress": {
                return <IoGameControllerOutline title="Game is started" />
            }
            case "pause": {
                return <BiPauseCircle />
            }
            case "finished": {
                return <BiTime />
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
                <div className={style.play}>
                    {

                    }
                </div>
                <div className={style.users}>
                    <MdPeopleOutline size="1em"/> {this.props.game.users_count}
                </div>
                <div className={style.status}>
                    {this.status()}
                </div>


            </div>
            {
                this.state.viewDetails
                    ? <Details users={this.props.game.users}
                               {...this.props}
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