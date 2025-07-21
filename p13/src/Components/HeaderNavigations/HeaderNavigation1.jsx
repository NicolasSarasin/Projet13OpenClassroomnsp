import "../../css/main.css"
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";

function HeaderNavigation1() {
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </div>
    );
}
export default HeaderNavigation1