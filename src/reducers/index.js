import { combineReducers } from "redux";

export const initialStatePosts = { 
  index: 0,
  postagemAtual: {
    usuario: {},
    titulo: 'O Grito',
    autor: 'Edvard Munch',
    tipoMidia: 'Imagem',
    resumo: 'Arte que criei enquanto observava universitários em fim de semestre.',
    conteudo: require(`../assets/ogrito.jpg`),
    categorias: [
      "pintura",
      "impressionismo"
    ]
  },
  postagens : [
    {
      usuario: {},
      titulo: 'O Grito',
      autor: 'Edvard Munch',
      tipoMidia: 'Imagem',
      resumo: 'Arte que criei enquanto observava universitários em fim de semestre.',
      conteudo: require(`../assets/ogrito.jpg`),
      categorias: [
        "pintura",
        "impressionismo"
      ]
    },
    {
      usuario: {},
      titulo: 'Quem te viu, quem te vê',
      autor: 'Chico Buarque',
      tipoMidia: 'Audio',
      resumo: 'Um dia eu vi uma garota para nunca mais, criei essa música.',
      conteudo: require(`../assets/ogrito.jpg`),
      categorias: [
        "música",
        "mpb"
      ]
    },
    {
      usuario: {},
      titulo: 'Ninguém é igual a ninguém',
      autor: 'HG',
      tipoMidia: 'Texto',
      resumo: 'Todos são iguais, mas uns são mais iguais que os outros.',
      conteudo: `Há tantos quadros na parede
      Há tantas formas de se ver o mesmo quadro
      Há tanta gente pelas ruas
      Há tantas ruas e nenhuma é igual a outra
      Ninguém é igual a ninguém
      Me espanta que tanta gente sinta
      (Se é que sente) A mesma indiferença
      
      Há tantos quadros na parede
      Há tantas formas de se ver o mesmo quadro
      Há palavras que nunca são ditas
      Há muitas vozes repetindo a mesma frase:
      Ninguém é igual a ninguém
      Me espanta que tanta gente minta
      (Descaradamente) a mesma mentira
      
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Mas uns mais iguais
      
      Há pouca água e muita sede
      Uma represa, um apartheid
      (A vida seca, os olhos úmidos)
      
      Entre duas pessoas
      Entre quatro paredes
      Tudo fica claro
      Ninguém fica indiferente
      Ninguém é igual a ninguém
      Me assusta que justamente agora
      Todo mundo (tanta gente) tenha ido embora
      
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Mas uns mais iguais, mas uns mais iguais, mas uns mais iguais
      Que os outros
      
      O que me encanta é que tanta gente
      Sinta (se é que sente) ou
      Minta (desesperadamente)
      Da mesma forma
      
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Mas uns mais iguais que os outros
      Todos iguais, todos iguais
      Todos iguais, todos iguais
      
      Tão desiguais, tão desiguais
      Tão desiguais, tão desiguais
      
      Todos iguais, todos iguais`,
      categorias: [
        "música",
        "rock",
        "poesia"
      ]
    }
  ]
}

export const initialStateFiltros = { 
  filtros: [],
}

const posts = (state = initialStatePosts, action) => {
  switch (action.type) {
    case "PASSAR_POST":
        state.index = state.index + 1 > (state.postagens.length - 1) ? 0 : state.index + 1;
        state.postagemAtual = state.postagens[state.index];
      return {
        ...state
      };
    default:
      return state;
  }
}

const filtros = (state = initialStateFiltros, action) => {
  switch (action.type) {
    case "ADD_FILTRO":
        if(state.filtros.indexOf(action.filtro) === -1) {
          state.filtros = [...state.filtros, action.filtro];
        }
      return {
        ...state
      };
      case "REMOVE_FILTRO":
        if(state.filtros.indexOf(action.filtro) !== -1) {
          state.filtros = state.filtros.filter(x => x !== action.filtro);
        }
      return {
        ...state
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  filtros
});