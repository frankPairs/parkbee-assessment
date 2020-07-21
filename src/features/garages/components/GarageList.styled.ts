import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

export { Wrapper };
