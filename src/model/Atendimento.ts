export abstract class Atendimento {

    private _paciente: string;
    private _contato: number;
    private _exame: string;
    private _valor: number;

    constructor(paciente: string, contato: number, exame: string, valor: number) {
        this._paciente = paciente;
        this._contato = contato;
        this._exame = exame;
        this._valor = valor;
    }

    // GETTERS E SETTERS

    public get paciente(): string {
        return this._paciente;
    }

    public set paciente(paciente: string) {
        this._paciente = paciente;
    }

    public get contato(): number {
        return this._contato;
    }

    public set contato(contato: number) {
        this._contato = contato;
    }

    public get exame(): string {
        return this._exame;
    }

    public set exame(exame: string) {
        this._exame = exame;
    }

    public get valor(): number {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    // MÉTODOS

    public atualizarAtendimento(paciente: string, contato: number, exame: string, valor: number): void {
        this._paciente = paciente;
        this._contato = contato;
        this._exame = exame;
        this._valor = valor;
    }

    public visualizar(): void {
        console.log("\n\n************************************************");
        console.log("Dados do Atendimento:");
        console.log("************************************************");
        console.log("Paciente: " + this._paciente);
        console.log("Contato: " + this._contato);
        console.log("Exame: " + this._exame);
        console.log("Valor: R$ " + this._valor.toFixed(2));
        console.log("************************************************\n");
    }
}
