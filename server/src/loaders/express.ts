import cors from "cors";
import bodyParser from "body-parser";
import { Application, Request, Response } from "express";
import router from "../api/routes";

export default (app: Application) => {
  process.on("uncaughtException", async (error) => {
    console.log(error);
  });

  process.on("unhandledRejection", async (ex: Error) => {
    console.log(ex);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(router);

  app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
  });
};
