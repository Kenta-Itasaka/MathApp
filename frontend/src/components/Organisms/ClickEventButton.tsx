import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

export type ClickEventButtonProps = {
  onClick: () => void;
  displayStr?: string;
};

const ClickEventButton: FC<ClickEventButtonProps> = ({
  onClick = () => undefined,
  displayStr = 'default',
}) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {displayStr}
    </Button>
  );
};

export default ClickEventButton;
