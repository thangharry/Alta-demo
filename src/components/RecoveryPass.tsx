import styles from "./RecoveryPass.module.scss";
import logo from "../images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
function RecoveryPass() {
    return (
        <div className={styles.wrapRecovery}>
            <TopHeader />
            <Container className={styles.container_bg}>
                <Row>
                    <Col>
                        <div className={styles.bd_Recovery}>
                            <figure className={styles.img_Recovery}>
                                <img src={logo} alt="" />
                            </figure>
                            <h4>Khôi phục mật khẩu</h4>
                            <p>
                                Link khôi phục mật khẩu đã được gửi vào mail của
                                bạn. Vui lòng kiểm tra mail.
                            </p>
                            <p>
                                Click vào đường link được đính kèm trong mail để
                                chuyển đến trang đặt lại mật khẩu.
                            </p>
                            <div className={styles.ReturnHome_Recovery}>
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

export default RecoveryPass;
