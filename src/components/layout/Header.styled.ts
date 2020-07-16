import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  grid-area: header;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0;
  padding: 0 10%;

  .logo {
    height: 2.5rem;
    width: auto;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 1.5rem;

    .logo {
      height: 1.875rem;
    }
  }
`;

export { HeaderStyled };
