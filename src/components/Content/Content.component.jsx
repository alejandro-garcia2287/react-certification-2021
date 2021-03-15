import React, { useContext } from 'react';
import Detail from '../../pages/Detail/Detail.page';
import Home from '../../pages/Home/Home.page';
import VideoContext from '../../state/VideoProvider';
import { H2 } from './Content.styled';

function Content() {
  const { state } = useContext(VideoContext);

  return (
    <>
      {state.isLoading && <H2>Loading</H2>}
      {state.selectedVideo ? <Detail /> : <Home />}
    </>
  );
}

export default Content;
