export enum IEnvArgs {
  PORT = "PORT",
  DATABASE_USER_NAME = "DATABASE_USER_NAME",
  DATABASE_USER_PASSWORD = "DATABASE_USER_PASSWORD",
  DATABASE_URL = "DATABASE_URL",
  GEO_API = "GEO_API",
}

export interface IPResult {
  v4: string;
  v6: string;
}
