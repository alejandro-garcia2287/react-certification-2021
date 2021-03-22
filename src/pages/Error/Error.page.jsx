import React from 'react';
import StyledJumbotron, { H1 } from './Error.page.styled';

function Error({ reason }) {
  return (
    <StyledJumbotron className="my-auto">
      <H1>{reason}</H1>
    </StyledJumbotron>
  );
}

export default Error;
