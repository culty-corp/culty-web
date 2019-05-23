import React, { Component } from "react";
import * as Map from "../../Maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.js";
import PropTypes from "prop-types";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import MediaQuery from "react-responsive";
import Rotas from "./Rotas";

class App extends Component {
  render() {
    const { classes } = this.props;
    document.body.style = "background: #121212;";
    return (
      <div>
        <MediaQuery query="(min-device-width: 768px)">
          <div>
            <div className={classes.cultyHeader}>
              <div className={classes.wrapNavigation}>
                <Navigation />
              </div>
              <Rotas />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </MediaQuery>
        <MediaQuery
          query="(max-device-width: 768px)"
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <div>
            <div className={classes.cultyHeader} style={{ marginBottom: "5%" }}>
              <div className={classes.wrapNavigation}>
                <Navigation />
              </div>
              <Rotas />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </MediaQuery>
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
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(App))
);
