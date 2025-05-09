import "../../css/main.css";
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx";
import { HeaderNavigation2 } from "../HeaderNavigations/HeaderNavigations.jsx"
import UserAPI from "../../Services/UserAPI.js";
//import { dispatch } from '@reduxjs/toolkit';
//import { useSelector, useStore } from "react-redux";
/*import { SuperCremeux } from "./models";*/

function UserSite(){
    const {isDetailsVisible, setIsDetailsVisible} = useState(false);
    const {userMain, setUserMain} = useState({
        //token:LoginAPI.SetUserToken(loginData.token),
        firstName:"",
        lastName:"",
    });
    useEffect(() => {
        const fetchData = async () => {
          const dataUserMain = await UserAPI.LoginAPI();
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
        EditValueInputs();
    }
    //const dispatch = useDispatch();
    const EditValueInputs= ()=>{
        const inputValue1 = document.getElementById("username").value;
        const inputValue2 = document.getElementById("lastname").value;
        const Save = document.getElementById("save-button");
        const Cancel = document.getElementById("cancel-button").value;
        if(Save.click && inputValue1 && inputValue2){
            //inputValue1 and inputValue2 pushed to modifiatein data base;
            /*dispatch(inputValue1);
            dispatch(inputValue2);*/
        }
        else{}
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
                                } className="save-button" id="save-button">Save</button>
                                <button type="button" onClick={() =>
                                    handleCancel()
                                } className="cancel-button" id="cancel-button">Cancel</button>
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