import React, { useContext } from 'react';
import RelatedVideo from '../RelatedVideo/RelatedVideo.component';
import Container from './RelatedVideosList.styled';
import useFetch from '../../hooks/useFetch';
import VideoContext from '../../state/VideoProvider';

function RelatedVideosList() {
  const { state } = useContext(VideoContext);
  const { selectedVideo } = state;

  const videoId = (selectedVideo && selectedVideo.id.videoId) || '';

  const [isLoading, data] = useFetch(
    `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&relatedToVideoId=${videoId}`
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
