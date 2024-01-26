import styles from "./BodyUserInfo.module.scss";
import ava from "../images/logoAva.png";

import Button from "react-bootstrap/Button";

import editInfo from "../images/fi_edit.png";
import changePass from "../images/Padlock.png";
import logOut from "../images/fi_log-out.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IoCameraReverseOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { storage, db, auth } from "../firebase/Firebaseconfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import { AvatarContext } from "../avatar";
import { UserContext } from "../user";

function BodyUserInfo() {
    const { firstName, lastName, setFirstName, setLastName } =
        useContext(UserContext);

    const { url, setUrl } = useContext(AvatarContext);
    // const [url, setUrl] = useState(ava); // initial avatar image
    const [email, setEmail] = useState(""); // state for the email
    const auth = getAuth();
    useEffect(() => {
        const user = auth.currentUser; // get the current user
        if (user) {
            setEmail(user.email || "");
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.email) {
                setEmail(user.email || ""); // set the email state
            }
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);
    useEffect(() => {
        const fetchAvatar = async () => {
            if (auth.currentUser) {
                const userDoc = doc(db, "users", auth.currentUser.uid);
                const userSnap = await getDoc(userDoc);

                if (userSnap.exists()) {
                    setUrl(userSnap.data().avatarUrl);
                }
            }
        };

        fetchAvatar();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = doc(db, "users", user.uid);
                const userSnap = await getDoc(userDoc);

                if (userSnap.exists()) {
                    setUrl(userSnap.data().avatarUrl);
                }
            }
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const storageRef = ref(storage);
            const fileRef = ref(storageRef, file.name);
            await uploadBytes(fileRef, file);
            const fileUrl = await getDownloadURL(fileRef);

            // Update the state with the new image URL
            setUrl(fileUrl);
            if (auth.currentUser) {
                const userDoc = doc(db, "users", auth.currentUser.uid);

                await setDoc(userDoc, { avatarUrl: fileUrl });
            }
        }
    };

    // let [firstName, setFirstName] = useState("");
    // let [lastName, setLastName] = useState("");
    let [date, setdate] = useState("");
    let [phone, setphone] = useState("");
    let [isEditing, setisEditing] = useState(false);
    let handleEditing = () => {
        setisEditing(true);
    };

    // đưa giá trị lên firebase
    let handleSaveClick = async () => {
        const userDoc = doc(collection(db, "Info"), "yourUserID");
        await setDoc(userDoc, {
            firstName,
            lastName,
            date,
            phone,
        });

        setisEditing(false);
    };

    // lấy dữ liệu data
    useEffect(() => {
        const fetchData = async () => {
            // tham chiếu lên firebase
            const docRef = doc(db, "Info", "yourUserID");
            // lấy dữ liệu từ tham chiếu
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setdate(data.date);
                setphone(data.phone);
            } else {
                console.log("no such document");
            }
        };
        fetchData();
    }, []);
    return (
        <div className={styles.bodyUser}>
            <h1>Thông tin cơ bản</h1>
            <div className={styles.Info_Ava}>
                <div className={styles.bodyAva}>
                    <figure className={styles.thumbAva}>
                        <img src={url} alt="" />
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="fileInput" className={styles.IconCamer}>
                            <IoCameraReverseOutline />
                        </label>
                    </figure>
                    <h2 className={styles.namUser}>
                        {firstName} {lastName}
                    </h2>
                </div>
                <div className={styles.FormInfo}>
                    <Form>
                        <Row className={`mb-3 ${styles.ItemInputAva}`}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Họ</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập họ...."
                                    autoComplete="none"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập tên...."
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row className={`mb-3 ${styles.ItemInputAva}`}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder=""
                                    value={date}
                                    onChange={(e) => setdate(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder=""
                                    value={phone}
                                    onChange={(e) => {
                                        setphone(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row className={`mb-3 ${styles.ItemInputAva}`}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    readOnly
                                />
                            </Form.Group>
                        </Row>

                        <Row className={`mb-3 ${styles.ItemInputAva}`}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Tên đăng nhập</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={email}
                                    readOnly
                                />
                            </Form.Group>
                        </Row>

                        <Row
                            className={`mb-3 ${styles.ItemInputAva} ${styles.Admin}`}
                        >
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Vai trò</Form.Label>
                                <Form.Control
                                    placeholder="Admin"
                                    value="Admin"
                                    readOnly
                                />
                            </Form.Group>
                        </Row>

                        {isEditing && (
                            <Row className={styles.groupBtn}>
                                <Button
                                    variant="outline-warning"
                                    onClick={() => {
                                        setisEditing(false);
                                    }}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        handleSaveClick();
                                    }}
                                >
                                    Lưu
                                </Button>
                            </Row>
                        )}
                    </Form>
                </div>

                <div className={styles.Setting_Info}>
                    <div
                        className={styles.edit_info}
                        onClick={() => handleEditing()}
                    >
                        <figure className={styles.Icon}>
                            <img src={editInfo} alt="" />
                        </figure>
                        <p>Sửa thông tin</p>
                    </div>
                    <div className={styles.edit_info}>
                        <figure className={styles.Icon}>
                            <img src={changePass} alt="" />
                        </figure>
                        <p>Đổi mật khẩu</p>
                    </div>
                    <div className={styles.edit_info}>
                        <figure className={styles.Icon}>
                            <img src={logOut} alt="" />
                        </figure>
                        <p>Đăng xuất</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyUserInfo;
