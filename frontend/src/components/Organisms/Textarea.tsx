/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';

export interface TextareaProps {
  inputTextarea: string;
  setInputTextarea: (text: React.SetStateAction<string>) => void;
}

const Textarea: FC<TextareaProps> = ({
  inputTextarea = '',
  setInputTextarea = () => undefined,
}) => {
  return (
    <>
      <div>
        <label>概要</label>
        <textarea
          value={inputTextarea}
          onChange={(event) => {
            setInputTextarea(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Textarea;
