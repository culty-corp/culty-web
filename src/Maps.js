import {
    passarPost,
    addFiltro,
    removeFiltro,
    adicionarPost,
    logar,
    deslogar
  } from './actions'
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      passarPost: () => dispatch(passarPost()),
      adicionarPost: (post) => dispatch(adicionarPost(post)),
      addFiltro: (filtro) => dispatch(addFiltro(filtro)),
      removeFiltro: (filtro) => dispatch(removeFiltro(filtro)),
      logue: () => dispatch(logar()),
      deslogar: () => dispatch(deslogar())
    }
  }