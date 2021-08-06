import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPoplular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const handelSubmit = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query)
        .then((items) => setVideos(items))
        .catch((error) => console.log('error', error));
    },
    [youtube]
  );

  const handleDetail = (selectedVideo) => {
    console.log(`handleDetail selectedVideo=${selectedVideo.id}`);
    setSelectedVideo(selectedVideo);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSubmit={handelSubmit} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            handleDetail={handleDetail}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}
//
export default App;
