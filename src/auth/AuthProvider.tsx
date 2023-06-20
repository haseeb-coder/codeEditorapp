import React, { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import appConfig from '../config/appConfig';


const AuthProvider = (props: PropsWithChildren<{}>) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={appConfig.auth0Domain}
      clientId={appConfig.auth0Client}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
