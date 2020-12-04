import { Request, Response } from "express";

export interface AppRequest extends Request {
  userIp: string;
}

export type AppResponse = Response;
