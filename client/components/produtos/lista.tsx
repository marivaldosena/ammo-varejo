import * as React from "react";
import ProdutoItem from "./item";

interface IProdutoLista {
    busca: string;
    itensPorPagina: number;
    obterProdutos: any;
    paginaAtual: number;
    produtos: any;
}

export default class ProdutoLista extends React.Component<IProdutoLista> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        const resultado =
            this.props.produtos.length > 0 ?
            this.props.produtos.map((produto: any) => {
                return <ProdutoItem key={produto.id} produto={produto} />;  }) :
            <div className="App__Produto_Nao_Encontrado">
                <span>Produto não encontrado!</span>
                <img src={"https://openclipart.org/download/301359/errname1.svg"}
                    width="376px" height="376px"
                />
            </div>;
        return (
            <div className="App__Produto_Lista">
                {resultado}
            </div>
        );
    }

    public componentWillMount() {
        this.props.obterProdutos();
    }

    public componentWillReceiveProps(nextProps: any) {
        if (
            nextProps.itensPorPagina !== this.props.itensPorPagina ||
            nextProps.busca !== this.props.busca ||
            nextProps.paginaAtual !== this.props.paginaAtual
        ) {
            this.props.obterProdutos();
        }
    }
}
