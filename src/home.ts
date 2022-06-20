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

    let listaRecados: Recado[] = []

    let novoRecado: Recado = {
        codigo: '1',
        descricao: inputDescricao.value,
        detalhamento: inputDetalhamento.value
    }

    listaRecados.push(novoRecado)
    salvarNoStorage(listaRecados)
    console.log(listaRecados)

}

function salvarNoStorage(recados: Recado[] = []){

   let listaUsuarios: Array<Usuario> = JSON.parse(localStorage.getItem('usuarios') || '[]')
   let checagem

}