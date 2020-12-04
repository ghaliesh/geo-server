import mongoose, { Document } from "mongoose";

import { getNow } from "../utils";

export interface UserLocation extends Document {
  date: string;
  ip: string;
  country: string;
  city: string;
  geo: { lat: string; long: string };
}

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
