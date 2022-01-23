const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
    email: "andre@email.com",
    fones:["55551555", "114445555"]//dois valores detro de elemento, array
}

cliente.dependentes=[{// objeto dentro de objeto
   nome: "Sara",
   parentesco: "filha",
   dataNasc:"23/07/2010"

}]

cliente.dependentes.push({
    nome: "Samia Maria",
   parentesco: "filha",
   dataNasc:"22/07/2014"
})

//console.log(cliente.dependentes.length)
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="22/07/2014");

console.log(filhaMaisNova)// exibe o objeto por completo
console.log(filhaMaisNova[0].nome)// exibe o indice zero com a propriedade nome
