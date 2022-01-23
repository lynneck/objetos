// Orientação objeto

class Cliente {
    constructor(nome, email, cpf, saldo)
    { 
        this.nome = nome
        this.email =email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
    
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca("Andre", "a@email.com", "21111214555", 100, 200)

const paulo = new ClientePoupanca("Paulo", "paulo@email.com","1234678989", 1000, 2000)

console.log(andre)
andre.depositar(50)
andre.depositarPoupanca(40)
console.log(andre)

paulo.depositarPoupanca(1000)
console.log(paulo)