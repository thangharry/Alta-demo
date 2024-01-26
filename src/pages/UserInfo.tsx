import NavBar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./UserInfo.module.scss";
import BodyUserInfo from "../components/BodyUserInfo";
function UserInfo() {
    return (
        <div
            style={{
                backgroundColor: "#1E1E2E",
                minHeight: "calc(100% - 85px)",
                paddingLeft: "3rem",
            }}
        >
            <Container className={styles.containerUser}>
                <Row className={styles.wrapUser}>
                    <Col style={{ padding: "0" }}>
                        <BodyUserInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserInfo;
