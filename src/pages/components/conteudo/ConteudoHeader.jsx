import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./conteudoHeaderStyle";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as Map from "../../../Maps";

class ConteudoHeader extends React.Component {
  state = {
    anchorEl: null
  };

  handleClickOptions = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseOptions = option => {
    this.setState({ anchorEl: null });
    if (option === "paginaArtista")
      this.props.history.push("/artistas/" + this.props.postagemAtual.usuario.nome);
  };

  render() {
    const { classes, postagemAtual } = this.props;
    const { anchorEl } = this.state;

    return (
      <CardHeader
        avatar={
          <Button>
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              onClick={() =>
                this.props.history.push("/artistas/" + postagemAtual.usuario.nome)
              }
            >
              {postagemAtual.usuario.nome.charAt(0)}
            </Avatar>
          </Button>
        }
        action={
          <div>
            <IconButton
              className={classes.botao}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClickOptions}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleCloseOptions}
            >
              <MenuItem
                onClick={event => this.handleCloseOptions("paginaArtista")}
              >
                Página do Artista
              </MenuItem>
              {
                postagemAtual.usuario.id === this.props.usuarioLogado.id ?
                  <MenuItem
                    onClick={() => {
                      this.props.removeObra(postagemAtual.id).then(() => {
                        this.props.passarPost()
                        this.props.history.push('/')
                      })
                    }}
                  >
                    Excluir
              </MenuItem>
                  : <div></div>
              }
            </Menu>
          </div>
        }
        classes={{
          title: classes.estiloTexto,
          subheader: classes.estiloSubTitulo
        }}
        title={postagemAtual.titulo}
        subheader={postagemAtual.autor}
      />
    );
  }
}

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual
  const usuarioLogado = store.usuario.usuarioLogado
  return {
    postagemAtual,
    usuarioLogado
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(ConteudoHeader))
);
