"use strict";
let modalCadastro = new bootstrap.Modal('#exampleModal');
let inputDescricao = document.getElementById('input-descricao');
let inputDatalhamento = document.getElementById('input-datalhamento');
let btnSlavar = document.getElementById('btn-salvar');
btnSlavar.addEventListener('click', () => {
    console.log(inputDescricao.value);
    console.log(inputDatalhamento.value);
    modalCadastro.hide();
});
