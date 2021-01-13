import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { globalErrorHandler } from "./utilities/errors/globalErrorHandler";
import { routes } from "./routes";
import db from "./config/db";
import config from "./config";
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT) || 3001;

app.use(json(), urlencoded({ extended: false }), morgan("dev"), cors());

db(config)
  .then(() => {
    app.use("/v1", routes(express));
    
    app.use(globalErrorHandler);

    app.listen(port, (err) => {
      if (err) {
        throw new Error(err.message);
      }
      console.log(`Service is running on port ${port}`);
    });
  })
  .catch((err) => {
    throw new Error(`Connection error: ${err.message}`);
  });
export default app;

