import { IPResult } from "../utils/utils.types";
import { Router } from "express";

const locationRoute = Router();

locationRoute.get(
  "/ip",
  async (req, res): Promise<void> => {
    try {
      let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      ip = ip.toString().replace("::ffff:", "");
      res.status(200).send({ ip });
    } catch (err) {
      res.status(500).send({ error: "Request failed" });
    }
  }
);

export default locationRoute;
