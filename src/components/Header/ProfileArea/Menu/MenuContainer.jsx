import React, {useState} from 'react'
import {connect} from "react-redux"
import Menu from "./Menu";
import profilePhoto from "../../../../assets/images/small_profile_photo.jpg";
import {signOut} from "../../../../redux/auth-reducer";
import style from "./Menu.module.css"

const MenuContainer = ({userName, signOut}) => {
    let [menuShown, setMenuShown] = useState(false)

    const showMenu = (e) => {
        e.stopPropagation();
        setMenuShown(true)
        document.addEventListener('click', closeMenu);
    }
    const closeMenu = () => {
        setMenuShown(false)
        document.removeEventListener('click', closeMenu);
    }

    return <>
        {menuShown
            ? <Menu signOut={signOut}
                    userName={userName}/>
            : null}
        <img src={profilePhoto}
             alt={"User menu"}
             className={style.dropimg}
             onClick={showMenu}/>
    </>
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName
    }
}

export default connect(mapStateToProps, {signOut})(MenuContainer)