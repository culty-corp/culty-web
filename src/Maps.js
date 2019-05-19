import {
    passarPost,
    addFiltro,
    removeFiltro,
    adicionarPost
  } from './actions'
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      passarPost: () => dispatch(passarPost()),
      adicionarPost: (post) => dispatch(adicionarPost(post)),
      addFiltro: (filtro) => dispatch(addFiltro(filtro)),
      removeFiltro: (filtro) => dispatch(removeFiltro(filtro))
    }
  }