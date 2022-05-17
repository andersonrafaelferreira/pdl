import React, { Children, HTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  size: string;
}

export const Button: React.FC<ButtonProps> = ({
  children, disabled, size
}) => {

  return (
    <Container disabled={disabled} size={size}>
      {children}
    </Container>
  );
}