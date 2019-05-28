import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Input from 'components/Input';
import TextArea from 'components/TextArea';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
  },
  content: {
    padding: theme.spacing(3),
  },
  actions: {
    padding: theme.spacing(3),
  },
}));

const RecipeDialog = () => {
  const classes = useStyles();

  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Dodaj nowy przepis</DialogTitle>
      <DialogContent className={classes.content}>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Input name="title" required label="Tytuł" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <Input name="image" required label="Link do zdjęcia" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextArea name="description" required label="Krótki opis" rowsMax={3} />
            </Grid>
            <Grid item xs={12}>
              <TextArea name="ingredients" required label="Składniki" />
            </Grid>
            <Grid item xs={12}>
              <TextArea name="preparation" required label="Przygotowanie" />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="outlined" color="default">
          Anuluj
        </Button>
        <Button variant="outlined" color="primary">
          Dodaj przepis
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDialog;
