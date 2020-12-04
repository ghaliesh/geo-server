import { Router } from "express";

import { getLocations, UserLocation } from "../models";
import { AppRequest, AppResponse } from "@geo/types";

const locationRoute = Router();

locationRoute.get("/ip", (req: AppRequest, res: AppResponse): void => {
  res.status(200).send({ ip: req.userIp });
});

locationRoute.get(
  "/",
  async (req: AppRequest, res: AppResponse): Promise<void> => {
    const loctions: UserLocation[] = await getLocations();
    res.status(200).send(loctions);
  }
);

export default locationRoute;
