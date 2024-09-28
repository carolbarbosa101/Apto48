import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);

    return (
        <AppContext.Provider value={{ items, setItems, users, setUsers }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
