/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "../../css/main.css"
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx"
import HeaderNavigation1  from "../HeaderNavigations/HeaderNavigations.jsx"
import UserAPI from "../../Services/UserAPI.js";
//import { useSelector, useStore } from "react-redux";
//import { SuperCremeux } from "./models";

function SignToSite(){
    const [isUserToDataBaseCorect, setIsUserToDataBaseCorect] = useState(false);
    const {token, setToken} = useState(null);
    const [user, setUser] = useState(null)
    const login = async () => {
        const emailUser = document.getElementById("username");
        const passwordUser = document.getElementById("password");
        const dataUserMain = await UserAPI.LoginAPI(emailUser.value, passwordUser.value);
        //setUser(dataUserMain); Set the fetched data
    };
    useEffect(() => {
        document.title = "Argent Bank - Home Page"; // Changer le titre ici
    }, []);
    /*const TokenForNextPage = async () =>{
        const DataToken = await UserAPI.LoginAPI(emailUser.value, passwordUser.value);
        setToken(DataToken);
    };*/
    /*const login = async (userName, password) => {
        // appel API login
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userName, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                const loginData = usersDataAdapter.fromLoginAPI(data);
                setToken(loginData.token);
            } else {
                console.error("Échec de la connexion :", data.message);
            }
        } catch (error) {
            console.error("Erreur réseau ou de parsing :", error);
        }
        // appel API get user
        try {
            const response2 = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userName, password }),
            });
    
            const data2 = await response2.json();
    
            if (response2.ok) {
                const loginData = usersDataAdapter.fromUserAPI(data2);
                setToken(loginData.token);
            } else {
                console.error("Échec de la connexion :", data2.message);
            }
        } catch (error) {
            console.error("Erreur réseau ou de parsing :", error);
        };
    };

    const fromLoginAPI = (data) => {
        return {
            token: data.token
        };
    };
    const fromUserAPI = (data) => {
        return {
            firstName: data.firstName,
            lastName: data.lastName
        };
    };*/
    
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
                            <input type="text" id="username" required/>
                            <div className={(isUserToDataBaseCorect ? "DisplayMessageError" : "NoneMessageError")}/*"ErrorMessage"*/ id="ErrorMessage1">
                                <p>Please, verify your username</p>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required/>
                            <div className={(isUserToDataBaseCorect ? "DisplayMessageError" : "NoneMessageError")}/*"ErrorMessage"*/ id="ErrorMessage2">
                                <p>Please, verify your password</p>
                            </div>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">
                            Remember me
                            </label>
                        </div>
                        {/*PLACEHOLDER DUE TO STATIC SITE
                        <Link to="/profile" className="sign-in-button">Sign In</Link>*/}
                        {/*SHOULD BE THE BUTTON BELOW */}
                        {/*formAction="/profile"*/} 
                        <button onClick={()=>login()}/*onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}*/
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