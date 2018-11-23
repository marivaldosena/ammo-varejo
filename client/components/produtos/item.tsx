import * as React from "react";

interface IProdutoItem {
    produto: any;
}

export default class ProdutoItem extends React.Component<IProdutoItem> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        const { servidor, imagem } = this.props.produto.url;
        const { produto, precoAnterior, precoAtual, tipo } = this.props.produto;

        return (
            <div className="App__Produto_Item">
                <div className="App__Produto_Imagem">
                    <img src={servidor + imagem} />
                </div>
                <div className="App__Produto_Item__Informacao">
                    <div className="App__Produto_Item__Descricao">
                        <span className="App__Produto_Item__Nome">
                            {produto}
                        </span>
                        <span className="App__Produto_Item__Tipo">
                            {tipo}
                        </span>
                    </div>
                    <div className="App__Produto_Item__Preco">
                        <span className="App__Produto_Item__Preco_Anterior">
                            {this.formatarMoeda(precoAnterior)}
                        </span>
                        <span className="App__Produto_Item__Preco_Atual">
                            {this.formatarMoeda(precoAtual)}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    private formatarMoeda(valor: number) {
        return `R$ ${valor.toFixed(2)}`;
    }
}
