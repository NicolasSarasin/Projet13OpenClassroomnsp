import "../../css/main.css";
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx";
import { HeaderNavigation2 } from "../HeaderNavigations/HeaderNavigations.jsx"
import ReceptAPI from "../../Services/ReceptAPI.js";
/*import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "./models";*/

function UserSite(){
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
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
    const handleEditName = () => {
        setIsDetailsVisible(true);
    }
    const handleCancel = () =>{
        setIsDetailsVisible(false);
    }
    const handleSave= ()=> {
        setIsDetailsVisible(false);
    }
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
    const EditValueInputs= ()=>{
        const inputValue1=""
        const inputValue2=""
        const Save=""
        const Cancle=""
    };
    return(
        <div className="html body">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation2/>
                <main className="main bg-dark">
                    {/*Div header*/}
                    <div className={(isDetailsVisible ? "Hidden" : "header")}>
                        <h1>Welcome back<br /> Tony Jarvis!{/*userMain.firstName + " " + userMain.lastName + "!"*/}</h1>
                        <button className="edit-button" onClick={()=>handleEditName()} >Edit Name</button>
                    </div>
                    {/*Div Edit-Name*/}
                    <div className={(isDetailsVisible ? "header" : "Hidden")}>
                        <form className="formulariEdit-Name">
                            <div className="input-wrapper-2">
                                <input type="text" id="username" className="inputs" value="Tony" /*value={userMain.firstName}*//>
                                <input type="text" id="lastname" className="inputs" value="Jarvis" /*value={userMain.lastName}*//>
                            </div>
                            <div className="input-wrapper-2">
                                <button type="button" onClick={() =>
                                    handleSave()
                                } className="save-button" >Save</button>
                                <button type="button" onClick={() =>
                                    handleCancel()
                                } className="cancel-button" >Cancel</button>
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