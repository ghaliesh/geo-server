import mongoose, { Document } from "mongoose";

import { getNow } from "../utils";

export interface Location {
  date: string;
  ip: string;
  country: string;
  city: string;
  geo: { lat: string; long: string };
}

export type UserLocation = Location & Document;

const schema = new mongoose.Schema({
  date: { type: String, default: getNow() },
  ip: { type: String, default: "", required: true, minlength: 2 },
  country: { type: String, required: true },
  city: { type: String, required: true },
  geo: { type: { lat: String, long: String }, required: true },
});

const Location = mongoose.model<UserLocation>("Location", schema);

export const getLocations = async (): Promise<UserLocation[]> =>
  await Location.find();

export const storeLocation = async (loc: Location): Promise<UserLocation> => {
  try {
    let location = new Location(loc);
    location = await location.save();
    return location;
  } catch (err) {
    console.log({ err });
  }
};

export const stroeLocation = async (): Promise<UserLocation[]> => {
  try {
    const locations = await Location.find();
    console.log({ locations });
    return [];
  } catch (err) {
    console.log({ err });
  }
};

export default Location;
