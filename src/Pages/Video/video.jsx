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
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import jack from "../../assets/jack.png";

function Video() {
  return (
    <div className={styles.playContainer}>
      <PlayVideo />
      <Recommended />
    </div>
  );
}

function PlayVideo() {
  return (
    <div className={styles.playVideo}>
      <video
        src={video}
        className={styles.video}
        controls
        autoPlay
        muted
      ></video>
      <h3>Video title</h3>
      <div className={styles.playVideoInfo}>
        <p>15k views &bull; Just now</p>
        <div>
          <span>
            <img src={like} alt="" /> 10
          </span>
          <span>
            <img src={dislike} alt="" /> 5
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className={styles.publisher}>
        <img src={jack} alt="" />
        <div>
          <p>Channel Name</p>
          <span>12k Subscribers</span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className={styles.vidDescription}>
        <p>
          This is videos description.... Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repellendus corporis iure facilis incidunt ipsa.
          Assumenda nobis, hic consequuntur neque velit deserunt recusandae non
          inventore quo eos sequi nam nemo laudantium.{" "}
        </p>
        <hr />
        <h4>1k Comments </h4>
        <div className={styles.comment}>
          <img src={jack} alt="" className={styles.user} />
          <div className={styles.commentInfo}>
            <h3>
              @UserName<span> 10 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda iusto autem necessitatibus possimus beatae neque
              repudiandae nostrum rerum dolorem ratione enim animi consequuntur
              porro laborum libero quasi, magnam eveniet obcaecati.
            </p>
            <div className={styles.commentAction}>
              <img src={like} alt="" />
              <span>100</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.comment}>
          <img src={jack} alt="" className={styles.user} />
          <div className={styles.commentInfo}>
            <h3>
              @UserName<span> 10 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda iusto autem necessitatibus possimus beatae neque
              repudiandae nostrum rerum dolorem ratione enim animi consequuntur
              porro laborum libero quasi, magnam eveniet obcaecati.
            </p>
            <div className={styles.commentAction}>
              <img src={like} alt="" />
              <span>100</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
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
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
      <div className={styles.sideVideo}>
        <NavLink to="/t" className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </NavLink>
        <div className={styles.info}>
          <h4>Thumbnail1</h4>
          <p>ChannelName</p>
          <p className={styles.infoViews}>15k views </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
