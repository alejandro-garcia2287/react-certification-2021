import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RelatedVideosList from '../../components/RelatedVideosList/RelatedVideosList.component';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';

function Detail() {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <VideoPlayer />
        </Col>
        <Col md={4}>
          <RelatedVideosList />
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
