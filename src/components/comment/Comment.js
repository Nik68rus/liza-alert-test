import React, {useState, useEffect, useRef} from 'react';
import hackerNewsApi from '../../services/hnApi';
import { getDateString } from '../../utils/utils';
import styles from './Comment.module.scss';
import {PropTypes} from 'prop-types';

const Comment = ({id, onAmountChange}) => {
  const [data, setData] = useState({});
  const textRef = useRef(null);

  useEffect(() => {
    hackerNewsApi.getItem(id).then(data => setData(data));
  }, [id]);

  useEffect(() => {
    if (data.kids) {
      onAmountChange(prState => prState + data.kids.length);
    }
  }, [onAmountChange, data.kids]);

  if (textRef.current && data.text) {
    textRef.current.innerHTML = data.text;
  }

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <span>👤  {data.by}</span>
        <span>{getDateString(data.time)}</span>
      </div>
      <div ref={textRef}>
      </div>
      {data.kids && 
        <div className={styles.responses}>
          {
            data.kids.map(id => <Comment key={id} id={id} onAmountChange={onAmountChange} />)
          }
        </div>
      }
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
}

export default Comment;
