import { Application } from "express";
import mongooseLoader from "./mongoose.ts";
import expressLoader from "./express.ts";
import bmqWorkerLoader from "./bmq-worker.ts";

export default async (app: Application) => {
  await mongooseLoader();
  expressLoader(app);
  bmqWorkerLoader();
};
