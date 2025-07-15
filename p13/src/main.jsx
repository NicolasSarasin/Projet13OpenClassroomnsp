import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SignToSite from "./Components/Sign/SignIn.jsx"
import UserSite from "./Components/UserSite/PageUser.jsx";
import Error from "./Components/Error_404/index.jsx";
import { UserProvider } from "./Components/UserContext/UserContext.jsx";
//import reportWebVitals from './reportWebVitals.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<SignToSite/>}/>
          <Route path="/profile" element={<UserSite/>}/>
          <Route path="/Error" element={<Error />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </UserProvider>
    </Router>
  </StrictMode>,
)

//reportWebVitals();