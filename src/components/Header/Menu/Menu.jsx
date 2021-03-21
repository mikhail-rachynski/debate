import "./Menu.css";
import React from "react";
import {NavLink} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <div><div className="dropdown" >
                <div id="myDropdown" className="dropdown-content" onClick={this.props.onMenuClicked}>
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