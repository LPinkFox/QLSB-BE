import React, { createContext, useState } from 'react'
export const loginContext = createContext(null);

export const loginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loged = (isloged) => {
        setIsLoggedIn(isloged);
    }
    <loginContext.Provider>{props.children}</loginContext.Provider>;
}
