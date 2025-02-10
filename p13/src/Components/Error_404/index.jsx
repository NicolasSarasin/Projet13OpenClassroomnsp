import "../../css/main.css";
import "../../css/404Error.css";
import { Link } from "react-router-dom";
import HeaderNavigation1 from "../HeaderNavigations/HeaderNavigations.jsx";
import Footer from "../Footer/Footer.jsx";
/*import React from "react";
import ReactDOM from "react-dom/client";*/

function Error() {
    return (
        <div className="html">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HeaderNavigation1 />
            <h1 className="error404">404</h1>
            <p className="Perror404">
                Oups! La page que vous voulez n'existe pas.
            </p>
            <Link to="/" className="Perror4042">
                <p>Retourner à la page d'accueil.</p>
            </Link>
            <Footer />
        </div>
    );
}

export default Error;