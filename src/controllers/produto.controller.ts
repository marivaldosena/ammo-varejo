import { Request, Response } from "express";
import { Produto } from "../models/produto.model";

export default class ProdutoController {
  public static show(req: Request, res: Response) {
    Produto.findOne({ _id: req.params.id }, (err: any, obj: any) => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          id: obj._id,
          nome: obj.nome,
          precoAnterior: obj.precoAnterior,
          precoAtual: obj.precoAtual,
          tipo: obj.tipo,
        });
      }
    });
  }

  public static index(req: Request, res: Response) {
    const { num, busca, p } = req.query;
    // tslint:disable-next-line:no-console
    let parsedNum: number;
    let start: number;
    let regex: any;
    let totalProdutos: number;
    let totalPaginas: number;
    const resultado: any[] = [];

    if (parseInt(num, 10) >= 8 && parseInt(num, 10) <= 20) {
      parsedNum = parseInt(num, 10);
    } else {
      parsedNum = 8;
    }

    if (busca) {
      regex = busca.split(" ").map((palavra: any) => {
        return "\\b" + palavra + "\\b";
      }).join("|");
    } else {
      regex = "";
    }

    const query = Produto.find()
      .regex("nome", new RegExp(regex, "i"))
      .select("_id categorias precoAnterior precoAtual nome tipo url")
    ;

    const countQuery = Produto.find({})
      .regex("nome", new RegExp(regex, "i"))
    ;

    countQuery.countDocuments((err: any, count: any) => {
      if (err) {
          res.json(err);
        } else {
          totalProdutos = count;
          totalPaginas = Math.floor(totalProdutos / parsedNum) + 1;
          if (parseInt(p, 10) >= 0 && parseInt(p, 10) <= totalPaginas) {
            start = ((parseInt(p, 10) - 1) * parsedNum);
          } else {
            start = 0;
          }

          query.sort("nome").skip(start).limit(parsedNum).exec((err: any, produtos: any) => {
            if (err) {
              res.json(err);
            } else {
              produtos.forEach((item: any) => {
                resultado.push({
                  categorias: item.categorias,
                  id: item._id,
                  precoAnterior: item.precoAnterior,
                  precoAtual: item.precoAtual,
                  produto: item.nome,
                  tipo: item.tipo,
                  url: item.url,
                });
              });
              res.json({
                produtos: resultado,
                totalPaginas,
                totalProdutos,
              });
            }
          });
        }
      })
      .exec()
    ;
  }
}
