import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
  },
  wrapText: {
    whiteSpace: 'pre-wrap',
  },
  imagePaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    marginBottom: theme.spacing(3),
  },
  description: {
    marginBottom: theme.spacing(3),
    fontSize: 18,
  },
}));
