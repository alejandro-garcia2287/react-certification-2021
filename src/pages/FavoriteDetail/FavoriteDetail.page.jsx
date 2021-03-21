import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';
import FavoriteVideosList from '../FavoriteVideosList/FavoriteVideosList';

function FavoriteDetail() {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <VideoPlayer />
        </Col>
        <Col md={4}>
          <FavoriteVideosList />
        </Col>
      </Row>
    </Container>
  );
}

export default FavoriteDetail;
