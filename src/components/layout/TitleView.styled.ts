import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-size: 1.75em;
  color: ${({ theme: { colors } }) => colors.black};
  margin-bottom: 2.75rem;

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-bottom: 1.5rem;
  }
`;

export { TitleStyled };
