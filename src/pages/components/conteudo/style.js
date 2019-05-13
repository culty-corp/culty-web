
export default theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: '#1e1e1e',
  },
  estiloTexto: {
    color: '#ECF2EC'
  },
  botao: {
    color: '#ff9703',
  },
  botaoShare: {
    color: '#ff9703',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '32%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: '#FF8C00',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  estiloSubTitulo: {
    color: '#FFDEB5'
  },
  avatar: {
    backgroundColor: '#FF8C00',
  }
});