import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Menu.module.css"

class Menu extends React.Component {
    render() {
        return (
            <div><div className={style.dropdown} >
                <div id="myDropdown" className={style.dropdownContent} onClick={this.props.onMenuClicked}>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                    <NavLink to={"/history"}>Game history</NavLink>
                    <a onClick={this.props.signOut}>Sign Out</a>
                </div>
            </div>
                <div className="close" onClick={this.props.onMenuClicked}/>
            </div>
        )
    }
}

export default Menu