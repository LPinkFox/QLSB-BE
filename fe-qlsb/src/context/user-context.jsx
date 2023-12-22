import React, { createContext, useState } from 'react'
export const userContext = createContext(null);
export const userContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const setCurUser = (userData) => {
        setUserData(userData);
    }
    <userContextProvider>props.children</userContextProvider>
}
