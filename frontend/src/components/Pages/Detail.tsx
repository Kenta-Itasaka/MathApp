import React, { FC, useState } from 'react';
import { Article } from '../../models/models';
import { fileBaseURL } from '../../config';
import { Document, Page, pdfjs } from 'react-pdf';
import "./Detail.css";
import MovePageButton from '../../containers/Organisms/MovePageButton';
// Todo
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export interface DetailProps {
  article: Article;
}

const Detail: FC<DetailProps> = ({ article }) => {
  const [numPages, setNumPages] = useState(1);
  function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
    setNumPages(numPages);
  }

  const pages = [];
  for (let i = 1; i <= numPages; i++) {
    // Todo
    pages.push(<Page className='page' key={i} pageNumber={i} width={1000} renderMode="svg"/>);

  }

  return (
    <>
      <div className="backButtonD">
        <MovePageButton displayStr="戻る" destination="/" />
      </div>
      <div className="titleD">
      <h1>{article.title}</h1>
      </div>
      <div className="descriptionD">
      <p>{article.description}</p>
      </div>
      <div className="pdfarea">
      <Document
      className='document'
        file={`${fileBaseURL}${article.articleId}.${article.type.split('/')[1]}`}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          // Todo
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      >
        {pages}
      </Document>
      </div>
    </>
  );
};

export default Detail;
