import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../NavBarProvider";
import styles from "./DetailHopDong.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MdCloudUpload } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebaseconfig";
import { FaRegEdit } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { format } from "date-fns";
function DetailHopDong() {
    const { id } = useParams();
    // const [contract, setContract] = useState<DocumentData | null>(null);
    const [contractDetails, setContractDetails] = useState<any | null>(null);
    useEffect(() => {
        const fetchContract = async () => {
            if (id) {
                const contractRef = doc(db, "yourCollection", id);
                const contractSnap = await getDoc(contractRef);
                if (contractSnap.exists()) {
                    const contractDetails = contractSnap.data();
                    setContractDetails(contractDetails);

                    console.log("check:" + id);
                }
            } else {
                console.log("No id provided");
            }
        };
        fetchContract();
    }, [id]);
    const [selectedBTN, setSelectedBTN] = useState<string | null>("thongTin");
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
                    minHeight: "calc(100vh + 75px)",
                }}
                className={styles.wrapAdd}
            >
                <div className={styles.bodyAdd}>
                    <h1>
                        Chi tiết hợp đồng ủy quyền bài hát -{" "}
                        {contractDetails?.soHopDong}
                    </h1>
                    <div className={styles.wrapbtnSwitch}>
                        <div className={styles.btn_switch}>
                            <button
                                className={
                                    selectedBTN === "thongTin"
                                        ? styles.color
                                        : ""
                                }
                                onClick={() => setSelectedBTN("thongTin")}
                            >
                                <Link to="">Thông tin hợp đồng</Link>
                            </button>
                            <button
                                className={
                                    selectedBTN === "tacPham"
                                        ? styles.color
                                        : ""
                                }
                                onClick={() => setSelectedBTN("tacPham")}
                            >
                                <Link to={`/TacPhamUyQuyen/${id}`}>
                                    Tác phẩm ủy quyền
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.contentInfo}>
                        <Form noValidate>
                            <div className={styles.ContentAdd}>
                                <div className={styles.ContentMain}>
                                    <div className={styles.Form}>
                                        <Form.Group
                                            controlId="formGridCity"
                                            className={styles.FormControlAdd}
                                        >
                                            <Form.Label>
                                                Số hợp đồng:
                                                <span
                                                    className={styles.descAdd}
                                                >
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                name="soHopDong"
                                                required
                                                value={
                                                    contractDetails?.soHopDong
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId="formGridCity"
                                            className={styles.FormControlAdd}
                                        >
                                            <Form.Label>
                                                Tên hợp đồng:
                                                <span
                                                    className={styles.descAdd}
                                                >
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                name="tenHopDong"
                                                required
                                                value={
                                                    contractDetails?.tenHopDong
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId="formGridCity"
                                            className={styles.FormControlAdd}
                                        >
                                            <Form.Label>
                                                Ngày hiệu lực:
                                                <span
                                                    className={styles.descAdd}
                                                >
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="ngayHieuluc"
                                                required
                                                value={
                                                    contractDetails?.ngayHieuluc
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId="formGridCity"
                                            className={styles.FormControlAdd}
                                        >
                                            <Form.Label>
                                                Ngày hết hạn:
                                                <span
                                                    className={styles.descAdd}
                                                >
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="ngayHetHan"
                                                required
                                                value={
                                                    contractDetails?.ngayHetHan
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId="formGridCity"
                                            className={styles.FormControlAdd}
                                        >
                                            <Form.Label>
                                                Tình trạng:
                                                <span
                                                    className={styles.descAdd}
                                                >
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                name="tenHopDong"
                                                required
                                                value={
                                                    contractDetails?.trangThaiHopDong
                                                }
                                            />
                                        </Form.Group>
                                    </div>
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
                                    <div className={styles.NhuanBut}>
                                        <p>
                                            <BsExclamationCircle /> Mức nhuận
                                            bút
                                        </p>
                                        <div>
                                            <p> Quyền tác giả: </p>
                                            <span>0%</span>
                                        </div>
                                        <p>Quyền liên quan:</p>
                                        <div>
                                            <p> Quyền của người biểu diễn:</p>{" "}
                                            <span>50%</span>
                                        </div>
                                        <div>
                                            <p> Quyền của nhà sản xuất:</p>{" "}
                                            <span>50%</span>
                                        </div>
                                        <p>(Bản ghi/video)</p>
                                    </div>
                                </div>
                                <div className={styles.OptionContentAdd}>
                                    <Link to="/addHopDong">
                                        <span className={styles.Add}>
                                            <FaRegEdit />
                                        </span>
                                        <p>Chỉnh sửa hợp đồng</p>
                                    </Link>
                                    <Link to="/addHopDong">
                                        <span className={styles.Add}>
                                            <BiNotepad />
                                        </span>
                                        <p>Gia hạn hợp đồng</p>
                                    </Link>
                                    <Link to="/addHopDong">
                                        <span className={styles.Add}>
                                            <MdOutlineClose />
                                        </span>
                                        <p>Hủy hợp đồng</p>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <h3>Thông tin pháp nhân ủy quyền</h3>
                            {contractDetails?.phapNhanUyQuyen === "cá nhân" ||
                            contractDetails?.phapNhanUyQuyen === "Cá nhân" ? (
                                <div className={styles.AllForm}>
                                    <div className={styles.formLeft}>
                                        <p>
                                            <b>Pháp nhân ủy quyền: </b>
                                            {contractDetails?.phapNhanUyQuyen}
                                        </p>
                                        <p>
                                            <b>Tên người ủy quyền: </b>
                                            {contractDetails?.nguoiUyQuyen}
                                        </p>
                                        <p>
                                            <b>Ngày sinh: </b>
                                            {contractDetails?.GTinh}
                                        </p>
                                        <p>
                                            <b>Giới tính: </b>
                                            {contractDetails?.nam}
                                        </p>
                                        <p>
                                            <b>Quốc tịch: </b>
                                            {contractDetails?.natioan}
                                        </p>
                                        <p>
                                            <b>Số điện thoại: </b>
                                            {contractDetails?.soDienThoai}
                                        </p>
                                    </div>
                                    <div className={styles.formCenter}>
                                        <p>
                                            <b>Số CMND/CCCD: </b>
                                            {contractDetails?.CCCD}
                                        </p>
                                        <p>
                                            <b>Ngày cấp: </b>
                                            {contractDetails?.day}
                                        </p>
                                        <p>
                                            <b>Nơi cấp: </b>
                                            {contractDetails?.noiCap}
                                        </p>
                                        <p>
                                            <b>Mã số thuế: </b>
                                            {contractDetails?.maSoThe}
                                        </p>
                                        <p>
                                            <b>Nơi cư trú: </b>
                                            {contractDetails?.noiCuTru}
                                        </p>
                                    </div>
                                    <div className={styles.formRight}>
                                        <p>
                                            <b>Email: </b>
                                            {contractDetails?.email}
                                        </p>
                                        <p>
                                            <b>Tài khoản đăng nhập: </b>
                                            {contractDetails?.email}
                                        </p>
                                        <p>
                                            <b>Mật khẩu: </b>**********
                                        </p>
                                        <p>
                                            <b>Số tài khoản: </b>
                                            {contractDetails?.STK}
                                        </p>
                                        <p>
                                            <b>Ngân hàng: </b>
                                            {contractDetails?.bank}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.AllForm}>
                                    <div className={styles.formLeft}>
                                        <p>
                                            <b>Pháp nhân ủy quyền: </b>
                                            {contractDetails?.phapNhanUyQuyen}
                                        </p>
                                        <p>
                                            <b>Tên tổ chức: </b>
                                            {contractDetails?.tenToChuc}
                                        </p>
                                        <p>
                                            <b>Mã số thuế: </b>
                                            {contractDetails?.maSoThe}
                                        </p>
                                        <p>
                                            <b>Ngân hàng: </b>
                                            {contractDetails?.bank}
                                        </p>
                                        <p>
                                            <b>Quốc tịch: </b>
                                            {contractDetails?.natioan}
                                        </p>
                                        <p>
                                            <b>Địa chỉ: </b>
                                            {contractDetails?.diaChi}
                                        </p>
                                    </div>
                                    <div className={styles.formCenter}>
                                        <p>
                                            <b>Người đại diện: </b>
                                            {contractDetails?.nguoiDaiDien}
                                        </p>
                                        <p>
                                            <b>Chức vụ: </b>
                                            {contractDetails?.chucVu}
                                        </p>
                                        <p>
                                            <b>Ngày sinh: </b>
                                            {contractDetails?.GTinh}
                                        </p>
                                        <p>
                                            <b>Giới tính: </b>
                                            {contractDetails?.nam}
                                        </p>
                                        <p>
                                            <b>CMND/CCCD: </b>
                                            {contractDetails?.CCCD}
                                        </p>
                                        <p>
                                            <b>Ngày cấp: </b>
                                            {contractDetails?.day}
                                        </p>
                                        <p>
                                            <b>Nơi cấp: </b>
                                            {contractDetails?.noiCap}
                                        </p>
                                    </div>
                                    <div className={styles.formRight}>
                                        <p>
                                            <b>Quốc tịch: </b>
                                            {contractDetails?.natioan}
                                        </p>
                                        <p>
                                            <b>Nơi cư trú: </b>
                                            {contractDetails?.noiCuTru}
                                        </p>
                                        <p>
                                            <b>Số điện thoại: </b>
                                            {contractDetails?.soDienThoai}
                                        </p>

                                        <p>
                                            <b>Tài khoản đăng nhập: </b>
                                            {contractDetails?.email}
                                        </p>
                                        <p>
                                            <b>Mật khẩu: </b>**********
                                        </p>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHopDong;
