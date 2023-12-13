import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openSearch = () => {
        setIsOpen(true)
    };
    const closeSearch = () => {
        setIsOpen(false)
    };

    return (
        <SearchContext.Provider value={{ isOpen, openSearch,closeSearch }}>
            {children}
        </SearchContext.Provider>
    );
};