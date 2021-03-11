import React from 'react'
import style from './GameMenu.module.css'
import {NavLink} from "react-router-dom";

const GameMenu = () => {
    return (<div className={style.gamesMenu}>
        <NavLink to="/new" className={style.newGameButton}>New game</NavLink>
        <NavLink to="/rules" className={style.rulesButton}>Rules</NavLink>

    </div>)
}

export default GameMenu