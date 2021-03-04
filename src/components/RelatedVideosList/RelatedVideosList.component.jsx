import React from 'react';
import RelatedVideo from '../RelatedVideo/RelatedVideo.component';
import Container from './RelatedVideosList.styled';
import useFetch from '../../hooks/useFetch';

function RelatedVideosList({ video, selectVideo }) {
  const [isLoading, data] = useFetch(
    `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&relatedToVideoId=${video.id.videoId}`
  );

  return (
    <Container fluid>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        data &&
        data.items &&
        data.items.map((item, index) => {
          return (
            item.snippet && (
              <RelatedVideo
                key={item.id.videoId || item.id.channelId}
                video={item}
                selectVideo={selectVideo}
                tabIndex={index}
              />
            )
          );
        })
      )}
    </Container>
  );
}

export default RelatedVideosList;
