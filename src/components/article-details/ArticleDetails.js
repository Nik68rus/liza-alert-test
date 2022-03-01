import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/data';
import { getDateString } from '../../utils/utils';
import Comments from '../comments/Comments';
import styles from './ArticleDetails.module.scss';
import { articlePropTypes } from '../../utils/prop-types';

const ArticleDetails = ({article}) => {

  return (
    <div className={styles.article + " container"}>
      <h2 className={styles.heading}>{article.title}</h2>
      <div className={styles.date}>Published {getDateString(article.time)} by {article.by}</div>
      <div className={styles.actions}>
        {article.url && <a className='btn' href={article.url} target="_blank" rel="noreferrer">Open source</a>}
        <Link to={Paths.HOME} className={styles.button + ' btn btn--accent'}>Back</Link>
      </div>
      {article.kids && <Comments list={article.kids} />}
    </div>
  );
}

ArticleDetails.propTypes = {
  article: articlePropTypes.isRequired,
}

export default ArticleDetails;
