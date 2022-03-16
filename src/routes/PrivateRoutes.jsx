import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FallbackView } from '../@core/partials/fallback-view/FallbackView';

export function PrivateRoutes() {
  const DashboardPage = lazy(() => import('../views/dashboard/DashboardPage'));

  // Blog Routes
  const PostCategoryList = lazy(() => import('../views/blog/category/list/PostCategoriesList'));
  const AddNewPostCategory = lazy(() => import('../views/blog/category/add/AddNewCategory'));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route exact path='/dashboard' component={DashboardPage} />

        {/* Blog Routes */}
        <Route exact path='/post/category/all' component={PostCategoryList} />
        <Route exact path='/post/category/new' component={AddNewPostCategory} />

        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />

        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  );
}
