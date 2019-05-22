import * as cores from '../../../utils/cores'

export default theme => ({
    root: {
    color: cores.corTexto,
    "&$focused": {
      color: cores.corTexto,
    },
    "&$underline:after": {
      borderBottom: "2px solid " + cores.corTexto
    },
    "&$underline:before": {
      borderBottom: "1px solid " + cores.corTexto
    }
  },
  inputColor: {
    color: cores.corTexto,
  },
  focused: {
    "&$focused": {
      color: cores.corTexto,
    }
  },
  underline: {
   "&$underline:after": {
      borderBottom: "2px solid " + cores.corTexto
    },
    "&$underline:before": {
      borderBottom: "1px solid " + cores.corTexto
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
        height: '100%',
        backgroundColor: cores.cinzaEscuro,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    dropZone: {
        position: 'relative',
        width: '100%',
        minHeight: '250px',
        backgroundColor: cores.cinzaClaro,
        border: 'dashed',
        borderColor: '#C8C8C8',
        cursor: 'pointer',
        boxSizing: 'border-box',
      },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        backgroundColor: cores.laranja,
    },
    estiloTexto: {
    color: cores.corTexto,
  },
  label: {
    color: cores.corTexto
  },
});