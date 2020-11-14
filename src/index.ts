import { config as initiateEnv } from "dotenv";
import express from "express";

import { getEnv } from "./utils";
import { IEnvArgs } from "./utils/utils.types";

/** initiate the env variables in .env files */
initiateEnv();

const port = getEnv(IEnvArgs.PORT);

const server = express();

const onServerStarted = () =>
  console.info(`Server is now running on http://localhost:${port}`);

server.listen(port, onServerStarted);
