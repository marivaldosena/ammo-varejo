import * as mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/ammo-varejo";

mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
});

mongoose.connection.on("open", () => {
  // tslint:disable-next-line:no-console
  console.log("DB Connected");
});

export default mongoose;
