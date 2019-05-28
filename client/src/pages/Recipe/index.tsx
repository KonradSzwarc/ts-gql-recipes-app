import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

import { ingredients, preparation } from 'utils/mockData';
import Navbar from 'components/Navbar';

import useStyles from './styles';

const Recipes = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Paper className={classes.imagePaper}>
                <CardMedia className={classes.image} image="http://lorempixel.com/640/480/food" title="Paella dish" />
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Składniki
                </Typography>
                <Typography variant="body1" className={classes.wrapText}>
                  {ingredients}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  Shrimp and Chorizo Paella
                </Typography>
                <Typography className={classes.description} variant="body1" gutterBottom color="textSecondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                  cup of frozen peas along with the mussels, if you like.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Opis przygotowania
                </Typography>
                <Typography variant="body1" className={classes.wrapText}>
                  {preparation}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Recipes;
