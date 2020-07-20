import React from 'react';

import { DefaultButton, PrimaryButton, SecondaryButton } from './RaisedButton.styled';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'default' | 'small';
  type: 'button' | 'submit';
  variant?: 'default' | 'primary' | 'secondary';
}

function RaisedButton({ size = 'default', variant = 'default', ...props }: Props) {
  switch (variant) {
    case 'secondary': {
      return <SecondaryButton size={size} {...props} />;
    }
    case 'primary': {
      return <PrimaryButton size={size} {...props} />;
    }
    default: {
      return <DefaultButton size={size} {...props} />;
    }
  }
}

export { RaisedButton };
