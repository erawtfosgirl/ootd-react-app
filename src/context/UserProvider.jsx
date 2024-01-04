import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [checkUser, setCheckUser] = useState(() => {
        const savedCheckUser = localStorage.getItem("user");
        return savedCheckUser ? JSON.parse(savedCheckUser) : null;
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(checkUser));
    }, [checkUser])

    const providerValue = {
        checkUser,
        setCheckUser,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
