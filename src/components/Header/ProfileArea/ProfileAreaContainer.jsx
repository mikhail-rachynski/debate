import React from "react"
import style from "./ProfileArea.module.css";
import MenuContainer from "./Menu/MenuContainer";
import {Notifications} from "./Notifications/Notifications";
import {connect} from "react-redux";

const ProfileAreaContainer = (props) => {
    return <div className={style.profileArea}>
        <div className={style.menu} onClick={(e) => e.stopPropagation()}>
            <MenuContainer/></div>
        <div className={style.userName}>{props.name}</div>
        <div className={style.notifications}><Notifications /></div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name
    }
}

export default connect(mapStateToProps, null)(ProfileAreaContainer)