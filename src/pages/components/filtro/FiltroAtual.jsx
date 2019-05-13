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

class FiltroAtual extends React.Component {

    tireFiltro = data => () => {
        this.props.removeFiltro(data);
    };

    render() {
        const { classes, filtros } = this.props;

        return (
            <Paper className={classes.root}>

                <Typography variant="h5" component="h3" className={classes.estiloTexto}>
                    Filtros adicionados
        </Typography>
                {filtros.map((data, i) => 
                    <Chip
                        key={i}
                        label={data}
                        onDelete={this.tireFiltro(data)}
                        className={classes.chip}
                    />
                )}
            </Paper>
        );
    }
}

FiltroAtual.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const filtros = store.filtros;
    return {
        ...filtros
    };
};

export default withRouter(
    connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(FiltroAtual))
);