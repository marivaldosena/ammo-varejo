import * as React from "react";

interface IPaginacao {
  paginaAtual: any;
  totalPaginas: any;
  updateStore: any;
}

export default class Paginacao extends React.Component<IPaginacao> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.mostrarTotalPaginas = this.mostrarTotalPaginas.bind(this);
  }

  public render() {
    return (
      <div>
        <nav className="pagination">
          {this.mostrarTotalPaginas()}
        </nav>
      </div>
    );
  }

  public mostrarTotalPaginas() {
    const { totalPaginas, paginaAtual } = this.props;

    const resultado = [];
    let activeClass: string;

    let props = {
      className: "item",
      onClick: this.handleClick,
    };

    resultado.push(
      React.createElement("a", props, "<<"),
    );

    resultado.push(
      React.createElement("a", props, ">>"),
    );

    for (let item = 0; item < totalPaginas; item++) {
      // tslint:disable-next-line:triple-equals
      activeClass = (item + 1) == paginaAtual ? "item active" : "item";
      props = {
        className: activeClass,
        onClick: this.handleClick,
      };
      resultado.splice(resultado.length - 1, 0,
        React.createElement("a", props, item + 1),
      );
    }

    return resultado;
  }

  public handleClick(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const opcao = event.target.text;
    const { paginaAtual, totalPaginas } = this.props;
    let resultado: number;

    switch (opcao) {
      case "<<":
        resultado = (paginaAtual - 1) > 1 ?
            (paginaAtual - 1) : 1;

        this.props.updateStore({
          paginaAtual: resultado,
        });

        break;

      case ">>":
        resultado = (paginaAtual - 1) < totalPaginas ?
            (paginaAtual + 1) : totalPaginas;

        this.props.updateStore({
          paginaAtual: resultado,
        });

        break;

      default:
        resultado = opcao;

        this.props.updateStore({
          paginaAtual: resultado,
        });

        break;
    }
  }
}
