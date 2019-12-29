import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="list-group">
                <NavLink to="/list" activeClassName="active" className="list-group-item ">list</NavLink>
                <NavLink to="/form" activeClassName="active" className="list-group-item ">add</NavLink>
            </div>
        );
    }
}

export default Menu;