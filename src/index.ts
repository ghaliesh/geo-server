import { config as initiateEnv } from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { getDataBaseURI, getEnv } from "./utils";
import { locationRoutes } from "./routes";
import { attachUserIp } from "./middleware";
import { IEnvArgs } from "./utils/utils.types";

/** initiate the env variables in .env files */
initiateEnv();

const port: string = getEnv(IEnvArgs.PORT);
const dbURI: string = getDataBaseURI();

const server = express();

server.use(express.json());
server.use(attachUserIp);
server.use("/location", locationRoutes);

const onDatabaseConnected = () => console.log("connected to database");
const onDatabaseFailedToConnect = () => console.log("failed to connect");

mongoose
  .createConnection(dbURI, { useNewUrlParser: true })
  .then(onDatabaseConnected)
  .catch(onDatabaseFailedToConnect);

const onServerStarted = () =>
  console.info(`Server is now running on http://localhost:${port}`);

server.get("/", (_, res) => res.status(200).send({ success: true }));

server.listen(port, onServerStarted);
