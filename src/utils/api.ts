import { ILocation } from "@geo/models";
import { IAPIResponse } from "@geo/types";
import { getEnv } from "./env";
import fetch from "node-fetch";
import { IEnvArgs } from "./utils.types";

const apiURL: string = getEnv(IEnvArgs.GEO_API);

export const getLocation = async (): Promise<ILocation> => {
  try {
    const response = await fetch("http://ip-api.com/json", { method: "get" });
    const location: IAPIResponse = await response.json();
    console.log({ apiURL });

    return {
      date: new Date().toISOString(),
      ip: location.query,
      country: location.country,
      city: location.city,
      geo: { lat: String(location.lat), long: String(location.lon) },
    };
  } catch (err) {
    console.log({ err });
  }
};
