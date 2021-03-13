import React, { useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import AppNavbar from '../Navbar/AppNavbar.component';
import Home from '../../pages/Home/Home.page';
import Detail from '../../pages/Detail/Detail.page';
import GlobalStyle from '../../Global.styles';
import VideoContext from '../../state/VideoProvider';
import VideoReducer from '../../state/VideoReducer';
import reducerFetch from '../../utils/reducerFetch';

const theme = {
  primaryBackgroundColor: '#eee',
  fontFamily: "'Montserrat', sans-serif",
};

const initialUri = `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=wizeline`;

function App() {
  const initialState = {
    isLoading: true,
    data: [],
    selectedVideo: undefined,
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  useEffect(() => {
    reducerFetch(initialUri, dispatch);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <VideoContext.Provider value={{ state, dispatch }}>
          <AppNavbar brand="React Challenge" navLinkHref="/" navLinkText="Home" />
          {state.isLoading && <h2> Loading</h2>}
          {state.selectedVideo ? <Detail /> : <Home />}
        </VideoContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
