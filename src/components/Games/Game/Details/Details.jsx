import React from 'react'
import style from './Details.module.css'
import {NavLink} from "react-router-dom";
import {AiFillEdit, AiOutlineEdit} from "react-icons/ai";
import {MdDeleteForever} from "react-icons/md";

class Details extends React.Component {

    render() {
        return (<div className={style.details}>
            <div className={style.option}>
                {this.props.currentUserId === this.props.game.creator &&
                <div>
                    {this.props.editMode
                        ? <AiOutlineEdit />
                        : <AiFillEdit onClick ={this.props.activateEditMode} />}
                    <MdDeleteForever onClick={this.props.deleteCurrentGame} />
                </div>}
            </div>
            <div className={style.status}>Created: {this.props.game.time}</div>
            <div className={style.users}>
                {this.props.users.length !== 0
                    ? this.props.users.map((user, index) =>
                        <span key={user.id}>{(index? ', ': '')}
                            <NavLink to={'/profile/' + user.id}>
                                {user.name}
                            </NavLink>
                    </span>)
                    : "Waiting for players"}
            </div>
        </div>)
    }


}

export default Details