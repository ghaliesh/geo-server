import { config as initiateEnv } from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { getDataBaseURI, getEnv } from "./utils";
import { IEnvArgs } from "./utils/utils.types";

/** initiate the env variables in .env files */
initiateEnv();

const port: string = getEnv(IEnvArgs.PORT);
const dbURI: string = getDataBaseURI();

const server = express();

const onDatabaseConnected = () => console.log("connected to database");
const onDatabaseFailedToConnect = () => console.log("failed to connect");

mongoose
  .createConnection(dbURI, { useNewUrlParser: true })
  .then(onDatabaseConnected)
  .catch(onDatabaseFailedToConnect);

const onServerStarted = () =>
  console.info(`Server is now running on http://localhost:${port}`);

server.listen(port, onServerStarted);
