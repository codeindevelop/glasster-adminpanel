import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FallbackView } from '../@core/partials/fallback-view/FallbackView';

export function PrivateRoutes() {
  
  const DashboardPage = lazy(() => import('../views/dashboard/DashboardPage'));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardPage} />

        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />

        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  );
}
