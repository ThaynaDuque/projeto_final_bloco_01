import { Atendimento } from "./Atendimento";

export class AtendimentoConvenio extends Atendimento {

  private _convenio: string;
  private _autorizado: boolean;

  constructor(paciente: string, contato: number, exame: string, valor: number, 
    convenio: string) {
    super(paciente, contato, exame, valor);
    this._convenio = convenio;
    this._autorizado = false; 
  }

  public get convenio(): string {
    return this._convenio;
  }

  public set convenio(convenio: string) {
    this._convenio = convenio;
  }

  public get autorizado(): boolean {
    return this._autorizado;
  }

  public autorizarExame(): void {
    if (!this._autorizado) {
      console.log(`Exame não autorizado pelo convênio ${this._convenio}.`);
      this._autorizado = true;
    } else {
      console.log("Este exame já estava autorizado pelo convênio.");
    }
  }

    public visualizar(): void {
    super.visualizar();
    console.log("Convênio: " + this._convenio);
    console.log("Autorizado: " + (this._autorizado ? "Sim" : "Não"));
  }
}
