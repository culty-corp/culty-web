import {
    passarPost,
    addFiltro,
    removeFiltro
  } from './actions'
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      passarPost: () => dispatch(passarPost()),
      addFiltro: (filtro) => dispatch(addFiltro(filtro)),
      removeFiltro: (filtro) => dispatch(removeFiltro(filtro))
    }
  }