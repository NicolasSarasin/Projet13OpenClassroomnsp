import iconChat from './assets/img/icon-chat.png';
import iconMoney from './assets/img/icon-money.png';
import iconSecurity from './assets/img/icon-security.png';
import Footer from "./Components/Footer/Footer.jsx"
import HeaderNavigation1 from './Components/HeaderNavigations/HeaderNavigations.jsx';
import './css/main.css';
//import ReceptAPI from "./Services/ReceptAPI.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Argent Bank - Home Page"; // Changer le titre ici
  }, []);
  return (
    <div className="html body">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <HeaderNavigation1/>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
              <img src={iconChat} alt="Chat Icon" className="feature-icon" />
              <h3 className="feature-item-title">You are our #1 priority</h3>
              <p>
                Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.
              </p>
          </div>
          <div className="feature-item">
            <img
              src={iconMoney}
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img
              src={iconSecurity}
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
