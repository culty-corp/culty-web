import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { DropzoneArea } from "material-ui-dropzone";
import styles from "./style.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from "../../../Maps";
import TextField from "@material-ui/core/TextField";

class Registro extends Component {
  state = { tipoConteudo: "texto", files: [] };

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
          <form className={classes.form}>
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
              onClick={() => this.props.history.push("/")}
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
