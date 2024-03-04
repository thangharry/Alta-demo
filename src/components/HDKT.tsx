import { useState } from "react";
import styles from "./HDKT.module.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import Table from "react-bootstrap/Table";
import { IoMdAdd } from "react-icons/io";

function HDKT() {
    const [selectedBTN, setSelectedBTN] = useState<string | null>("khaiThac");
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
                    <button
                        className={
                            selectedBTN === "uyQuyen" ? styles.color : ""
                        }
                        onClick={() => setSelectedBTN("uyQuyen")}
                    >
                        <Link to="/Quản lý hợp đồng">Hợp đồng ủy quyền</Link>
                    </button>
                    <button
                        className={
                            selectedBTN === "khaiThac" ? styles.color : ""
                        }
                        onClick={() => setSelectedBTN("khaiThac")}
                    >
                        <Link to="/HDKT">Hợp đồng khai thác</Link>
                    </button>
                </div>
            </div>
            <div className={styles.bodyHDKT}>
                <div className={styles.ControlHDKT}>
                    <Container>
                        <Row className={styles.RowHDKT}>
                            <Col className={styles.searchForm}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên hợp đồng, tác giả..."
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <span className={styles.IconSearch}>
                                    <IoIosSearch />
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Số hợp đồng</th>
                                        <th>Khách hàng</th>
                                        <th>Ngày tạo</th>
                                        <th>Ngày hiệu lực</th>
                                        <th>Ngày hết hạn</th>
                                        <th>Hiệu lực hợp đồng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>HD123</td>
                                        <td>Hợp đồng kinh doanh 1</td>
                                        <td>1/1/11111</td>
                                        <td>2/12/2222</td>
                                        <td>2/12/2222</td>
                                        <td>Mới</td>
                                        <td>
                                            <Link to="">Xem chi tiết</Link>
                                        </td>
                                        <td>
                                            <Link to="">Sao chép hợp đồng</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>HD123</td>
                                        <td>Hợp đồng kinh doanh 1</td>
                                        <td>1/1/11111</td>
                                        <td>2/12/2222</td>
                                        <td>2/12/2222</td>
                                        <td>Mới</td>
                                        <td>
                                            <Link to="">Xem chi tiết</Link>
                                        </td>
                                        <td>
                                            <Link to="">Sao chép hợp đồng</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Container>
                </div>
                <div className={styles.AddHopdong}>
                    <Link to="/DetailHDKT">
                        <span className={styles.Add}>
                            <IoMdAdd />
                        </span>
                        <p>Thêm hợp đồng</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HDKT;
