import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date;
    ingredientes:string[];
    preco: number;
    nome: string;
    list: AlimentoOrganico[] = [];

    constructor(nome: string, preco:number, dataValidade:Date, ingredientes:string[]){
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }

    cadastrar(alimento:AlimentoOrganico){
        this.list.push(alimento);
    }

    exibir(){
        console.log(this.nome,this.preco,this.dataValidade,this.ingredientes);
    }
}
const alimentoOrganico = new AlimentoOrganico("Abacaxi", 5, new Date("12-06-2025"), ["abacaxi","caule"]);
alimentoOrganico.cadastrar;
alimentoOrganico.exibir;