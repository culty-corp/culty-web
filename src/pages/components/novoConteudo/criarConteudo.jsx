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
import PublishIcon from '@material-ui/icons/Publish';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as cores from '../../../utils/cores'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

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
        height: '100%',
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
        height: '100%',
        backgroundColor: cores.cinzaEscuro,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    paperConteudo: {
        marginTop: theme.spacing.unit * 3,
        borderStyle: 'dashed',
        backgroundColor: cores.cinzaEscuro,
        display: 'flex',
        flexDirection: 'column',
        height: theme.spacing.unit * 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoUpar: {
        alignSelf: 'center'
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
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
                <Typography component="h1" variant="h5" className={classes.estiloTexto}>
                    Postar
        </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email" classes={{root: classes.root,focused: classes.focused}}>Título</InputLabel>
                        <Input id="titulo" name="titulo" autoComplete="titulo" autoFocus  classes={{root: classes.root,focused: classes.focused, underline: classes.underline}}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="resumo" classes={{root: classes.root,focused: classes.focused}}>Resumo</InputLabel>
                        <Input name="resumo" id="Resumo" autoComplete="resumo" classes={{root: classes.root,focused: classes.focused, underline: classes.underline}}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <FormLabel component="legend" className={classes.estiloTexto}>Tipo de Conteúdo</FormLabel>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                            >
                            <FormControlLabel className={classes.estiloTexto} value="texto" control={<Radio />} label="Texto" />
                            <FormControlLabel value="midia" control={<Radio />} label="Mídia" />
                        </RadioGroup>
                    </FormControl>
                    <Typography component="h6" variant="h6" className={classes.estiloTexto}>
                        Conteúdo
                    </Typography>
                    <Paper className={classes.paperConteudo}>
                        <div className={classes.botaoUpar}>
                            <PublishIcon fontSize='large' />
                        </div>
                    </Paper>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Postar
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