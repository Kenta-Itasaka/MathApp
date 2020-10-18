import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../models/models';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MovePageButton from '../../containers/Organisms/MovePageButton';
import Box from '@material-ui/core/Box';
import "./ArticleList.css";

export interface ArticleProps {
  articles: Article[];
}

const ArticleList: FC<ArticleProps> = ({ articles }) => {
  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
  };

  return (
    <>
      <div className="moveButton">
      <MovePageButton displayStr="投稿" destination="/postarticle" />
      </div>
      <div className="articleList">
      <Box border={1} {...defaultProps}>
      <List>
        {articles.map((article) => {
          return (
            <React.Fragment key={article.articleId}>
              <ListItem divider component={Link} to={`/detail/${article.articleId}`}>
                <div>
                <ListItemText primary={article.title}/>
                {/* Todo */}
                {/* <ListItemText primary={article.description}/> */}
                </div>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
      </Box>
      </div>
    </>
  );
};

export default ArticleList;
