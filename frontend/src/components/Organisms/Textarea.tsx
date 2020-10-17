/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          label="概要"
          variant="outlined"
          multiline
          value={inputTextarea}
          onChange={(event) => {
            setInputTextarea(event.target.value);
          }}
          fullWidth={true}
          rows={10}
        />
      </div>
    </>
  );
};

export default Textarea;
