import React from 'react'
import style from './Details.module.css'
import {NavLink} from "react-router-dom";

const Details = (props) => {
    return (<div className={style.details}>
        <NavLink to="/game" className={style.topic}>{props.topic}</NavLink>
        <div className={style.users}>
            {props.users.length !== 0 ? props.users.map((user, index) =>
                    <span key={user.id}>{(index? ', ': '')}
                        <NavLink to={'/profile/' + user.id}>{user.name}</NavLink>
                    </span>)
                : "Waiting for players"}
        </div>
        <span className={style.status}>{props.status}</span>
        <NavLink to={"/game/" + props.gameId}><button className={style.option}>Enter to game</button></NavLink>
        {/*<NavLink to="/game"><button disabled={props.status !== "finished"} className={style.option}>Details</button></NavLink>*/}
    </div>)
}

export default Details