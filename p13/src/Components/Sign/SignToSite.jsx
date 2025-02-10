import "../../css/main.css"
import React from 'react';
import Footer from "../Footer/Footer.jsx"
import HeaderNavigation1  from "../HeaderNavigations/HeaderNavigations.jsx"

function SignToSite(){
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
                        {/*SHOULD BE THE BUTTON BELOW*/} 
                        <button className="sign-in-button" formaction="/profile">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default SignToSite