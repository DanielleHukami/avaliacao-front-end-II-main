let i:number = 1
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

/* TABELA */
const tabela = document.getElementById('tbody-tabela') as HTMLTableRowElement

/* EVENTOS */
btnSalvarRecado.addEventListener('click', (e) => {
    e.preventDefault()
    salvarRecado()
})

/* INTERFACE */
interface Recado {
    codigo: number,
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
        codigo: i++,
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
    tabela.innerHTML += 
                        `
                        <tr id="${recado.codigo}">
                            <td scope="row">${recado.codigo}</th>
                            <td>${recado.descricao}</td>
                            <td>${recado.detalhamento}</td>
                            <td>
                                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEditar">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button class=" btn btn-danger"data-bs-toggle="modal" data-bs-target="#modalApagar">
                                    <i class="bi bi-trash3"></i>
                                </button>
                            </td>
                      </tr>
                        `

}

function carregarRecados(){
    
}