import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';

const StyledJumbotron = styled(Jumbotron)`
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

export default StyledJumbotron;
export { H1 };
