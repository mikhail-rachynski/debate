import React from 'react'
import {connect} from "react-redux"
import Menu from "./Menu";
import profilePhoto from "../../../assets/images/small_profile_photo.jpg";
import {signOut} from "../../../redux/auth-reducer";


class MenuContainer extends React.Component {
    state = {
        menuOpened: false
    }
    onMenuClicked = () => {
        if (this.state.menuOpened === true) {
            this.setState({
                menuOpened: false
            })
        } else {
            this.setState({
                menuOpened: true
            })
        }
    }
    render() {
        return <>
            {this.state.menuOpened
                ? <Menu signOut={this.props.signOut} items={this.props.items}
                        onMenuClicked={this.onMenuClicked}/>
                : null}
            <img src={profilePhoto}
                 alt={"User menu"}
                 className="dropimg"
                 onClick={() => { this.onMenuClicked() }}/>
        </>
    }
}

export default connect(null, {signOut})(MenuContainer)