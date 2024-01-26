import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import TopHeader from "./components/TopHeader";
import User from "./components/User";
import AvatarProvider from "./avatar";
import UserProvider from "./user";
function App() {
    return (
        <AvatarProvider>
            <UserProvider>
                <div className="App">
                    <div className="container_App">
                        <div className="Nav">
                            <NavBar />
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
            </UserProvider>
        </AvatarProvider>
    );
}

export default App;
