import "../../css/main.css"
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx"
import HeaderNavigation1  from "../HeaderNavigations/HeaderNavigations.jsx"
import ReceptAPI from "../../Services/ReceptAPI.js";
//import { useSelector, useStore } from "react-redux";
//import { SuperCremeux } from "./models";

function SignToSite(){
    const [isUserToDataBaseCorect, setIsUserToDataBaseCorect] = useState(false);
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
    fetch("http://localhost:3001/api/v1/user/login", postMessage)
    .then(response =>  response.json())
    .then(loginData => {
        if(loginData.status !== "200")
        {
            console.log("Mail and/or password invalid")
            return;
        }
        const token = loginData.body.token;
        // enregistrer le token quelque part
        return fetch("http://localhost:3001/api/v1/user/profile", token)
        .then(response => response.json())
        .then(userData => {
            const firstName = userData.body.firstName;
            const lastName = userData.body.lastName;
            // enregistrer firstName et lastName quelque part
        });
        })
    .catch(e => {
        console.log('Il y a eu un problème avec la récupération des données:',e);
    });
    const FormToNextPage = () =>{
        let FirstName = document.getElementById("username").value;
        let Password = document.getElementById("password").value;
        if (Password === userMain.password && FirstName === userMain.firstName){
            setIsUserToDataBaseCorect(true);
        }
        else{
            if (Password === userMain.password && FirstName !== userMain.firstName){
                setIsUserToDataBaseCorect(false);
            }
            else if (Password !== userMain.password && FirstName === userMain.firstName){
                setIsUserToDataBaseCorect(false);
            }
            else if (Password !== userMain.password && FirstName !== userMain.firstName){
                setIsUserToDataBaseCorect(false);
            }
        }
    }
    const UserToDataBase = () => {
        let firstName = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        const errorMessage1 = document.getElementById("ErrorMessage1");
        const errorMessage2 = document.getElementById("ErrorMessage2");
        if(password === userMain.password && firstName === userMain.firstName){
            console.log(userMain);
            errorMessage1.style.display="none";
            errorMessage2.style.display="none";
            return true;
        }
        else if (password === userMain.password && firstName !== userMain.firstName){
            console.log('Il y a eu un problème avec la récupération des données:');
            errorMessage1.style.display="block";
            errorMessage2.style.display="none";
            return false;
        }
        else if (password !== userMain.password && firstName === userMain.firstName){
            console.log('Il y a eu un problème avec la récupération des données:');
            errorMessage1.style.display="none";
            errorMessage2.style.display="block";
            return false;
        }
        else {
            console.log('Il y a eu un problème avec la récupération des données:');
            errorMessage1.style.display="block";
            errorMessage2.style.display="block";
            return false;
        } 
    }
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
                                <p>Please to verify your username</p>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required/>
                            <div className={(isUserToDataBaseCorect ? "DisplayMessageError" : "NoneMessageError")}/*"ErrorMessage"*/ id="ErrorMessage2">
                                <p>Please to verify your password</p>
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
                        <button onClick={()=>FormToNextPage()} /*onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}*/ className="sign-in-button" formaction="/profile">Sign In </button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default SignToSite