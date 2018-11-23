import { Router } from "express";
import CategoriaController from "../controllers/categoria.controller";

const router = Router();

router
  .get("/", CategoriaController.index)
  .get("/:nome", CategoriaController.show);

export default router;
