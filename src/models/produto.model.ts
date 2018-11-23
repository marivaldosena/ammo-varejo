import db from "../config/db";
import ProdutoSchema from "../schemas/produto.schema";

export const Produto = db.model("Produto", ProdutoSchema);
