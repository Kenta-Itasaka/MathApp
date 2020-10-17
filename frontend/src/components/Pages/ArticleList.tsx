import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../models/models';
import MovePageButton from '../../containers/Organisms/MovePageButton';

export interface ArticleProps {
  articles: Article[];
}

const ArticleList: FC<ArticleProps> = ({ articles }) => {
  return (
    <>
      <MovePageButton displayStr="投稿" destination="/postarticle" />
      <dl>
        {articles.map((article) => {
          return (
            <React.Fragment key={article.articleId}>
              <dt>
                <Link to={`/detail/${article.articleId}`}>{article.title}</Link>
              </dt>
              <dd>{article.description}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    </>
  );
};

export default ArticleList;
