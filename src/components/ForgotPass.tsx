import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./ForgotPass.module.scss";
import logo from "../images/logo.png";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import TopHeader from "./TopHeader";
function ForgotPass() {
    let [Email, setEmail] = useState("");

    let handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const auth = getAuth();
    const handleForgotPassword = async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.log(error);
        }
    };
    let navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(Email)) {
            navigate("/errorLogin", { replace: true });
        } else {
            handleForgotPassword(Email);
            navigate("/recPass", { replace: true });
        }
    };
    return (
        <div className={styles.bd_ForgotPass}>
            <TopHeader />
            <Container className={styles.container_bg}>
                <Row>
                    <Col>
                        <div className={styles.wrapForgotPass}>
                            <figure className={styles.wrapImg}>
                                <img src={logo} alt="Forgot" />
                            </figure>
                            <h4>Khôi phục mật khẩu</h4>
                            <p>
                                Vui lòng nhập địa chỉ email đã đăng ký để yêu
                                cầu khôi phục mật khẩu
                            </p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGroupEmail"
                                >
                                    <Form.Label>Email </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email...."
                                        className={styles.InputEmail}
                                        autoComplete="none"
                                        value={Email}
                                        onChange={(e) =>
                                            handleChangeEmail(
                                                e as React.ChangeEvent<HTMLInputElement>
                                            )
                                        }
                                    />
                                </Form.Group>
                                <Button
                                    variant="warning"
                                    className={styles.btn_ecept}
                                    type="submit"
                                >
                                    Xác nhận
                                </Button>
                            </Form>
                            <div className={styles.ReturnHome}>
                                <Link to="/">
                                    <p>Quay lại đăng nhập ?</p>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ForgotPass;
