import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./redux/redux-store";
import { IconContext } from "react-icons";

ReactDOM.render(
    <BrowserRouter>
        <IconContext.Provider value={{size: "1.5em", className: "icon-class-name" }}>
            <Provider store={store}>
                <App />
            </Provider>
        </IconContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();