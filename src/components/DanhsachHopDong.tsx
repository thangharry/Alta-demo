import React from "react";
import styles from "./DanhsachHopDong.module.scss";
function DanhsachHopDong() {
    return (
        <div
            style={{
                backgroundColor: "#1E1E2E",
                minHeight: "calc(100% - 85px)",
                paddingLeft: "3rem",
            }}
            className={styles.wrapHopDong}
        >
            <h1>Danh sách hợp đồng</h1>
            <div className={styles.wrapbtnSwitch}>
                <div className={styles.btn_switch}>
                    <button>Thông tin hợp đồng</button>
                    <button>Tác phẩm ủy quyền</button>
                </div>
            </div>
        </div>
    );
}

export default DanhsachHopDong;
