import React from "react";
import {
  Drawer as Sidebar,
  List,
  Divider,
  ListItem,
  makeStyles,
  ListItemText,
} from "@material-ui/core";

const drawerWidth = 350;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    borderWidth: 5,
    borderColor: 'red',

  }
});

export default function Drawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const items = ["All Tasks"];
  const classes = useStyles();

  // drawer content
  const drawer = (
    <div>
      <h1>Don't forget the milk!</h1>
      <Divider />
      <List>
        {items.map((itemText, index) => (
          <ListItem button={true} onClick={alert} key={itemText}>
            <ListItemText primary={itemText} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Sidebar
      variant="persistent"
      anchor="left"
      open={true}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      className={classes.drawer}
    >
      {drawer}
    </Sidebar>
  );
}
