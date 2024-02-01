import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";
import User from "./components/User";
import AvatarProvider from "./avatar";
import UserProvider from "./user";
import { useState } from "react";
import { NavBarContext } from "./NavBarProvider";
function App() {
    const [showNav, setShowNav] = useState(true);
    const location = useLocation();
    return (
        <AvatarProvider>
            <UserProvider>
                <NavBarContext.Provider value={{ showNav, setShowNav }}>
                    <div className="App">
                        <div className="container_App">
                            <div className="Nav">
                                {showNav &&
                                    location.pathname !== "/addhopdong" && (
                                        <NavBar />
                                    )}
                                {/* <NavBar /> */}
                            </div>
                            <div className="body_main">
                                <div className="topHeader">
                                    <TopHeader />
                                    <User />
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </NavBarContext.Provider>
            </UserProvider>
        </AvatarProvider>
    );
}

export default App;
