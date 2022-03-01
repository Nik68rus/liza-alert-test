import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../services/actions/items';
import { BATCH_SIZE, LIMIT } from '../../utils/data';
import Item from '../item/Item';
import { Loader } from '../loader/Loader';
import styles from './Feed.module.scss';

const Feed = () => {
  const items = useSelector((store) => store.items.itemsList);
  const ids = useSelector((store) => store.items.idsList);
  const isLoading = useSelector((store) => store.items.itemsRequested);

  const dispatch = useDispatch();

  const loadBtnClickHandler = (evt) => {
    evt.preventDefault();
    const idsToLoad = ids.slice(items.length, items.length + BATCH_SIZE);
    dispatch(getItems(idsToLoad));
  };

  return (
    <section className={styles.feed}>
      {items.length ? (
        <div className={styles.list}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Loader size="large" />
      )}
      {items.length > 0 && items.length < LIMIT && (
        <button
          className={styles.loadButton + ' btn'}
          onClick={loadBtnClickHandler}
          disabled={isLoading}
        >
          {isLoading ? <Loader size="small" inverse /> : 'Load more'}
        </button>
      )}
    </section>
  );
};

export default Feed;
