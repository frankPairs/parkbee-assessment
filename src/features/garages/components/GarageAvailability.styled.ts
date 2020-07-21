import styled from 'styled-components';

interface Props {
  isCompleted: boolean;
}

const Wrapper = styled.div<Props>`
  color: ${({ theme, isCompleted }) => (isCompleted ? theme.colors.red : theme.colors.gray1)};
  font-size: 0.75em;
`;

export { Wrapper };
