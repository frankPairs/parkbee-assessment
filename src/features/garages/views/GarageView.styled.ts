import styled from 'styled-components';

const Wrapper = styled.div`
  .full-card {
    max-width: 75%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.desktopSmall}) {
    .full-card {
      max-width: unset;
    }
  }
`;

export { Wrapper };
