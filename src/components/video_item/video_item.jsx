import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, handleDetail, video: { snippet }, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => handleDetail(video)}
      >
        <div className={styles.video}>
          <div>
            <img src={snippet.thumbnails.default.url} alt="thumbnails" />
          </div>
          <div className={styles.videoContents}>
            <p className={styles.videoTitle}>{snippet.title}</p>
            <p className={styles.channelTitle}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
