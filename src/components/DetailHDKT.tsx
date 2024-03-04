import { useContext } from "react";
import styles from "./DetailHDKT.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarContext } from "../NavBarProvider";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiNotepad } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

function DetailHDKT() {
    const { showNav, setShowNav } = useContext(NavBarContext);

    return (
        <div style={{ position: "relative" }}>
            <div className={styles.arrow}>
                <button onClick={() => setShowNav(!showNav)}>
                    <IoIosArrowForward />
                </button>
            </div>
            <div
                style={{
                    backgroundColor: "#1E1E2E",
                    minHeight: "calc(100vh - 85px)",
                }}
                className={styles.wrapAdd}
            >
                <div className={styles.bodyAdd}>
                    <h1>Hợp đồng khai thác - HD123</h1>

                    <div className={styles.contentMainBody}>
                        <div className={styles.wrapInfo}>
                            <div className={styles.colLeft}>
                                <p>
                                    <b>Tên đăng nhập: </b>Hợp đồng kinh doanh
                                </p>
                                <p>
                                    <b>Số hợp đồng: </b>123
                                </p>
                                <p>
                                    <b>Ngày hiệu lực: </b>2/6/1111
                                </p>
                                <p>
                                    <b>Ngày hết hạn: </b>2/6/1111
                                </p>
                            </div>
                            <div className={styles.colCenter}>
                                <div className={styles.file}>
                                    <p>Đính kèm tệp:</p>
                                    <div className={styles.Uploadfile}>
                                        <label htmlFor="upload">
                                            <MdCloudUpload />
                                            Tải lên
                                        </label>
                                    </div>
                                    <input
                                        type="file"
                                        className={styles.inputFile}
                                        id="upload"
                                    />
                                </div>
                            </div>
                            <div className={styles.colRight}>
                                <p>
                                    <b>Loại hợp đồng: </b>Trọn gói
                                </p>
                                <p>
                                    <b>Giá trị hợp đồng: </b>365.000.000
                                </p>
                                <p>
                                    <b>Giá trị phân phối: </b>1.000.000
                                </p>
                                <p>
                                    <b>Tình trạng: </b>Đang hiệu lực
                                </p>
                            </div>
                        </div>
                        <div className={styles.wrapTable}>
                            <div className={styles.tableLeft}>
                                <p>
                                    <b>Tên đơn vị sử dụng: </b>Công ty TNHH MTV
                                    Âu Lạc
                                </p>
                                <p>
                                    <b>Người đại diện: </b>Nguyễn Văn A
                                </p>
                                <p>
                                    <b>Chức vụ: </b>Giám đốc
                                </p>
                                <p>
                                    <b>Ngày sinh: </b>1/4/1111
                                </p>
                                <p>
                                    <b>Quốc tịch: </b>Việt Nam
                                </p>
                                <p>
                                    <b>Số điện thoại: </b>1234567890
                                </p>
                                <p>
                                    <b>Email: </b>Việt Nam
                                </p>
                            </div>
                            <div className={styles.tableCenter}>
                                <p>
                                    <b>Giới tính: </b>Nam
                                </p>
                                <p>
                                    <b>CMND/CCCD: </b>1234567890
                                </p>
                                <p>
                                    <b>Ngày cấp: </b>2/6/1111
                                </p>
                                <p>
                                    <b>Nơi cấp: </b>Việt Nam
                                </p>
                                <p>
                                    <b>Mã số thuế: </b>Việt Nam
                                </p>
                                <p>
                                    <b>Nơi cư trú: </b>Việt Nam
                                </p>
                            </div>
                            <div className={styles.tableRight}>
                                <p>
                                    <b>Tên đăng nhập: </b>vuonganhtu
                                </p>
                                <p>
                                    <b>Mật khẩu: </b>*****
                                </p>
                                <p>
                                    <b>Số tài khoản: </b>123456789
                                </p>
                                <p>
                                    <b>Ngân hàng: </b>Việt Nam
                                </p>
                            </div>
                        </div>
                        <div className={styles.OptionContentAdd}>
                            <Link to="/ChinhSuaHDKT">
                                <span className={styles.Add}>
                                    <FaRegEdit />
                                </span>
                                <p>Chỉnh sửa</p>
                            </Link>

                            <Link to="/addHopDong">
                                <span className={styles.Add}>
                                    <MdOutlineClose />
                                </span>
                                <p>Hủy hợp đồng</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHDKT;
