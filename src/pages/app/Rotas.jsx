import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SignIn from "../components/signIn/SignIn";
import CriarConteudo from '../components/novoConteudo/criarConteudo'
import Registro from '../components/registro/Registro'
import ConteudoCard from "../components/conteudo/ConteudoCard";
import Perfil from '../components/perfil/Perfil'

const Rotas = (props) => {
    return (
        <div>
        <Route
            exact
            path="/"
            render={() => (
                <ConteudoCard /> 
            )}
      />
      <Route
            exact
            path="/entrar"
            render={() => (
                <SignIn /> 
            )}
      />
      <Route
            exact
            path="/novoConteudo"
            render={() => (
                <CriarConteudo /> 
            )}
      />
      <Route
            exact
            path="/registro"
            render={() => (
                <Registro /> 
            )}
      />
      <Route
            exact
            path="/perfil"
            render={() => (
                <Perfil /> 
            )}
      />
        </div>
    )
}

export default withRouter(
    connect()(Rotas)
  );