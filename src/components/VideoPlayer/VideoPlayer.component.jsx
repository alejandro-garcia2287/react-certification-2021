import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Div, P, H1 } from './VideoPlayer.styled';
import VideoContext from '../../state/VideoProvider';
import { ACTIONS } from '../../state/VideoReducer';

function VideoPlayer() {
  const { state, dispatch } = useContext(VideoContext);
  const { selectedVideo } = state;
  const history = useHistory();

  if (!selectedVideo || !selectedVideo.snippet) {
    history.push('/');
    return <h1>Redirecting</h1>;
  }

  const { title, description } = selectedVideo.snippet;
  const { videoId } = selectedVideo.id;

  function addToFavorites(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TO_FAVORITES,
      payload: {
        video: selectedVideo,
      },
    });
  }

  function removeFromFavorites(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.REMOVE_FROM_FAVORITES,
      payload: {
        video: selectedVideo,
      },
    });
  }

  function isFavorite() {
    if (!state.favoritesList) {
      return false;
    }

    const video = state.favoritesList.find((item) => item.id.videoId === videoId);
    if (video) {
      return true;
    }
    return false;
  }

  return (
    <Div>
      <iframe
        width="100%"
        height="450px"
        frameBorder="0"
        title="rick roll"
        src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=0`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      />
      <H1>{title}</H1>
      <P>{description}</P>

      {state.loggedUser &&
        (isFavorite() ? (
          <Button variant="outline-danger" onClick={removeFromFavorites}>
            Remove from Favorites
          </Button>
        ) : (
          <Button variant="outline-success" onClick={addToFavorites}>
            Add to Favorites
          </Button>
        ))}
    </Div>
  );
}

export default VideoPlayer;
