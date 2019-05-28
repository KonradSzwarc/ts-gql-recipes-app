import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: 20,
  },
}));

const RecipeSearch = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-bare"
        value={value}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="search"
        fullWidth
        placeholder="Wyszukaj przepisy"
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default RecipeSearch;
