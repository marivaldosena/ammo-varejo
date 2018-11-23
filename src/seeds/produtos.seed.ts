import { Produto } from "../models/produto.model";

const SERVER_URL = process.env.SERVER_URL ||
  "https://msena-ammo-varejo.herokuapp.com/" ||
  "http://localhost:5000/";

const produtos = [
  new Produto({
    nome: "Toalha Lavabo Luxury Fio Penteado",
    precoAnterior: 55.00,
    precoAtual: 29.00,
    tipo: "Toalha",
    url: {
      imagem: "t_cot1fop19prapng1534277156920.jpeg",
      servidor: `${SERVER_URL}`,
    },
  }),

  new Produto({
    nome: "Toalha One for All Fio Penteado",
    precoAnterior: 35.00,
    precoAtual: 19.00,
    tipo: "Toalha",
    url: {
      imagem: "t_cot1fop19prapng1534277156920.jpeg",
      servidor: `${SERVER_URL}`,
    },
  }),

  new Produto({
    nome: "Kit Colcha Folhas Micromatelado",
    precoAnterior: 379.00,
    precoAtual: 229.00,
    tipo: "Colcha",
    url: {
      imagem: "c_dmscamv19vppng1540307710993.jpeg",
      servidor: `${SERVER_URL}`,
    },
  }),

  new Produto({
    nome: "Toalha One for All Fio penteado",
    precoAnterior: 79.00,
    precoAtual: 59.00,
    tipo: "Toalha",
    url: {
      imagem: "t_cot1fop19prapng1534277156920.jpeg",
      servidor: `${SERVER_URL}`,
    },
  }),

  new Produto({
    nome: "Jogo de Lençol Urban Dobra Feita",
    precoAnterior: 466.0,
    precoAtual: 161.0,
    tipo: "Toalha",
  }),

  new Produto({
    nome: "Idea certainly represent church according federal",
    precoAnterior: 913,
    precoAtual: 634,
    tipo: "Jogo de Lençol",
  }),

  new Produto({
    nome: "School performance stay level",
    precoAnterior: 590,
    precoAtual: 497,
    tipo: "Travesseiro",
  }),

  new Produto({
    nome: "Even hear peace short",
    precoAnterior: 614,
    precoAtual: 469,
    tipo: "Colcha",
  }),

  new Produto({
    nome: "Size source free ten",
    precoAnterior: 1810,
    precoAtual: 1603,
    tipo: "Toalha de Piso",
  }),

  new Produto({
    nome: "Here gun ground according",
    precoAnterior: 139,
    precoAtual: 72,
    tipo: "Sapatilha",
  }),

  new Produto({
    nome: "Bed anyone leave view generation",
    precoAnterior: 310,
    precoAtual: 105,
    tipo: "Capa de Almofada",
  }),

  new Produto({
    nome: "Entire view food couple agency floor least",
    precoAnterior: 1748,
    precoAtual: 1105,
    tipo: "Capa de Edredom",
  }),

  new Produto({
    nome: "They new tax. Us million father offer dream safe whatever.",
    precoAnterior: 1543,
    precoAtual: 1490,
    tipo: "Colcha",
  }),

  new Produto({
    nome: "Foot would though building through news pay",
    precoAnterior: 851,
    precoAtual: 635,
    tipo: "Edredom",
  }),

  new Produto({
    nome: "Suddenly size large prove eight safe cut",
    precoAnterior: 150,
    precoAtual: 105,
    tipo: "Jogo de Lençol",
  }),

  new Produto({
    nome: "Edge list number appear everything agreement serious",
    precoAnterior: 829,
    precoAtual: 303,
    tipo: "Jogo de Toalha",
  }),

  new Produto({
    nome: "Wind side technology care later draw",
    precoAnterior: 566,
    precoAtual: 443,
    tipo: "Kit Cama",
  }),

  new Produto({
    nome: "Cover against black reason beat dark top nothing",
    precoAnterior: 1852,
    precoAtual: 1463,
    tipo: "Lugar Americano",
  }),

  new Produto({
    nome: "Car dinner I think list particular leg",
    precoAnterior: 802,
    precoAtual: 168,
    tipo: "Porta Travesseiro",
  }),

  new Produto({
    nome: "Opportunity test artist end",
    precoAnterior: 1122,
    precoAtual: 993,
    tipo: "Roupão",
  }),

  new Produto({
    nome: "People light glass new bed matter for",
    precoAnterior: 1832,
    precoAtual: 1184,
    tipo: "Saia",
  }),

  new Produto({
    nome: "Case style discover surface race discover probably",
    precoAnterior: 1938,
    precoAtual: 1795,
    tipo: "Sapatilha",
  }),

  new Produto({
    nome: "He left Mr police summer herself",
    precoAnterior: 1254,
    precoAtual: 920,
    tipo: "Tapete",
  }),

  new Produto({
    nome: "See let possible face life officer financial",
    precoAnterior: 538,
    precoAtual: 159,
    tipo: "Toalha",
  }),

  new Produto({
    nome: "Memory green memory Congress walk behavior realize Democrat",
    precoAnterior: 136,
    precoAtual: 107,
    tipo: "Toalha Lavabo",
  }),

  new Produto({
    nome: "Age seek them. Your nor thing day think.",
    precoAnterior: 1974,
    precoAtual: 1737,
    tipo: "Toalha de Mesa",
  }),

  new Produto({
    nome: "President drive us point theory become value data",
    precoAnterior: 992,
    precoAtual: 765,
    tipo: "Toalha de Piso",
  }),

  new Produto({
    nome: "Trade partner blood middle. Whatever even affect ask choice rock increase.",
    precoAnterior: 1574,
    precoAtual: 1086,
    tipo: "Travesseiro",
  }),

  new Produto({
    nome: "Town someone morning per whom interesting including present.",
    precoAnterior: 1739,
    precoAtual: 1693,
    tipo: "Capa de Almofada",
  }),

  new Produto({
    nome: "Dog network what research peace old.",
    precoAnterior: 1685,
    precoAtual: 1267,
    tipo: "Capa de Edredom",
  }),

  new Produto({
    nome: "Only pattern behavior apply simple see",
    precoAnterior: 150,
    precoAtual: 69,
    tipo: "Colcha",
  }),
];

export default produtos;
