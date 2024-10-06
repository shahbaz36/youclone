import { NavLink } from "react-router-dom";

import styles from "./Feed.module.css";

import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

function Feed() {
  return (
    <div className={styles.feed}>
      <NavLink to="/video" className={styles.card}>
        <img src={thumbnail1} alt="" />
        <h2>Thumbnail1</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t2" className={styles.card}>
        <img src={thumbnail2} alt="" />
        <h2>Thumbnail2</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t3" className={styles.card}>
        <img src={thumbnail3} alt="" />
        <h2>Thumbnail3</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t4" className={styles.card}>
        <img src={thumbnail4} alt="" />
        <h2>Thumbnail4</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t5" className={styles.card}>
        <img src={thumbnail5} alt="" />
        <h2>Thumbnail5</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t6" className={styles.card}>
        <img src={thumbnail6} alt="" />
        <h2>Thumbnail6</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t7" className={styles.card}>
        <img src={thumbnail7} alt="" />
        <h2>Thumbnail7</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t8" className={styles.card}>
        <img src={thumbnail8} alt="" />
        <h2>Thumbnail8</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t1" className={styles.card}>
        <img src={thumbnail1} alt="" />
        <h2>Thumbnail1</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t2" className={styles.card}>
        <img src={thumbnail2} alt="" />
        <h2>Thumbnail2</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t3" className={styles.card}>
        <img src={thumbnail3} alt="" />
        <h2>Thumbnail3</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t4" className={styles.card}>
        <img src={thumbnail4} alt="" />
        <h2>Thumbnail4</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t5" className={styles.card}>
        <img src={thumbnail5} alt="" />
        <h2>Thumbnail5</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t6" className={styles.card}>
        <img src={thumbnail6} alt="" />
        <h2>Thumbnail6</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t7" className={styles.card}>
        <img src={thumbnail7} alt="" />
        <h2>Thumbnail7</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
      <NavLink to="/t8" className={styles.card}>
        <img src={thumbnail8} alt="" />
        <h2>Thumbnail8</h2>
        <h3>ChannelName</h3>
        <p>15k views &bull; Just now</p>
      </NavLink>
    </div>
  );
}

export default Feed;
