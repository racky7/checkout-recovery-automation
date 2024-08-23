import mongoose from "mongoose";

import { mongoDbUri } from "../config/env.ts";

export default async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(mongoDbUri, {})
    .then(() => {
      console.log("Mongodb Connection");
    })
    .catch((err: Error) => {
      console.log(err);
    });
};
