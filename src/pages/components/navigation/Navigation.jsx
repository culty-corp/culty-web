import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.js";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ExplorarIcon from "@material-ui/icons/Explore";
import PostarIcon from "@material-ui/icons/Send";
import SeguindoIcon from "@material-ui/icons/Favorite";
import PerfilIcon from "@material-ui/icons/Person";
import ArtistasIcon from "@material-ui/icons/SupervisedUserCircleRounded";

class Navigation extends Component {
  state = {
    draw: false
  };

  toggleDrawer = () => () => {
    this.setState(prevState => ({
      draw: !prevState.draw
    }));
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Explorar", "Postar", "Seguindo", "Perfil", "Artistas"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{getPageIcon(text)}</ListItemIcon>
                <ListItemText
                  primary={text}
                  classes={{ primary: classes.primary }}
                />
              </ListItem>
            )
          )}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <SwipeableDrawer
          open={this.state.draw}
          onClose={this.toggleDrawer()}
          onOpen={this.toggleDrawer()}
          classes={{ paper: classes.paper }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <AppBar className={classes.appbar}>
          <Toolbar variant="dense">
            <Button
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer()}
            >
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Button>

            <div className={classes.logo}>
              <Typography variant="h6" color="inherit">
                Culty
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const posts = store.posts;
  return {
    ...posts
  };
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(Navigation))
);

function getPageIcon(index) {
  switch (index) {
    case "Explorar":
      return <ExplorarIcon />;
    case "Postar":
      return <PostarIcon />;
    case "Seguindo":
      return <SeguindoIcon />;
    case "Perfil":
      return <PerfilIcon />;
    case "Artistas":
      return <ArtistasIcon />;
    default:
      break;
  }
}
