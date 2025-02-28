import "../../css/main.css"
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx"
import HeaderNavigation1  from "../HeaderNavigations/HeaderNavigations.jsx"
import ReceptAPI from "../../Services/ReceptAPI.js";
//import { useSelector, useStore } from "react-redux";
//import { SuperCremeux } from "./models";

function SignToSite(){
    const [userMain, setUserMain] = useState({
        firstName:"",
        lastName:"",
    });
    useEffect(() => {
        const fetchData = async () => {
        const dataUserMain = await ReceptAPI.getUserMain();
        setUserMain(dataUserMain); // Set the fetched data
        };
        fetchData();  // Invoke the fetch function
    });
    //const store = useStore();
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
                            <input type="text" id="username" required/>
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
                        {/*PLACEHOLDER DUE TO STATIC SITE
                        <Link to="/profile" className="sign-in-button">Sign In</Link>*/}
                        {/*SHOULD BE THE BUTTON BELOW */} 
                        <button /*onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}*/ className="sign-in-button" formaction="/profile">Sign In </button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default SignToSite