import * as React from "react";
import * as ReactDOM from "react-dom";
import Cabecalho from "./components/cabecalho";
import { ItensPorPagina, Paginacao } from "./components/paginacao";
import { Mensagem, ProdutoLista, ProdutoPesquisado } from "./components/produtos";

const API_URL = process.env.API_URL ||
    process.env.IP ||
    "https://msena-ammo-varejo.herokuapp.com" ||
    "http://localhost:5000";

export class App extends React.Component {
    public state = {
        API_URL,
        busca: "",
        itensPorPagina: 8,
        paginaAtual: 1,
        produto: {},
        produtos: Array<any>(),
        totalPaginas: 1,
        totalProdutos: 0,
    };
    constructor(props: any) {
        super(props);
        this.obterProdutos = this.obterProdutos.bind(this);
        this.updateStore = this.updateStore.bind(this);
        this.updateItensPorPagina = this.updateItensPorPagina.bind(this);
    }

    public render() {
        return (
            <div className="App">
                <Cabecalho nome="mmartan" busca={this.state.busca} updateStore={this.updateStore} />

                <ProdutoPesquisado busca={this.state.busca} />

                <Mensagem totalProdutos={this.state.totalProdutos}/>

                <ProdutoLista produtos={this.state.produtos} busca={this.state.busca}
                    itensPorPagina={this.state.itensPorPagina} obterProdutos={this.obterProdutos}
                    paginaAtual={this.state.paginaAtual}
                    />

                <footer className="App__Rodape">
                    <ItensPorPagina itensPorPagina={this.state.itensPorPagina}
                    updateItensPorPagina={this.updateItensPorPagina} obterProdutos={this.obterProdutos} />

                    <Paginacao totalPaginas={this.state.totalPaginas}
                        paginaAtual={this.state.paginaAtual} updateStore={this.updateStore}
                    />
                </footer>
            </div>
        );
    }

    public updateStore(value: any) {
        this.setState(value);
    }

    public updateItensPorPagina(itensPorPagina: any) {
        const num = parseInt(itensPorPagina["itensPorPagina"], 10);
        this.setState({ itensPorPagina: num });
    }

    public obterProdutos() {
        const { itensPorPagina, busca, paginaAtual } = this.state;

        let SEARCH_URL = `${API_URL}/produtos/?`;

        if (itensPorPagina) {
            SEARCH_URL += `num=${itensPorPagina || 8}&`;
        }

        if (busca) {
            SEARCH_URL += `busca=${busca}`;
        }

        if (paginaAtual) {
            if (busca) {
                SEARCH_URL += `&p=${paginaAtual}`;
            } else {
                SEARCH_URL += `p=${paginaAtual}`;
            }
        }

        fetch(SEARCH_URL, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response: any) => {
                return response.json();
            })
            .then((data: any) => {
                this.setState({
                    produtos: data.produtos,
                    totalPaginas: data.totalPaginas,
                    totalProdutos: data.totalProdutos,
                });
            })
            .catch((err) => {
                // tslint:disable-next-line:no-console
                console.log(err);
            })
        ;
    }

    public componentWillMount() {
        this.setState({ API_URL });
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#app"),
);
