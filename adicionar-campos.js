// adicionado campo em um objeto

const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com" 
}

cliente.fone = "12354156"

console.log(cliente)

cliente.fone = "555555555"
console.log(cliente)//substitui o atual