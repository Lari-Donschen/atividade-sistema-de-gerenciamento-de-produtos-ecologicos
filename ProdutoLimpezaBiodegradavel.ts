import { ProdutoEcologico } from "./produtoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:string;
    preco:number;
    volume:number;
    list: ProdutoLimpezaBiodegradavel[] = [];

    constructor(nome:string, preco:number,volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    cadastrar(produto:ProdutoLimpezaBiodegradavel){
        this.list.push()
    }

    exibir(){
        console.log(this.nome,this.preco,this.volume)
    }
}
const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("omo",12,300);
produtoLimpezaBiodegradavel.cadastrar;
produtoLimpezaBiodegradavel.exibir;