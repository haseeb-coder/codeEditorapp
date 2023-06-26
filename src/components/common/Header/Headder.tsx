import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleDarkMode } from '../../../store/dark-mode/reducer';

const Headder = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  const classes = useStyles();
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Learn Core App with me!
        </Typography>
        <Brightness4Icon />
        <Switch onChange={onChangeDarkMode} color='default' checked={darkMode} />
        {isAuthenticated ? <div>Authenticated Buttons</div> : <div>Not Authenticated Buttons</div>}
      </Toolbar>
    </AppBar>
  );
};

export default Headder;

export const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));
