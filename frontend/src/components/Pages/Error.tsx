import React, { FC } from 'react';
import { useParams } from 'react-router';

const Error: FC = () => {
  const { pageInfo }: { pageInfo?: string } = useParams();

  switch (pageInfo) {
    case 'ArticleList':
      return <h1>{`error: ${pageInfo}`}</h1>;

    default:
      return <h1>error</h1>;
  }
};

export default Error;
