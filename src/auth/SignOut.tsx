import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

import { commonColors } from '../theme/colors';

const SignOut = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const classes = useStyles();
  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
      onRedirectCallback: () => navigate('/your-redirect-url') // Replace with your desired redirect URL
    });
  };



  return (
    <Button className={classes.button} onClick={onSignOut}>
      sign out
    </Button>
  );
};

export default SignOut;

export const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
}));
