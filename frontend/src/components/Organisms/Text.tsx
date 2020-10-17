/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';

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
        <label>タイトル</label>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Text;
