import { getEnv } from "./env";
import { IEnvArgs } from "./utils.types";

export const getDataBaseURI = () => {
  const databaseURI: string = getEnv(IEnvArgs.DATABASE_URL);
  const username: string = getEnv(IEnvArgs.DATABASE_USER_NAME);
  const password: string = encodeURIComponent(
    getEnv(IEnvArgs.DATABASE_USER_PASSWORD)
  );
  return `mongodb+srv://ghazwan:2522@cluster0.uzbbi.mongodb.net/geo?retryWrites=true&w=majority`;
};
