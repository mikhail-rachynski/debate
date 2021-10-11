import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Menu.module.css"
import profilePhoto from "../../../../assets/images/small_profile_photo.jpg";

const Menu = ({signOut, userName}) => {
    return (
        <div>
            <div className={style.dropdown} >
                <div id="myDropdown" className={style.dropdownContent}>
                    <div className={style.logged}>
                        <span className={style.loggedTitle}>Signed in as {userName}</span>
                        <img src={profilePhoto} className={style.loggedImg} alt={userName}/>
                    </div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink>
                    <NavLink to={"/history"} activeClassName={style.active}>Game history</NavLink>
                    <a onClick={signOut}>Sign Out</a>
                </div>
            </div>
        </div>
    )
}

export default Menu