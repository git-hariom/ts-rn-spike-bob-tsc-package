import React from 'react';
import {IconButtonWrapper, IconButtonLabel} from './IconButton.style';

type IconButtonProps = {
  label: string;
  borderRadius?: number;
};

const IconButton = ({
  label = 'Submit',
  borderRadius,
}: IconButtonProps): React.JSX.Element => {
  return (
    <IconButtonWrapper borderRadius={borderRadius}>
      <IconButtonLabel>V1-IconButton-{label}</IconButtonLabel>
    </IconButtonWrapper>
  );
};

export default IconButton;
