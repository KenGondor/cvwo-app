// home page of the application
import React from "react";
import { connect } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import ListPane from "../components/listpane/ListPane";
import toggleModalView from "../redux/actions/modalOpenAction";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    // backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    minWidth: 1000,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  viewbox: {
    backgroundColor: "#FFFFFF",
  },
  list: {
    borderRadius: 5,
  },
  task: {
    backgroundColor: "blue",
  },
  paper: {
    backgroundColor: "#FF00FF",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const mapStateToProps = (state) => ({
  modalOpen: state.modalOpen,
  modalTask: state.modalTask,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalView: (open) => dispatch(toggleModalView(open)),
});

function Home({ modalOpen, modalTask, toggleModalView }) {
  const classes = useStyles();
  const handleClose = () => {
    toggleModalView(false);
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Header />
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={0} sm={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.viewbox}>
          <ListPane />
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Grow in={modalOpen}>
          <div className={classes.paper}></div>
        </Grow>
      </Modal>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
