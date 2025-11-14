import readlinesync = require("readline-sync");
import { Atendimento } from "./src/model/Atendimento";
import { AtendimentoConvenio } from "./src/model/AtendimentoConvenio";
import { AtendimentoParticular } from "./src/model/AtendimentoParticular";
import { AtendimentoController } from "./src/controller/AtendimentoController";

function keyPress(): void {
  console.log("\nPressione ENTER para continuar...");
  readlinesync.prompt();
}

export function main(): void {

  const atendimento: AtendimentoController = new AtendimentoController();

  let opcao1, contato, valor, tipoAtendimento, taxaDesconto: number;
  let paciente, exame, convenio: string;

  const tiposAtendimento = ["Convênio", "Particular"];

  console.log("\nCriar Atendimentos de teste\n");

  let a1: AtendimentoConvenio = new AtendimentoConvenio("Adriana Souza", 11988887777, "Hemograma", 
    120, "Unimed");
  atendimento.cadastrar(a1);

  let a2: AtendimentoConvenio = new AtendimentoConvenio("Mariana Lima", 11999996666, "Ressonância Magnética", 
    600, "Unimed");
  atendimento.cadastrar(a2);

  let a3: AtendimentoParticular = new AtendimentoParticular("Maria Silva", 11985996352, "Hemograma Completo", 
    200, 10);
  atendimento.cadastrar(a3);

  let a4: AtendimentoParticular = new AtendimentoParticular("Victor Alves", 11977775555, "Coagulograma", 
    250, 20);
  atendimento.cadastrar(a4);

  atendimento.listarTodos();

  let opcao: number;

  while (true) {

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                LAB SAUDE+                           ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Registrar atendimento                ");
    console.log("            2 - Conferencia                          ");
    console.log("            3 - Atualizar atendimento                ");
    console.log("            4 - Apagar atendimento                   ");
    console.log("            5 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 5) {
      console.log("\nLab Saude + Confiança em cada exame!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {

      // 1 - REGISTRAR ATENDIMENTO
      case 1:
        console.log("\n\nRegistrar atendimento\n\n");

        console.log("Digite o nome do paciente: ");
        paciente = readlinesync.question("");

        console.log("Digite o contato do paciente: ");
        contato = readlinesync.questionInt("");

        console.log("Digite o exame: ");
        exame = readlinesync.question("");

        console.log("\nDigite o valor do exame (R$): ");
        valor = readlinesync.questionFloat("");

        console.log("\nSelecione o tipo de atendimento: ");
        tipoAtendimento =
          readlinesync.keyInSelect(tiposAtendimento, "", { cancel: false }) + 1;

        switch (tipoAtendimento) {
          case 1:
            console.log("Digite o nome do convênio: ");
            convenio = readlinesync.question("");

            atendimento.cadastrar(
              new AtendimentoConvenio(paciente, contato, exame, valor, convenio)
            );
            break;

          case 2:
            console.log("Digite a taxa de desconto (%): ");
            taxaDesconto = readlinesync.questionFloat("");

            atendimento.cadastrar(
              new AtendimentoParticular(paciente, contato, exame, valor, 
                taxaDesconto)
            );
            break;
        }

        keyPress();
        break;

      // 2 - CONFERÊNCIA
      case 2:
        console.log("\n\nConferência\n\n");
        console.log("1 - Listar todos os atendimentos");
        console.log("2 - Buscar atendimento por contato");
        console.log("Escolha uma opção: ");

        const opcaoConferencia = readlinesync.questionInt("");

        switch (opcaoConferencia) {
          case 1:
            console.log("\n\nLista de atendimentos\n");
            atendimento.listarTodos();
            break;

          case 2:
            console.log("\n\nBuscar atendimento por contato\n");
            console.log("Digite o contato do paciente: ");
            contato = readlinesync.questionInt("");
            atendimento.procurarPorContato(contato);
            break;

          default:
            console.log("\nOpção inválida na conferência!");
            break;
        }

        keyPress();
        break;

      // 3 - ATUALIZAR ATENDIMENTO
      case 3:
        console.log("\n\nAtualizar atendimento\n\n");

        console.log("Digite o contato do atendimento que deseja atualizar: ");
        contato = readlinesync.questionInt("");

        console.log("Digite o novo nome do paciente: ");
        paciente = readlinesync.question("");

        console.log("Digite o novo exame: ");
        exame = readlinesync.question("");

        console.log("Digite o novo valor do exame (R$): ");
        valor = readlinesync.questionFloat("");

        console.log("\nSelecione o tipo de atendimento: ");
        tipoAtendimento =
          readlinesync.keyInSelect(tiposAtendimento, "", { cancel: false }) + 1;

        let atendimentoAtualizado!: Atendimento;

        switch (tipoAtendimento) {
          case 1:
            console.log("Digite o nome do convênio: ");
            convenio = readlinesync.question("");

            atendimentoAtualizado = new AtendimentoConvenio(paciente, contato, exame,
                valor, convenio);
            break;

          case 2:
            console.log("Digite a taxa de desconto (%): ");
            taxaDesconto = readlinesync.questionFloat("");

            atendimentoAtualizado = new AtendimentoParticular(paciente, contato, exame,
                valor, taxaDesconto);
            break;
        }

        atendimento.atualizar(atendimentoAtualizado);
        keyPress();
        break;

      // 4 - APAGAR ATENDIMENTO
      case 4:
        console.log("\n\nApagar atendimento\n\n");

        console.log("Digite o contato do atendimento que deseja apagar: ");
        contato = readlinesync.questionInt("");

        atendimento.deletar(contato);

        keyPress();
        break;

      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Thayna Duque ");
  console.log("thaynasouzamkt@gmail.com");
  console.log("github.com/ThaynaDuque");
  console.log("*****************************************************");
}

main();
