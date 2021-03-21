import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../../pages/Detail/Detail.page';
import Home from '../../pages/Home/Home.page';
import VideoContext from '../../state/VideoProvider';
import { H2 } from './Content.styled';
import NotFound from '../../pages/NotFound/NotFound.page';

function Content() {
  const { state } = useContext(VideoContext);

  return (
    <>
      {state.isLoading && <H2>Loading</H2>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/videoDetail" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default Content;
