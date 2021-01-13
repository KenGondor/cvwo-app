import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  IconButton,
  makeStyles,
  fade,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Tooltip,
} from "@material-ui/core";
import PetsTwoTone from "@material-ui/icons/PetsTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import { getNumberOfOverdueTask } from '../utils/utils';
import setVisibilityFilter from '../redux/actions/visibilityFilterActions';
import { OVERDUE } from '../utils/filterConstants';

const useStyles = makeStyles((theme) => ({
  flexTen: {
    flex: 1,
  },
  bar: {
    position: "relative",
    zIndex: 1201,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  typo: {
    paddingLeft: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  setFilterToOverdue: () => dispatch(setVisibilityFilter(OVERDUE)),
});

function Header({ tasks, setFilterToOverdue }) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const search = (event) => {
    if (event.keyCode === 13) {
      alert(searchValue); // TODO::
    }
  };
  const viewOverdueTasks = () => {
    setFilterToOverdue();
  };

  return (
    <AppBar className={classes.bar}>
      <Toolbar variant="dense">
        <PetsTwoTone />
        <Typography variant="h6" className={classes.typo}>
          Don't Forget the Milk
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onKeyDown={search}
            onChange={handleChange}
          />
        </div>
        <Tooltip title={"Overdue Tasks"}>
          <IconButton onClick={viewOverdueTasks}>
            <Badge badgeContent={getNumberOfOverdueTask(tasks)} color="error">
              <AssignmentLateIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
