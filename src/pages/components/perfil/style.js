export default theme => ({
  card: {
    backgroundColor: "#1e1e1e",
    position: "absolute",
    minHeight: "30vh",
    top: "15vh"
  },
  estiloTexto: {
    color: "#ECF2EC"
  },
  botao: {
    color: "#ff9703"
  },
  botaoShare: {
    color: "#ff9703"
  },
  botaoDislike: {
    color: "#ff9703"
  },
  actions: {
    alignSelf: "flex-end"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    color: "#FF8C00",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    backgroundColor: red[500],
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  estiloSubTitulo: {
    color: "#FFDEB5"
  },
  avatar: {
    margin: 20,
    width: 80,
    height: 80
  }
});
