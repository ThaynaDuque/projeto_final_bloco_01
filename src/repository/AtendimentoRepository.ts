import { Atendimento } from "../model/Atendimento";

export interface AtendimentoRepository {

    procurarPorContato(contato: number): void;          
    listarTodos(): void;                                
    cadastrar(atendimento: Atendimento): void;          
    atualizar(atendimento: Atendimento): void;          
    deletar(contato: number): void;                     

    autorizarExame(contato: number): void;              
    aplicarDesconto(contato: number, percentual: number): void; 
}