import { AppRequest, AppResponse } from "@geo/types";

export const attachUserIp = (req: AppRequest, res: AppResponse) => {
  try {
    let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    ip = ip?.toString()?.replace("::ffff:", "");
    req.userIp = ip;
  } catch (error) {
    res.status(500).send({ error });
  }
};
