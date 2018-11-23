export default class Seeder {
  public static seed(colecao: any[], propriedade: string = "_id") {
    for (const item of colecao) {
      item.save((err: Error, obj: any) => {
        if (err) {
          // tslint:disable-next-line:no-console
          console.error(err);
          return false;
        } else {
          if (propriedade in obj) {
            // tslint:disable-next-line:no-console
            console.log(`${obj[propriedade]} salvo!`);
          } else {
            // tslint:disable-next-line:no-console
            console.log(`${obj.toString()}`);
          }
          // tslint:disable-next-line:no-console
          obj.close();
        }
      });
    }
  }
}
