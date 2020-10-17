import React, { FC } from 'react';
import useGetArticles from '../../hooks/useGetArticles';
import { getallApiPath } from '../../config';
import ArticleList from '../../components/Pages/ArticleList';

const ArticleListContainer: FC = () => {
  const { articles } = useGetArticles(getallApiPath);

  return <ArticleList {...{ articles }} />;
};

export default ArticleListContainer;
