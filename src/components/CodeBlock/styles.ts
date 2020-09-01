import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    border: '1px solid gray',
    borderRadius: '4px',
  },
  header: {
    backgroundColor: '#202020',
    color: '#fafafa',
    padding: '1px 16px',
  },
  content: {
    overflowX: 'scroll',
  },
});

export default useStyles;
