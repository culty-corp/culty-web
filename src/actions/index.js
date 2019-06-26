import * as Api from "../utils/api";

export const passarPost = obras => {
  return {
    type: "PASSAR_POST",
    obras
  };
};

export const adicionarPost = post => {
  return {
    type: "ADICIONAR_POST",
    post
  };
};

export const addFiltro = filtro => {
  return {
    type: "ADD_FILTRO",
    filtro
  };
};

export const removeFiltro = filtro => {
  return {
    type: "REMOVE_FILTRO",
    filtro
  };
};

export const logar = () => {
  return {
    type: "LOGAR"
  };
};

export const deslogar = () => {
  return {
    type: "DESLOGAR"
  };
};

export const getAllObras = obras => {
  return {
    type: "GET_ALL_OBRAS",
    obras
  };
};

export const fetchGetAllObras = () => dispatch =>
  Api.getAllObras().then(
    obras => {
      dispatch(getAllObras(obras));
    },
    erro => console.log(`Erro na requisição: ${erro}`)
  );
