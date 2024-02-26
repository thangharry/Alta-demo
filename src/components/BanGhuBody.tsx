import { useEffect, useState } from "react";
import styles from "./BanGhuBody.module.scss";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { storage } from "../firebase/Firebaseconfig";
import { v4 } from "uuid";
import { Col } from "react-bootstrap";
import { db } from "../firebase/Firebaseconfig";
import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
function BanGhuBody() {
    let [videoUpload, setvideoUpload] = useState<File | null>(null);
    let [title, setTitle] = useState("");
    let [isrc, setisrc] = useState("");
    let [casi, setcasi] = useState("");
    let [listImg, setListImg] = useState<string | null>("list");
    const [musicData, setmusicData] = useState<
        {
            id: string;
            title?: string;
            isrc?: string;
            casi?: string;
            tacgia?: string;
            videoURL?: string;
            createdAt?: any;
        }[]
    >([]);
    useEffect(() => {
        const fetchMusic = async () => {
            const musicCollection = collection(db, "music");
            const musicSnapshot = await getDocs(musicCollection);
            const musicList = musicSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setmusicData(musicList);
        };
        fetchMusic();
    }, []);
    return (
        <div className={styles.body_Table}>
            <div className={styles.colChose}>
                <div className={styles.wrap_input}>
                    <Form.Group
                        controlId="formGridState"
                        className={styles.GroupInput}
                    >
                        <Form.Label>Thể loại</Form.Label>
                        <Form.Select defaultValue="Tất cả">
                            <option>Tất cả</option>
                            <option>Pop</option>
                            <option>EDM</option>
                            <option>Ballad</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        controlId="formGridState"
                        className={styles.GroupInput}
                    >
                        <Form.Label>Định dạng</Form.Label>
                        <Form.Select defaultValue="Tất cả">
                            <option>Tất cả</option>
                            <option>Âm thanh</option>
                            <option>Video</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        controlId="formGridState"
                        className={styles.GroupInput}
                    >
                        <Form.Label>Thời hạn sử dụng</Form.Label>
                        <Form.Select defaultValue="Tất cả">
                            <option>Tất cả</option>
                            <option>Còn thời hạn</option>
                            <option>Thời hạn</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        controlId="formGridState"
                        className={styles.GroupInput}
                    >
                        <Form.Label>Trạng thái</Form.Label>
                        <Form.Select defaultValue="Tất cả">
                            <option>Tất cả</option>
                            <option>Duyệt bởi người dùng</option>
                            <option>Duyệt tự động</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className={styles.chooseStyles}>
                    <span className={styles.IconStyles}>
                        <FaList
                            onClick={() => setListImg("list")}
                            className={listImg === "list" ? styles.color : ""}
                        />
                    </span>
                    <span className={styles.IconStyles}>
                        <FiGrid
                            onClick={() => setListImg("IMG")}
                            className={listImg === "IMG" ? styles.color : ""}
                        />
                    </span>
                </div>
                <div className={styles.QlPD}>
                    <Link to="/addHopDong">
                        <span className={styles.Add}>
                            <FaRegEdit />
                        </span>
                        <p>Quản lý phê duyệt</p>
                    </Link>
                </div>
            </div>

            <div className={styles.wrap_table}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên bản ghi</th>
                            <th>Mã ISRC</th>
                            <th>Thời lượng</th>
                            <th>Ca sĩ</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th>Định dạng</th>
                            <th>Thời hạn sử dụng</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicData.map((music, index) => {
                            //  let dateString = "";
                            //  if (music.createdAt) {
                            //      const dateOptions = {
                            //          year: "numeric",
                            //          month: "2-digit",
                            //          day: "2-digit",
                            //          hour: "2-digit",
                            //          minute: "2-digit",
                            //          second: "2-digit",
                            //      };
                            //      dateString =
                            //          music.createdAt.toLocaleDateString(
                            //              "vi-VN",
                            //              dateOptions
                            //          );

                            // }
                            const dateOptions = {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            };
                            let dateString = "";
                            if (music.createdAt) {
                                const date = music.createdAt.toDate();
                                dateString = music.createdAt.toLocaleDateString(
                                    "vi-VN",
                                    dateOptions
                                );
                            }
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{music.title}</td>
                                    <td>{music.isrc}</td>
                                    <td>04:27</td>
                                    <td>{music.casi}</td>
                                    <td>{music.tacgia}</td>

                                    <td>Ballad</td>
                                    <td>Audio</td>
                                    <td>
                                        Còn thời hạn <br />{" "}
                                        <span>{dateString}</span>
                                    </td>
                                    <td>
                                        <Link to="">Cập nhật</Link>
                                    </td>
                                    <td>
                                        <Link to="">Nghe</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default BanGhuBody;
