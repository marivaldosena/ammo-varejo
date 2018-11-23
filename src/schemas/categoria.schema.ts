import db from "../config/db";
import ProdutoSchema from "./produto.schema";

const CategoriaSchema: db.Schema = new db.Schema({
  nome: {
    required: true,
    type: String,
    unique: true,
  },
  produtos: [{
    ref: "Produto",
    type: db.Schema.Types.ObjectId,
  }],
});

CategoriaSchema.methods.close = () => {
  db.connection.close();
};

export default CategoriaSchema;
