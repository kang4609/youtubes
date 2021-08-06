import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, handleDetail, video: { snippet }, display }) => {
  const { url, width, height } = snippet.thumbnails.default;
  const displayType = display === 'list' ? styles.list : styles.grid;
  console.log(display);
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => handleDetail(video)}
    >
      <div className={styles.video}>
        <div>
          <img src={url} width={width} height={height} />
        </div>
        <div className={styles.videoContents}>
          <p className={styles.videoTitle}>{snippet.title}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
