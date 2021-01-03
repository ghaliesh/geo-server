import { Router } from "express";

import { getLocations, storeLocation, UserLocation } from "../models";
import { AppRequest, AppResponse } from "@geo/types";
import { getLocation } from "../utils/api";

const locationRoute = Router();

locationRoute.get("/ip", (req: AppRequest, res: AppResponse): void => {
  res.status(200).send({ ip: req.userIp });
});

locationRoute.get(
  "/all-locations",
  async (_: AppRequest, res: AppResponse): Promise<void> => {
    try {
      const loctions: UserLocation[] = await getLocations();
      res.status(200).send({ loctions });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

locationRoute.post(
  "/store",
  async (_: AppRequest, res: AppResponse): Promise<void> => {
    const location = await getLocation();
    const result: UserLocation = await storeLocation(location);
    res.status(200).send({ result });
  }
);

export default locationRoute;
