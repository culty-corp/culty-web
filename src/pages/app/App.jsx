import React, { Component } from "react";
import * as Map from "../../Maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Filtro from "../components/filtro/Filtro";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.js";
import PropTypes from "prop-types";
import Navigation from "../components/navigation/Navigation";
import Grid from '@material-ui/core/Grid';
import Rotas from './Rotas'

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
          <div className={classes.cultyHeader}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Navigation />
              </Grid>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={6}>
                <Rotas />
              </Grid>
              <Grid item xs={2}>
                <Filtro />
              </Grid>
            </Grid>
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

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(App))
);
