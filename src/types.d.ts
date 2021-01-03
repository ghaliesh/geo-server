import { Request, Response } from "express";

export interface AppRequest extends Request {
  userIp: string;
}

export type AppResponse = Response;

export interface IAPIResponse {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
