"use strict";
let btnCadastrarSe = document.getElementById('cadastrar-se');
let btnVoltarLogin = document.getElementById('voltar-login');
let divCadastrar = document.getElementById('container-cadastro');
/* <!-- Lógica do Card--> */
btnCadastrarSe.addEventListener('click', (e) => {
    divCadastrar.classList.add('position-absolute');
});
btnVoltarLogin.addEventListener('click', (e) => {
    divCadastrar.classList.remove('position-absolute');
});
/* <!-- Lógica de cadastro--> */
let formCadastro = document.getElementById('formCadastro');
let inputEmailCadastro = document.getElementById('inputEmailCadastro');
let inputPasswordCadastro = document.getElementById('inputPasswordCadastro');
let inputPassword2Cadastro = document.getElementById('password2Cadastro');
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    validacaoCadastro();
});
function validacaoCadastro() {
    if (inputEmailCadastro.value === '' || inputPasswordCadastro.value === '' || inputPassword2Cadastro.value === '') {
        window.alert("Necessário preenchimento dos campos");
        return;
    }
    else if (inputPasswordCadastro.value.length < 8 || inputPassword2Cadastro.value.length < 8) {
        window.alert("A senha precisa ter no mínimo 8 caracteres");
        return;
    }
    else if (inputPasswordCadastro.value !== inputPassword2Cadastro.value) {
        window.alert("As senhas precisam ser iguais");
        return;
    }
    let novoUsuario = {
        email: inputEmailCadastro.value,
        password: inputPasswordCadastro.value,
        recados: []
    };
    cadastroDeUsuario(novoUsuario);
}
function cadastroDeUsuario(novoUsuario) {
    let listaUsuarios = buscarUsuarioStorage();
    let checagem = listaUsuarios.some((usuario) => {
        return usuario.email === novoUsuario.email;
    });
    if (checagem) {
        let checar = confirm('Essa conta já possui cadastro. Deseja retornar a página de login?');
        if (checar) {
            divCadastrar.classList.remove('position-absolute');
            formCadastro.reset();
        }
        return;
    }
    listaUsuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
    alert("Cadastro realizado com sucesso");
    formCadastro.reset();
    setTimeout(() => {
        divCadastrar.classList.remove('position-absolute');
    }, 500);
}
function buscarUsuarioStorage() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
}
/* <!-- Lógica de Login--> */
let formLogin = document.getElementById('formLogin');
let inputEmailLogin = document.getElementById('inputEmailLogin');
let inputPasswordLogin = document.getElementById('inputPasswordLogin');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    validacaoLogin();
});
function validacaoLogin() {
    if (inputEmailLogin.value === '' || inputPasswordLogin.value === '') {
        window.alert("É necessário o preenchimento dos campos");
        return;
    }
    let usuarioLogado = {
        login: inputEmailLogin.value,
        password: inputPasswordLogin.value
    };
    logar(usuarioLogado);
}
function logar(usuarioLogado) {
    let listaUsuarios = buscarUsuarioStorage();
    let checagem = listaUsuarios.some((usuario) => {
        return usuario.email === usuarioLogado.login && usuario.password === usuarioLogado.password;
    });
    if (!checagem) {
        window.alert("Email ou senha Incorretos");
        return;
    }
    sessionStorage.setItem('usuarioLogado', inputEmailLogin.value);
    window.location.href = 'home.html';
}
