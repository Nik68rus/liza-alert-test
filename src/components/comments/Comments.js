import React, {useState} from 'react';
import Comment from '../comment/Comment';
import {PropTypes} from 'prop-types';
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

Comments.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Comments;
