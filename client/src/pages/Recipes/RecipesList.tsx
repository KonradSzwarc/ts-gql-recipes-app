import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import RecipeCard from './RecipeCard';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Recipes = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <RecipeCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
