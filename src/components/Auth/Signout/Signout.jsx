import React from 'react'
import {connect} from "react-redux";
import {signOut} from "../../../redux/auth-reducer";
import {compose} from "redux";
import {withAutoRedirectNonAuth} from "../../../hoc/withAutoRedirectNonAuth";

class Signout extends React.Component {
    componentDidMount() {
        localStorage.clear()
        this.props.signOut()
    }
    render() {
        return <div>Exited</div>
    }
}

export default compose(connect(null, {signOut}), withAutoRedirectNonAuth)(Signout)