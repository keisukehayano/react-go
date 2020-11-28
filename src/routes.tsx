import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import App from './components/App';
import { GoogleBooks } from './components/GoogleBooks';
import { GoServerRes } from './components/GoServerResTest';

//pathを設定する
export const Path = {
  app: '/',
  googleBooks: '/google_books',
  goServer: '/gotest',
};

//switchを使用するとpathが一致したRouteのみ表示する
const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.googleBooks} component={GoogleBooks} />
      <Route exact path={Path.goServer} component={GoServerRes} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
);

export default routes;
