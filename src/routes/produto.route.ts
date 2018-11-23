import { Router } from "express";
import ProdutoController from "../controllers/produto.controller";

const router = Router();

router
  .get("/:id", ProdutoController.show)
  .get("/", ProdutoController.index);

export default router;
