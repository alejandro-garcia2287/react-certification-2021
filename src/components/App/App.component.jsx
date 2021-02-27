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
  // const [selectedVideo, setSelectedVideo] = useState( {
  //   "kind": "youtube#searchResult",
  //   "etag": "_PVKwNJf_qw9nukFeRFOtQ837o0",
  //   "id": {
  //     "kind": "youtube#channel",
  //     "channelId": "UCPGzT4wecuWM0BH9mPiulXg"
  //   },
  //   "snippet": {
  //     "publishedAt": "2014-09-27T01:39:18Z",
  //     "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
  //     "title": "Wizeline",
  //     "description": "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
  //     "thumbnails": {
  //       "default": {
  //         "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
  //       },
  //       "medium": {
  //         "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
  //       },
  //       "high": {
  //         "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
  //       }
  //     },
  //     "channelTitle": "Wizeline",
  //     "liveBroadcastContent": "upcoming",
  //     "publishTime": "2014-09-27T01:39:18Z"
  //   }
  // });
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
          navLinkHref="/home"
          navLinkText="Home"
          apiClient={doFetch}
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
