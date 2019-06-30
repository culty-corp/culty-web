import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./style.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from "../../../Maps";
import TextField from "@material-ui/core/TextField";

class Registro extends Component {

  registrar = (event) => {
    event.preventDefault();
    const formulario = event.target;

    const email = formulario.email.value
    const senha = formulario.senha.value
    const nome = formulario.nomeUsuario.value
    const facebook = formulario.facebook.value
    const instagram = formulario.instagram.value
    const dataDeNascimento = formulario.date.value.split('-').reverse().join('/')

    const usuario = {
      nome,
      email,
      senha,
      dataDeNascimento,
      redesSociais: {
        facebook,
        instagram
      } 
    }
    this.props.addUsuario(usuario).then(() => {
      this.props.history.push("/entrar")
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.estiloTexto}
          >
            Registrar
          </Typography>
          <form className={classes.form} onSubmit={this.registrar}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="nomeUsuario"
                classes={{ root: classes.root, focused: classes.focused }}
              >
                Nome de Usuário
              </InputLabel>
              <Input
                id="nomeUsuario"
                inputProps={{ maxLength: 40 }}
                name="nomeUsuario"
                autoComplete="nomeUsuario"
                autoFocus
                classes={{
                  root: classes.root,
                  focused: classes.focused,
                  underline: classes.underline
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="email"
                classes={{ root: classes.root, focused: classes.focused }}
              >
                E-mail
              </InputLabel>
              <Input
                id="email"
                inputProps={{ maxLength: 40 }}
                name="email"
                autoComplete="email"
                autoFocus
                classes={{
                  root: classes.root,
                  focused: classes.focused,
                  underline: classes.underline
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="facebook"
                classes={{ root: classes.root, focused: classes.focused }}
              >
                Facebook
              </InputLabel>
              <Input
                id="facebook"
                inputProps={{ maxLength: 40 }}
                name="facebook"
                autoComplete="facebook"
                autoFocus
                classes={{
                  root: classes.root,
                  focused: classes.focused,
                  underline: classes.underline
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="instagram"
                classes={{ root: classes.root, focused: classes.focused }}
              >
                Instagram
              </InputLabel>
              <Input
                id="instagram"
                inputProps={{ maxLength: 40 }}
                name="instagram"
                autoComplete="instagram"
                autoFocus
                classes={{
                  root: classes.root,
                  focused: classes.focused,
                  underline: classes.underline
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="senha"
                classes={{ root: classes.root, focused: classes.focused }}
              >
                Senha
              </InputLabel>
              <Input
                type="password"
                inputProps={{ maxLength: 300 }}
                name="senha"
                id="senha"
                autoComplete="senha"
                classes={{
                  root: classes.root,
                  focused: classes.focused,
                  underline: classes.underline
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="date"
                label="Data de nascimento"
                type="date"
                InputProps={{
                  classes: {
                    input: classes.root,
                    MuiInputLabel: classes.inputColor
                  }
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.root
                }}
              />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Registrar-se
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Registro.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(Registro))
);
