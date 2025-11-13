import { Atendimento } from "./Atendimento";

export class AtendimentoParticular extends Atendimento {

    private _percentualDesconto: number;

    constructor(paciente: string, contato: number, exame: string, valor: number, 
        percentualDesconto: number) {
        super(paciente, contato, exame, valor);
        this._percentualDesconto = percentualDesconto;
    }

    public get percentualDesconto(): number {
        return this._percentualDesconto;
    }

    public set percentualDesconto(percentual: number) {
        this._percentualDesconto = percentual;
    }

    public aplicarDesconto(): void {
        const valorDesconto = this.valor * (this._percentualDesconto / 100);
        this.valor = this.valor - valorDesconto;
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log("Desconto particular: " + this._percentualDesconto + "%");
    }
}
