/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';

export interface TextProps {
  inputText: string;
  setInputText: (text: React.SetStateAction<string>) => void;
}

const Text: FC<TextProps> = ({
  inputText = '',
  setInputText = () => undefined,
}) => {
  return (
    <>
      <div>
        <TextField
          label="タイトル"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          fullWidth={true}
        />
      </div>
    </>
  );
};

export default Text;
