import "../../css/main.css";
import React, { useEffect, useState } from 'react';
import Footer from "../Footer/Footer.jsx";
import HeaderNavigation2 from "../HeaderNavigations/HeaderNavigation2.jsx";
import UserAPI from "../../Services/UserAPI.js";
import { Provider } from "react-redux";
import  store  from '../../App/store.js';/**/
//import { useNavigate } from "react-router-dom";
function UserSite() {
    //const navigate = useNavigate();
    const [isPutValue, setIsPutValue] = useState(false);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [userMain, setUserMain] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("Token");
        const sessionToken = sessionStorage.getItem("Token");
        if (token == null && sessionToken== null) {
            return;
        }
        document.title = "Argent Bank - Home Page";
        const fetchData = async () => {
            console.log("fetchData");
            const dataUserMain = await UserAPI.ProfileAPI(token);
            setUserMain(dataUserMain);
            if (dataUserMain?.body) {
                setFirstName(dataUserMain.body.firstName);
                setLastName(dataUserMain.body.lastName);
            }
        };
        fetchData();
    },[]);
    const handleEditName = () => {
        setIsDetailsVisible(true);
    };
    const handleCancel = () => {
        setIsDetailsVisible(false);
        if (userMain?.body) {
            setFirstName(userMain.body.firstName);
            setLastName(userMain.body.lastName);
        }
    };
    const handleSave = () => {
        setIsDetailsVisible(false);
        PutValue();
    };
    const PutValue = async () => {
        const token = localStorage.getItem("Token");
        const updatedUser = await UserAPI.ChangingProfileAPI(token, firstName, lastName);
        if (updatedUser == null) {
            setIsPutValue(true);
        } else {
            setIsPutValue(false);
            setUserMain(updatedUser);
        }
    };
    if (!userMain || !userMain.body) {
        return <p>Loading...</p>;
    }//<Provider store = {store}></Provider>
    //
    return (
        <Provider store = {store}>
        <div className="html body">
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <HeaderNavigation2 />
            <main className="main bg-dark">
                {/* Div header */}
                <div className={isDetailsVisible ? "Hidden" : "header"}>
                    <h1>
                        Welcome back<br />{(userMain.body.firstName ?? "") + " " + (userMain.body.lastName ?? "") + "!"}
                    </h1>
                    <button className="edit-button" onClick={handleEditName}>
                        Edit Name
                    </button>
                </div>
                {/* Div Edit-Name */}
                <div className={isDetailsVisible ? "header" : "Hidden"}>
                    <form className="formulariEdit-Name" method="put">
                        <div className="input-wrapper-2">
                            <input
                                type="text"
                                id="firstname"
                                className="inputs"
                                value={firstName ?? ""}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                id="lastname"
                                className="inputs"
                                value={lastName ?? ""}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper-2">
                            <button type="button" onClick={handleSave} className="save-button" id="save-button">
                                Save
                            </button>
                            <button type="button" onClick={handleCancel} className="cancel-button" id="cancel-button">
                                Cancel
                            </button>
                            {isPutValue && (
                                <div className="DisplayMessageError" id="ErrorMessage1">
                                    <p>Invalid renaming of first name or last name</p>
                                </div>
                            )}
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
            <Footer />
        </div>
        </Provider>
    );
}
export default UserSite;