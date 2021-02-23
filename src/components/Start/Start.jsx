import React from 'react'
import style from './Start.module.css'
import {NavLink} from "react-router-dom";

const Start = () => {
    return (<div className={style.start}>
        <NavLink to="/start"><div className={style.enter}>Начать игру</div></NavLink>
    </div>)
}

export default Start