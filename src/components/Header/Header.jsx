import React from 'react'
import style from './Header.module.css'
import logo from './../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import MenuContainer from "./Menu/MenuContainer";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <NavLink to="/"><img src={logo} alt='home'/></NavLink>
            </div>
            <div className={style.userName}>{props.name}</div>
            {props.isAuth
                ? <div className={style.headerMenu}><MenuContainer /></div>
                : <div className={style.loginMenu}>{props.isFetching ? <Preloader /> : <><NavLink to="/signup" >Registration</NavLink><NavLink to="/login" >login</NavLink></>}</div>
            }
        </div>
    )
}

export default Header