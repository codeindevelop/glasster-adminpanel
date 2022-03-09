/**
 * High level router.
 */

import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { loadUser } from '../redux/actions/auth/loginActions';
import MainLayout from '../@core/layout/MainLayout';
import {PrivateRoutes} from './PrivateRoutes';
import AuthPage from '../views/auth/AuthPage';

export const Routes = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isLoginSuccData, user_role_idData, isLogOutData, isAuthorized } = useSelector(
    ({ auth }) => ({
      isLoginSuccData: auth.login.isLoginSucc,
      user_role_idData: auth.login.user_role_id,
      isLogOutData: auth.login.isLogOut,
      isAuthorized: auth.login.token != null,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      dispatch(loadUser());
      setIsAuthenticated(true);
    }
    if (isLoginSuccData != null) {
      window.location.reload(true);
    }
    if (isLogOutData != null) {
      window.location.reload(true);
    }
  }, [user_role_idData, isLoginSuccData, isLogOutData, dispatch, isAuthorized]);

  return (
    <>
      <MainLayout>
        <Switch>
          {!isAuthorized && !isAuthenticated ? (
            /*Render auth page when user at `/auth` and not authorized.*/
            <Route>
              <AuthPage />
            </Route>
          ) : (
            /*Otherwise redirect to root page (`/`)*/
            <Redirect from='/auth' to='/' />
          )}

          {/* <Route path='/logout' component={Logout} /> */}

          {!isAuthorized && !isAuthenticated ? (
            /*Redirect to `/auth` when user is not authorized*/
            <Redirect to='/auth/login' />
          ) : (
            <>
              <PrivateRoutes />
            </>
          )}
        </Switch>
      </MainLayout>
    </>
  );
};
