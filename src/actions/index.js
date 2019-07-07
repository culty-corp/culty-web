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
  obra => {
    dispatch(adicionarPost(obra));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

export const curtirPost = (resultado, obra) => {
  return {
    type: "CURTIR_POST",
    resultado,
    obra
  };
};

export const fetchCurtirPost = (obra) => dispatch =>
Api.updateObra(obra).then(
  resultado => {
    dispatch(curtirPost(resultado, obra));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

export const adicionarUsuario = post => {
  return {
    type: "ADICIONAR_USUARIO",
    post
  };
};

export const fetchAdicionarUsuario = (usuario) => dispatch =>
Api.createUsuario(usuario).then(
  obras => {
    dispatch(adicionarUsuario(usuario));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

export const atualizarUsuario = usuario => {
  return {
    type: "ATUALIZAR_USUARIO",
    usuario
  };
};

  export const fetchAtualizarUsuario = (usuario) => dispatch => (
    Api.updateUsuario(usuario).then(() => {
      dispatch(atualizarUsuario(usuario))
    }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
  );

export const addFiltro = filtro => {
  return {
    type: "ADD_FILTRO",
    filtro
  };
};

export const removeObra = (idObra, resultado) => {
  return {
    type: "REMOVE_OBRA",
    idObra,
    resultado
  }
}

export const fetchRemoveObra = (idObra) => dispatch =>
Api.deleteObra(idObra).then(
  resultado => {
    dispatch(removeObra(idObra, resultado));
  },
  erro => console.log(`Erro na requisição: ${erro}`)
);

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
