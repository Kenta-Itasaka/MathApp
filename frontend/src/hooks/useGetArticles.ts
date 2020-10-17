import { useEffect, useState } from 'react';
import { Article } from '../models/models';
import getApi from '../services/getApi';
import { ApiConfig } from '../config';

const getArticles = async (getApiPath: string, optionConfig?: ApiConfig) => {
  return (await getApi(getApiPath, optionConfig)) as Article[];
};

type ReturnValue = {
  articles: Article[];
};

const useGetArticles = (
  getallApiPath: string,
  optionConfig?: ApiConfig,
): ReturnValue => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const articlesData = await getArticles(getallApiPath, optionConfig);
        setArticles(articlesData);
      } catch (err) {
        // return エラーページ
      }
    };

    void load();
  }, [getallApiPath, optionConfig]);

  return { articles };
};

export default useGetArticles;
