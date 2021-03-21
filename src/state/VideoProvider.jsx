import React, { createContext, useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoReducer from './VideoReducer';
import reducerFetch from '../utils/reducerFetch';
import themes from '../theme/themes';
import GlobalStyle from '../Global.styles';

const initialUri = `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=wizeline`;

const initialState = {
  isLoading: true,
  data: [],
  selectedVideo: undefined,
  currentTheme: themes.blue,
};

const VideoContext = createContext({
  state: undefined,
  dispatch: undefined,
});

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(VideoReducer, initialState);
  const { currentTheme } = state;

  useEffect(() => {
    reducerFetch(initialUri, dispatch);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <VideoContext.Provider value={{ state, dispatch }}>
        <Router>{children}</Router>
      </VideoContext.Provider>
    </ThemeProvider>
  );
}

export { VideoProvider };
export default VideoContext;
