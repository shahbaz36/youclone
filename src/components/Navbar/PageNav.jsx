/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";

function PageNav({ handleIsHidden }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <img
          src={menu_icon}
          className={styles.menu}
          alt="menu"
          onClick={handleIsHidden}
        />
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.navMid}>
        <input type="text" placeholder="search" />
        <img src={search} alt="" />
      </div>
      <div className={styles.navRight}>
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notifications" />
        <img src={profile} id={styles.profile} alt="userProfile" />
      </div>
    </nav>
  );
}

export default PageNav;
