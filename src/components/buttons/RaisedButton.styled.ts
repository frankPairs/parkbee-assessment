import styled from 'styled-components';

interface WrapperProps {
  readonly size: 'default' | 'small';
}

const Wrapper = styled.button<WrapperProps>`
  align-items: center;
  display: flex;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: ${({ size }) => (size === 'default' ? '0.875em' : '0.8125em')};
  height: ${({ size }) => (size === 'default' ? '2.5rem' : '2rem')};
  line-height: 2.5rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const DefaultButton = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;

const PrimaryButton = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;

const SecondaryButton = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;

export { DefaultButton, PrimaryButton, SecondaryButton };
