import Form from "react-bootstrap/Form";
import styles from "./BanGhiHeader.module.scss";
import { IoSearchOutline } from "react-icons/io5";
function BanGhiHeader() {
    return (
        <div className={styles.wrapInput}>
            <h1>Kho bản ghi</h1>
            <div className={styles.inputSearch}>
                <Form.Control
                    type="text"
                    placeholder="Tên bản ghi, ca sĩ, ..."
                />
                <IoSearchOutline />
            </div>
        </div>
    );
}

export default BanGhiHeader;
