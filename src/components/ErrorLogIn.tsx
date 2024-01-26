import styles from "./ErrorLogIn.module.scss";
import logo from "../images/logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

function ErrorLogIn() {
    return (
        <div className={styles.wrapErr}>
            <TopHeader />
            <Container className={styles.container_bg}>
                <Row>
                    <Col>
                        <div className={styles.bd_Err}>
                            <figure className={styles.wrapImg_Error}>
                                <img src={logo} alt="" />
                            </figure>
                            <h4>Không thể kết nối !!</h4>
                            <p>
                                Dường như đã có chút trục trặc hoặc link này đã
                                hết hạn. Vui lòng thử lại
                                <br /> hoặc yêu cầu gửi lại link để đặt lại mật
                                khẩu của bạn.
                            </p>
                            <Link to="/forgotPass">
                                <Button
                                    variant="outline-warning"
                                    className={styles.btnError}
                                >
                                    Yêu cầu gửi lại Email
                                </Button>
                            </Link>
                            <div className={styles.ReturnHome_Error}>
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

export default ErrorLogIn;
