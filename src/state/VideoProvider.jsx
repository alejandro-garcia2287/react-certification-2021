import React, { createContext, useEffect, useReducer } from 'react';
import VideoReducer from './VideoReducer';
import reducerFetch from '../utils/reducerFetch';

const initialUri = `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=wizeline`;

const initialState = {
  isLoading: true,
  data: [],
  selectedVideo: undefined
};

const VideoContext = createContext({
  state: undefined,
  dispatch: undefined
});

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  useEffect(() => {
    reducerFetch(initialUri, dispatch);
  }, []);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

export {VideoProvider};
export default VideoContext;
