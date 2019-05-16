import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddFiltro from './AddFiltro'
import FiltroAtual from './FiltroAtual'


const styles = theme => ({
    wrapAddFiltro: {
        paddingBottom: '5%'
    },
});

const Filtro = (props) => {

    const { classes } = props;

    return (
        <div>
            <AddFiltro className={classes.wrapAddFiltro}/>
            {
                props.filtros.length > 0 && <FiltroAtual />
            }

        </div>
    );
}

Filtro.propTypes = {
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    const filtros = store.filtros.filtros
    return {
        postagemAtual,
        filtros
    };
};

export default withRouter(
    connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Filtro))
);