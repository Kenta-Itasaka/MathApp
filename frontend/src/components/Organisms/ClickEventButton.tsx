import React, { FC } from 'react';

export type ClickEventButtonProps = {
  onClick: () => void;
  displayStr?: string;
};

const ClickEventButton: FC<ClickEventButtonProps> = ({
  onClick = () => undefined,
  displayStr = 'default',
}) => {
  return (
    <button type="button" onClick={onClick}>
      {displayStr}
    </button>
  );
};

export default ClickEventButton;
