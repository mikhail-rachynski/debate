import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import {Route} from 'react-router-dom';
import User from "./components/User/User";
import Login from "./components/Login/Login";

function App() {
  return (
      <div className="App">
        <Header />
        <div>
          <Route exact path='/' render={() => <Start /> } />
          <Route path='/users' render={() => <User /> } />
          <Route path='/login' render={() => <Login /> } />
        </div>

      </div>
  );
}

export default App;