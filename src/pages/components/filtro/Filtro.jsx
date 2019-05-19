import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddFiltro from './AddFiltro'
import FiltroAtual from './FiltroAtual'
import styles from './style.js'

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