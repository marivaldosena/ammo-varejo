import { Request, Response } from "express";
import { Categoria } from "../models/categoria.model";

export default class CategoriaController {
  public static show(req: Request, res: Response) {
    Categoria.findOne({ nome: req.params.nome }, (err: any, obj: any) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ id: obj._id, nome: obj.nome });
      }
    });
  }

  public static index(req: Request, res: Response) {
    Categoria.find({}, (err: any, categorias: any) => {
      if (err) {
        res.json(err);
      } else {
        const resultado: any[] = [];

        categorias.forEach((item: any) => {
          resultado.push({
              categoria: item.nome,
          });
        });

        res.json(resultado);
      }
    });
  }
}
