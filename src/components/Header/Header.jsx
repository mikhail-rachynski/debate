import React from 'react'
import style from './Header.module.css'
import logo from './../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import MenuContainer from "./Menu/MenuContainer";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <NavLink to="/"><img src={logo} /></NavLink>
            </div>
            <div className={style.headerMenu}>
                <MenuContainer />
            </div>

        </div>
    )
}

export default Header