import React, {useState, useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

export function toast(props) {
  const { classes } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">Note archived</span>}
      action={[
        <Button key="undo" color="secondary" size="small" onClick={handleClose}>
          UNDO
            </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

export default withStyles(styles)(toast);
