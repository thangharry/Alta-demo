import styles from "./ChinhSuaHDKT.module.scss";
import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarContext } from "../NavBarProvider";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { MdCloudUpload } from "react-icons/md";
import Form from "react-bootstrap/Form";
function ChinhSuaHDKT() {
    const { showNav, setShowNav } = useContext(NavBarContext);
    const [contractDetails, setContractDetails] = useState<any | null>(null);

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
                                <Form className={styles.FormCS}>
                                    <Form.Group
                                        className={`mb-3 ${styles.rowForm}`}
                                    >
                                        <Form.Label>Tên hợp đồng</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Hợp đồng kinh doanh"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3 ${styles.rowForm}`}
                                    >
                                        <Form.Label>Số hợp đồng</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="123"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={`mb-3 ${styles.rowForm} ${styles.FormControlAdd}`}
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
                                            value={contractDetails?.ngayHieuluc}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="formGridCity"
                                        className={`mb-3 ${styles.rowForm} ${styles.FormControlAdd}`}
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
                                            value={contractDetails?.ngayHetHan}
                                        />
                                    </Form.Group>
                                </Form>
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
                                <div className={styles.Select}>
                                    <p>Loại hợp đồng</p>
                                    <Form className={styles.formRightCS}>
                                        <div
                                            key="default-radio"
                                            className={`mb-3 ${styles.Radio}`}
                                        >
                                            <Form.Check // prettier-ignore
                                                type="radio"
                                                id={`default-radio`}
                                                label="Trọn gói"
                                                className={styles.CheackRadio}
                                            />
                                            <div className={styles.wrapMM}>
                                                <div className={styles.moneyHD}>
                                                    <p>
                                                        Giá trị hợp đồng (VNĐ)
                                                    </p>
                                                    <input type="number" />
                                                </div>
                                                <div className={styles.moneyPP}>
                                                    <p>
                                                        Giá trị phân phối (VNĐ)
                                                    </p>
                                                    <input type="number" />
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                    <Form className={styles.formRightCS}>
                                        <div
                                            key="default-radio"
                                            className={`mb-3 ${styles.Radio}`}
                                        >
                                            <Form.Check // prettier-ignore
                                                type="radio"
                                                id={`default-radio`}
                                                label="Lượt phát"
                                                className={styles.CheackRadio}
                                            />
                                            <div className={styles.moneyHD2}>
                                                <p>Giá trị lượt phát (VNĐ)</p>
                                                <input type="number" />
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapTable}>
                            <div className={styles.colRights}>
                                <Form>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>
                                            Tên đơn vị sử dụng
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Người đại diện</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Chức vụ</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Ngày sinh</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Quốc tịch</Form.Label>

                                        <Form.Select aria-label="Default select example">
                                            <option>Việt Nam</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className={styles.colCenter}>
                                <Form>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Giới tính</Form.Label>
                                        <Form.Check
                                            inline
                                            label="Nam"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Nữ"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-2`}
                                        />
                                    </Form.Group>
                                </Form>
                                <Form.Group
                                    className={`mb-3  ${styles.groupFormIF}`}
                                >
                                    <Form.Label>CMND/CCCD</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                <Form.Group
                                    className={`mb-3  ${styles.groupFormIF}`}
                                >
                                    <Form.Label>Ngày Cấp</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group
                                    className={`mb-3  ${styles.groupFormIF}`}
                                >
                                    <Form.Label>Nơi cấp</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group
                                    className={`mb-3  ${styles.groupFormIF}`}
                                >
                                    <Form.Label>Mã số thuế</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                <Form.Group
                                    className={`mb-3  ${styles.groupFormIF}`}
                                >
                                    <Form.Label>Nơi cư trú</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </div>
                            <div className={styles.colLeft}>
                                <Form>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Tên đăng nhập</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label htmlFor="inputPassword5">
                                            Password
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Số tài khoản</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group
                                        className={`mb-3  ${styles.groupFormIF}`}
                                    >
                                        <Form.Label>Ngân hàng</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div className={styles.btnSubmit}>
                            <Button variant="outline-warning">Hủy</Button>
                            <Button variant="warning">Lưu</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSuaHDKT;
