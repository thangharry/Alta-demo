import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import styles from "./LogIn.module.scss";
import logo from "../images/logo.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebaseconfig";
function LogIn() {
    let [isHiddenPass, setisHiddenPass] = useState(false);

    let [email, setemail] = useState("");
    let [password, setPassword] = useState("");
    let [message, setmessage] = useState("");

    let handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        let emailInput = e.target.value;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput)) {
            setmessage("Sai tên đăng nhập hoặc mật khẩu");
        } else {
            setmessage("");
        }
        setemail(emailInput);
    };

    let handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    let handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setmessage("Hãy nhập tài khoản và mật khẩu");
        } else {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setemail("");
                setPassword("");
                setmessage("");
                window.location.href = "/Userinfo";
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className={styles.bgLogIn}>
            <Container className={styles.container_bg}>
                <Row>
                    <Col>
                        <div className={styles.wrap_bd}>
                            <figure className={styles.wrap_img}>
                                <img src={logo} alt="Logo" />
                            </figure>
                            <h4>Đăng nhập</h4>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGroupEmail"
                                >
                                    <Form.Label>Tên đăng nhập</Form.Label>
                                    <Form.Control
                                        className={`${styles.user}  ${
                                            message ? styles.notice : ""
                                        }`}
                                        type="email"
                                        placeholder="Tên người dùng..."
                                        autoComplete="none"
                                        value={email}
                                        onChange={(e) =>
                                            handleChangeEmail(
                                                e as React.ChangeEvent<HTMLInputElement>
                                            )
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    className={`mb-3 ${styles.inputPass}`}
                                    controlId="formGroupPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        className={`${styles.pass}  ${
                                            message ? styles.notice : ""
                                        }`}
                                        type={
                                            isHiddenPass ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            handleChangePass(
                                                e as React.ChangeEvent<HTMLInputElement>
                                            );
                                        }}
                                    />
                                    <div className={styles.hiddenPass}>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() =>
                                                setisHiddenPass(!isHiddenPass)
                                            }
                                        >
                                            {isHiddenPass ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </Button>
                                    </div>
                                </Form.Group>
                                <p className={styles.messag}>{message}</p>
                                <Form.Group
                                    className="mb-3"
                                    id="formGridCheckbox"
                                >
                                    <Form.Check
                                        className={styles.checkBox}
                                        type="checkbox"
                                        label="Ghi nhớ mật khẩu"
                                    />
                                </Form.Group>

                                <Button
                                    variant="warning"
                                    className={styles.buttonSubmit}
                                    onClick={(e) => {
                                        handleClick(e);
                                    }}
                                >
                                    Đăng nhập
                                    {/* <Link to="">Đăng nhập</Link> */}
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LogIn;
