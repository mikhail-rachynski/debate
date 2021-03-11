import "./Menu.css";

import React from "react";
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div><div className="dropdown" >

            <div id="myDropdown" className="dropdown-content">
                {props.items.map(item =>
                    <NavLink to={item.url}
                             key={item.id}
                             onClick={() => {props.onMenuClicked()}} >{item.name}</NavLink>)}

            </div>
        </div>
            <div className="close" onClick={() => {props.onMenuClicked()}}></div>
        </div>
    )
}

export default Menu