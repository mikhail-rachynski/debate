import React from 'react'
import style from './GameMenu.module.css'
import {NavLink} from "react-router-dom";
import {MdFiberNew, MdLiveHelp} from 'react-icons/md';

const GameMenu = (props) => {
    return (<div className={style.gamesMenu}>
        {props.isAuth && <NavLink to="/new" className={style.newGameButton}><MdFiberNew /></NavLink>}
        <NavLink to="/rules" className={style.rulesButton}><MdLiveHelp /></NavLink>
    </div>)
}

export default GameMenu