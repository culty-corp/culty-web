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
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NavigationOptions from "./NavigationOptions";
import * as Map from "../../../Maps";

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

    const sideList = <NavigationOptions />;

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
                <MenuIcon className={classes.icon} />
              </IconButton>
            </Button>

            <div className={classes.logo}>
              <Typography variant="h6" color="inherit">
                <img src="/culty_logo.png" alt="Culty" />
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
  const usuario = store.usuario;
  return {
    ...posts,
    ...usuario
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
