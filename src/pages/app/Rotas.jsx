import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import SignIn from "../components/signIn/SignIn";
import CriarConteudo from "../components/novoConteudo/criarConteudo";
import Registro from "../components/registro/Registro";
import Filtro from "../components/filtro/Filtro";
import ConteudoCard from "../components/conteudo/ConteudoCard";
import Perfil from "../components/perfil/Perfil";
import PerfilEditar from "../components/perfil/PerfilEditar";
import MediaQuery from "react-responsive";
import styles from "./style.js";

const Explorar = (classes) => {
  return (<div>
    <MediaQuery query="(min-device-width: 768px)">
      <ul className={classes.wrapperGridLarge}>
        <li style={{ listStyle: "none", float: "left", margin: "4px" }}>
          <ConteudoCard />
        </li>
        <li
          style={{
            listStyle: "none",
            float: "left",
            margin: "4px",
            width: "40vw"
          }}
        >
          <Filtro />
        </li>
      </ul>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 768px)">
      <ul className={classes.wrapperGridSmall}>
        <li
          style={{
            listStyle: "none",
            float: "left",
            margin: "4px",
            width: "80vw"
          }}
        >
          <Filtro />
        </li>
        <li style={{ listStyle: "none", float: "left", margin: "4px" }}>
          <ConteudoCard />
        </li>
      </ul>
    </MediaQuery>
  </div>)
}

const Rotas = props => {
  const { classes } = props;

  return (
    <div>
      <Route
        exact
        path="/"
        render={() => (
          Explorar(classes)
        )}
      />
      <Route
        exact
        path="/entrar"
        render={() => (
          <div>
            <MediaQuery query="(min-device-width: 768px)">
              <div className={classes.centerDivLarge}>
                <SignIn />
              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 768px)">
              <div className={classes.centerDivSmall}>
                <SignIn />
              </div>
            </MediaQuery>
          </div>
        )}
      />
      <Route
        exact
        path="/novoConteudo"
        render={() => (
          Object.entries(props.usuarioLogado).length > 0 || props.usuarioLogado.constructor !== Object ?
            <div>
              <MediaQuery query="(min-device-width: 768px)">
                <div className={classes.centerDivLarge}>
                  <CriarConteudo />
                </div>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 768px)">
                <div className={classes.centerDivSmall}>
                  <CriarConteudo />
                </div>
              </MediaQuery>
            </div>
            : Explorar(classes)
        )}
      />
      <Route
        exact
        path="/registro"
        render={() => (
          <div>
            <MediaQuery query="(min-device-width: 768px)">
              <div className={classes.centerDivLarge}>
                <Registro />
              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 768px)">
              <div className={classes.centerDivSmall}>
                <Registro />
              </div>
            </MediaQuery>
          </div>
        )}
      />
      <Route
        exact
        path="/perfil"
        render={() => (
          Object.entries(props.usuarioPerfil).length > 0 || props.usuarioPerfil.constructor !== Object ?
            <div>
              <MediaQuery query="(min-device-width: 768px)">
                <div className={classes.centerDivLarge}>
                  <Perfil usuario={props.usuarioLogado} />
                </div>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 768px)">
                <div className={classes.centerDivSmall}>
                  <Perfil />
                </div>
              </MediaQuery>
            </div>
            : Explorar(classes)
        )}
      />
      <Route
        exact
        path="/perfilEditar"
        render={() => (
          Object.entries(props.usuarioLogado).length > 0 || props.usuarioLogado.constructor !== Object ?
            <div>
              <MediaQuery query="(min-device-width: 768px)">
                <div className={classes.centerDivLarge}>
                  <PerfilEditar />
                </div>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 768px)">
                <div className={classes.centerDivSmall}>
                  <PerfilEditar />
                </div>
              </MediaQuery>
            </div>
            : Explorar(classes)
        )}
      />
    </div>
  );
};

const mapStateToProps = store => {
  const usuarioLogado = store.usuario.usuarioLogado
  const usuarioPerfil = store.usuario.usuarioPerfil
  return {
    usuarioLogado,
    usuarioPerfil
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(Rotas))
);