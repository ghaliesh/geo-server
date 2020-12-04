import { IPResult } from "../utils/utils.types";
import { Router } from "express";
import { AppRequest, AppResponse } from "@geo/types";

const locationRoute = Router();

locationRoute.get("/ip", (req: AppRequest, res: AppResponse): void => {
  res.status(200).send({ ip: req.userIp });
});

export default locationRoute;
