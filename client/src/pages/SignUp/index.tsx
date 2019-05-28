import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Rejestracja
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Imię i nazwisko"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adres e-mail"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Hasło"
                autoComplete="current-password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Link component={RouterLink} to="/sign-in" variant="body2">
                Posiadasz ju konto? Zaloguj się
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
