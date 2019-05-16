import React, { Component } from 'react';
import Conteudo from '../components/conteudo/Conteudo';
import * as Map from '../../Maps';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Filtro from '../components/filtro/Filtro'
import { withStyles } from '@material-ui/core/styles';
import styles from './style.js'
import PropTypes from 'prop-types';
import SignIn from '../components/signIn/SignIn';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cultyWraper}>
        <div className={classes.cultyHeader}>
          <div className={classes.wraperFiltro}>
            <Filtro />
          </div>
            <Conteudo />
          <div className={classes.SignIn}>
            <SignIn />
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = store => {
  const posts = store.posts;
  return {
    ...posts
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(App))
);