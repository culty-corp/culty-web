import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Badge from '@material-ui/core/Badge';
import LikeIcon from "@material-ui/icons/ThumbUp";
import DislikeIcon from "@material-ui/icons/FastForward";
import ShareIcon from "@material-ui/icons/Share";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import * as Map from "../../../Maps";
import styles from "./conteudoActionsStyle";
import MediaQuery from "react-responsive";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const apliqueEstiloPeloTamanhoDaTela = (componente) => {
  return <div>
    <MediaQuery query="(min-device-width: 768px)">{componente}</MediaQuery>
    <MediaQuery query="(max-device-width: 768px)">{componente}</MediaQuery>
  </div>
}

const ConteudoActions = props => {
  const { classes, postagemAtual } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const abrirPopover = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const fecharPopover = () => {
    setAnchorEl(null);
  }

  const CurtirPost = (e, props) => {

    if (props.usuarioLogado.listaObrasGostadas !== undefined) {
      if (!props.usuarioLogado.listaObrasGostadas.some(x => x === props.postagemAtual.id)) {
        props.postagemAtual.quantGostei++
        props.curtirPost(props.postagemAtual).then(() => {
          props.usuarioLogado.listaObrasGostadas.push(props.postagemAtual.id)
          props.updateUsuario(props.usuarioLogado)
        })
      } else {
        props.postagemAtual.quantGostei--
        props.curtirPost(props.postagemAtual).then(() => {
          props.usuarioLogado.listaObrasGostadas = props.usuarioLogado.listaObrasGostadas
            .filter(x => x !== props.postagemAtual.id)
          props.updateUsuario(props.usuarioLogado)
        })
      }
    } else {
      abrirPopover(e)
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div> {
      apliqueEstiloPeloTamanhoDaTela(
        <CardActions className={classes.actions} disableActionSpacing>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <IconButton
              aria-label="Dislike"
              className={classes.botaoDislike}
              onClick={() => props.passarPost()}
              autoFocus={true}
              onKeyDown={k => {
                if (k.keyCode === 39) {
                  props.passarPost()
                }
              }}
            >
              <DislikeIcon />
            </IconButton>

            <IconButton
              aria-label="Compartilhar"
              className={classes.botaoShare}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="Cultyr"
              className={props.usuarioLogado.listaObrasGostadas && props.usuarioLogado.listaObrasGostadas.some(x => x === props.postagemAtual.id) ? classes.botaoLikeJaCurtiram : classes.botaoLike}
              onClick={(e) => CurtirPost(e, props)}
            >
              <LikeIcon />
              <Badge style={{ paddingLeft: 20 }} badgeContent={postagemAtual.quantGostei} color="primary" />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={fecharPopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography}>Você precisa estar logado para curtir essa obra.</Typography>
            </Popover>
          </Grid>
        </CardActions>
      )}
    </div>
  );
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  const usuarioLogado = store.usuario.usuarioLogado
  return {
    postagemAtual,
    usuarioLogado
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(ConteudoActions))
);
