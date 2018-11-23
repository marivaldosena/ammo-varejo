import * as React from "react";

interface ICabecalho {
    nome: any;
    busca: any;
    updateStore: any;
}

export default class Cabecalho extends React.Component<ICabecalho> {
    constructor(props: any) {
        super(props);
        this.handleBusca = this.handleBusca.bind(this);
    }

    public render() {
        return (
            <div className="App__Cabecalho">
                <div className="App__Logo">{this.props.nome}</div>
                <div>
                    <form>
                        <input type="search"
                            onKeyPress={this.handleBusca}
                            placeholder="Digite o nome do produto..."
                            />
                    </form>
                </div>
            </div>
        );
    }

    public handleBusca(event: any) {
        if (event.key === "Enter") {
            this.props.updateStore({ busca: event.target.value });
            event.preventDefault();
        }
    }
}
