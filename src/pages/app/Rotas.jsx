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
import MediaQuery from "react-responsive";
import styles from "./style.js";

const Rotas = props => {
  const { classes } = props;

  return (
    <div>
      <Route
        exact
        path="/"
        render={() => (
          <div>
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
          </div>
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
          <div>
            <MediaQuery query="(min-device-width: 768px)">
              <div className={classes.centerDivLarge}>
                <Perfil />
              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 768px)">
              <div className={classes.centerDivSmall}>
                <Perfil />
              </div>
            </MediaQuery>
          </div>
        )}
      />
    </div>
  );
};

export default withRouter(connect()(withStyles(styles)(Rotas)));
