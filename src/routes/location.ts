import { getIp } from "../utils/ip";
import { IPResult } from "../utils/utils.types";
import { Router } from "express";

const locationRoute = Router();

locationRoute.get(
  "/ip",
  async (req, res): Promise<void> => {
    try {
      res.status(200).send({ ip: req.ip });
    } catch (err) {
      res.status(500).send({ error: "Request failed" });
    }
  }
);

export default locationRoute;
