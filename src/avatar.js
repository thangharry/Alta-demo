import React, { useState, createContext, useContext } from "react";
import ava from "./images/logoAva.png";
export const AvatarContext = createContext();

// Tạo Provider
function AvatarProvider({ children }) {
    const [url, setUrl] = useState(ava);
    return (
        <AvatarContext.Provider value={{ url, setUrl }}>
            {children}
        </AvatarContext.Provider>
    );
}
export default AvatarProvider;
