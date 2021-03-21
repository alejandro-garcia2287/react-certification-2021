import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../../pages/Detail/Detail.page';
import Home from '../../pages/Home/Home.page';
import VideoContext from '../../state/VideoProvider';
import { H2 } from './Content.styled';
import Favorites from '../../pages/Favorites/Favorites.page';
import FavoriteDetail from '../../pages/FavoriteDetail/FavoriteDetail.page';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Error from '../../pages/Error/Error.page';

function Content() {
  const { state } = useContext(VideoContext);

  return (
    <>
      {state.isLoading && <H2>Loading</H2>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videoDetail" component={Detail} />
        <ProtectedRoute path="/favorites" component={Favorites} />
        <ProtectedRoute path="/favoriteDetail" component={FavoriteDetail} />
        <Route path="*" render={(props) =>
          <Error reason={'404: The requested page was not found'} {...props} />} />
      </Switch>
    </>
  );
}

export default Content;
