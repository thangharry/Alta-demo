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
                    console.log("check:" + contractDetails.soHopDong);
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
                    minHeight: "calc(100vh - 85px)",
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
                                <Link to="/">Thông tin hợp đồng</Link>
                            </button>
                            <button
                                className={
                                    selectedBTN === "tacPham"
                                        ? styles.color
                                        : ""
                                }
                                onClick={() => setSelectedBTN("tacPham")}
                            >
                                <Link to="/">Tác phẩm ủy quyền</Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.contentInfo}>
                        <Form noValidate>
                            <div className={styles.ContentAdd}>
                                <div className={styles.Form}>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={styles.FormControlAdd}
                                    >
                                        <Form.Label>
                                            Số hợp đồng:
                                            <span className={styles.descAdd}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            name="soHopDong"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={styles.FormControlAdd}
                                    >
                                        <Form.Label>
                                            Tên hợp đồng:
                                            <span className={styles.descAdd}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            name="tenHopDong"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={styles.FormControlAdd}
                                    >
                                        <Form.Label>
                                            Ngày hiệu lực:
                                            <span className={styles.descAdd}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="ngayHieuluc"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={styles.FormControlAdd}
                                    >
                                        <Form.Label>
                                            Ngày hết hạn:
                                            <span className={styles.descAdd}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="ngayHetHan"
                                            required
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
                                        <BsExclamationCircle /> Mức nhuận bút
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
                            <hr />
                            <h3>Thông tin pháp nhân ủy quyền</h3>
                            <div className={styles.AllForm}>
                                <div className={styles.formLeft}>
                                    <p>
                                        <b>Pháp nhân ủy quyền: </b>Cá nhân
                                    </p>
                                    <p>
                                        <b>Tên người ủy quyền: </b>Nguyễn Văn A
                                    </p>
                                    <p>
                                        <b>Ngày sinh: </b>12/12/2222
                                    </p>
                                    <p>
                                        <b>Giới tính: </b>Nam
                                    </p>
                                    <p>
                                        <b>Quốc tịch: </b>Việt Nam
                                    </p>
                                    <p>
                                        <b>Số điện thoại: </b>123456789
                                    </p>
                                </div>
                                <div className={styles.formCenter}>
                                    <p>
                                        <b>Số CMND/CCCD: </b>1234566778
                                    </p>
                                    <p>
                                        <b>Ngày cấp: </b>10/07/2021
                                    </p>
                                    <p>
                                        <b>Nơi cấp: </b>Hồ Chí Minh
                                    </p>
                                    <p>
                                        <b>Mã số thuế: </b>234244564
                                    </p>
                                    <p>
                                        <b>Nơi cư trú: </b>59/2b đường{" "}
                                    </p>
                                </div>
                                <div className={styles.formRight}>
                                    <p>
                                        <b>Email: </b>16tyth@gmail.com
                                    </p>
                                    <p>
                                        <b>Tài khoản đăng nhập: </b>
                                        16tyth@gmail.com
                                    </p>
                                    <p>
                                        <b>Mật khẩu: </b>**********
                                    </p>
                                    <p>
                                        <b>Số tài khoản: </b>12121212
                                    </p>
                                    <p>
                                        <b>Ngân hàng: </b>Techcombank
                                    </p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHopDong;
