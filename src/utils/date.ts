import moment from "moment";

export const getNow = (): string => moment(Date.now()).toISOString();
