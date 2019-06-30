import * as Api from "../utils/api";

export const passarPost = () => {
  return {
    type: "PASSAR_POST",
  };
};

export const adicionarPost = post => {
  return {
    type: "ADICIONAR_POST",
    post
  };
};

export const fetchAdicionarPost = (post) => dispatch =>
Api.createObra(post).then(
  obras => {
    dispatch(adicionarPost(post));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

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

export const logar = (login) => {
  return {
    type: "LOGAR",
    login
  };
};

export const fetchLogar = (login) => dispatch =>
Api.efetueLogin(login).then(
  login => {
    dispatch(logar(login));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

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
