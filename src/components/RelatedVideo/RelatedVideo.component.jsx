import React, { useContext } from 'react';
import { Row, Img, H1, P, Col } from './RelatedVideo.styled';
import VideoContext from '../../state/VideoProvider';
import { ACTIONS } from '../../state/VideoReducer';

function RelatedVideo({ video, tabIndex }) {
  const { dispatch } = useContext(VideoContext);

  const { title, description, thumbnails } = video.snippet;
  const imgSrc = thumbnails.high.url;

  function handleOnClick() {
    dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: video } });
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: video } });
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
