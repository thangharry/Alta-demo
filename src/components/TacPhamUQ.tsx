import { useContext, useEffect, useState } from "react";
import styles from "./TacPhamUQ.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarContext } from "../NavBarProvider";
import { Link, useParams } from "react-router-dom";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase/Firebaseconfig";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import Pagination from "react-bootstrap/Pagination";
import { Col, Container, Row } from "react-bootstrap";
function TacPhamUQ() {
    const [banGhis, setBanGhis] = useState<any[]>([]);
    const { id } = useParams();
    const { showNav, setShowNav } = useContext(NavBarContext);
    const [contractDetails, setContractDetails] = useState<any | null>(null);
    const [selectedBTN, setSelectedBTN] = useState<string | null>("tacPham");

    useEffect(() => {
        const fetchContract = async () => {
            if (id) {
                // lưu trữ 1 tham chiếu đến bản ghi cuối cùng đã được tải
                let lastDoc = null;
                const banGhiQuery = query(
                    collection(db, "musicID"),
                    where("hopDongId", "==", id)
                    // orderBy("createdAt"),
                    // limit(15)
                );
                const banGhiQuerySnapshot = await getDocs(banGhiQuery);
                const banGhis = banGhiQuerySnapshot.docs.map((doc) => {
                    let data = doc.data();
                    if (data.createdAt) {
                        data.createdAt = data.createdAt.toDate();
                    }
                    return data;
                });
                setBanGhis(banGhis);

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
                        Hợp đồng ủy quyền bài hát - {contractDetails?.soHopDong}
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
                                <Link to={`/DetailHopDong/${id}`}>
                                    Thông tin hợp đồng
                                </Link>
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
                    <div className={styles.fillterProduct}>
                        <div className={styles.OptionStyles}>
                            <Form.Group className={styles.formGroup}>
                                <Form.Label>Tình trạng phê duyệt</Form.Label>
                                <Form.Select defaultValue="Tất cả">
                                    <option>Tất cả</option>
                                    <option>Mới</option>

                                    <option>Đã Phê duyệt</option>
                                    <option>Từ chối</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className={styles.searchProduct}>
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
                        </div>
                    </div>
                    <div className={styles.wrapTable}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên bản ghi</th>
                                    <th>Mã ISRC</th>
                                    <th>Ca sĩ</th>
                                    <th>Tác giả</th>
                                    <th>Ngày tải</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {banGhis.map((banGhi, index) => {
                                    let dateString = "";
                                    if (banGhi.createdAt) {
                                        const dateOptions = {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                        };
                                        dateString =
                                            banGhi.createdAt.toLocaleDateString(
                                                "vi-VN",
                                                dateOptions
                                            );
                                    }
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{banGhi.title}</td>
                                            <td>{banGhi.isrc}</td>
                                            <td>{banGhi.case}</td>
                                            <td>{banGhi.tacgia}</td>

                                            <td>{dateString}</td>
                                            <td>Mới</td>
                                            <td>
                                                <Link to="">Nghe</Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <div className={styles.OptionContentAdd}>
                            <Link to="/addHopDong">
                                <span className={styles.Add}>
                                    <FaRegEdit />
                                </span>
                                <p>Chỉnh sửa tác phẩm</p>
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
                            <Link to={`/banghi/${id}`}>
                                <span className={styles.Add}>
                                    <MdAdd />
                                </span>
                                <p>Thêm bản ghi</p>
                            </Link>
                        </div>
                        {/* <div className={styles.footerBody}>
                            <Container>
                                <Row className={styles.wrapBody}>
                                    <Col className={styles.footerLeft}>
                                        <p>
                                            Hiển thị <span>15</span> hàng trong
                                            mỗi trang
                                        </p>
                                    </Col>
                                    <Col className={styles.footerRight}>
                                        <Pagination
                                            className={styles.pagination}
                                        >
                                            <Pagination.Prev
                                                onClick={() => {}}
                                            />
                                            <Pagination.Item active>
                                                {1}
                                            </Pagination.Item>
                                            <Pagination.Item>
                                                {2}
                                            </Pagination.Item>
                                            <Pagination.Item>
                                                {3}
                                            </Pagination.Item>
                                            <Pagination.Ellipsis />

                                            <Pagination.Item>
                                                {100}
                                            </Pagination.Item>
                                            <Pagination.Next
                                                onClick={() => {}}
                                            />
                                        </Pagination>
                                    </Col>
                                </Row>
                            </Container>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TacPhamUQ;
