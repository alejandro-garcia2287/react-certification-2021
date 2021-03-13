import React, { useContext } from 'react';
import Detail from '../../pages/Detail/Detail.page';
import Home from '../../pages/Home/Home.page';
import VideoContext from '../../state/VideoProvider';

function Content() {
  const { state } = useContext(VideoContext);

  return <React.Fragment>
    {state.isLoading && <h2> Loading</h2>}
    {state.selectedVideo ? <Detail /> : <Home />}
  </React.Fragment>;
}

export default Content;