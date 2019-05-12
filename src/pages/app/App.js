import React, { Component } from 'react';
import './App.css';
import Conteudo from '../components/conteudo/Conteudo';
import * as Map from '../../Maps';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="culty-wraper">
        <div className="culty-header">
          <Conteudo />
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

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(App)
);
