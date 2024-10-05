import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";

import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

function Sidebar({ isHidden }) {
  return (
    <>
      <div className={`${styles.sidebar} ${isHidden ? styles.hidden : ""}`}>
        <div className={styles.shortcutLink}>
          <NavLink to="/" className={styles.sideLink}>
            <img src={home} alt="" />
            <p>Home</p>
          </NavLink>
          <NavLink to="/gaming" className={styles.sideLink}>
            <img src={game_icon} alt="" />
            <p>Gaming</p>
          </NavLink>
          <NavLink to="/auto" className={styles.sideLink}>
            <img src={automobiles} alt="" />
            <p>Automobiles</p>
          </NavLink>
          <NavLink to="/sports" className={styles.sideLink}>
            <img src={sports} alt="" />
            <p>Sports</p>
          </NavLink>
          <NavLink to="/entertainment" className={styles.sideLink}>
            <img src={entertainment} alt="" />
            <p>Entertainment</p>
          </NavLink>
          <NavLink to="/tech" className={styles.sideLink}>
            <img src={tech} alt="" />
            <p>Technology</p>
          </NavLink>
          <NavLink to="/music" className={styles.sideLink}>
            <img src={music} alt="" />
            <p>Music</p>
          </NavLink>
          <NavLink to="/blogs" className={styles.sideLink}>
            <img src={blogs} alt="" />
            <p>Blogs</p>
          </NavLink>
          <NavLink to="/news" className={styles.sideLink}>
            <img src={news} alt="" />
            <p>News</p>
          </NavLink>
          <hr></hr>
        </div>
        <div className={styles.subscribedList}>
          <h3>SUBSCRIBED</h3>
          <NavLink to="/pew" className={styles.sideLink}>
            <img src={jack} alt="" />
            <p>PewDiePie</p>
          </NavLink>
          <NavLink to="/beast" className={styles.sideLink}>
            <img src={simon} alt="" />
            <p>MrBeast</p>
          </NavLink>
          <NavLink to="/justin" className={styles.sideLink}>
            <img src={tom} alt="" />
            <p>Justin Bieber</p>
          </NavLink>
          <NavLink to="/5min" className={styles.sideLink}>
            <img src={megan} alt="" />
            <p>5-Minute Crafts</p>
          </NavLink>
          <NavLink to="/nasd" className={styles.sideLink}>
            <img src={cameron} alt="" />
            <p>Nas Daily</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
