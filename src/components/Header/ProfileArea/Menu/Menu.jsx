import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Menu.module.css"

const Menu = ({onMenuClicked, signOut, userName}) => {
    return (
        <div>
            <div className={style.dropdown} >
                <div id="myDropdown" className={style.dropdownContent} onClick={onMenuClicked}>
                    <span>Signed in as {userName}</span>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                    <NavLink to={"/history"}>Game history</NavLink>
                    <a onClick={signOut}>Sign Out</a>
                </div>
            </div>
            <div className={style.close} onClick={onMenuClicked}/>
        </div>
    )
}

export default Menu