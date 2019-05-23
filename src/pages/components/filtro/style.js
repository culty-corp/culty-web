import * as cores from "../../../utils/cores";

export default theme => ({
  root: {
    maxWidth: "40vw",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2,
    backgroundColor: cores.cinzaEscuro
  },
  chip: {
    margin: theme.spacing.unit / 2,
    backgroundColor: cores.laranjaEscuro,
    color: cores.corTexto,
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  estiloTexto: {
    color: cores.corTexto,
    width: "100%",
    padding: "5%"
  },
  wrapAddFiltro: {
    paddingBottom: "5%"
  }
});
