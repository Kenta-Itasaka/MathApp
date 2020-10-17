import React, { FC } from 'react';
import PostingArticle from '../../components/Pages/PostingArticle';
import usePostArticle from '../../hooks/usePostArticle';

const PostingArticleContainer: FC = () => {
  const {
    inputText,
    setInputText,
    inputTextarea,
    setInputTextarea,
    acceptedFiles,
    setAcceptedFiles,
    onClick,
  } = usePostArticle();

  return (
    <PostingArticle
      {...{
        inputText,
        setInputText,
        inputTextarea,
        setInputTextarea,
        acceptedFiles,
        setAcceptedFiles,
        onClick,
      }}
    />
  );
};

export default PostingArticleContainer;
