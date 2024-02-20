import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export const RouteKeys = {
  HOME: '/',
  NEW: '/new',
  EDIT: '/edit/:id',
};

export default function Routes() {
  return (
    <Switch>
      <Route path={RouteKeys.HOME} exact component={Home} />
      <Route path={RouteKeys.NEW} component={NewContact} />
      <Route path={RouteKeys.EDIT} component={EditContact} />
    </Switch>
  );
}
