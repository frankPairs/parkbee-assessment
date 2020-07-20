import styled from 'styled-components';

interface Props {
  hasFeature: boolean;
}

const Wrapper = styled.li<Props>`
  display: flex;
  margin-bottom: 0.75rem;

  .icon-wrapper {
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;

    svg {
      fill: ${({ theme, hasFeature }) => (hasFeature ? theme.colors.green : theme.colors.red)};
    }
  }

  .text {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export { Wrapper };
