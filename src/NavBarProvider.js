import React, { useState, createContext } from "react";

// Tạo Context
export const NavBarContext = createContext();

// Tạo Provider
// function NavBarProvider({ children }) {
//     const [isNavBarVisible, setNavBarVisible] = useState(true);
//     console.log(isNavBarVisible);
//     return (
//         <NavBarContext.Provider value={{ isNavBarVisible, setNavBarVisible }}>
//             {children}
//         </NavBarContext.Provider>
//     );
// }
// export default NavBarProvider;
