import { handleError, IError } from "../utils/error";
import mongoose, { Document } from "mongoose";

import { getNow } from "../utils";

export interface ILocation {
  date: string;
  ip: string;
  country: string;
  city: string;
  geo: { lat: string; long: string };
}

export type UserLocation = Location & Document;

const schema = new mongoose.Schema<UserLocation>({
  date: { type: String, default: getNow() },
  ip: { type: String, default: "", required: true, minlength: 2 },
  country: { type: String, required: true },
  city: { type: String, required: true },
  geo: { type: { lat: String, long: String }, required: true },
});

const Location = mongoose.model<UserLocation>("Location", schema);

export const getLocations = async (): Promise<UserLocation[]> => {
  try {
    return await Location.find();
  } catch (error) {
    throw new error();
  }
};

export const storeLocation = async (loc: ILocation): Promise<UserLocation | IError> => {
  try {
    let location = new Location(loc);
    location = await location.save();
    return location;
  } catch (err) {
    return handleError(err, "location/stroe");
  }
};
