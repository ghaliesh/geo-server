import { getIp } from "../utils/ip";
import { IPResult } from "../utils/utils.types";
import { Router } from "express";

const locationRoute = Router();

locationRoute.get(
  "/ip",
  async (_, res): Promise<void> => {
    try {
      const ip: IPResult = await getIp();
      res.status(200).send(ip);
    } catch (err) {
      res.status(500).send({ error: "Request failed" });
    }
  }
);

export default locationRoute;
