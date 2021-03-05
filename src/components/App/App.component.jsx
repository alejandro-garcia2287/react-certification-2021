import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import AppNavbar from '../Navbar/AppNavbar.component';
import Home from '../../pages/Home/Home.page';
import Detail from '../../pages/Detail/Detail.page';
import GlobalStyle from '../../Global.styles';
import useFetch from '../../hooks/useFetch';

const theme = {
  primaryBackgroundColor: '#eee',
  fontFamily: "'Montserrat', sans-serif",
};

function App() {
  const [selectedVideo, setSelectedVideo] = useState();

  const [isLoading, data, doFetch] = useFetch(
    `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=wizeline`
  );
  const { items } = data;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppNavbar
          brand="React Challenge"
          navLinkHref="/"
          navLinkText="Home"
          apiClient={doFetch}
          selectVideo={setSelectedVideo}
        />
        {isLoading && <h2> Loading</h2>}
        {selectedVideo ? (
          <Detail video={selectedVideo} selectVideo={setSelectedVideo} />
        ) : (
          <Home items={items} selectVideo={setSelectedVideo} />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
