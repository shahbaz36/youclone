import { NavLink } from "react-router-dom";

import styles from "./Feed.module.css";

// import thumbnail1 from "../../assets/thumbnail1.png";
// import thumbnail2 from "../../assets/thumbnail2.png";
// import thumbnail3 from "../../assets/thumbnail3.png";
// import thumbnail4 from "../../assets/thumbnail4.png";
// import thumbnail5 from "../../assets/thumbnail5.png";
// import thumbnail6 from "../../assets/thumbnail6.png";
// import thumbnail7 from "../../assets/thumbnail7.png";
// import thumbnail8 from "../../assets/thumbnail8.png";

import { API_KEY, valueConverter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

function Feed({ category }) {
  const [feedData, setFeedData] = useState([]);

  useEffect(
    function () {
      async function fetchVideos() {
        const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
        const res = await fetch(videoList_URL);
        const data = await res.json();
        setFeedData(data.items);
      }
      fetchVideos();
    },
    [category]
  );

  return (
    <div className={styles.feed}>
      {feedData.map((item, index) => {
        return (
          <NavLink
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className={styles.card}
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Feed;
