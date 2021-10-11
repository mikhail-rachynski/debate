import React from 'react'
import style from './Details.module.css'
import {NavLink} from "react-router-dom";
import {MdDeleteForever, AiFillEdit, AiOutlineEdit, GrClose} from "react-icons/all";

const Details = ({editMode, editorMode, deleteCurrentGame, game, changeStateViewDetails}) => {
    return (<div className={style.details}>
        <div className={style.option}>
            {game.editable &&
            <div>
                {editMode
                    ? <AiOutlineEdit />
                    : <AiFillEdit onClick={editorMode} />}
                <MdDeleteForever onClick={deleteCurrentGame} />
            </div>}
        </div>
        <div className={style.status}>Created: {game.created_at}</div>
        <div className={style.users}>
            {game.users &&
            game.users.length !== 0
                ? game.users.map((user, index) =>
                    <span key={user.id}>{(index? ', ': '')}
                        <NavLink to={'/profile/' + user.id} title={user.role}>
                                {user.name}
                            </NavLink>
                    </span>)
                : "Waiting for players"}
        </div>
        <div className={style.close} onClick={changeStateViewDetails}>
            <GrClose color={"white"}/>
        </div>
    </div>)
}

export default Details