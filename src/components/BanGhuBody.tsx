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

function BanGhuBody() {
    let [videoUpload, setvideoUpload] = useState<File | null>(null);
    let [title, setTitle] = useState("");
    let [isrc, setisrc] = useState("");
    let [casi, setcasi] = useState("");

    let uploadVideo = () => {
        if (videoUpload == null) return;
        const metadata = {
            contentType: "audio/mpeg",
            customMetadata: {
                title: title,
                isrc: isrc,
                casi: casi,
            },
        };
        const videoRef = ref(storage, `images/${videoUpload.name + v4()}`);
        uploadBytes(videoRef, videoUpload, metadata).then(() => {
            getDownloadURL(videoRef).then((downloadURL) => {
                // Lưu URL tải xuống và thông tin khác vào Firestore
                const musicCollection = collection(db, "music");
                addDoc(musicCollection, {
                    title: title,
                    isrc: isrc,
                    casi: casi,
                    videoURL: downloadURL,
                });
            });

            alert("Tải lên video");
        });
    };

    // lấy dữ liệu
    const [musicData, setmusicData] = useState<
        {
            id: string;
            title?: string;
            isrc?: string;
            casi?: string;
            videoURL?: string;
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
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{music.title}</td>
                                    <td>{music.isrc}</td>
                                    <td>04:27</td>
                                    <td>{music.casi}</td>
                                    <td>{music.casi}</td>

                                    <td>Ballad</td>
                                    <td>Audio</td>
                                    <td>
                                        Còn thời hạn <br />{" "}
                                        <span>02/10/2022</span>
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

            <div className={styles.uploadFile}>
                <input
                    type="text"
                    placeholder="Tên bài hát"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Mã ISRC"
                    onChange={(e) => setisrc(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Ca sĩ"
                    onChange={(e) => setcasi(e.target.value)}
                />
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Thể loại</Form.Label>
                    <Form.Select defaultValue="Chọn một thể loại">
                        <option>Chọn một thể loại</option>
                        <option>Rap</option>
                        <option>Ballad</option>
                        <option>Rock n roll</option>
                        <option>R&B</option>
                    </Form.Select>
                </Form.Group>
                <input
                    type="file"
                    onChange={(e) => {
                        if (e.target.files) {
                            setvideoUpload(e.target.files[0]);
                        }
                    }}
                />
                <button onClick={() => uploadVideo()}>tải video lên</button>
            </div>
        </div>
    );
}

export default BanGhuBody;
