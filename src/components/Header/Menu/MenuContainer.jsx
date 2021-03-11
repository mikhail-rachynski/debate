import React from 'react'
import {connect} from "react-redux"
import {setMenuState} from "../../../redux/menu-reducer";
import Menu from "./Menu";
import profilePhoto from "../../../assets/images/small_profile_photo.jpg";


class MenuContainer extends React.Component {
    componentDidMount() {
        this.props.setMenuState(false)
    }
    onMenuClicked = () => {
        if (this.props.menuState === true) {
            this.props.setMenuState(false)
        } else {
            this.props.setMenuState(true)
        }

    }
    render() {
        return <>

            {this.props.menuState ? <Menu items={this.props.items} onMenuClicked={this.onMenuClicked}/> : null}
            <img src={profilePhoto} alt={"User menu"} className="dropimg" onClick={() => { this.onMenuClicked() }}/>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        menuState: state.menuState.menuOpened,
        items: state.menuState.items
    }
}

export default connect(mapStateToProps, {setMenuState})(MenuContainer)