import moment from "moment";

type ISOString = string;

export const getNow = (): ISOString => moment(Date.now()).toISOString();
