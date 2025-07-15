import "../../css/main.css";
//import {useStore} from 'react-redux';
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx";
import { HeaderNavigation2 } from "../HeaderNavigations/HeaderNavigations.jsx"
import UserAPI from "../../Services/UserAPI.js";
import { useNavigate } from "react-router-dom";
//import { Provider, useDispatch/*, useSelector, useStore*/ } from 'react-redux';
//import { store } from '../../App/store';
/*import { SuperCremeux } from "./models";*/

function UserSite(){
    //const store = useStore();
    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const [isPutValue, setIsPutValue] = useState(false);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [userMain, setUserMain] = useState(null);
    console.log("userMain",userMain);
    useEffect(() => {
        const token = localStorage.getItem("Token");
        if(token == null){
            navigate("/login");
        }
        document.title = "Argent Bank - Home Page";
        const fetchData = async () => {
            console.log("fetchData")
            const dataUserMain = await UserAPI.ProfileAPI(localStorage.getItem("Token"));
            setUserMain(dataUserMain); // Set the fetched data
            console.log("dataUserMain",dataUserMain)
        };
        fetchData();  // Invoke the fetch function
    },[navigate]);
    useEffect(() => {
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const fetchDataPut = async () => {
            const dataUserPut= await UserAPI.ChangingProfileAPI(localStorage.getItem("Token"),firstName,lastName);
            setUserMain(dataUserPut);
        };
        fetchDataPut(); //Invoke the fetch function with put method
    });
    const handleEditName = () => {
        setIsDetailsVisible(true);
    }
    const handleCancel = () =>{
        setIsDetailsVisible(false);
    }
    const handleSave= ()=> {
        setIsDetailsVisible(false);
        PutValue();
    }
    const PutValue= async ()=>{
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const token = await UserAPI.ChangingProfileAPI(firstName.value, lastName.value);
        if (token == null){
            setIsPutValue(true);
            navigate("/login");
        }
        else{
            setIsPutValue(false);
        }
        if(firstName || lastName ){
            //inputValue1 and inputValue2 pushed to modifiate in data base;
            if(firstName){
                //dispatch(firstName);
            }
            else{
                //dispatch(lastName);
            }
        }
        else{
            return null;
        }
    };
    if (!userMain || !userMain.body){
        return <p>Loading</p>;
    }{/*<Provider /*store={store}></Provider>*/}
    return(
        <div className="html body">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation2/>
                <main className="main bg-dark">
                    {/*Div header*/}
                    <div className={(isDetailsVisible ? "Hidden" : "header")}>
                        <h1>Welcome back<br /> {userMain.body.firstName + " " + userMain.body.lastName + "!"}</h1>
                        <button className="edit-button" onClick={()=>handleEditName()} >Edit Name</button>
                    </div>
                    {/*Div Edit-Name*/}
                    <div className={(isDetailsVisible ? "header" : "Hidden")}>
                        <form className="formulariEdit-Name" method="put">
                            <div className="input-wrapper-2">
                                <input type="text" id="firstname" className="inputs" value={userMain.body.firstName}/>
                                <input type="text" id="lastname" className="inputs" value={userMain.body.lastName}/>
                            </div>
                            <div className="input-wrapper-2">
                                <button type="button" onClick={() =>
                                    handleSave()
                                } className="save-button" id="save-button">Save</button>
                                <button type="button" onClick={() =>
                                    handleCancel()
                                } className="cancel-button" id="cancel-button">Cancel</button>
                                {isPutValue && (<div className="DisplayMessageError" id="ErrorMessage1">
                                    <p>Invalid renaming of first name or last name</p>
                                </div>)}
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