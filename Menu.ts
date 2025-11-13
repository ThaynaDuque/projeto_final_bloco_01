import readlinesync = require("readline-sync");
import { Atendimento } from "./src/model/Atendimento";
import { AtendimentoConvenio } from "./src/model/AtendimentoConvenio";
import { AtendimentoParticular } from "./src/model/AtendimentoParticular";

export function main() {

   // Objeto da Classe Atendimento (Teste)

     const atendimentoConvenio: AtendimentoConvenio = new AtendimentoConvenio("Mariana Lima", 11999996666, 
    "Ressonância Magnética", 600, "Unimed");
    atendimentoConvenio.visualizar();
    atendimentoConvenio.autorizarExame();
    
    const atendimentoParticular: AtendimentoParticular = new AtendimentoParticular("Victor Alves", 11977775555, 
    "Tomografia", 450, 20); 
    atendimentoParticular.visualizar(); 
    atendimentoParticular.aplicarDesconto(); 
    atendimentoParticular.visualizar(); 

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
            case 1:
                console.log("\n\nRegistrar atendimento\n\n");

                break;
            case 2:
                console.log("\n\nConferencia\n\n");

                break;
            case 3:
                console.log("\n\nAtualizar atendimento\n\n");

                break;
            case 4:
                console.log("\n\nApagar atendimento\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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