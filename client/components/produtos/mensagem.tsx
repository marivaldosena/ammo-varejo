import * as React from "react";

interface IMensagem {
  totalProdutos: number;
}

export default class Mensagem extends React.Component<IMensagem> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const mensagem = this.props.totalProdutos > 1 ?
      "Produtos Encontrados" : "Produto Encontrado";
    return (
      <div className="App__Produto_Lista__Mensagem">
        {this.props.totalProdutos} {mensagem}
      </div>
    );
  }
}
