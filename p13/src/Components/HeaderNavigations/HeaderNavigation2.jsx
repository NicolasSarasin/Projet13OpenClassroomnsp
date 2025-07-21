import "../../css/main.css"
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserAPI from "../../Services/UserAPI";
import logo from "../../assets/img/argentBankLogo.png";

function HeaderNavigation2(){
    const navigate = useNavigate();
    const [userMain, setUserMain] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("Token");
        if(token == null){
            navigate("/login");
        }
        const fetchData = async () => {
            const dataUserHeader = await UserAPI.ProfileAPI(localStorage.getItem("Token"));
            setUserMain(dataUserHeader); // Set the fetched data
        };
        fetchData();  // Invoke the fetch function
	});
    if (!userMain || !userMain.body){
        return <p>Loading</p>;
    }
    return(
        <div className="html">
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
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {userMain.body.firstName}
                    </Link>
                    <Link className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default HeaderNavigation2