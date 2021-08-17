import React, {useState} from 'react'
import style from './GameMenu.module.css'
import {NavLink} from "react-router-dom";
import {MdFiberNew, MdLiveHelp} from 'react-icons/md';
import NewGame from "./NewGame/NewGame";

const GameMenu = (props) => {
    const [newGamePopUp, setNewGamePopUp] = useState(false)

    const changePopUp = () => {
        newGamePopUp ? setNewGamePopUp(false) : setNewGamePopUp(true)
    }
    return (<div className={style.gamesMenu}>
        {props.isAuth && <div className={style.newGameButton} onClick={changePopUp}><MdFiberNew /></div>}
        {newGamePopUp && <NewGame changePopUp={changePopUp}/>}
        <NavLink to="/rules" className={style.rulesButton}><MdLiveHelp /></NavLink>
    </div>)
}

export default GameMenu