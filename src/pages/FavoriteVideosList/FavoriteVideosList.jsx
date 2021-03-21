import React, { useContext } from 'react';
import Container from '../../components/RelatedVideosList/RelatedVideosList.styled';
import VideoContext from '../../state/VideoProvider';
import RelatedVideo from '../../components/RelatedVideo/RelatedVideo.component';

function FavoriteVideosList() {
  const { state } = useContext(VideoContext);
  const { favoritesList } = state;

  return (
    <Container fluid>
      {favoritesList &&
        favoritesList.map((item, index) => {
          return (
            item.snippet && (
              <RelatedVideo
                key={item.id.videoId || item.id.channelId}
                video={item}
                tabIndex={index}
              />
            )
          );
        })}
    </Container>
  );
}

export default FavoriteVideosList;
