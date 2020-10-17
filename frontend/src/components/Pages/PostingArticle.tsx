import React, { FC } from 'react';
import SettingFile, { SettingFileProps } from '../Organisms/SettingFile';
import ClickEventButton, {
  ClickEventButtonProps,
} from '../Organisms/ClickEventButton';
import Text, { TextProps } from '../Organisms/Text';
import Textarea, { TextareaProps } from '../Organisms/Textarea';
import MovePageButton from '../../containers/Organisms/MovePageButton';
import "./PostingArticle.css";

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
      <div className="backButtonPA">
        <MovePageButton displayStr="戻る" destination="/" />
      </div>
      <div className="titlePA">
        <Text inputText={inputText} setInputText={setInputText} />
      </div>
      <div className="descriptionPA">
        <Textarea
          inputTextarea={inputTextarea}
          setInputTextarea={setInputTextarea}
        />
      </div>
      <div className="settingFile">
        <SettingFile setAcceptedFiles={setAcceptedFiles} />
      </div>
      <h1>{filename}</h1>
      <div className="submitButton">
        <ClickEventButton onClick={onClick} displayStr="送信" />
      </div>
    </>
  );
};

export default PostingArticle;
