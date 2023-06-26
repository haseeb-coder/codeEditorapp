import { makeStyles } from '@mui/styles';
import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from '../auth/ProtectedRoute';
import Loading from '../components/common/Loading/Loading';
import Headder from '../components/common/Header/Headder';

import routes from './routes';

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.main}>
      <Headder />
      <div className={classes.page}>
        <ReactRoutes>
          <ProtectedRoute path={routes.learnCore} component={<div>Learn Core with coding</div>} />
          <Route path={routes.home}>{isAuthenticated ? <Navigate to={routes.learnCore} /> : <div>Home</div>}</Route>
        </ReactRoutes>
      </div>
    </div>
  );
};

export default Routes;

export const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));
