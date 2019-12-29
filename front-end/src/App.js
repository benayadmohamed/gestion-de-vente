import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Router} from "react-router";
import Login from "./app/others/login";
import Page404 from "./app/others/page404";
import Home from "./app/others/home";
import {createBrowserHistory} from "history"
import {createStore} from "redux";
import rootReducer from "./app/store/root-reducers";
import {REQUEST_ADD_CAT} from "./app/customer/store/actions";
import Customer from "./app/customer/model/customer";
import rootStore from "./app/store/root-store";

const history = createBrowserHistory()
console.log(rootStore.getState())


// rootStore.dispatch({
//     type: REQUEST_ADD_CAT,
//     customer: new Customer(10, 'salaaaaaaam')
// });
//
// console.log(rootStore.getState());

function App() {
    return (
        <div className="App">

            <Router history={history}>

                <div>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/404" component={Page404}/>
                </div>

            </Router>
        </div>
    );
}

export default App;
