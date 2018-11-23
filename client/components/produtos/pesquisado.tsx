import * as React from "react";

interface IProps {
  busca: string;
}

export default class ProdutoPesquisado extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="App__Produto_Pesquisado">
        {this.props.busca || "Lista de Produtos"}
      </div>
    );
  }
}
