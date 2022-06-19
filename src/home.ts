
document.addEventListener('DOMContentLoaded', () => {

    let usuarioLogado = sessionStorage.getItem('usuarioLogado')

    if(!usuarioLogado){
        window.alert("Necessário realizar o login")
        window.location.href = 'http://127.0.0.1:5500/index.html' 
    } 

    let listaUsuarios =  JSON.parse(localStorage.getItem('usuarios') || '[]')
    let dadosUsuarioLogado = listaUsuarios.find((usuario: { email: string | null }) =>{
        return usuario.email === usuarioLogado 
    })

    let indiceLogado = listaUsuarios.findIndex((usuario: { email: string | null }) => {
        return usuario.email === usuarioLogado
    })
    
})
 