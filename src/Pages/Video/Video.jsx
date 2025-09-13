import { NavLink, useParams } from "react-router-dom";

import styles from "./Video.module.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import jack from "../../assets/jack.png";
import { useEffect, useState } from "react";
import moment from "moment";

import { API_KEY, valueConverter } from "../../data";

function Video() {
  return (
    <div className={styles.playContainer}>
      <PlayVideo />
      <Recommended />
    </div>
  );
}

function PlayVideo() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      const fetchVideoAndChannelData = async () => {
        try {
          setIsLoading(true);

          // Fetch video data
          const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;
          const videoRes = await fetch(VIDEO_URL);
          const videoData = await videoRes.json();
          const videoItem = videoData.items[0]; // Store video data
          setVideoData(videoItem);

          // Fetch channel data after video data is set
          const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoItem.snippet.channelId}&key=${API_KEY}`;
          const channelRes = await fetch(CHANNEL_URL);
          const channelData = await channelRes.json();
          setChannelData(channelData.items[0]);

          const COMMENT_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=60&videoId=${id}&key=${API_KEY}`;
          const commentRes = await fetch(COMMENT_URL);
          const commentData = await commentRes.json();
          setCommentData(commentData.items);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); // Stop loading after both requests
        }
      };

      fetchVideoAndChannelData();
    },
    [id]
  );

  return (
    <div className={styles.playVideo}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{isLoading ? "Title" : videoData.snippet.title}</h3>
      <div className={styles.playVideoInfo}>
        <p>
          {isLoading
            ? ""
            : `${valueConverter(videoData.statistics.viewCount)} `}
          &bull;{" "}
          {isLoading
            ? ""
            : `${moment(videoData.snippet.publishedAt).fromNow()}`}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {isLoading ? "10" : valueConverter(videoData.statistics.likeCount)}
          </span>
          <span>
            <img src={dislike} alt="" />
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
        <img
          src={
            isLoading ? { jack } : channelData.snippet.thumbnails.default.url
          }
          alt=""
        />
        <div>
          <p>{videoData ? videoData.snippet.channelTitle : "ChannelTitle"}</p>
          <span>
            {isLoading
              ? "12k"
              : valueConverter(channelData.statistics.subscriberCount)}{" "}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className={styles.vidDescription}>
        <p>{isLoading ? "Description" : videoData.snippet.description}</p>
        <hr />
        <h4>
          {isLoading
            ? "@Comments"
            : `${valueConverter(
                videoData.statistics.commentCount
              )} comments`}{" "}
        </h4>
        {isLoading
          ? "Comments"
          : commentData.map((item, index) => {
              return (
                <div className={styles.comment} key={index}>
                  <img
                    src={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                    alt=""
                    className={styles.user}
                  />
                  <div className={styles.commentInfo}>
                    <h3>
                      {item.snippet.topLevelComment.snippet.authorDisplayName}

                      <span>
                        {moment(
                          item.snippet.topLevelComment.snippet.publishedAt
                        ).fromNow()}
                      </span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className={styles.commentAction}>
                      <img src={like} alt="" />
                      <span>
                        {valueConverter(
                          item.snippet.topLevelComment.snippet.likeCount
                        )}
                      </span>
                      <img src={dislike} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

function Recommended() {
  const { categoryId, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recommendedVideos, setRecommendedVideos] = useState(null);

  useEffect(() => {
    async function fetchRecommendedVideos() {
      setIsLoading(true);
      try {
        const recommendedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const res = await fetch(recommendedUrl);
        const data = await res.json();
        setRecommendedVideos(data.items);
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendedVideos();
  }, [categoryId, id]);

  if (isLoading) return <div>Loading please wait </div>;

  return (
    <div className={styles.recommended}>
      {recommendedVideos.map((item, index) => {
        return (
          <div className={styles.sideVideo} key={index}>
            <NavLink
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              className={styles.thumbnail}
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
            </NavLink>
            <div className={styles.info}>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p className={styles.infoViews}>
                {valueConverter(item.statistics.viewCount)} views{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Video;
