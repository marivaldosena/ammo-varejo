import db from "../config/db";
import CategoriaSchema from "./categoria.schema";

const ProdutoSchema: db.Schema = new db.Schema({
  categorias: [{
    ref: "Categoria",
    type: db.Schema.Types.ObjectId,
  }],
  nome: {
    required: true,
    type: String,
  },
  precoAnterior: {
    min: 0,
    type: Number,
  },
  precoAtual: {
    min: 0,
    required: true,
    type: Number,
  },
  tipo: {
    type: String,
  },
  url: {
    imagem: {
      default: "t_cot1fop19prapng1534277156920.jpeg",
      type: String,
    },
    servidor: {
      default: "https://msena-ammo-varejo.herokuapp.com/",
      type: String,
    },
  },
});

ProdutoSchema.methods.close = () => {
  db.connection.close();
};

export default ProdutoSchema;
