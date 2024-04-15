'use client'

const { createContext, useState } = require("react")

export const DataContext = createContext();

export default function ContextProvider({ children }) {

    const [showSideBar, SetShowSideBar] = useState(false);

    return (
        <DataContext.Provider value={{showSideBar, SetShowSideBar}}>
            {children}
        </DataContext.Provider>
    )
}