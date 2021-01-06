import {
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  tags: Array.from(new Set(state.tasks.map((task) => task.tag))),
});

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "blue",
  },
  tagList: {
    overflow: "auto",
  },
  tag: {
    width: '100%'
  }
}));

function Sidebar({ tags }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.sidebar}>
      <Grid item>
        <Paper>
          <Typography>All tasks</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <List className={classes.tagList}>
          {tags.map((tag) => (
            <ListItem key={tag}>
              <Paper className={classes.tag}>
                <Typography>{tag}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps)(Sidebar);
