import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from '../../../Maps'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    backgroundColor: '#1e1e1e',
  },
  chip: {
    margin: theme.spacing.unit / 2,
    backgroundColor: '#FF8C00',
    color: '#ECF2EC'
  },
  estiloTexto: {
    color: '#ECF2EC',
    width: '100%',
    padding: '5%'
  }
});

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
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.estiloTexto}>
            Adicione um novo Filtro
        </Typography>
          {this.state.chipData.map(data => 
              <Chip
                key={data.key}
                label={data.label}
                onClick={this.addFiltro(data)}
                className={classes.chip}
              />
          )}
        </Paper>
      </div>
    );
  }
}

AddFiltro.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
  const filtros = store.filtros;
  return {
    ...filtros
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(AddFiltro))
);