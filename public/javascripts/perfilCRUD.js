//const {Usuario} = require('../../database/models')

let botaoEditar = document.getElementById('editar')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
botaoEditar.addEventListener('click', (event)=>{
    console.log(event)
    nome.innerHTML = `<input type="text" name="nome" id="novoNome">`
    email.innerHTML = `<input type="email" name="email" id="novoEmail">`
    
})