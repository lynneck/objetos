const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com",
    fones:["55551555", "114445555"],//dois valores detro de elemento, array


  dependentes:[
    {// objeto dentro de objeto
        nome: "Sara",
        parentesco: "filha",
        dataNasc:"23/07/2010" },
{
    nome: "Samia Maria",
   parentesco: "filha",
   dataNasc:"22/07/2014"
}
],
  saldo : 100,

depositar:function (valor) {
    this.saldo += valor
}
}
    console.log(cliente.saldo)
    cliente.depositar(30)
    console.log(cliente.saldo)


