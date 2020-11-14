import { getEnv } from "./env";
import { IEnvArgs } from "./utils.types";

export const getDataBaseURI = () => {
  const username: string = getEnv(IEnvArgs.DATABASE_USER_NAME);
  const password: string = encodeURIComponent(
    getEnv(IEnvArgs.DATABASE_USER_PASSWORD)
  );

  return `mongodb://${username}:${password}@ds041484.mlab.com:41484/gps`;
};
