import "../../css/main.css";
import React from 'react';
import Footer from "../Footer/Footer.jsx";
import { HeaderNavigation2 } from "../HeaderNavigations/HeaderNavigations.jsx";

function UserSite(){
    return(
        <div className="html body">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation2/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />Tony Jarvis!</h1>
                        <button className="edit-button">Edit Name</button>
                    </div>
                    <div className="Edit-Name">
                        <form>
                            <div className="input-wrapper-2">
                                <input type="text" id="username" placeholder="Tony"/>
                                <input type="text" id="lastname" placeholder="Jarvis"/>
                            </div>
                            <div className="input-wrapper-2">
                                <button className="save-button" formaction="/profile">Save</button>
                                <button className="cancel-button" formaction="/profile">Cancel</button>
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