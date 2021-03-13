import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppNavbar from '../Navbar/AppNavbar.component';
import GlobalStyle from '../../Global.styles';
import Content from '../Content/Content.component';
import {VideoProvider} from '../../state/VideoProvider';

const theme = {
  primaryBackgroundColor: '#eee',
  fontFamily: '\'Montserrat\', sans-serif',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <VideoProvider>
        <AppNavbar brand="React Challenge" navLinkHref="/" navLinkText="Home" />
        <Content />
      </VideoProvider>
    </ThemeProvider>
  );
}

export default App;
