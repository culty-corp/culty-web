import {
  passarPost,
  addFiltro,
  removeFiltro,
  fetchAdicionarPost,
  fetchLogar,
  deslogar,
  fetchGetAllObras
} from "./actions";

export const mapDispatchToProps = dispatch => {
  return {
    passarPost: () => dispatch(passarPost()),
    adicionarPost: post => dispatch(fetchAdicionarPost(post)),
    addFiltro: filtro => dispatch(addFiltro(filtro)),
    removeFiltro: filtro => dispatch(removeFiltro(filtro)),
    logue: (login) => dispatch(fetchLogar(login)),
    deslogar: () => dispatch(deslogar()),
    getAllObras: () => dispatch(fetchGetAllObras())
  };
};
