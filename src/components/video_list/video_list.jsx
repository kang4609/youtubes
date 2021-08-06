import styles from './video_list.module.css';
import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = ({ videos, display, handleDetail }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          handleDetail={handleDetail}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
