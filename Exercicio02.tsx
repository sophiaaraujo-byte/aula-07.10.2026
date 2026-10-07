class Produto {
    private nome: string;
    private preco: number;
    constructor(nome: string, precoInicial: number) {
        this.nome = nome;

        if (precoInicial > 0) {
            this.preco = precoInicial;
        } else {
            console.log(" Preço inicial inválido! Preço definido como R$ 1.00 por padrão.");
            this.preco = 1.00;
        }
    }

    public exibirInformacoes(): void {
        console.log(` Produto: ${this.nome} | Preço: R$ ${this.preco}`);
    }

    public setPreco(novoPreco: number): void {
        if (novoPreco > 0) {
            this.preco = novoPreco;
            console.log(` Preço do produto '${this.nome}' alterado para R$ ${this.preco}`);
        } else {
            console.log(` Erro ao alterar preço: O valor R$ ${novoPreco} é inválido!`);
        }
    }

    public getPreco(): number {
        return this.preco;
    }
}

const produto1 = new Produto("Notebook", 2500);
produto1.exibirInformacoes();
produto1.setPreco(-500);
produto1.setPreco(2300);
produto1.exibirInformacoes(); 
