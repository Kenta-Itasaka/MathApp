import React, { FC } from 'react';
import { useParams } from 'react-router';
import Detail from '../../components/Pages/Detail';
import useGetDetail from '../../hooks/useGetDetail';
import { getDetailApiPath } from '../../config';

const DetailContainer: FC = () => {
  const { articleId }: { articleId: string } = useParams();

  const { article } = useGetDetail(getDetailApiPath, articleId);

  return <Detail article={article} />;
};

export default DetailContainer;
