import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from '../../../Maps'
import styles from './style.js'
import PesquiseFiltro from './PesquiseFiltro'

class AddFiltro extends React.Component {
  state = {
    chipData: [
      { key: 0, label: '#Música' },
      { key: 1, label: '#Pintura' },
      { key: 2, label: '#Cinema' },
      { key: 3, label: '#Literatura' },
      { key: 4, label: '#Poesia' },
      { key: 5, label: '#Arte Digital' },
      { key: 6, label: '#Rock' },
      { key: 7, label: '#Metal' },
      { key: 8, label: '#Sertanejo' },
    ],
  };

  addFiltro = data => () => {
    this.props.addFiltro(data.label);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
          <PesquiseFiltro />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const filtros = store.posts;
  return {
    ...filtros
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(AddFiltro))
);