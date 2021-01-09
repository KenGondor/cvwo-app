import {
  List,
  ListItem,
  makeStyles,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import InboxIcon from "@material-ui/icons/Inbox";
import TodayIcon from '@material-ui/icons/Today';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { createTags } from '../utils/utils';

const mapStateToProps = (state) => ({
  tags: createTags(state.tasks)
});

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(3),
  }
}));

function Sidebar({ tags }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const showAllTasks = () => {

  };
  const showTodayTasks = () => {
    
  };

  return (
    <List
      component="sidebar"
      subheader={
        <ListSubheader component="div" id="list-subheader">
          Categories
        </ListSubheader>
      }
      className={classes.sidebar}
    >
      <ListItem button onClick={() => showAllTasks('fefefe')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="All Tasks" />
      </ListItem>
      <ListItem button onClick={showTodayTasks}>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText primary='Today '/>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText primary='Tags' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {tags.map(tag => (
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <RadioButtonUncheckedIcon />
              </ListItemIcon>
              <ListItemText primary={tag} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default connect(mapStateToProps)(Sidebar);
