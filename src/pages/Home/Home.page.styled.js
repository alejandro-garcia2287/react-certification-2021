import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bolder;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
`;

export { Title, H1 };
