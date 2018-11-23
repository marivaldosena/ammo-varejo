import db from "../config/db";
import CategoriaSchema from "../schemas/categoria.schema";

export const Categoria = db.model("Categoria", CategoriaSchema);
