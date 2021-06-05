import { ILocation } from "@geo/models";
import { IAPIResponse } from "@geo/types";
import { getEnv } from "./env";
import fetch from "node-fetch";
import { IEnvArgs } from "./utils.types";


export const getLocation = async (ip: string): Promise<ILocation> => {
  try {
    const apiURL: string = getEnv(IEnvArgs.GEO_API);
    const response = await fetch(`${apiURL}/${ip}`, { method: "get" });
    const location: IAPIResponse = await response.json();
    return {
      date: new Date().toISOString(),
      ip: location.query,
      country: location.country,
      city: location.city,
      geo: { lat: String(location.lat), long: String(location.lon) },
    };
  } catch (err) {
    throw new Error(err);
  }
};
