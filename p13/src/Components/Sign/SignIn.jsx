/* eslint-disable no-unused-vars */
import "../../css/main.css"
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx"
import HeaderNavigation1 from '../HeaderNavigations/HeaderNavigation1.jsx';
import UserAPI from "../../Services/UserAPI.js";
import { useNavigate } from "react-router-dom";
//import { useSelector, useStore } from "react-redux";
//import { SuperCremeux } from "./models";

function SignToSite(){
    //const [isUserToDataBaseCorect, setIsUserToDataBaseCorect] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    //const {Token, setToken} = useState(null);
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const login = async () => {
        const emailUser = document.getElementById("username");
        const passwordUser = document.getElementById("password");
        const checkBox = document.getElementById("remember-me").checked;
        console.log("beafore loginApi");
        const token = await UserAPI.LoginAPI(emailUser.value, passwordUser.value);
        if (token == null){
            //setIsUserToDataBaseCorect(true);
            setIsLoginError(true);
        }
        else{
            setIsLoginError(false);
            if(checkBox){
                sessionStorage.setItem("Token",token);
                navigate("/profile");
            }
            else{
                localStorage.setItem("Token",token);
                navigate("/profile");
            }
            /*localStorage.setItem("Token",token);
            navigate("/profile");*/
        }
        //setUser(LoginResult.token); //Set the fetched data
    };
    useEffect(() => {
        document.title = "Argent Bank - Home Page"; // Changer le titre ici
    }, []);
    
    return(
        <div className="html body">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation1/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required />
                            
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">
                            Remember me
                            </label>
                        </div>
                        {isLoginError && (<div className="DisplayMessageError" id="ErrorMessage1">
                            <p>Invalid username or password</p>
                        </div>)}
                        {/*PLACEHOLDER DUE TO STATIC SITE
                        <Link to="/profile" className="sign-in-button">Sign In</Link>*/}
                        {/*SHOULD BE THE BUTTON BELOW */}
                        {/*formAction="/profile"*/} 
                        <button type="button" onClick={()=>login()} /*onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}*/
                            className="sign-in-button">
                            Sign In 
                        </button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default SignToSite