const api = "http://sifo.tech/culty/";
const headers = {
  //'Token': '459c1d6c-d3e1-4daa-b0e3-bfbdb1f310ad',
  "Content-Type": "application/json"
};

export const getAllUsuarios = () =>
  fetch(`${api}/usuarios`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data => data);

export const getUsuario = id =>
  fetch(`${api}/usuarios/${id}`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data => data);

export const deleteUsuario = id =>
  fetch(`${api}/usuarios/${id}`, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data);

export const createUsuario = usuario =>
  fetch(`${api}/usuarios`, {
    method: "POST",
    headers,
    body: JSON.stringify(usuario)
  })
    .then(res => res.json())
    .then(data => data);

export const updateUsuario = usuario =>
  fetch(`${api}/usuarios`, {
    method: "PUT",
    headers,
    body: JSON.stringify(usuario)
  })
    .then(res => res.json())
    .then(data => data);

export const getAllObras = () =>
  fetch(`${api}/obras`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data => data);

export const getObra = id =>
  fetch(`${api}/obras/${id}`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data => data);

export const deleteObra = id =>
  fetch(`${api}/obras/${id}`, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data);

export const createObra = obra =>
  fetch(`${api}/obras`, {
    method: "POST",
    headers,
    body: JSON.stringify(obra)
  })
    .then(res => res.json())
    .then(data => data);

export const updateObra = obra =>
  fetch(`${api}/obras`, {
    method: "PUT",
    headers,
    body: JSON.stringify(obra)
  })
    .then(res => res.json())
    .then(data => data);
