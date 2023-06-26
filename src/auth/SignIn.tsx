import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

import { commonColors } from '../theme/colors';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const onSignIn = () => {
    loginWithRedirect();
  };

  return (
    <Button className={classes.button} onClick={onSignIn}>
      sign in
    </Button>
  );
};

export default SignIn;

export const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
}));
