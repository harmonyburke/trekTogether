const db = require("../config/connection");
const cleanDB = require('./cleanDB');
const { User, Trips } = require("../models");
const userSeeds = require("./userSeeds.json");


db.once("open", async () => {


  await cleanDB("User", "users");

  await User.create(userSeeds);

  console.log("Database seeded!");
  process.exit(0);
});
