import { Schema, model } from 'mongoose';

const visitorsSchema = new Schema({
  ip_address: String,
  country: String,
  city: String,
  isp: String,
  user_agent: String,
  referrer: String,
  accept_language: String,
  screen_resolution: String,
  device_type: String,
  timestamp: Date,
  visit_time: Date,
  pages_visited: [String],
  session_duration: Number,
});

export const Visitors = model('Visitors', visitorsSchema);