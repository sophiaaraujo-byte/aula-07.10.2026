import * as readline from 'readline';
class ContaBancaria {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`\n Depósito de R$ ${valor} realizado com sucesso!`);
        } else {
            console.log('\n Valor de depósito inválido.');
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\n Saque de R$ ${valor} realizado com sucesso!`);
        } else {
            console.log('\n Saldo insuficiente ou valor inválido para saque.');
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout  
});

const minhaConta = new ContaBancaria("001", 100);

console.log('=== BEM-VINDO AO BANCO ===');
console.log(`Conta número: 001 | Saldo inicial: R$ ${minhaConta.getSaldo()}\n`);

rl.question('Digite o valor que deseja DEPOSITAR: ', (respostaDeposito) => {

    const valorDeposito = Number(respostaDeposito);

    minhaConta.depositar(valorDeposito);
    console.log(`Saldo atual: R$ ${minhaConta.getSaldo()}\n`);

    rl.question('Digite o valor que deseja SACAR: ', (respostaSaque) => {

        const valorSaque = Number(respostaSaque);

        minhaConta.sacar(valorSaque);
        console.log(`Saldo final: R$ ${minhaConta.getSaldo()}\n`);

        console.log('=== OPERAÇÃO FINALIZADA ===');

        rl.close();
    });
});