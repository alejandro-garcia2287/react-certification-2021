import React, { useContext } from 'react';
import {
  Img,
  StyledContainer,
  Title,
  Description,
  StyledCol,
  StyledCard,
} from './Card.styled';
import VideoContext from '../../state/VideoProvider';
import { ACTIONS } from '../../state/VideoReducer';

function Card({ item, tabIndex }) {
  const { dispatch } = useContext(VideoContext);

  const { title, description } = item.snippet;
  const imgSrc = item.snippet.thumbnails.high.url;

  function handleOnClick() {
    dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: item } });
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: item } });
    }
  }

  return (
    <>
      <StyledCol lg="4" md="6">
        <StyledCard className="dflex">
          <div
            onClick={handleOnClick}
            onKeyDown={handleOnKeyDown}
            role="button"
            tabIndex={tabIndex}
          >
            <Img src={imgSrc} />
            <StyledContainer>
              <Title>
                <b>{title}</b>
              </Title>
              <Description>{description}</Description>
            </StyledContainer>
          </div>
        </StyledCard>
      </StyledCol>
    </>
  );
}

export default Card;
