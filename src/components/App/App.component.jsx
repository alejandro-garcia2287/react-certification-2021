import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import AppNavbar from '../Navbar/AppNavbar.component';
import Home from '../../pages/Home/Home.page';
import Detail from '../../pages/Detail/Detail.page';
import GlobalStyle from '../../Global.styles';
import useFetch from '../../hooks/useFetch';
import VideoContext from '../../state/VideoProvider';

const theme = {
  primaryBackgroundColor: '#eee',
  fontFamily: "'Montserrat', sans-serif",
};

function App() {
  // const initialState = {
  //   selectedVideo: undefined,
  //   data: [],
  //   isLoading: true
  // };
  //
  // const [state, dispatch] = useReducer(VideoReducer, initialState);

  const [selectedVideo, setSelectedVideo] = useState();

  const [isLoading, data, doFetch] = useFetch(
    `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=wizeline`
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <VideoContext.Provider
          value={{ selectedVideo, setSelectedVideo, isLoading, data, doFetch }}
        >
          <AppNavbar brand="React Challenge" navLinkHref="/" navLinkText="Home" />
          {isLoading && <h2> Loading</h2>}
          {selectedVideo ? <Detail /> : <Home />}
        </VideoContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
