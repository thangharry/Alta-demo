import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHeader";
function App() {
    return (
        <div className="App">
            <div>
                <TopHeader />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
