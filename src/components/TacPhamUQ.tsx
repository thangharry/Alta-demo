import { useContext, useEffect, useState } from "react";
import styles from "./TacPhamUQ.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarContext } from "../NavBarProvider";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebaseconfig";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import Table from "react-bootstrap/Table";

function TacPhamUQ() {
    const { id } = useParams();
    const { showNav, setShowNav } = useContext(NavBarContext);
    const [contractDetails, setContractDetails] = useState<any | null>(null);
    const [selectedBTN, setSelectedBTN] = useState<string | null>("tacPham");

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
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>vna123</td>
                                    <td>Vương anh tú</td>
                                    <td>Vương Phong</td>
                                    <td>01/04/2021 15:53:13</td>
                                    <td>Mới</td>
                                    <td>
                                        <Link to="">Nghe</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>vna123</td>
                                    <td>Vương anh tú</td>
                                    <td>Vương Phong</td>
                                    <td>01/04/2021 15:53:13</td>
                                    <td>Mới</td>
                                    <td>
                                        <Link to="">Nghe</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TacPhamUQ;
