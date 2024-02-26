import { useContext, useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { NavBarContext } from "../NavBarProvider";
import styles from "./AddHopDong.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { MdCloudUpload } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { db } from "../firebase/Firebaseconfig";
import { doc, setDoc, getDoc, collection, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function AddHopDong() {
    const { showNav, setShowNav } = useContext(NavBarContext);
    const ref = useRef<HTMLDivElement>(null);
    const [check, setCheck] = useState("inline-radio-1");
    let handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.id);
        setCheck(e.target.id);
    };
    const navigate = useNavigate();
    const [formValid, setFormValid] = useState(false);
    const [hopDongId, setHopDongID] = useState<string | null>(null);
    useEffect(() => {
        console.log(hopDongId);
    }, [hopDongId]);
    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // lấy form thông tin hiện tại
        const form = e.currentTarget;

        let formData = new FormData(e.currentTarget);
        const phapNhanUyQuyen = formData.get("group1");
        const tenToChuc = formData.get("tenToChuc");
        const nguoiDaiDien = formData.get("nguoiDaiDien");
        const diaChi = formData.get("diaChi");
        const chucVu = formData.get("chucVu");
        const nguoiUyQuyen = formData.get("namUyQuyen");
        const nam = formData.get("group2");
        const GTinh = formData.get("dateOfBirth");
        const natioan = formData.get("quocTich");
        const soDienThoai = formData.get("soDienThoai");
        const CCCD = formData.get("CCCD");
        const day = formData.get("day");
        const noiCap = formData.get("noiCap");
        const maSoThe = formData.get("maSoThe");
        const noiCuTru = formData.get("noiCuTru");
        const email = formData.get("email");
        const tenDangNhap = formData.get("tenDangNhap");
        const pass = formData.get("pass");
        const STK = formData.get("STK");
        const bank = formData.get("bank");
        const soHopDong = formData.get("soHopDong");
        const tenHopDong = formData.get("tenHopDong");
        const ngayHieuluc = formData.get("ngayHieuluc");
        const ngayHetHan = formData.get("ngayHetHan");
        const currentTime = new Date().toLocaleTimeString();
        const docId = Date.now().toString();
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        setHopDongID(docId);

        if (ngayHetHan) {
            const ngayHetHanDate = new Date(ngayHetHan as string);
            let trangThaiHopDong;
            if (currentDate > ngayHetHanDate) {
                trangThaiHopDong = "Đã hết hạn";
            } else {
                trangThaiHopDong = "còn thời hạn";
            }
            const phapNhanUyQuyen =
                check === "inline-radio-1" ? "Cá nhân" : "Tổ chức";
            const userDoc = doc(collection(db, "yourCollection"), docId);
            await setDoc(userDoc, {
                tenToChuc,
                nguoiDaiDien,
                chucVu,
                diaChi,
                phapNhanUyQuyen,
                nguoiUyQuyen,
                nam,
                GTinh,
                natioan,
                soDienThoai,
                CCCD,
                day,
                noiCap,
                maSoThe,
                noiCuTru,
                email,
                tenDangNhap,
                pass,
                STK,
                bank,
                soHopDong,
                tenHopDong,
                ngayHieuluc,
                ngayHetHan,
                trangThaiHopDong,
                time: currentTime,
            });
        }

        if (check === "inline-radio-1") {
            if (
                !nguoiUyQuyen ||
                !nam ||
                !GTinh ||
                !natioan ||
                !soDienThoai ||
                !CCCD ||
                !day ||
                !noiCap ||
                !maSoThe ||
                !noiCuTru ||
                !email ||
                !tenDangNhap ||
                !pass ||
                !STK ||
                !bank ||
                !soHopDong ||
                !tenHopDong ||
                !ngayHieuluc ||
                !ngayHetHan
            ) {
                alert("Vui lòng nhập đủ các trường");
            } else {
                setFormValid(true);
                navigate(`/banghi/${docId}`);
            }
        }
        if (check === "inline-radio-2") {
            if (
                !tenToChuc ||
                !maSoThe ||
                !STK ||
                !bank ||
                !diaChi ||
                !nguoiDaiDien ||
                !chucVu ||
                !nam ||
                !GTinh ||
                !natioan ||
                !soDienThoai ||
                !CCCD ||
                !day ||
                !noiCap ||
                !noiCuTru ||
                !email ||
                !tenDangNhap ||
                !pass ||
                !soHopDong ||
                !tenHopDong ||
                !ngayHieuluc ||
                !ngayHetHan
            ) {
                alert("Vui lòng nhập đủ các trường");
            } else {
                setFormValid(true);
                navigate(`/banghi`);
            }
        }
    };

    let handleCancel = () => {
        alert("hủy");
    };
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
                    <h1>Thêm hợp đồng ủy quyền mới</h1>

                    <Form noValidate onSubmit={handleSubmit}>
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
                                    <Form.Control name="soHopDong" required />
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
                                    <Form.Control name="tenHopDong" required />
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
                        {check === "inline-radio-1" && (
                            <div className={styles.bodyInfoUyQuyen}>
                                <div className={styles.ColLeft}>
                                    <div
                                        className={`${styles.PhapNhanUyQuyen} `}
                                    >
                                        <p>Pháp nhân ủy quyền:</p>
                                        <div
                                            key={`inline-radio`}
                                            className={`mb-3 ${styles.ganer}`}
                                        >
                                            <Form.Check
                                                inline
                                                label="Cá nhân"
                                                name="group1"
                                                type="radio"
                                                id={`inline-radio-1`}
                                                value="cá nhân"
                                                defaultChecked
                                                onChange={(e) => {
                                                    handleOptionChange(e);
                                                }}
                                            />
                                            <Form.Check
                                                inline
                                                label="Tổ chức"
                                                name="group1"
                                                type="radio"
                                                value="tổ chức"
                                                id={`inline-radio-2`}
                                                onChange={(e) => {
                                                    handleOptionChange(e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.NguoiUyQuyen}>
                                        <p>Tên người ủy quyền:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="namUyQuyen"
                                        />
                                    </div>
                                    <div className={styles.GioiTinh}>
                                        <p>Giới tính:</p>
                                        <div
                                            key={`inline-radio`}
                                            className={`mb-3 ${styles.ganer}`}
                                        >
                                            <Form.Check
                                                inline
                                                label="Nam"
                                                name="group2"
                                                type="radio"
                                                id={`inline-radio-3`}
                                                value="nam"
                                            />
                                            <Form.Check
                                                inline
                                                label="Nữ"
                                                name="group2"
                                                type="radio"
                                                id={`inline-radio-4`}
                                                value="nữ"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.DateOfBirth}>
                                        <p>Ngày sinh:</p>
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            required
                                        />
                                    </div>
                                    <div className={styles.National}>
                                        <Form.Label>
                                            <p>Quốc tịch</p>
                                        </Form.Label>
                                        <Form.Select
                                            defaultValue="Việt Nam"
                                            name="quocTich"
                                        >
                                            <option>Việt Nam</option>
                                            <option>ThaiLand</option>
                                        </Form.Select>
                                    </div>
                                    <div className={styles.PhoneNumber}>
                                        <p>Số điện thoại</p>
                                        <input
                                            type="number"
                                            name="soDienThoai"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.ColCenter}>
                                    <div className={styles.CMND}>
                                        <p>CMND/CCCD:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="CCCD"
                                        />
                                    </div>
                                    <div className={styles.DayCay}>
                                        <p>Ngày cấp:</p>
                                        <input
                                            type="date"
                                            name="day"
                                            required
                                        />
                                    </div>
                                    <div className={styles.NoiCap}>
                                        <p>Nơi cấp:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="noiCap"
                                        />
                                    </div>
                                    <div className={styles.MaSoThue}>
                                        <p>Mã số thuế:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="maSoThe"
                                        />
                                    </div>
                                    <div className={styles.NoiCuTru}>
                                        <p>Nơi cư trú</p>
                                        <FloatingLabel
                                            controlId="floatingTextarea2"
                                            label="Comments"
                                        >
                                            <Form.Control
                                                as="textarea"
                                                style={{ height: "100px" }}
                                                name="noiCuTru"
                                                required
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <div className={styles.ColRight}>
                                    <div className={styles.Email}>
                                        <p>Email:</p>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type="email"
                                                name="email"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className={styles.CMND}>
                                        <p>Tên đăng nhập:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="tenDangNhap"
                                        />
                                    </div>
                                    <div className={styles.Pass}>
                                        <p>Mật khẩu:</p>
                                        <FloatingLabel
                                            controlId="floatingPassword"
                                            label="Password"
                                        >
                                            <Form.Control
                                                type="password"
                                                name="pass"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className={styles.STK}>
                                        <p>Số tài khoản:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="STK"
                                        />
                                    </div>
                                    <div className={styles.Bank}>
                                        <p>Ngân hàng:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="bank"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {check === "inline-radio-2" && (
                            // <Form noValidate>
                            <div className={styles.bodyInfoUyQuyen}>
                                <div className={styles.ColLeft}>
                                    <div
                                        className={`${styles.PhapNhanUyQuyen} `}
                                    >
                                        <p>Pháp nhân ủy quyền:</p>
                                        <div
                                            key={`inline-radio`}
                                            className={`mb-3 ${styles.ganer}`}
                                        >
                                            <Form.Check
                                                inline
                                                label="Cá nhân"
                                                name="group1"
                                                type="radio"
                                                id={`inline-radio-1`}
                                                onChange={(e) => {
                                                    handleOptionChange(e);
                                                }}
                                            />
                                            <Form.Check
                                                inline
                                                label="Tổ chức"
                                                name="group1"
                                                type="radio"
                                                id={`inline-radio-2`}
                                                defaultChecked
                                                onChange={(e) => {
                                                    handleOptionChange(e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.NguoiUyQuyen}>
                                        <p>Tên tổ chức:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="tenToChuc"
                                        />
                                    </div>
                                    <div className={styles.NguoiUyQuyen}>
                                        <p>Mã số thuế:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="maSoThe"
                                        />
                                    </div>

                                    <div className={styles.PhoneNumber}>
                                        <p>Số tài khoản</p>
                                        <input type="number" name="STK" />
                                    </div>
                                    <div className={styles.NguoiUyQuyen}>
                                        <p>Ngân hàng:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="bank"
                                        />
                                    </div>
                                    <div className={`${styles.diaChi} `}>
                                        <p>Địa chỉ:</p>
                                        <FloatingLabel
                                            controlId="floatingTextarea2"
                                            label="Comments"
                                        >
                                            <Form.Control
                                                as="textarea"
                                                style={{ height: "100px" }}
                                                name="diaChi"
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <div className={styles.ColCenter}>
                                    <div className={styles.CMND}>
                                        <p>Người đại diện:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="nguoiDaiDien"
                                        />
                                    </div>
                                    <div className={styles.CMND}>
                                        <p>Chức vụ:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="chucVu"
                                        />
                                    </div>
                                    <div className={styles.DayCay}>
                                        <p>Ngày sinh:</p>
                                        <input type="date" name="dateOfBirth" />
                                    </div>
                                    <div className={styles.GioiTinh}>
                                        <p>Giới tính:</p>
                                        <div
                                            key={`inline-radio`}
                                            className={`mb-3 ${styles.ganer}`}
                                        >
                                            <Form.Check
                                                inline
                                                label="Nam"
                                                name="group2"
                                                type="radio"
                                                id={`inline-radio-3`}
                                                value="nam"
                                            />
                                            <Form.Check
                                                inline
                                                label="Nữ"
                                                name="group2"
                                                type="radio"
                                                id={`inline-radio-4`}
                                                value="nữ"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.CMND}>
                                        <p>CMND/CCCD:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="CCCD"
                                        />
                                    </div>
                                    <div className={styles.DayCay}>
                                        <p>Ngày cấp:</p>
                                        <input type="date" name="day" />
                                    </div>
                                    <div className={styles.NoiCap}>
                                        <p>Nơi cấp:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="noiCap"
                                        />
                                    </div>

                                    <div className={styles.National}>
                                        <Form.Label>
                                            <p>Quốc tịch</p>
                                        </Form.Label>
                                        <Form.Select
                                            defaultValue="Việt Nam"
                                            name="quocTich"
                                        >
                                            <option>Việt Nam</option>
                                            <option>ThaiLand</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className={styles.ColRight}>
                                    <div className={styles.NoiCuTru}>
                                        <p>Nơi cư trú</p>
                                        <FloatingLabel
                                            controlId="floatingTextarea2"
                                            label="Comments"
                                        >
                                            <Form.Control
                                                as="textarea"
                                                style={{ height: "100px" }}
                                                name="noiCuTru"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className={styles.PhoneNumber}>
                                        <p>Số điện thoại</p>
                                        <input
                                            type="number"
                                            name="soDienThoai"
                                        />
                                    </div>
                                    <div className={styles.Email}>
                                        <p>Email:</p>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type="email"
                                                name="email"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className={styles.CMND}>
                                        <p>Tên đăng nhập:</p>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="tenDangNhap"
                                        />
                                    </div>
                                    <div className={styles.Pass}>
                                        <p>Mật khẩu:</p>
                                        <FloatingLabel
                                            controlId="floatingPassword"
                                            label="Password"
                                        >
                                            <Form.Control
                                                type="password"
                                                name="pass"
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            </div>
                            // </Form>
                        )}
                        <div className={styles.GroupBTN}>
                            <Button
                                variant="outline-warning"
                                onClick={() => handleCancel()}
                            >
                                Hủy
                            </Button>
                            <Button variant="warning" type="submit">
                                Tạo
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddHopDong;
