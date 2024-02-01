import React from "react";
import styles from "./DanhsachHopDong.module.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import Table from "react-bootstrap/Table";
import { IoMdAdd } from "react-icons/io";
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
                    <button>
                        <Link to="/">Hợp đồng ủy quyền</Link>
                    </button>
                    <button>
                        <Link to="/">Hợp đồng khai thác</Link>
                    </button>
                </div>
            </div>
            <div className={styles.bodyHopDong}>
                <div className={styles.FormControl}>
                    <Container>
                        <Row className={styles.wrapRowControl}>
                            <Col className={styles.wrapChoose}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label>Quyền sở hữu</Form.Label>
                                    <Form.Select defaultValue="Tất cả">
                                        <option>Tất cả</option>

                                        <option>Người biểu diễn</option>
                                        <option>Nhà sản xuất</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label>Hiệu lực hợp đồng</Form.Label>
                                    <Form.Select defaultValue="Tất cả">
                                        <option>Tất cả</option>
                                        <option>Mới</option>
                                        <option>Còn thời hạn</option>
                                        <option>Hết hạn</option>
                                        <option>Hủy</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col className={styles.searchForm}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..."
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
                                        <th>Tên hợp đồng</th>
                                        <th>Người ủy quyền</th>
                                        <th>Quyền sở hữu</th>
                                        <th>Hiệu lực hợp đồng</th>
                                        <th>Ngày tạo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>HD123</td>
                                        <td>Hợp đồng ủy quyền bài hát</td>
                                        <td>Vương Anh Tú</td>

                                        <td>Người biểu diễn</td>
                                        <td>Còn thòi hạn</td>
                                        <td>1/4/2021 15:53</td>
                                        <td>xem chi tiết</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>HD123</td>
                                        <td>Hợp đồng ủy quyền bài hát</td>
                                        <td>Vương Anh Tú</td>

                                        <td>Người biểu diễn</td>
                                        <td>Đã hủy</td>
                                        <td>1/4/2021 15:53</td>
                                        <td>xem chi tiết</td>
                                        <td>Lý do hủy</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Container>
                </div>
                <div className={styles.AddHopdong}>
                    <Link to="/addHopDong">
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

export default DanhsachHopDong;
