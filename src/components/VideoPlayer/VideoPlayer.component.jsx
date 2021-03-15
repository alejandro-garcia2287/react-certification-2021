import React, { useContext } from 'react';
import { Div, P, H1 } from './VideoPlayer.styled';
import VideoContext from '../../state/VideoProvider';

function VideoPlayer() {
  const { state } = useContext(VideoContext);
  const { selectedVideo } = state;
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
      <H1>{title}</H1>
      <P>{description}</P>
    </Div>
  );
}

export default VideoPlayer;
