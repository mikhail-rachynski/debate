import React from 'react'
import style from './Details.module.css'
import {NavLink} from "react-router-dom";
import {AiFillEdit, AiOutlineEdit} from "react-icons/ai";
import {MdDeleteForever} from "react-icons/md";

const Details = ({editable, editMode, activateEditMode, deleteCurrentGame, time, users}) => {
        return (<div className={style.details}>
        <div className={style.option}>
                    {editable &&
                <div>
                    {editMode
                        ? <AiOutlineEdit />
                        : <AiFillEdit onClick ={activateEditMode} />}
                    <MdDeleteForever onClick={deleteCurrentGame} />
                </div>}
            </div>
            <div className={style.status}>Created: {time}</div>
            <div className={style.users}>
                {users
                    ? users.map((user, index) =>
                        <span key={user.id}>{(index? ', ': '')}
                            <NavLink to={'/profile/' + user.id} title={user.role}>
                                {user.name}
                            </NavLink>
                    </span>)
                    : "Waiting for players"}
            </div>
        </div>)
}

export default Details