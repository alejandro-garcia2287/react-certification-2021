import React from 'react';
import {
  Img,
  StyledContainer,
  Title,
  Description,
  StyledCol,
  StyledCard,
} from './Card.styled';

function Card({ selectVideoFunction, item, tabIndex }) {
  const { title, description } = item.snippet;
  const imgSrc = item.snippet.thumbnails.high.url;

  function handleOnClick() {
    selectVideoFunction(item);
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      selectVideoFunction(item);
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
