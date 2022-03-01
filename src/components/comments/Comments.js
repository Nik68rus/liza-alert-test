import React, {useState} from 'react';
import Comment from '../comment/Comment';
import styles from './Comments.module.scss';

const Comments = ({list}) => {
  const [total, setTotal] = useState(list.length);

  return (
    <>
      <p className={styles.total}>{total} comments in all levels here: </p>
      <div className={styles.comments}>
        {list.map(id => <Comment key={id} id={id} onAmountChange={setTotal} />)}
      </div>
    </>
  );
}

export default Comments;
