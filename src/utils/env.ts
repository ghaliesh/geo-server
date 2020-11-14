import { IEnvArgs } from "./utils.types";

export const getEnv = (envVariableName: IEnvArgs): string =>
  process.env[envVariableName];
