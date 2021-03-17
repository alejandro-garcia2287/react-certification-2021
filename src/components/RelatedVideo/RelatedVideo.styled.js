import styled from 'styled-components';
import { Row as BootstrapRow, Col as BootstrapCol } from 'react-bootstrap';

const Row = styled(BootstrapRow)`
  margin-top: 5px;
  min-height: 100px;
  border-top: ${(props) => props.theme.secondaryTextColor} solid;
  border-width: 1px;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  min-height: 100px;
  min-width: 100px;
  width: 100%;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: medium;
  margin-left: 10px;
  color: ${(props) => props.theme.textColor};
`;

const Col = styled(BootstrapCol)`
  margin-left: 0px;
  padding: 0px;
`;

const P = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: small;
  margin-left: 10px;
  color: ${(props) => props.theme.secondaryTextColor};
`;

export { Row, Img, H1, P, Col };
