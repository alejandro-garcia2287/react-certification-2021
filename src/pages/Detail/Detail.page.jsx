import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RelatedVideosList from '../../components/RelatedVideosList/RelatedVideosList.component';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';

function Detail({ video, selectVideo }) {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <VideoPlayer video={video} />
        </Col>
        <Col md={4}>
          <RelatedVideosList video={video} selectVideo={selectVideo} />
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
