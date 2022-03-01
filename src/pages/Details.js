import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleDetails from '../components/article-details/ArticleDetails';
import { Loader } from '../components/loader/loader';
import NotFound from './NotFound';

const Details = () => {
  const { id } = useParams();
  const items = useSelector((store) => store.items.itemsList);
  const item = items.find((article) => article.id === +id);

  let content = <Loader size="large" />;

  if (items.length && !item) {
    content = <NotFound />
  };

  if (items.length && item) {
    content = <ArticleDetails article={item} />
  }

  return (
    <section>
      {content}
    </section>);
};

export default Details;
