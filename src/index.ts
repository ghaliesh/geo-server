import { config as initiateEnv } from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { dbError, dbSucess, getDataBaseURI, getEnv, serverStarted } from "./utils";
import { locationRoutes } from "./routes";
import { attachUserIp } from "./middleware";
import { IEnvArgs } from "./utils/utils.types";

/** initiate the env variables in .env files */
initiateEnv();

const port: string = getEnv(IEnvArgs.PORT);
const dbURI: string = getDataBaseURI();

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(dbSucess)
  .catch(dbError);

const server = express();
server.use(express.json());
server.use(attachUserIp);
server.use("/location", locationRoutes);

server.get("/", (_, res) => res.status(200).send({ success: true }));

server.listen(port, serverStarted);
