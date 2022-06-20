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
/* SESSION E LOCAL STORAGE */
let usuarioLogado = sessionStorage.getItem('usuarioLogado');
/* EVENTOS */
btnSalvarRecado.addEventListener('click', (e) => {
    e.preventDefault();
    salvarRecado();
});
/* FUNÇÕES */
function salvarRecado() {
    let listaRecados = buscarRecadosNoStorage();
    if (inputDescricao.value === '' || inputDetalhamento.value === '') {
        window.alert("É necessário o preenchimento do campo");
        inputDescricao.focus();
        return;
    }
    let novoRecado = {
        codigo: '1',
        descricao: inputDescricao.value,
        detalhamento: inputDetalhamento.value
    };
    listaRecados.push(novoRecado);
    salvarNoStorage(listaRecados);
    limpar();
}
function salvarNoStorage(recados = []) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let indiceUsuarioLogado = usuarios.findIndex((usuario) => usuario.email === usuarioLogado);
    usuarios[indiceUsuarioLogado].recados = recados;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
function buscarRecadosNoStorage() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let indiceUsuarioLogado = usuarios.findIndex((usuario) => usuario.email === usuarioLogado);
    return usuarios[indiceUsuarioLogado].recados;
}
function limpar() {
    inputDescricao.value = '';
    inputDetalhamento.value = '';
}
