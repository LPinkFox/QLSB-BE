import React, { createContext, useState } from 'react'
export const UserContext = createContext(null);
export const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    const [isLoggedin, setIsLoggedin] = useState(false);
    const login = (user) => {
        setIsLoggedin(true);
        setUser(user);
    };
    const logout = (log) => {
        setIsLoggedin(false);
        setUser(null);
    };
    return (
        <UserContext.Provider value={{ user, isLoggedin, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
};
