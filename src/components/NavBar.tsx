import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./NavBar.module.scss";
import logo from "../images/logo.png";
function NavBar() {
    return (
        <div className={styles.wrapNavBar}>
            <Container>
                <Row>
                    <Col className={styles.bd_Navbar}>
                        <Row className={styles.bd_Navbar_logo}>
                            <Col>
                                <figure>
                                    <img src={logo} alt="" />
                                </figure>
                            </Col>
                        </Row>
                        <Row className={styles.Navigate_Navbar}></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NavBar;
