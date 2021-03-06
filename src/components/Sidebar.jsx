import React from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  makeStyles,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import TodayIcon from "@material-ui/icons/Today";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { createTags } from "../utils/utils";
import { ALL_TASK, COMPLETED, TODAY } from "../utils/filterConstants";
import setVisibilityFilter from "../redux/actions/visibilityFilterActions";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

const mapStateToProps = (state) => ({
  tags: createTags(state.tasks),
  currentFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filteringTag) =>
    dispatch(setVisibilityFilter(filteringTag)),
});

function Sidebar({ tags, currentFilter, setVisibilityFilter }) {
  const classes = useStyles(currentFilter);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const showAllTasks = () => {
    setVisibilityFilter(ALL_TASK);
  };
  const showTodayTasks = () => {
    setVisibilityFilter(TODAY);
  };
  const showCompleted = () => {
    setVisibilityFilter(COMPLETED);
  };
  const showCustomTag = (tag) => {
    setVisibilityFilter(tag);
  };
  const isShowingTag = (tag) => {
    return currentFilter === tag;
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
      <ListItem
        button
        onClick={showAllTasks}
        style={{ backgroundColor: isShowingTag(ALL_TASK) ? "#DCDCDC" : "#FFF" }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="All Tasks" />
      </ListItem>
      <ListItem
        button
        onClick={showTodayTasks}
        style={{ backgroundColor: isShowingTag(TODAY) ? "#DCDCDC" : "#FFF" }}
      >
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText primary="Today" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText primary="Tags" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tags.map((tag) => (
            <ListItem
              button
              className={classes.nested}
              onClick={() => showCustomTag(tag)}
            >
              <ListItemIcon>
                {isShowingTag(tag) ? (
                  <RadioButtonCheckedIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={tag} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem
        button
        onClick={showCompleted}
        style={{
          backgroundColor: isShowingTag(COMPLETED) ? "#DCDCDC" : "#FFF",
        }}
      >
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Completed" />
      </ListItem>
    </List>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
