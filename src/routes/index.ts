import { Router } from "express";
import CategoriaRouter from "./categoria.route";
import ProdutoRouter from "./produto.route";

const router = Router();

router
  .use("/categorias", CategoriaRouter)
  .use("/produtos", ProdutoRouter);

export default router;
