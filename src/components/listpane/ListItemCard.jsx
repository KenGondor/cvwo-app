import React from "react";
import {
  Paper,
  Checkbox,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 40,
    display: 'flex'
  },
  checkBox: {

  },
  typographyStyles: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: '2%'
  }
}));

export default function ListItemCard({ id, name, due, completed}) {
  const classes = useStyles();
  const handleChange = () => {
      
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.typographyStyles} noWrap variant='h6'>
        {name}
      </Typography>
      <IconButton className={classes.checkBox}>
        <Checkbox checked={completed} onChange={handleChange}/>
      </IconButton>
    </Paper>
  );
}
