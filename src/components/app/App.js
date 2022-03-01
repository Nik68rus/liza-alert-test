import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import Details from '../../pages/Details';
import Home from '../../pages/Home';
import Layout from '../../pages/Layout';
import NotFound from '../../pages/NotFound';
import { showNotification } from '../../services/actions/app';
import { getIds, getItems } from '../../services/actions/items';
import { BATCH_SIZE, Paths } from '../../utils/data';

function App() {
  const dispatch = useDispatch();
  const ids = useSelector(store => store.items.idsList);

  useEffect(() => {
    dispatch(getIds());
    dispatch(showNotification('Data is loading. Please wait...'));
  }, [dispatch]);

  useEffect(() => {
    if (ids.length) {
      dispatch(getItems(ids.slice(0, BATCH_SIZE)));
    }
  }, [dispatch, ids]);

  return (
    <Layout>
      <Switch>
        <Route path={Paths.HOME} exact>
          <Home />
        </Route>
        <Route path={`/:id`} exact>
          <Details />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
