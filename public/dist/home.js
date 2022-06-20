"use strict";
/* INPUTS */
let inputDescricao = document.getElementById('input-descricao');
let inputDetalhamento = document.getElementById('input-detalhamento');
let inputEditarDescricao = document.getElementById('input-editar-descricao');
let inputEditarDetalhamento = document.getElementById('input-editar-detalhamento');
/* BOTÕES */
let btnSalvarRecado = document.getElementById('btn-salvar-recado');
let btnEditarRecado = document.getElementById('btn-atualizar');
let btnApagarRecado = document.getElementById('btn-apagar');
/* MODAIS */
let modalEditarRecado = new bootstrap.Modal('#modalEditar');
let modalApagarRecado = new bootstrap.Modal('#modalApagar');
/* EVENTOS */
btnSalvarRecado.addEventListener('click', (e) => {
    e.preventDefault();
    salvarRecado();
});
/* FUNÇÕES */
function salvarRecado() {
    let listaRecados = [];
    let novoRecado = {
        codigo: '1',
        descricao: inputDescricao.value,
        detalhamento: inputDetalhamento.value
    };
    listaRecados.push(novoRecado);
    salvarNoStorage(listaRecados);
    console.log(listaRecados);
}
function salvarNoStorage(recados = []) {
    // trazer lista de usuarios
    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    console.log(listaUsuarios);
    //  buscar na lista comparando o usuario que possuir o login igual ao login do usuarioLogado
    //  e armazenar o indice desse usuario
    //usuarios[indiceUsuarioLogado].recados = recados;
    // mandaria salvar a lista de usuarios
    // setItem - criar
}
