import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./UserInfo.module.scss";
import BodyUserInfo from "../components/BodyUserInfo";
function UserInfo() {
    return (
        <div style={{ backgroundColor: "#1e1e2e", minHeight: "100vh" }}>
            <Container className={styles.containerUser}>
                <Row className={styles.wrapUser}>
                    <Col xs={2}>
                        <NavBar />
                    </Col>
                    <Col>
                        <BodyUserInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserInfo;
