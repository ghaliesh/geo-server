import ip from "public-ip";

import { IPResult } from "./utils.types";

export const getIp = async (): Promise<IPResult> => {
  const v4: string = await ip.v4();
  const v6: string = await ip.v6();

  return { v4, v6 };
};
