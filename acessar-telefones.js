const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com",
    fones:["55551555", "114445555"]//dois valores detro de elemento
}
cliente.fones.forEach(fone => console.log(fone))