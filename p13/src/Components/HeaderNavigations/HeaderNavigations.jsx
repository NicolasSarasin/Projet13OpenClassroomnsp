import "../../css/main.css"
import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import UserAPI from "../../Services/UserAPI";

function HeaderNavigation1(){
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
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
function HeaderNavigation2(){
    const {mail, password}= useParams;
    const [userMain, setUserMain] = useState({
        token:UserAPI.LoginAPI(mail,password),
        body:{
            firstName:"",
            lastName:"",
        }
    });
    useEffect(() => {
	  const fetchData = async () => {
		const dataUserHeader = await UserAPI.ProfileAPI();
		setUserMain(dataUserHeader); // Set the fetched data
	  };
	  fetchData();  // Invoke the fetch function
	});
    return(
        <div className="html">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {userMain.body.firstName/*Tony*/}
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

export default HeaderNavigation1
export {HeaderNavigation2} 