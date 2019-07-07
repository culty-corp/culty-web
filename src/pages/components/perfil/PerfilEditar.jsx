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
import styles from "../registro/style.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from "../../../Maps";
import TextField from "@material-ui/core/TextField";

class PerfilEditar extends Component {

  registrar = (event) => {
    event.preventDefault();
    const formulario = event.target;

    const email = formulario.email.value
    const senha = formulario.senha.value
    const nome = formulario.nomeUsuario.value
    const facebook = formulario.facebook.value
    const instagram = formulario.instagram.value
    const descricao = formulario.descricao.value
    const dataDeNascimento = formulario.date.value.split('-').reverse().join('/')

    const usuario = {
      id: this.props.usuarioPerfil.id,
      nome,
      email,
      senha,
      dataDeNascimento,
      descricao,
      redesSociais: {
        facebook,
        instagram
      } 
    }
    this.props.updateUsuario(usuario).then(() => {
      this.props.history.push("/")
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
            Perfil
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
                defaultValue={this.props.usuarioPerfil.nome}
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
                defaultValue={this.props.usuarioPerfil.email}
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
              <InputLabel htmlFor="descricao" classes={{ root: classes.root, focused: classes.focused }}>Biografia</InputLabel>
              <Input 
                defaultValue={ this.props.usuarioPerfil.descricao }
                multiline={true} inputProps={{ maxLength: 300 }} name="descricao" id="descricao" autoComplete="descricao" classes={{ root: classes.root, focused: classes.focused, underline: classes.underline }} />
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
                defaultValue={ this.props.usuarioPerfil.redesSociais.facebook ? this.props.usuarioPerfil.redesSociais.facebook : "" }
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
                defaultValue={ this.props.usuarioPerfil.redesSociais.instagram ? this.props.usuarioPerfil.redesSociais.instagram : "" }
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
                defaultValue={ this.props.usuarioPerfil.senha }
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
                defaultValue={ this.props.usuarioPerfil.dataDeNascimento.split('/').reverse().join('-') }
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
              Atualizar
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

PerfilEditar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  const usuarioPerfil = store.usuario.usuarioPerfil
  return {
    postagemAtual,
    usuarioPerfil
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(PerfilEditar))
);
