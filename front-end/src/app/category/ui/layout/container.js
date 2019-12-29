import React, {Component} from 'react';
import {BrowserRouter, NavLink, Redirect} from "react-router-dom";
import {Route} from "react-router";
import ConnectedList from "../list/list";
import Form from "../form/category-form";
import Menu from "./menu";

class CategoryContainer extends Component {
    render() {
        return (
            <div>
                <BrowserRouter basename="/home/category">

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
                                <Route path="/list" component={ConnectedList}/>
                            </div>
                        </div>

                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default CategoryContainer;