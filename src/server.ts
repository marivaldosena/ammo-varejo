import * as dotenv from "dotenv";
import * as express from "express";
import * as helmet from "helmet";
import * as http from "http";
import * as path from "path";
import Router from "./routes";

dotenv.config();

const app = express();
const rootPath = path.join(__dirname, "..");

app.set("PORT", process.env.PORT || 5000);
app.set("HOST", process.env.IP || "0.0.0.0");
app.set("view engine", "pug");
app.set("views", path.join(rootPath, "views"));
app.use(express.static(path.join(rootPath, "public")));
app.use(helmet());
app.use(helmet.hidePoweredBy());

app.use(
  (req: express.Request,
   res: express.Response,
   next: express.NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true.toString());
    next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.render("index");
});

app.use("/", Router);

http.createServer(app).listen(app.get("PORT"), app.get("HOST"), () => {
    // tslint:disable-next-line:no-console
    console.log(`Running on ${app.get("HOST")}:${app.get("PORT")}`);
});
