import React, { FC } from 'react';
import { Article } from '../../models/models';
import { fileBaseURL } from '../../config';

export interface DetailProps {
  article: Article;
}

const Detail: FC<DetailProps> = ({ article }) => {
  return (
    <>
      <h1>{article.description}</h1>
      {/* PDF.jsを使って描画 */}
      <img
        src={`${fileBaseURL + article.articleId}.${article.type.split('/')[1]}`}
        alt="Not Find"
      />
    </>
  );
};

export default Detail;
