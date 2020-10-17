import { useState } from 'react';
import axios from 'axios';
import postApi from '../services/postApi';
import putApi from '../services/putApi';
import { postApiPath, ApiConfig, putApiPath } from '../config';
import { Article } from '../models/models';

const postData = async (
  path: string,
  jsonStr?: string,
  optionConfig?: ApiConfig,
) => {
  return (await postApi(path, jsonStr, optionConfig)) as Article;
};

const putData = async (
  path: string,
  jsonStr?: string,
  optionConfig?: ApiConfig,
) => {
  return (await putApi(path, jsonStr, optionConfig)) as Article;
};

export interface ReturnValue {
  inputText: string;
  setInputText: (text: React.SetStateAction<string>) => void;
  inputTextarea: string;
  setInputTextarea: (text: React.SetStateAction<string>) => void;
  acceptedFiles: File[];
  setAcceptedFiles: (files: React.SetStateAction<File[]>) => void;
  onClick: () => void;
}

const usePostArticle = (): ReturnValue => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [inputTextarea, setInputTextarea] = useState<string>('');

  type customFile = File & {
    type: string;
    size: number;
  };
  const files: customFile[] = acceptedFiles as customFile[];

  const onClick = async () => {
    // Fix: これFalseにならない
    if (!files) {
      return;
    }

    try {
      const file = files[0];
      const data = {
        type: file.type,
        size: file.size,
        title: inputText,
        description: inputTextarea,
      };

      const exchgData = await postData(postApiPath, JSON.stringify(data));
      const response = await axios.put(exchgData.signedUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      exchgData.status = 'Uploaded';
      console.log(exchgData)
      console.log(JSON.stringify(exchgData))
      void (await putData(putApiPath, JSON.stringify(exchgData)));
    } catch (error) {
      // return エラーページ
    }
  };

  const returnValue: ReturnValue = {
    inputText,
    setInputText,
    inputTextarea,
    setInputTextarea,
    acceptedFiles,
    setAcceptedFiles,
    onClick,
  };

  return returnValue;
};

export default usePostArticle;
