const db = require("../config/connection");
const cleanDB = require("./cleanDB");

const { User, Trips } = require("../models");

const userSeeds = require("./userSeeds.json");
const tripSeeds = require("./tripSeeds.json");

db.once("open", async () => {
  // await cleanDB("Trip", "trips");

  // await cleanDB("User", "users");

  await User.create(userSeeds);
  await Trips.create(tripSeeds);

  console.log("Database seeded!");
  process.exit(0);
});
