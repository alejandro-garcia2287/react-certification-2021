import React from 'react';
import { Row, Img, H1, P, Col } from './RelatedVideo.styled';

function RelatedVideo({ video, selectVideo, tabIndex }) {
  const { title, description } = video.snippet;
  const imgSrc = video.snippet.thumbnails.high.url;

  function handleOnClick() {
    selectVideo(video);
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      selectVideo(video);
    }
  }

  return (
    <Row>
      <Col sm={4}>
        <div
          onClick={handleOnClick}
          onKeyDown={handleOnKeyDown}
          role="button"
          tabIndex={tabIndex}
        >
          <Img src={imgSrc} alt={title} />
        </div>
      </Col>
      <Col sm={8}>
        <div
          onClick={handleOnClick}
          onKeyDown={handleOnKeyDown}
          role="button"
          tabIndex={tabIndex}
        >
          <H1>{title}</H1>
          <P>{description.substr(0, 80)}</P>
        </div>
      </Col>
    </Row>
  );
}

export default RelatedVideo;
