import React, { useEffect, useState } from "react";
import styles from "./DanhsachHopDong.module.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import Table from "react-bootstrap/Table";
import { IoMdAdd } from "react-icons/io";
import {
    collection,
    getDocs,
    query,
    orderBy,
    startAfter,
    limit,
    doc,
} from "firebase/firestore";
import { db } from "../firebase/Firebaseconfig";
import Pagination from "react-bootstrap/Pagination";
import "firebase/firestore";
import firebase from "firebase/app";
function DanhsachHopDong() {
    const [selectedBTN, setSelectedBTN] = useState<string | null>("uyQuyen");

    const [contracts, setContracts] = useState<any[]>([]);
    const [lastDoc, setLastDoc] = useState<any | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            // tham chiếu đến 1 collection trong firebase
            const contractCollection = collection(db, "yourCollection");
            // lấy giá trị trong collection đã tham chiếu
            const contractSnapshot = await getDocs(contractCollection);
            const contractList = contractSnapshot.docs.map((doc) => doc.data());
            setContracts(contractList);
        };
        fetchData();
    }, []);

    const fetchContracts = async (lastDoc: any | null) => {
        // dùng hàm query để truy vấn
        let contractQuery = query(
            // tham chiếu đến collection là yourCollection
            collection(db, "yourCollection"),
            // xắp số theo trường nguoiuyquyen
            orderBy("nguoiUyQuyen"),
            limit(15)
        );

        if (lastDoc) {
            contractQuery = query(
                collection(db, "yourCollection"),
                orderBy("nguoiUyQuyen"),
                startAfter(lastDoc),
                limit(15)
            );
        }

        const snapShot = await getDocs(contractQuery);
        const lastVisible = snapShot.docs[snapShot.docs.length - 1];

        setLastDoc(lastVisible);
        const newContracts = snapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        // console.log(newContracts);
        setContracts(newContracts);
    };

    useEffect(() => {
        fetchContracts(null);
    }, []);

    const handleNextPage = () => {
        fetchContracts(lastDoc);
        setCurrentPage(currentPage + 1);
    };

    const handlePrePage = () => {
        fetchContracts(lastDoc);
        setCurrentPage(currentPage - 1);
    };

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
                                    {contracts.map((contract, index) => {
                                        console.log(contract.id);
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{contract.soHopDong}</td>
                                                <td>{contract.tenHopDong}</td>
                                                <td>{contract.nguoiUyQuyen}</td>

                                                <td>Người biểu diễn</td>
                                                <td>
                                                    {contract.trangThaiHopDong}
                                                </td>
                                                <td>
                                                    {contract.ngayHieuluc}{" "}
                                                    {contract.time}
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/DetailHopDong/${contract.id}`}
                                                    >
                                                        xem chi tiết
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
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
                <div className={styles.footerBody}>
                    <Container>
                        <Row className={styles.wrapBody}>
                            <Col className={styles.footerLeft}>
                                <p>
                                    Hiển thị <span>15</span> hàng trong mỗi
                                    trang
                                </p>
                            </Col>
                            <Col className={styles.footerRight}>
                                <Pagination className={styles.pagination}>
                                    <Pagination.Prev
                                        onClick={() => {
                                            handlePrePage();
                                        }}
                                    />
                                    <Pagination.Item active>
                                        {1}
                                    </Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{100}</Pagination.Item>
                                    <Pagination.Next
                                        onClick={() => {
                                            handleNextPage();
                                        }}
                                    />
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default DanhsachHopDong;
