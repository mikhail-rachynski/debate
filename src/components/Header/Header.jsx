import React from 'react'
import style from './Header.module.css'
import Logo from "./Logo/Logo";
import ProfileAreaContainer from "./ProfileArea/ProfileAreaContainer";
import Authentication from "./Authentication/Authentication";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}><Logo/></div>
            <div className={style.userArea}>{props.isAuth
                ? <ProfileAreaContainer />
                : <Authentication isFetching={props.isFetching}/>
            }
            </div>
        </div>
    )
}

export default Header