import "../../css/main.css";
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx";
import { HeaderNavigation2 } from "../HeaderNavigations/HeaderNavigations.jsx"
import ReceptAPI from "../../Services/ReceptAPI.js";
/*import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "./models";*/

function UserSite(){
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
    useEffect(() => {
        document.title = "Argent Bank - Home Page"; // Changer le titre ici
    }, []);
    const handleDisplay = () => {
        const displayHeader = document.getElementsByClassName("header")[0];
        const displayEditName = document.getElementsByClassName("Edit-Name")[0];
        if (displayHeader !== (displayHeader.style.display = "none")){
            displayHeader.style.display = "none"
            displayEditName.style.display = "block"
        }
        else if (displayEditName !== (displayEditName.style.display = "none")){
            displayHeader.style.display = "block"
            displayEditName.style.display = "none"
        }
        else{
            console.error("Les éléments #myElement n'existe pas !");
        }
    }
    const handleDisplayEditName = () => {
        const displayHeader = document.getElementsByClassName("header")[0];
        const displayEditName = document.getElementsByClassName("Edit-Name")[0];
        if (displayEditName !== (displayEditName.style.display = "none")){
            displayHeader.style.display = "block"
            displayEditName.style.display = "none"
        }
        else if (displayHeader !== (displayHeader.style.display = "none")){
            displayHeader.style.display = "none"
            displayEditName.style.display = "block"
        }
        else{
            console.error("Les éléments #myElement n'existe pas !");
        }
    }
    return(
        <div className="html body">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation2/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />Tony Jarvis!</h1>
                        <button className="edit-button" onClick={handleDisplay} >Edit Name</button>
                    </div>
                    <div className="Edit-Name">
                        <form>
                            <div className="input-wrapper-2">
                                <input type="text" id="username" value="Tony" /*value={userMain.firstName}*//>
                                <input type="text" id="lastname" value="Jarvis" /*value={userMain.lastName}*//>
                            </div>
                            <div className="input-wrapper-2">
                                <button type="button" onClick={handleDisplayEditName}/*onClick={() => store.dispatch({type: 'SAVE', payload: SuperCremeux})}*/ className="save-button" >Save</button>
                                <button type="button" onClick={handleDisplayEditName}/*onClick={() => store.dispatch({type: 'CANCEL', payload: SuperCremeux})}*/ className="cancel-button" >Cancel</button>
                            </div>
                        </form>
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                            <p className="account-amount">$2,082.79</p>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                            <p className="account-amount">$10,928.42</p>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                            <p className="account-amount">$184.30</p>
                            <p className="account-amount-description">Current Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}
export default UserSite