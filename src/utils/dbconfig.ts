import { getEnv } from "./env";
import { IEnvArgs } from "./utils.types";

export const getDataBaseURI = () => {
  const databaseURI: string = getEnv(IEnvArgs.DATABASE_URL);
  const username: string = getEnv(IEnvArgs.DATABASE_USER_NAME);
  const password: string = encodeURIComponent(
    getEnv(IEnvArgs.DATABASE_USER_PASSWORD)
  );
  return `mongodb+srv://${username}:${password}@${databaseURI}`;
};

export const dbError = (): void => console.log(`We couldn't connect to ${getEnv(IEnvArgs.DATABASE_URL)}`);

export const dbSucess = (): void => console.log(`App is connected to ${getEnv(IEnvArgs.DATABASE_URL)} database successfully`);

export const serverStarted = () =>
  console.info(`Server is now running on http://localhost:${getEnv(IEnvArgs.PORT)}`);