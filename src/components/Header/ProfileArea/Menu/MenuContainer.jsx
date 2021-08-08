import React, {useState} from 'react'
import {connect} from "react-redux"
import Menu from "./Menu";
import profilePhoto from "../../../../assets/images/small_profile_photo.jpg";
import {signOut} from "../../../../redux/auth-reducer";
import style from "./Menu.module.css"

const MenuContainer = (props) => {
    let [dropDownOpened, setDropDownOpened] = useState(false)

    const onMenuClicked = () => {
        if (dropDownOpened === true) {
            setDropDownOpened(false)
        } else {
            setDropDownOpened(true)
        }
    }
    return <>
        {dropDownOpened
            ? <Menu signOut={props.signOut}
                    onMenuClicked={onMenuClicked}/>
            : null}
        <img src={profilePhoto}
             alt={"User menu"}
             className={style.dropimg}
             onClick={() => {onMenuClicked()}}/>
    </>

}

export default connect(null, {signOut})(MenuContainer)