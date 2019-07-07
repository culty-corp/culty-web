import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ExplorarIcon from "@material-ui/icons/Explore";
import PostarIcon from "@material-ui/icons/Send";
import SeguindoIcon from "@material-ui/icons/Favorite";
import PerfilIcon from "@material-ui/icons/Person";
import ArtistasIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import EntrarIcon from "@material-ui/icons/ExitToApp";
import SairIcon from "@material-ui/icons/Lock";
import { Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from "../../../Maps";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.js";

class OpcoesNavigation extends Component {

    getPageIcon = (index) => {
      switch (index) {
        case "Explorar":
          return <ExplorarIcon />;
        case "Postar":
          return <PostarIcon />;
        case "Seguindo":
          return <SeguindoIcon />;
        case "Perfil":
          return <PerfilIcon />;
        case "Artistas":
          return <ArtistasIcon />;
        case "Entrar":
          return <EntrarIcon />;
        case "Sair":
          return <SairIcon />;
        default:
          break;
      }
  }

  acoesDeMenu = (itens) => {
    if(itens.label === 'Sair') {
      this.props.deslogar();
    }

    if(itens.label === 'Perfil') {
      this.props.alteraUsuarioPerfil(this.props.usuarioLogado)
    }

    this.props.history.push(itens.path);
  }

  render() {

    const { classes, logado } = this.props;

    if (logado === true) {
      return (
        <div className={classes.list}>
          <List>
            {[
              { label: "Explorar", path: "/" },
              { label: "Seguindo", path: "/" },
              { label: "Artistas", path: "/" }
            ].map((text, index) => (
              <ListItem button key={text.label}>
                <ListItemIcon className={ classes.icon }>
                  { this.getPageIcon(text.label) }
                </ListItemIcon>
                <ListItemText
                  primary={text.label}
                  classes={{ primary: classes.primary }}
                  key={index}
                  onClick={() => this.acoesDeMenu(text) }
                  />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { label: "Postar", path: "/novoConteudo" },
              { label: "Perfil", path: "/perfil" },
              { label: "Sair", path: "/entrar" }
            ].map((text, index) => (
              <ListItem button key={text.label}>
                <ListItemIcon className={classes.icon}>
                  { this.getPageIcon(text.label) }
                </ListItemIcon>
                <ListItemText
                  primary={text.label}
                  classes={{ primary: classes.primary }}
                  key={index}
                  onClick={() => this.acoesDeMenu(text)}
                  />
              </ListItem>
            ))}
          </List>
        </div>
      );
    } else {
      return (
        <div className={classes.list}>
          <List>
            {[
              { label: "Explorar", path: "/" },
              { label: "Seguindo", path: "/" },
              { label: "Artistas", path: "/" }
            ].map((text, index) => (
              <ListItem button key={text.label}>
                <ListItemIcon className={classes.icon}>
                  { this.getPageIcon(text.label) }
                </ListItemIcon>
                <ListItemText
                  primary={text.label}
                  classes={{ primary: classes.primary }}
                  key={index}
                  onClick={() => this.acoesDeMenu(text)}
                  />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[{ label: "Entrar", path: "/entrar" }].map((text, index) => (
              <ListItem button key={text.label}>
                <ListItemIcon className={classes.icon}>
                  { this.getPageIcon(text.label) }
                </ListItemIcon>
                <ListItemText
                  primary={text.label}
                  classes={{ primary: classes.primary }}
                  key={index}
                  onClick={() => this.acoesDeMenu(text)}
                  />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }
  }
};

const mapStateToProps = store => {
  const usuario = store.usuario;
  return {
    ...usuario
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(OpcoesNavigation))
);
