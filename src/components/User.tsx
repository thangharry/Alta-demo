import styles from "./User.module.scss";
import user from "../images/userName.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AvatarContext } from "../avatar";
import { UserContext } from "../user";
function User() {
    let [avatar, setavatar] = useState(user);
    const { url, setUrl } = useContext(AvatarContext);
    const { firstName, lastName, setFirstName, setLastName } =
        useContext(UserContext);
    return (
        <div className={styles.wrapUser}>
            <Link to="/Userinfo">
                <div className={styles.bd_User}>
                    <figure className={styles.wrapImg}>
                        <img src={url} alt="" />
                    </figure>
                    <div className={styles.userInfo}>
                        <h5>
                            {firstName} {lastName}
                            {/* aaaa */}
                        </h5>
                        <p>Admin</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default User;
