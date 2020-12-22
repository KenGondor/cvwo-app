import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsTwoTone from '@material-ui/icons/PetsTwoTone';

const useStyles = makeStyles({
    bar: {
        position: 'relative',
        zIndex: 1201 
    },
    typo: {
        flex: 1.
    }
});

export default function Header() {
  const classes = useStyles();
    return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' xs={0} className={classes.typo}>
            Don't Forget the Milk
        </Typography>
        <PetsTwoTone />
      </Toolbar>
    </AppBar>
  );
}
