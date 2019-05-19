import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as cores from '../../../utils/cores'

const styles = theme => ({
  root: {
    color: "#fff",
    "&$focused": {
      color: "#fff"
    },
    "&$underline:after": {
      borderBottom: "2px solid white"
    },
    "&$underline:before": {
      borderBottom: "1px solid white"
    },
  },
  focused: {
    "&$focused": {
      color: "#fff"
    }
  },
  underline: {
   "&$underline:after": {
      borderBottom: "2px solid white"
    },
    "&$underline:before": {
      borderBottom: "1px solid white"
    },
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    backgroundColor: cores.cinzaEscuro,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    color: '#ECF2EC',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: cores.laranja,
  },
  estiloTexto: {
    color: '#ECF2EC',
  },
});

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.estiloTexto}>
          Entrar
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email" classes={{root: classes.root,focused: classes.focused}}>E-mail</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus classes={{root: classes.root,focused: classes.focused, underline: classes.underline}} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password"  classes={{root: classes.root,focused: classes.focused}}>Senha</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" classes={{root: classes.root,focused: classes.focused, underline: classes.underline}} />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color='primary' />}
            label="Lembrar?"
            classes={{root: classes.root}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);