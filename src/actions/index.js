export const passarPost = () => {
    return {
        type: "PASSAR_POST",
    }
}

export const adicionarPost = (post) => {
    return {
        type: "ADICIONAR_POST",
        post
    }
}

export const addFiltro = (filtro) => {
    return {
        type: "ADD_FILTRO",
        filtro
    }
}

export const removeFiltro = (filtro) => {
    return {
        type: "REMOVE_FILTRO",
        filtro
    }
}