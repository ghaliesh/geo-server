import { getIp } from "../utils/ip";
import { IPResult } from "../utils/utils.types";
import { Router } from "express";

const locationRoute = Router();

locationRoute.get(
  "/ip",
  async (req, res): Promise<void> => {
    try {
      console.log({ ip: 1 });
      const ip: IPResult = await getIp();
      console.log({ ip });
      res.status(200).send({ ip: req.ip });
    } catch (err) {
      res.status(500).send({ error: "Request failed" });
    }
  }
);

export default locationRoute;
