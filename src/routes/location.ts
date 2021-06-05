import { Router } from "express";

import { getLocations, storeLocation, UserLocation } from "../models";
import { AppRequest, AppResponse } from "../types";
import { getLocation } from "../utils/api";
import { handleError, IError } from "../utils/error";

const locationRoute = Router();

locationRoute.get("/ip", (req: AppRequest, res: AppResponse): void => {
  res.status(200).send({ ip: req.userIp });
});

locationRoute.get(
  "/",
  async (_: AppRequest, res: AppResponse): Promise<void> => {
    try {
      const loctions: UserLocation[] = await getLocations();
      res.send(loctions);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

locationRoute.get(
  "/store",
  async (req: AppRequest, res: AppResponse): Promise<void> => {
    try {
      const { ip } = req;
      const location = await getLocation(ip);
      const result: UserLocation | IError = await storeLocation(location);
      res.status(200).send({ result });
    } catch (err) {
      res.status(500).send({ result: handleError(err, "/location/store") });
    }
  }
);

export default locationRoute;
