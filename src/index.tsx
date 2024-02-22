import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import UserInfo from "./pages/UserInfo";
import ForgotPass from "./components/ForgotPass";
import ErrorLogIn from "./components/ErrorLogIn";
import RecoveryPass from "./components/RecoveryPass";
import KhoBanGhi from "./pages/KhoBanGhi";
import QuanLy from "./pages/QuanLy";
import DanhsachHopDong from "./components/DanhsachHopDong";
import AddHopDong from "./components/AddHopDong";
import BanGhi from "./components/BanGhi";
import DetailHopDong from "./components/DetailHopDong";
import TacPhamUQ from "./components/TacPhamUQ";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<LogIn />} />
                <Route path="forgotPass" element={<ForgotPass />} />
                <Route path="errorLogin" element={<ErrorLogIn />} />
                <Route path="recPass" element={<RecoveryPass />} />

                <Route path="/" element={<App />}>
                    <Route path="Kho bản ghi" element={<KhoBanGhi />} />
                    <Route path="Quản lý" element={<QuanLy />} />
                    <Route
                        path="Quản lý hợp đồng"
                        element={<DanhsachHopDong />}
                    />

                    <Route path="Userinfo" element={<UserInfo />} />
                    <Route path="addHopDong" element={<AddHopDong />} />
                    <Route path="banghi/:hopDongId" element={<BanGhi />} />
                    <Route
                        path="DetailHopDong/:id"
                        element={<DetailHopDong />}
                    />
                    <Route path="TacPhamUyQuyen/:id" element={<TacPhamUQ />} />

                    {/* <Route path="Kho bản ghi" element={<KhoBanGhi />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
