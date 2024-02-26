import { useContext, useState } from "react";
import styles from "./BanGhi.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarContext } from "../NavBarProvider";
import { FaCheck } from "react-icons/fa6";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IoMdCloudUpload } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/Firebaseconfig";
import { v4 } from "uuid";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
function BanGhi() {
    // const { id: hopDongId } = useParams();
    const { hopDongId } = useParams();
    const [formBG, setFormBG] = useState(false);
    const [infoBanGhi, setinfoBanGhi] = useState(true);
    const { showNav, setShowNav } = useContext(NavBarContext);
    const handleClick = () => {
        setFormBG(true);
        setinfoBanGhi(false);
    };
    let [title, setTitle] = useState("");
    let [isrc, setIsrc] = useState("");
    let [tacgia, setTacgia] = useState("");
    let [casi, setcasi] = useState("");
    // let [type,setType] = useState("");
    let [nhasanxuat, setnhasanxuat] = useState("");
    let [videoUpload, setvideoUpload] = useState<File | null>(null);

    let uploadVideo = async () => {
        if (videoUpload == null) return;
        const metadata = {
            contentType: "audio/mpeg",
            customMetadata: {
                title: title,
                isrc: isrc,
                tacgia: tacgia,
                casi: casi,
                nhasanxuat: nhasanxuat,
            },
        };
        const videoRef = ref(storage, `images/${videoUpload.name + v4()}`);
        uploadBytes(videoRef, videoUpload, metadata).then(() => {
            getDownloadURL(videoRef).then((downloadURL) => {
                const musicCollection = collection(db, "music");
                addDoc(musicCollection, {
                    title: title,
                    isrc: isrc,
                    tacgia: tacgia,
                    casi: casi,
                    nhasanxuat: nhasanxuat,
                    videoURL: downloadURL,
                    hopDongId: hopDongId,
                    createdAt: new Date(),
                });
            });
            console.log(`tên bài hát: ${title} - id hợp đồng: ${hopDongId}`);
            alert("tải video lên");
        });

        let newRecord: any = {
            title: title,
            isrc: isrc,
            tacgia: tacgia,
            casi: casi,
            nhasanxuat: nhasanxuat,
            hopDongId: hopDongId,
            createdAt: new Date(),
        };
        const docRef = await addDoc(collection(db, "musicID"), newRecord);
        newRecord.id = docRef.id;
        await updateDoc(doc(db, "musicID", docRef.id), newRecord);
    };
    console.log("id", hopDongId);

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
                }}
                className={styles.wrapAdd}
            >
                <div className={styles.bodyAdd}>
                    <h1>Thêm thông tin bản ghi</h1>
                    {infoBanGhi && (
                        <div className={styles.infoBanGhi}>
                            <div className={styles.succes}>
                                <span>
                                    <FaCheck />
                                </span>
                                <p>Hợp đồng đã được tạo thành công</p>
                            </div>
                            <div className={styles.tableBanGhi}>
                                <p>Có 2 cách để tạo bản ghi</p>
                                <ul className={styles.listTable}>
                                    <li>
                                        <b>Cách 1:</b> Upload bản ghi trực tiếp
                                        <p>
                                            Bạn có thể thực hiện thêm bản ghi
                                            ngay trên website
                                        </p>
                                        <button onClick={() => handleClick()}>
                                            Thêm bản ghi trực tiếp
                                        </button>
                                    </li>
                                    <li>
                                        <b>Cách 2:</b> Upload bản ghi qua phần
                                        mềm
                                        <p>Bạn có thể bản ghi bằng tool</p>
                                        <button>Thêm bản ghi bằng tool</button>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.noteBG}>
                                <p>
                                    Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản
                                    ghi thành công.
                                </p>
                            </div>
                        </div>
                    )}
                    {formBG && (
                        <div className={styles.formbgc}>
                            <h1>Thêm bản ghi mới</h1>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Tên bản ghi</Form.Label>
                                    <Form.Control
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Mã ISRC</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            setIsrc(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Tác giả</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            setTacgia(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Ca sĩ/Nhóm nhạc</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            setcasi(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridState"
                                    >
                                        <Form.Label>Thể loại</Form.Label>
                                        <Form.Select defaultValue="Chọn một thể loại">
                                            <option>Chọn một thể loại </option>

                                            <option>Rap</option>
                                            <option>Ballad</option>
                                            <option>Rock n Roll</option>
                                            <option>R&B</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridZip"
                                    >
                                        <Form.Label>Nhà sản xuất</Form.Label>
                                        <Form.Control
                                            onChange={(e) =>
                                                setnhasanxuat(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.file}>
                                    <Col className={styles.colFile}>
                                        <p>Đính kèm bản ghi</p>
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            id="upload"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    setvideoUpload(
                                                        e.target.files[0]
                                                    );
                                                }
                                            }}
                                        />
                                        <label
                                            className={styles.Upload}
                                            htmlFor="upload"
                                        >
                                            <IoMdCloudUpload />
                                            Tải lên
                                        </label>
                                    </Col>
                                    <Col className={styles.colFile}>
                                        <p>Đính kèm lời bài hát</p>
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            id="upload2"
                                        />
                                        <label
                                            className={styles.Upload}
                                            htmlFor="upload2"
                                        >
                                            <IoMdCloudUpload />
                                            Tải lên
                                        </label>
                                    </Col>
                                </Row>
                                <div className={styles.groupBTN}>
                                    <Button variant="outline-warning">
                                        Hủy
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={() => uploadVideo()}
                                    >
                                        Tải lên
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BanGhi;
