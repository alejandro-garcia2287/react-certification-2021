import React, { useContext } from 'react';
import { Div, P } from './VideoPlayer.styled';
import VideoContext from '../../state/VideoProvider';

function VideoPlayer() {
  const { selectedVideo } = useContext(VideoContext);

  const { title, description } = selectedVideo.snippet;
  const { videoId } = selectedVideo.id;

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
      <h1>{title}</h1>
      <P>{description}</P>
    </Div>
  );
}

export default VideoPlayer;
