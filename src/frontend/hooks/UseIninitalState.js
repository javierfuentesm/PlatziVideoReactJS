import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  /*   useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
 */
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setVideos(data);
    };
    fetchdata();
  }, []);
  return videos;
};

export default useInitialState;
