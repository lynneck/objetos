const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com",
    fones:["55551555", "114445555"]//dois valores detro de elemento, array
}

cliente.dependentes={// objeto dentro de objeto
   nome: "Sara",
   parentesco: "filha",
   dataNasc:"22/07/1996"

}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)