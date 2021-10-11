import React from 'react'
import style from './GameMenu.module.css'
import {NavLink} from "react-router-dom";
import {MdFiberNew, MdLiveHelp} from 'react-icons/md';

const GameMenu = ({isAuth, gamesLength, changePopUp}) => {
    return (<div className={style.gamesMenu}>
        {isAuth  && gamesLength > 0 && <div className={style.newGameButton} onClick={changePopUp}><MdFiberNew /></div>}

        <NavLink to="/rules" className={style.rulesButton}><MdLiveHelp /></NavLink>
    </div>)
}

export default GameMenu