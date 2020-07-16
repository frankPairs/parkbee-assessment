import React from 'react';

import { Wrapper } from './RaisedButton.styled';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'default' | 'small';
  type: 'button' | 'submit';
}

function RaisedButton({ children, size = 'default', ...props }: Props) {
  return (
    <Wrapper size={size} {...props}>
      {children}
    </Wrapper>
  );
}

export { RaisedButton };
