import CategoriaSeed from "./categoria.seed";
import ProdutoSeed from "./produtos.seed";
import Seeder from "./seeder";

Seeder.seed(CategoriaSeed, "nome");
Seeder.seed(ProdutoSeed, "nome");
