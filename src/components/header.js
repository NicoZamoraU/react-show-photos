import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import SettingsBrightness from '@material-ui/icons/SettingsBrightness'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    minHeight: '10vh',
  },
  toolbar: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const { setDarkMode, switchDarkMode } = props

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Show Photos
          </Typography>
          <Button>
            <SettingsBrightness onClick={() => setDarkMode(!switchDarkMode)} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
