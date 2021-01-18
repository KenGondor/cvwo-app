// home page of the application
import React from "react";
import { connect } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import ListPane from "../components/listpane/ListPane";
import toggleModalView from "../redux/actions/modalOpenAction";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    // backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    minWidth: 1000,
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
});

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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={modalOpen}>
          <p>fefe</p>
        </Fade>
      </Modal>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
