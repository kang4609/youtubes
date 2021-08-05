import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => {
  const { url, width, height } = snippet.thumbnails.default;
  return (
    <li className={styles.item}>
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
