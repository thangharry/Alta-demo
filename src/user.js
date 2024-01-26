import React, { useState, createContext, useContext } from "react";
export const UserContext = createContext();

// Tạo Provider
function UserProvider({ children }) {
    let [firstName, setFirstName] = useState("Nguyễn");
    let [lastName, setLastName] = useState(" A");
    return (
        <UserContext.Provider
            value={{ firstName, lastName, setFirstName, setLastName }}
        >
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;
