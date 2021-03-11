import React, { useContext } from 'react';
import { Row, Img, H1, P, Col } from './RelatedVideo.styled';
import VideoContext from '../../state/VideoProvider';

function RelatedVideo({ video, tabIndex }) {
  const { setSelectedVideo } = useContext(VideoContext);

  const { title, description, thumbnails } = video.snippet;
  const imgSrc = thumbnails.high.url;

  function handleOnClick() {
    setSelectedVideo(video);
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      setSelectedVideo(video);
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
