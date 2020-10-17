import React, { FC } from 'react';
import { useHistory } from 'react-router';
import ClickEventButton from '../../components/Organisms/ClickEventButton';

export interface MovePageButtonProps {
  displayStr: string;
  destination: string;
}

const MovePageButton: FC<MovePageButtonProps> = ({
  displayStr,
  destination,
}) => {
  const history = useHistory();

  const moveFunc = () => {
    history.push(destination);
  };

  return <ClickEventButton onClick={moveFunc} displayStr={displayStr} />;
};

export default MovePageButton;
