import express, { Express } from "express";
import loaders from "./loaders";
import { port } from "./config/env";

const app: Express = express();

loaders(app);

app.listen(port, (err?: Error) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});
