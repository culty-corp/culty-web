import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import ConteudoPlayer from './ConteudoPlayer'
import styles from './style.js'

const ConteudoMidia = (props) => {
    const { classes, postagemAtual } = props;
    return (
        <div>
            {
                postagemAtual.tipoMidia === "Imagem" &&
                <CardMedia
                    className={classes.media}
                    image={postagemAtual.conteudo}
                    title={postagemAtual.titulo}
                />
            }

            {
                postagemAtual.tipoMidia === "Audio" &&
                <ConteudoPlayer />
            }
        </div>
    )
}

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    return {
        postagemAtual
    };
};

export default withRouter(
    connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(ConteudoMidia))
);