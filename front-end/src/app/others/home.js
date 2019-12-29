import React, {Component} from 'react';
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history"
import Form from "../category/ui/form/category-form";
import List from "../category/ui/list/list";
import {BrowserRouter} from "react-router-dom";
import CategoryContainer from "../category/ui/layout/container";
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
                        <Route path="/category/" component={CategoryContainer}/>
                        <Route path="/product/" component={ProductContainer}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default Home;