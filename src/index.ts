import { config as initiateEnv } from "dotenv";

/** initiate the env variables in .env files */
initiateEnv();

console.log(process.env["PORT"]);
