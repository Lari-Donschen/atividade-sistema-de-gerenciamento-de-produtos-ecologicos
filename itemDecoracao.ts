import { ProdutoEcologico } from "./ProdutoEcologico";
class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome:string;
    preco: number;
    material: string;
    dimensoes: {
        largura:number;
        altura: number;
        profundidade: number;
    }
    list: ItemDecoracaoSustentavel[] = [];

    constructor(nome:string, preco: number, material:string, dimensoes:{largura:number, altura: number,profundidade:number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    cadastrar(item:ItemDecoracaoSustentavel){
        this.list.push(item);
    }

    exibir(){
        console.log(this.nome,this.preco,this.material,this.dimensoes);
    }
}

const itemDecoracao = new ItemDecoracaoSustentavel("vaso", 12, "ceramica",{largura:2, altura: 2, profundidade: 3})
itemDecoracao.cadastrar;
itemDecoracao.exibir;