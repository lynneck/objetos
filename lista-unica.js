const cliente = [{
    nome: "Andre",
    idade:36,
    cpf:"12345678912",
  dependentes:[
    {// objeto dentro de objeto
        nome: "Sara",
        parentesco: "filha",
        dataNasc:"23/07/2010" },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc:"22/07/2014"
    }],
},
    {
        nome: "Paulo",
        cpf:"54444454565",
        dependentes:[{
            nome: "Bia",
            parentesco: "filha",
            dataNasc:"30/08/2020"
        }],
    }

]
 
const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(listaDependentes)