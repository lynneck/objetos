const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com" 
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves [0]])   //exebi a o elemento do objeto nesse caso "André"

chaves.forEach(info => console.log(cliente [info])) // exibe o objeto com todos os elementos
