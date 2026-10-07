export class Estudante {
    private _nome: string;
    private _nota1: number = 0;
    private _nota2: number = 0;

    constructor(nome: string, nota1: number, nota2: number) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get nota1(): number {
        return this._nota1;
    }

    public set nota1(valor: number) {
        if (valor >= 0 && valor <= 10) {
            this._nota1 = valor;
        } else {
            console.warn("Nota 1 deve estar entre 0 e 10. Valor zerado por padrão.");
            this._nota1 = 0;
        }
    }

    public get nota2(): number {
        return this._nota2;
    }

    public set nota2(valor: number) {
        if (valor >= 0 && valor <= 10) {
            this._nota2 = valor;
        } else {
            console.warn("Nota 2 deve estar entre 0 e 10. Valor zerado por padrão.");
            this._nota2 = 0;
        }
    }

    public calcularMedia(): number {
        return (this._nota1 + this._nota2) / 2;
    }

    public exibirInformacoes(): string {
        return `Nome: ${this.nome} | Nota 1: ${this.nota1} | Nota 2: ${this.nota2} | Média: ${this.calcularMedia().toFixed(2)}`;
    }
}