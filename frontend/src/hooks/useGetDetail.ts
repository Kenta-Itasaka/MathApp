import { useEffect, useState } from 'react';
import { Article } from '../models/models';
import getApi from '../services/getApi';
import { ApiConfig } from '../config';

type ReturnValue = {
  article: Article;
};

const getArticle = async (getApiPath: string, optionConfig?: ApiConfig) => {
  return (await getApi(getApiPath, optionConfig)) as Article;
};

const initialState: Article = {
  articleId: '',
  createtime: new Date(),
  updatetime: new Date(),
  status: '',
  type: '',
  size: 0,
  signedUrl: '',
  title: '',
  description: '',
}

const useGetDetail = (
  getDetailApiPath: string,
  articleId: string,
  optionConfig?: ApiConfig,
): ReturnValue => {
  const [article, setArticle] = useState<Article>(initialState);

  useEffect(() => {
    const load = async (): Promise<void> => {
      const getDetailPath = getDetailApiPath + articleId;
      try {
        const articleData = await getArticle(getDetailPath, optionConfig);
        setArticle(articleData);
      } catch (err) {
        // return エラーページ
        throw new Error(`APIPath ${getDetailPath} does not exist`);
      }
    };

    void load();
  }, [getDetailApiPath, optionConfig, articleId]);

  return { article };
};

export default useGetDetail;
