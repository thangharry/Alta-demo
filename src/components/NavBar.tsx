import banGhi from "../images/Ban ghi icon.png";
import playlist from "../images/Playlist icon.png";
import lichPhat from "../images/u_calendar-alt.png";
import quanLy from "../images/hop dong icon.png";
import doanhThu from "../images/bao cao doanh thu icon.png";
import setting from "../images/Setting icon.png";
import supp from "../images/Support.png";
import baCham from "../images/u_ellipsis-v.png";
import banGhiHover from "../images/Ban ghi icon (1).png";
import playlistHover from "../images/Playlist icon (1).png";
import lichPhatHover from "../images/u_calendar-alt (1).png";
import quanLyHover from "../images/hop dong icon (1).png";
import doanhThuHover from "../images/bao cao doanh thu icon (1).png";
import settingHover from "../images/Setting icon (1).png";
import suppHover from "../images/Support (1).png";
import baChamHover from "../images/u_ellipsis-v (1).png";
import styles from "./NavBar.module.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function NavBar() {
    let [click, setclick] = useState(-1);
    let handleClick = (index: number) => {
        setclick(index);
    };

    type ListType = {
        img: any;
        text: string;
        selectionImg: any;
    };
    let ItemLisTNav: ListType[] = [
        { img: banGhi, text: "Kho bản ghi", selectionImg: banGhiHover },
        {
            img: playlist,
            text: "Playlist",
            selectionImg: playlistHover,
        },
        {
            img: lichPhat,
            text: "Lập lịch phát",
            selectionImg: lichPhatHover,
        },
        {
            img: quanLy,
            text: "Quản lý",
            selectionImg: quanLyHover,
        },
        {
            img: doanhThu,
            text: "Doanh thu",
            selectionImg: doanhThuHover,
        },
        {
            img: setting,
            text: "Cài đặt",
            selectionImg: settingHover,
        },
        {
            img: supp,
            text: "Hỗ trợ",
            selectionImg: suppHover,
        },
    ];
    return (
        <div className={styles.wrapNavBar}>
            <figure className={styles.wrapImg}>
                <img src={logo} alt="" />
            </figure>
            <div className={styles.ListNav}>
                <ul className={styles.ComponentNav}>
                    {ItemLisTNav.map((item, index) => {
                        const isSelected = index === click;
                        return (
                            <li
                                className={styles.itemNav}
                                key={index}
                                onClick={() => handleClick(index)}
                            >
                                {isSelected ? (
                                    <span className={styles.desc}></span>
                                ) : (
                                    ""
                                )}
                                <Link
                                    to={`${item.text}`}
                                    className={styles.bodyNav}
                                >
                                    <figure>
                                        <img
                                            src={
                                                isSelected
                                                    ? item.selectionImg
                                                    : item.img
                                            }
                                            alt=""
                                        />
                                    </figure>
                                    <p
                                        style={{
                                            color: isSelected
                                                ? "#FF7506"
                                                : "#C8C8DB",
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </Link>
                                {index >= 3 && (
                                    <span className={styles.BaCham}>
                                        <figure>
                                            <img src={baCham} alt="" />
                                        </figure>
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
