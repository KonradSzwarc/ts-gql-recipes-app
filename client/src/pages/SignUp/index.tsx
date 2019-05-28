import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Input from 'components/Input';
import useStyles from './styles';
import signUp from './store/signUp';

const SignUp = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(values);
  };

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
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="fullName"
                required
                label="Imię i nazwisko"
                autoFocus
                onChange={onChange}
                value={values.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="email"
                required
                label="Adres e-mail"
                autoComplete="email"
                onChange={onChange}
                value={values.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="password"
                required
                label="Hasło"
                autoComplete="current-password"
                type="password"
                onChange={onChange}
                value={values.password}
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
};

export default SignUp;
