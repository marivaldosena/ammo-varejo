import * as React from "react";

interface IItensPorPagina {
  itensPorPagina: any;
  obterProdutos: any;
  updateItensPorPagina: any;
}

export default class ItensPorPagina extends React.Component<IItensPorPagina> {
  constructor(props: any) {
    super(props);
    this.handleItensPorPagina = this.handleItensPorPagina.bind(this);
  }
  public render() {
    return (
      <div className="App__Itens_Por_Pagina">
          <select onChange={this.handleItensPorPagina}>
              <option value="08">08 produtos por página</option>
              <option value="16">16 produtos por página</option>
              <option value="20">20 produtos por página</option>
          </select>
      </div>
    );
  }

  public handleItensPorPagina(event: any) {
    this.props.updateItensPorPagina({ itensPorPagina: event.target.value });
  }
}
