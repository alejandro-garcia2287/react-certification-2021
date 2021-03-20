import React, { useContext } from 'react';
import Detail from '../../pages/Detail/Detail.page';
import Home from '../../pages/Home/Home.page';
import VideoContext from '../../state/VideoProvider';
import { H2 } from './Content.styled';
import { Route, Switch } from 'react-router-dom';

function Content() {
  const { state } = useContext(VideoContext);

  return (
    <>
      <Route></Route>
      {state.isLoading && <H2>Loading</H2>}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/videoDetail" component={Detail}></Route>
      </Switch>
    </>
  );
}

export default Content;
