import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'components/Navbar';
import RecipeHeader from './RecipeHeader';
import RecipesList from './RecipesList';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

const Recipes = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main>
        <RecipeHeader />
        <RecipesList />
      </main>
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      {/* <RecipeDialog /> */}
    </>
  );
};

export default Recipes;
