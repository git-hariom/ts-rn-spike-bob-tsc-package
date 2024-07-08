import React from 'react';
import {ButtonWrapper, ButtonLabel} from './Button.style';

type ButtonProps = {
  label: string;
  borderRadius?: number;
};

const Button = ({
  label = 'Submit',
  borderRadius,
}: ButtonProps): React.JSX.Element => {
  return (
    <ButtonWrapper borderRadius={borderRadius}>
      <ButtonLabel>V1{label}</ButtonLabel>
    </ButtonWrapper>
  );
};

export default Button;
