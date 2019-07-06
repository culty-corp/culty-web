import { combineReducers } from "redux";

export const initialStatePosts = {
  index: -1,
  postagemAtual: {},
  filtros: [],
  postagensCompletas: [],
  postagens: [],
  postagensFake: [
    {
      usuario: { id: '', nome: "Zé Paulo" },
      titulo: "O Grito",
      tipoMidia: "Imagem",
      resumo:
        "Arte que criei enquanto observava universitários em fim de semestre.",
      conteudo: require(`../assets/ogrito.jpg`),
      filtros: ["#pintura", "#impressionismo"]
    },
    {
      usuario: { id: '', nome: "Menino da Puc" },
      titulo: "Quem te viu, quem te vê",
      tipoMidia: "Audio",
      resumo: "Um dia eu vi uma garota para nunca mais, criei essa música.",
      conteudo: require(`../assets/miku.jpg`),
      filtros: ["#música", "#mpb"]
    },
  ]
};

const posts = (state = initialStatePosts, action) => {
  let postagens = []
  let postagensCompletas = []
  let postagemAtual = {}
  let index = 0
  switch (action.type) {
    case "PASSAR_POST":
      let postagensFiltradas
      if (state.filtros.length > 0) {
        postagensFiltradas = state.postagens.filter(x => x.filtros.filter(filtro => state.filtros.includes(filtro)).length > 0)
        postagensFiltradas = postagensFiltradas.length > 0 ? postagensFiltradas : state.postagens
        state.index = state.index + 1 > postagensFiltradas.length - 1 ? 0 : state.index + 1;
        state.postagemAtual = postagensFiltradas[state.index]
      } else {
        postagensFiltradas = state.postagens
        state.index = state.index + 1 > postagensFiltradas.length - 1 ? 0 : state.index + 1;
        state.postagemAtual = state.postagens[state.index]
      }

      return {
        ...state
      };
    case "ADICIONAR_POST":
      const post = action.post.valor
      postagens = [...state.postagens, post];
      postagensCompletas = [...state.postagensCompletas, post]
      return {
        ...state,
        postagens,
        postagensCompletas
      };
    case "GET_ALL_OBRAS":
      const obras = action.obras.valor
      postagens = [...state.postagensFake, ...obras];
      postagensCompletas = [...state.postagensFake, ...obras]
      return {
        ...state,
        postagens,
        postagensCompletas
      };
    case "REMOVE_OBRA":
        postagens = state.postagens.filter(x => x.id !== action.idObra);
        postagensCompletas = postagens
        index = 0
        postagemAtual = state.postagens[state.index]
      return {
        ...state,
        postagens,
        postagensCompletas,
        index,
        postagemAtual
      };
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
  logado: false,
  usuarioLogado: {}
};

const usuario = (state = initialStateUsuario, action) => {
  let logado = false;
  let usuarioLogado = {}
  switch (action.type) {
    case "LOGAR":
      logado = action.login.sucesso;
      usuarioLogado = action.login.usuario
      return {
        ...state,
        logado,
        usuarioLogado
      };
    case "DESLOGAR":
      state.logado = false;
      state.usuarioLogado = '';
      return {
        ...state
      };
      case "ATUALIZAR_USUARIO":
          usuarioLogado = action.usuario
          return {
            ...state,
            usuarioLogado
          };
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  usuario
});
