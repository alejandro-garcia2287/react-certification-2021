import React, { useContext } from 'react';
import { Route } from 'react-router';
import VideoContext from '../../state/VideoProvider';
import Error from '../../pages/Error/Error.page';

function ProtectedRoute(props) {
  const { state } = useContext(VideoContext);
  const isLoggedIn = state.loggedUser ? true : false;
  return isLoggedIn ? <Route {...props} /> : <Error reason={'403: You don not have access to the requested page'} />;
}

export default ProtectedRoute;