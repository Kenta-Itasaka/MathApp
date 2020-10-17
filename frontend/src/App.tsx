import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ArticleList from './containers/Pages/ArticleList';
import PostingArticle from './containers/Pages/PostingArticle';
import Detail from './containers/Pages/Detail';
import Error from './components/Pages/Error';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ArticleList />
        </Route>
        <Route path="/postarticle">
          <PostingArticle />
        </Route>
        <Route path="/detail/:articleId">
          <Detail />
        </Route>
        <Route path="/error/:pageInfo">
          <Error />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
