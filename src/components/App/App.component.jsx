import React from 'react';
import AppNavbar from '../Navbar/AppNavbar.component';
import Content from '../Content/Content.component';
import { VideoProvider } from '../../state/VideoProvider';

function App() {
  return (
    <VideoProvider>
      <AppNavbar />
      <Content />
    </VideoProvider>
  );
}

export default App;
