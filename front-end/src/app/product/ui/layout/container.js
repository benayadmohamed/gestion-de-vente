import React, {Component} from 'react';
import {BrowserRouter, NavLink, Redirect} from "react-router-dom";
import {Route} from "react-router";
import List from "../list/list";
import Form from "../form/form";
import Menu from "./menu";

class ProductContainer extends Component {
    render() {
        return (
            <div>
                <BrowserRouter basename="/home/product">

                    <div className="row">

                        <div className="col-3">
                            <Menu/>
                        </div>
                        <div className="col-9">

                            <div>
                                <Route exact path="/" render={() => (
                                    <Redirect to="/list"/>
                                )}/>

                                <Route path="/form" component={Form}/>
                                <Route path="/list" component={List}/>
                            </div>
                        </div>

                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default ProductContainer;