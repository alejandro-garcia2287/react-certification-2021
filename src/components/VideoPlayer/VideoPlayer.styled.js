import styled from 'styled-components';

const Div = styled.div`
  min-height: 400px;
  margin-top: 20px;
`;

const P = styled.p`
  color: ${(props) => props.theme.secondaryTextColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export { Div, P, H1 };
