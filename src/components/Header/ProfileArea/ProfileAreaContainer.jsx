import React from "react"
import style from "./ProfileArea.module.css";
import MenuContainer from "./Menu/MenuContainer";
import NotificationsContainer from "./Notifications/NotificationsContainer";

const ProfileAreaContainer = () => {
    return <div className={style.profileArea}>
        <div className={style.menu}>
            <MenuContainer/>
        </div>
        <div className={style.notifications}>
            <NotificationsContainer/>
        </div>
    </div>
}

export default ProfileAreaContainer