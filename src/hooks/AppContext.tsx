import React, { createContext, useState, useContext, ReactNode } from 'react';


interface AppContextType {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
    users: string[];
    setUsers: React.Dispatch<React.SetStateAction<string[]>>;    
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<{ children: ReactNode}> = ({ children }) => {

    const [items, setItems] = useState<string[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    return (
        <AppContext.Provider value={{ items, setItems, users, setUsers }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be use an AppProvider");
    }
    return context;
};
