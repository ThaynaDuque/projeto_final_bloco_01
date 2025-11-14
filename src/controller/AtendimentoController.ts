import { Atendimento } from "../model/Atendimento";
import { AtendimentoRepository } from "../repository/AtendimentoRepository";

export class AtendimentoController implements AtendimentoRepository {
    
    private listaAtendimento: Array<Atendimento> = new Array<Atendimento>();
    private codigo: number = 0;

    procurarPorContato(contato: number): void {
        let encontrado = false;
        for (let atendimento of this.listaAtendimento) {
      if (atendimento.contato === contato) {     
        atendimento.visualizar();
        encontrado = true;
      }
    }

    if (!encontrado) {
      console.log("\nAtendimento não encontrado!");
    }
  }

    public listarTodos(): void {
    if (this.listaAtendimento.length === 0) {
      console.log("\nNão há atendimentos cadastrados.");
      return;
    }

    console.log("\n*** LISTA DE ATENDIMENTOS ***\n");

    for (let atendimento of this.listaAtendimento) {
      atendimento.visualizar();
      console.log();
    }
  }

  public cadastrar(atendimento: Atendimento): void {
    this.listaAtendimento.push(atendimento);
    console.log("\nAtendimento cadastrado com sucesso!");
  }

  public atualizar(atendimentoAtualizado: Atendimento): void {
  for (let i = 0; i < this.listaAtendimento.length; i++) {
    const atual = this.listaAtendimento[i];

    if (atual && atual.contato === atendimentoAtualizado.contato) {
      this.listaAtendimento[i] = atendimentoAtualizado;
      console.log("\nAtendimento atualizado com sucesso!");
      return;
    }
  }

  console.log("\nAtendimento não encontrado para atualização.");
}

    // ---------- DELETAR ----------
  public deletar(contato: number): void {
  for (let i = 0; i < this.listaAtendimento.length; i++) {
    const atual = this.listaAtendimento[i];

    if (atual && atual.contato === contato) {
      this.listaAtendimento.splice(i, 1);
      console.log("\nAtendimento removido com sucesso!");
      return;
    }
    
  }

  console.log("\nAtendimento não encontrado para exclusão.");
}


  public autorizarExame(contato: number): void {

  }

  public aplicarDesconto(contato: number, percentual: number): void {
   
  }
}