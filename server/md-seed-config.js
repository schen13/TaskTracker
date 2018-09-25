import mongooseLib from 'mongoose';
mongooseLib.Promise = global.Promise;

import Users from "./seeders."

import Users from "./seeders/users.seeder";

// Export the mongoose lib
export const mongoose = mongooseLib;

// Export the mongodb url
export const mongoURL = process.env.MONGO_URI;

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  Users

};