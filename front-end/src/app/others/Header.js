import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <NavLink to="/customer/" activeClassName="selected" className="nav-link">Customer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product/" activeClassName="selected" className="nav-link">Product</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;