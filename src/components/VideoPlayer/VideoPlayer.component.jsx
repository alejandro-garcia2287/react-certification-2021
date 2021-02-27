import React from 'react';
import { Div, P } from './VideoPlayer.styled';

function VideoPlayer({ video }) {
  const { title, description } = video.snippet;
  const { videoId } = video.id;

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
