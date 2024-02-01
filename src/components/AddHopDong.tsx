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
function AddHopDong() {
    const { showNav, setShowNav } = useContext(NavBarContext);
    const ref = useRef<HTMLDivElement>(null);

    // Close NavBar when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowNav(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
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
                    <div className={styles.ContentAdd}>
                        <div className={styles.Form}>
                            <Form.Group
                                controlId="formGridCity"
                                className={styles.FormControlAdd}
                            >
                                <Form.Label>
                                    Số hợp đồng:
                                    <span className={styles.descAdd}>*</span>
                                </Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group
                                controlId="formGridCity"
                                className={styles.FormControlAdd}
                            >
                                <Form.Label>
                                    Tên hợp đồng:
                                    <span className={styles.descAdd}>*</span>
                                </Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group
                                controlId="formGridCity"
                                className={styles.FormControlAdd}
                            >
                                <Form.Label>
                                    Ngày hiệu lực:
                                    <span className={styles.descAdd}>*</span>
                                </Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group
                                controlId="formGridCity"
                                className={styles.FormControlAdd}
                            >
                                <Form.Label>
                                    Ngày hết hạn:
                                    <span className={styles.descAdd}>*</span>
                                </Form.Label>
                                <Form.Control type="date" />
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
                                <p> Quyền của nhà sản xuất:</p> <span>50%</span>
                            </div>
                            <p>(Bản ghi/video)</p>
                        </div>
                    </div>
                    <hr />
                    <h3>Thông tin pháp nhân ủy quyền</h3>
                    <Form noValidate>
                        <div className={styles.bodyInfoUyQuyen}>
                            <div className={styles.ColLeft}>
                                <div className={`${styles.PhapNhanUyQuyen} `}>
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
                                        />
                                        <Form.Check
                                            inline
                                            label="Tổ chức"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-2`}
                                        />
                                    </div>
                                </div>
                                <div className={styles.NguoiUyQuyen}>
                                    <p>Tên người ủy quyền:</p>
                                    <Form.Control required type="text" />
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
                                        />
                                        <Form.Check
                                            inline
                                            label="Nữ"
                                            name="group2"
                                            type="radio"
                                            id={`inline-radio-4`}
                                        />
                                    </div>
                                </div>
                                <div className={styles.DateOfBirth}>
                                    <p>Ngày sinh:</p>
                                    <input type="date" />
                                </div>
                                <div className={styles.National}>
                                    <Form.Label>
                                        <p>Quốc tịch</p>
                                    </Form.Label>
                                    <Form.Select defaultValue="Việt Nam">
                                        <option>Việt Nam</option>
                                        <option>ThaiLand</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.PhoneNumber}>
                                    <p>Số điện thoại</p>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className={styles.ColCenter}>
                                <div className={styles.CMND}>
                                    <p>CMND/CCCD:</p>
                                    <Form.Control required type="text" />
                                </div>
                                <div className={styles.DayCay}>
                                    <p>Ngày cấp:</p>
                                    <input type="date" />
                                </div>
                                <div className={styles.NoiCap}>
                                    <p>Nơi cấp:</p>
                                    <Form.Control required type="text" />
                                </div>
                                <div className={styles.MaSoThue}>
                                    <p>Mã số thuế:</p>
                                    <Form.Control required type="text" />
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
                                        <Form.Control type="email" />
                                    </FloatingLabel>
                                </div>
                                <div className={styles.CMND}>
                                    <p>Tên đăng nhập:</p>
                                    <Form.Control required type="text" />
                                </div>
                                <div className={styles.Pass}>
                                    <p>Mật khẩu:</p>
                                    <FloatingLabel
                                        controlId="floatingPassword"
                                        label="Password"
                                    >
                                        <Form.Control type="password" />
                                    </FloatingLabel>
                                </div>
                                <div className={styles.STK}>
                                    <p>Số tài khoản:</p>
                                    <Form.Control required type="text" />
                                </div>
                                <div className={styles.Bank}>
                                    <p>Ngân hàng:</p>
                                    <Form.Control required type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.GroupBTN}>
                            <Button variant="outline-warning">Hủy</Button>
                            <Button variant="warning">Tạo</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddHopDong;
