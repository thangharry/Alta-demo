import React from "react";
import DanhsachHopDong from "../components/DanhsachHopDong";

function QuanLy() {
    return (
        <div
            style={{
                backgroundColor: "#1E1E2E",
                minHeight: "calc(100% - 85px)",
                paddingLeft: "3rem",
            }}
        >
            <DanhsachHopDong />
        </div>
    );
}

export default QuanLy;
