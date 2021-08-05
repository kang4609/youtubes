import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPoplular() //
      .then((videos) => setVideos(videos));
  }, []);

  const handelSubmit = useCallback((query) => {
    youtube
      .search(query)
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSubmit={handelSubmit} />
      <VideoList videos={videos} />
    </div>
  );
}
//
export default App;
