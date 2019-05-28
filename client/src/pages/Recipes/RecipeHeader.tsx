import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import RecipeSearch from './RecipeSearch';

const useStyles = makeStyles(theme => ({
  categories: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
}));

const Recipes = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Moje przepisy
        </Typography>
        <RecipeSearch />
        <Typography className={classes.categories} component="h5" variant="h5" align="center" color="textSecondary">
          Wyświetlane przepisy
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="outlined" color="primary">
                Wszystkie
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Ulubione
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Recipes;
