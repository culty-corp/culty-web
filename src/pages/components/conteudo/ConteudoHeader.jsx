import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./conteudoHeaderStyle";

const ConteudoHeader = props => {
  const { classes, postagemAtual } = props;

  return (
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          {postagemAtual.autor.charAt(0)}
        </Avatar>
      }
      action={
        <IconButton className={classes.botao}>
          <MoreVertIcon />
        </IconButton>
      }
      classes={{
        title: classes.estiloTexto,
        subheader: classes.estiloSubTitulo
      }}
      title={postagemAtual.titulo}
      subheader={postagemAtual.autor}
    />
  );
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(ConteudoHeader))
);
