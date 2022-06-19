"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.alert("Necessário realizar o login");
        window.location.href = 'http://127.0.0.1:5501/index.html';
    }
    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let dadosUsuarioLogado = listaUsuarios.find((usuario) => {
        return usuario.email === usuarioLogado;
    });
    let indiceLogado = listaUsuarios.findIndex((usuario) => {
        return usuario.email === usuarioLogado;
    });
    console.log(dadosUsuarioLogado);
    console.log(listaUsuarios[indiceLogado]);
});
