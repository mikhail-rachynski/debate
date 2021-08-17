import React from 'react'
import Header from "./Header";
import {authMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe(this.props.currentUserId)
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.currentUserId,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {authMe})(HeaderContainer)