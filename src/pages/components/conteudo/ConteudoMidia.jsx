import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ConteudoPlayer from "./ConteudoPlayer";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styles from "./conteudoMidiaStyle";
import MediaQuery from "react-responsive";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ConteudoMidia = props => {
  const { classes, postagemAtual } = props;
  return (
    <div>
      <MediaQuery query="(min-device-width: 768px)">
        {postagemAtual.tipoMidia === "Imagem" && (
          <CardMedia
            className={classes.mediaLarge}
            image={postagemAtual.conteudo}
            title={postagemAtual.titulo}
          />
        )}
        {postagemAtual.tipoMidia === "Audio" && (
          <div className={classes.card}>
            <CardMedia title={postagemAtual.titulo}>
              <img
                className={classes.mediaLargePlayer}
                src={postagemAtual.conteudo}
              />
            </CardMedia>
            <div className={classes.playLarge}>
              <IconButton aria-label="Play/Pause" className={classes.botao}>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
        )}
        {postagemAtual.tipoMidia === "Texto" && (
          <div className={classes.card}>
            <CardContent>
              <Typography component="p" className={classes.estiloTexto}>
                {postagemAtual.conteudoTexto}
              </Typography>
            </CardContent>
          </div>
        )}
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        {postagemAtual.tipoMidia === "Imagem" && (
          <CardMedia
            className={classes.mediaSmall}
            image={postagemAtual.conteudo}
            title={postagemAtual.titulo}
          />
        )}
        {postagemAtual.tipoMidia === "Audio" && (
          <div className={classes.card}>
            <CardMedia title={postagemAtual.titulo}>
              <img
                className={classes.mediaSmallPlayer}
                src={postagemAtual.conteudo}
              />
            </CardMedia>
            <div className={classes.playSmall}>
              <IconButton aria-label="Play/Pause" className={classes.botao}>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
        )}
      </MediaQuery>
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
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(ConteudoMidia))
);
