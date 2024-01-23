import styles from "./TopHeader.module.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import vn from "../images/vietnam 1.png";
function TopHeader() {
    return (
        <div className={styles.topHeader}>
            <div className={styles.wrap}>
                <figure className={styles.language}>
                    <img src={vn} alt="" />
                </figure>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Select defaultValue="hello">
                        <option>Tiếng Việt </option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export default TopHeader;
