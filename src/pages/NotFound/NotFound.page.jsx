import React from 'react';
import StyledJumbotron, { H1 } from './NotFound.page.styled';

function NotFound() {
  return (
    <StyledJumbotron className="my-auto">
      <H1>404: The requested page was not found</H1>
    </StyledJumbotron>
  );
}

export default NotFound;
