export default theme => ({
  botaoCurtir: {
    position: "absolute",
    left: "5%",
    bottom: "2%",
    color: "#ff9703"
  },
  botaoShare: {
    position: "absolute",
    right: "5%",
    bottom: "2%",
    color: "#ff9703"
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
  }
});
