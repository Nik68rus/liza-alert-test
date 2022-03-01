import React from 'react';
import { Link } from 'react-router-dom';
import { getDateString } from '../../utils/utils';
import styles from './Item.module.scss';

const Item = ({item}) => {
  return (
    <Link className={styles.item} to={`/${item.id}`}>
       <div className={styles.row}>
        <h2>{item.title}</h2>
        <div className={styles.score}>❤️ <span>{item.score}</span></div>
      </div>
      {item.kids && <div className={styles.comments}>{item.kids.length} {item.kids.length === 1 ? 'comment' : 'comments'}</div>}
      <div className={styles.row}>
        <div>By {item.by}</div>
        <div className={styles.date}>{getDateString(item.time)}</div>
      </div>
    </Link>
  );
}

export default Item;
