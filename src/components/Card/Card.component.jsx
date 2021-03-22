import React, { useContext } from 'react';
import { useHistory } from 'react-router';
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

function Card({ item, tabIndex, targetRoute }) {
  const { dispatch } = useContext(VideoContext);
  const { title, description } = item.snippet;
  const imgSrc = item.snippet.thumbnails.high.url;
  const history = useHistory();

  function handleOnClick() {
    dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: item } });
    history.push(targetRoute);
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      dispatch({ type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: item } });
      history.push(targetRoute);
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
