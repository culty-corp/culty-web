import { combineReducers } from "redux";

export const initialStatePosts = {
  index: 0,
  postagemAtual: {
    usuario: { nome: "Edvard Munch" },
    titulo: "O Grito",
    tipoMidia: "Imagem",
    resumo:
      "Arte que criei enquanto observava universitários em fim de semestre.",
    conteudo: require(`../assets/ogrito.jpg`),
    filtros: ["pintura", "impressionismo"]
  },
  postagens: [
    {
      usuario: { nome: "Zé Paulo" },
      titulo: "O Grito",
      tipoMidia: "Imagem",
      resumo:
        "Arte que criei enquanto observava universitários em fim de semestre.",
        conteudo: require(`../assets/ogrito.jpg`),
      filtros: ["pintura", "impressionismo"]
    },
    {
      usuario: { nome: "Menino da Puc" },
      titulo: "Quem te viu, quem te vê",
      tipoMidia: "Audio",
      resumo: "Um dia eu vi uma garota para nunca mais, criei essa música.",
      conteudo: require(`../assets/miku.jpg`),
      filtros: ["música", "mpb"]
    },
  ]
};

export const initialStateFiltros = {
  filtros: []
};

const posts = (state = initialStatePosts, action) => {
  let postagens = [];
  switch (action.type) {
    case "PASSAR_POST":
      state.postagens = [...state.postagens];
      state.index =
        state.index + 1 > state.postagens.length - 1 ? 0 : state.index + 1;
      state.postagemAtual = state.postagens[state.index];
      return {
        ...state
      };
    case "ADICIONAR_POST":
      state.postagens = [...state.postagens, action.post];
      return {
        ...state
      };
    case "GET_ALL_OBRAS":
      postagens = [...state.postagens, ...action.obras];
      console.log(postagens)
      return {
        ...state,
        postagens
      };
    default:
      return state;
  }
};

const filtros = (state = initialStateFiltros, action) => {
  switch (action.type) {
    case "ADD_FILTRO":
      if (state.filtros.indexOf(action.filtro) === -1) {
        state.filtros = [...state.filtros, action.filtro];
      }
      return {
        ...state
      };
    case "REMOVE_FILTRO":
      if (state.filtros.indexOf(action.filtro) !== -1) {
        state.filtros = state.filtros.filter(x => x !== action.filtro);
      }
      return {
        ...state
      };
    default:
      return state;
  }
};

export const initialStateUsuario = {
  logado: false
};

const usuario = (state = initialStateUsuario, action) => {
  let logado = false;
  switch (action.type) {
    case "LOGAR":
      logado = action.login.sucesso;
      return {
        ...state,
        logado
      };
    case "DESLOGAR":
      state.logado = false;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  filtros,
  usuario
});
