import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ConteudoPlayer from "./ConteudoPlayer";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styles from "./conteudoMidiaStyle";

const ConteudoMidia = props => {
  const { classes, postagemAtual } = props;
  return (
    <div>
      {postagemAtual.tipoMidia === "Imagem" && (
        <CardMedia
          className={classes.media}
          image={postagemAtual.conteudoCard}
          title={postagemAtual.titulo}
        />
      )}
      {postagemAtual.tipoMidia === "Audio" && (
        <div className={classes.card}>
          <CardMedia title={postagemAtual.titulo}>
            <img className={classes.media} src={postagemAtual.conteudoCard} />
          </CardMedia>
          <div className={classes.play}>
            <IconButton aria-label="Play/Pause" className={classes.botao}>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(
    withStyles(styles)(ConteudoMidia)
  )
);
