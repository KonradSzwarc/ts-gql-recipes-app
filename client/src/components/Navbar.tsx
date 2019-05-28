import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import signOut from './signOut';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(3),
  },
  link: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.link}>
              <ReceiptIcon className={classes.icon} />
              <Typography variant="h6">
                Moje przepisy
              </Typography>
            </Link>
            <Button onClick={signOut} color="inherit">Wyloguj się</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
