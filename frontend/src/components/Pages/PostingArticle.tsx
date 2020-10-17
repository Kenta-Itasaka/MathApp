import React, { FC } from 'react';
import SettingFile, { SettingFileProps } from '../Organisms/SettingFile';
import ClickEventButton, {
  ClickEventButtonProps,
} from '../Organisms/ClickEventButton';
import Text, { TextProps } from '../Organisms/Text';
import Textarea, { TextareaProps } from '../Organisms/Textarea';

export type PostingArticleProps = TextProps &
  TextareaProps &
  {acceptedFiles: File[]} &
  SettingFileProps &
  ClickEventButtonProps;

const PostingArticle: FC<PostingArticleProps> = ({
  inputText,
  setInputText,
  inputTextarea,
  setInputTextarea,
  acceptedFiles,
  setAcceptedFiles,
  onClick,
}) => {

  type customFile = File & {
    name: string;
  };
  const file: customFile = acceptedFiles[0] as customFile;
  const filename = file ? file.name : "";

  return (
    <>
      <Text inputText={inputText} setInputText={setInputText} />
      <Textarea
        inputTextarea={inputTextarea}
        setInputTextarea={setInputTextarea}
      />
      <SettingFile setAcceptedFiles={setAcceptedFiles} />
      <h1>{filename}</h1>
      <ClickEventButton onClick={onClick} displayStr="ファイル送信" />
    </>
  );
};

export default PostingArticle;
