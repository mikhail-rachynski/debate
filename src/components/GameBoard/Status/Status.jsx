import React from 'react'
import style from './Status.module.css'
import {NavLink} from "react-router-dom";

export const Status = ({currentGame, currentUserRole}) => {
    return(<div className={style.status}>
        <div className={style.topic}>{currentGame.topic}</div>
        <div className={style.usersList}>Users: {currentGame.users &&
        currentGame.users.map((user, index) =>
            <span key={user.id}>
                {(index? ', ': '')}
                <NavLink to={'/profile/' + user.id} title={user.role}>
                                {user.name}
                            </NavLink>
                    </span>
        )}</div>
        <div className={style.role}>Your role: {currentUserRole}</div>
    </div>)
}

export default Status