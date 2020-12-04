import ip from "public-ip";

import { IPResult } from "./utils.types";

export const getIp = async (): Promise<IPResult> => {
  try {
    // const v4: string = await ip.v4();
    // const v6: string = await ip.v6();
    return { v4: "1", v6: "2" };
  } catch (err) {
    console.log("errr");
    throw new Error(err);
  }
};
