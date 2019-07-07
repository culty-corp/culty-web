export default theme => ({
  cardPerfil: {
    backgroundColor: "#1e1e1e",
    position: 'relative',
    width: '30vw',
  },
  estiloTexto: {
    color: "#ECF2EC"
  },
  botaoExpandir: {
    color: "#ff9703"
  },
  botaoShare: {
    color: "#ff9703"
  },
  actions: {
    alignSelf: "flex-end"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    color: "#ff9703",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cover: {
    width: 151
  },
  card: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#FF8C00',
  },
  estiloSubTitulo: {
    color: "#FFDEB5"
  },
  avatarPerfil: {
    backgroundColor: '#FF8C00'
  }
});
