import './App.css';
import React from "react";
import {withRouter, Route} from 'react-router-dom';
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/Signup/Signup";
import HeaderContainer from "./components/Header/HeaderContainer";
import GamesContainer from "./components/Games/GamesContainer";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import LoaderApp from "./components/common/LoaderApp/LoaderApp";
import {withSuspense} from "./hoc/withSuspense";
import Preloader from "./components/common/Preloader/Preloader";

const GameBoardContainer = React.lazy(() => import("./components/GameBoard/GameBoardContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {
            return <LoaderApp />
        }
        return (
            <div className="container">
                <div className="header">
                    <HeaderContainer />
                </div>

                <div className="content">{this.props.isFetching && <Preloader/>}
                    <Route exact path='/' render={() => <GamesContainer /> } />
                    <Route path='/game/:id' render={withSuspense(GameBoardContainer)} />
                    <Route path='/login' render={() => <Login /> } />
                    <Route path='/signup' render={() => <SignUp /> } />
                </div>


            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isFetching: state.app.isFetching,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);