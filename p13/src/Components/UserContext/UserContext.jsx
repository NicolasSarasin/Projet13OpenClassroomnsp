// src/contexts/UserContext.jsx
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (newToken, userInfo) => {
        setToken(newToken);
        setUser(userInfo);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        navigate('/login');
    };

    return (
        <UserContext.Provider value={{ token, user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personnalisé pour accéder facilement au contexte
export const useUser = () => useContext(UserContext);