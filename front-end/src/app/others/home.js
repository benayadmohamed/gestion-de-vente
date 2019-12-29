import React, {Component} from 'react';
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history"
import Form from "../customer/ui/form/customer-form";
import List from "../customer/ui/list/list";
import {BrowserRouter} from "react-router-dom";
import CustomerContainer from "../customer/ui/layout/container";
import Header from "./Header";
import ProductContainer from "../product/ui/layout/container";


class Home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter
                    basename="/home">
                    <Header/>
                    <div className="container">
                        <Route path="/customer/" component={CustomerContainer}/>
                        <Route path="/product/" component={ProductContainer}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default Home;