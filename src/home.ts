let modalCadastro = new bootstrap.Modal('#exampleModal')
let inputDescricao = document.getElementById('input-descricao') as HTMLInputElement
let inputDatalhamento = document.getElementById('input-datalhamento') as HTMLTextAreaElement
let btnSlavar = document.getElementById('btn-salvar') as HTMLButtonElement

btnSlavar.addEventListener('click', () => {
    console.log(inputDescricao.value)
    console.log(inputDatalhamento.value)
    modalCadastro.hide()
})