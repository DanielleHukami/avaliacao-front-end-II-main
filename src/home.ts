/* INPUTS */
let inputDescricao = document.getElementById('input-descricao') as HTMLInputElement
let inputDetalhamento = document.getElementById('input-detalhamento') as HTMLInputElement
let inputEditarDescricao = document.getElementById('input-editar-descricao') as HTMLInputElement
let inputEditarDetalhamento = document.getElementById('input-editar-detalhamento') as HTMLInputElement

/* BOTÕES */
let btnSalvarRecado = document.getElementById('btn-salvar-recado') as HTMLButtonElement
let btnEditarRecado = document.getElementById('btn-atualizar') as HTMLButtonElement
let btnApagarRecado = document.getElementById('btn-apagar') as HTMLButtonElement

/* MODAIS */
let modalEditarRecado = new bootstrap.Modal('#modalEditar')
let modalApagarRecado = new bootstrap.Modal('#modalApagar')

/* SESSION E LOCAL STORAGE */
let usuarioLogado = sessionStorage.getItem('usuarioLogado');

/* EVENTOS */
btnSalvarRecado.addEventListener('click', (e) => {
    e.preventDefault()
    salvarRecado()
})

/* INTERFACE */
interface Recado {
    codigo: string,
    descricao: string,
    detalhamento: string
}

/* FUNÇÕES */
function salvarRecado(){

    let listaRecados: Recado[] = buscarRecadosNoStorage()

    if(inputDescricao.value === '' || inputDetalhamento.value === ''){
        window.alert("É necessário o preenchimento do campo")
        inputDescricao.focus()
        return
    } 

    let novoRecado: Recado = {
        codigo: '1',
        descricao: inputDescricao.value,
        detalhamento: inputDetalhamento.value
    }

    listaRecados.push(novoRecado)
    salvarNoStorage(listaRecados)
    limpar()
    salvarNaTabela(novoRecado)
    
}

function salvarNoStorage(recados: Recado[] = []){
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let indiceUsuarioLogado = usuarios.findIndex((usuario: any) => usuario.email === usuarioLogado);

    usuarios[indiceUsuarioLogado].recados = recados;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function buscarRecadosNoStorage(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let indiceUsuarioLogado = usuarios.findIndex((usuario: any) => usuario.email === usuarioLogado);

    return usuarios[indiceUsuarioLogado].recados
}

function limpar(){
    inputDescricao.value = ''
    inputDetalhamento.value = ''
}

function salvarNaTabela(recado: Recado){

}