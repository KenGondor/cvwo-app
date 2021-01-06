import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsTwoTone from '@material-ui/icons/PetsTwoTone';

const useStyles = makeStyles({
    bar: {
        position: 'relative',
        zIndex: 1201,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    typo: {
        flex: 1.
    }
});

export default function Header(props) {
  const classes = useStyles();
    return (
    <AppBar className={classes.bar}>
      <Toolbar variant='dense'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'  className={classes.typo}>
            Don't Forget the Milk
        </Typography>
        <PetsTwoTone />
      </Toolbar>
    </AppBar>
  );
}
