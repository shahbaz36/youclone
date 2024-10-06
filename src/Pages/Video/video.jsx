import { NavLink } from "react-router-dom";

import styles from "./Video.module.css";

import thumbnail1 from "../../assets/thumbnail1.png";
// import thumbnail2 from "../../assets/thumbnail2.png";
// import thumbnail3 from "../../assets/thumbnail3.png";
// import thumbnail4 from "../../assets/thumbnail4.png";
// import thumbnail5 from "../../assets/thumbnail5.png";
// import thumbnail6 from "../../assets/thumbnail6.png";
// import thumbnail7 from "../../assets/thumbnail7.png";
// import thumbnail8 from "../../assets/thumbnail8.png";

function Video() {
  return (
    <div className={styles.playContainer}>
      <div className={styles.playVideo}></div>
      <Recommended />
    </div>
  );
}

function Recommended() {
  return (
    <div className={styles.recommended}>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p>15k views &bull; Just now</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
