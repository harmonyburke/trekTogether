// import from models directory
const { User, Trips } = require("../models");
// will import from auth.js when logic is added
const { signToken, AuthenticationError } = require("../utils/auth");

// queries and mutations to retrieve users, trips, and specific trips by their IDs
const resolvers = {
  Query: {
    users: async () => User.find(),
    trips: async () => Trips.find(),
    trip: async (parent, { _id }) => Trips.findById(_id),
  },

  Mutation: {
    // function to add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    // function to create a new trip
    createTrip: async (parent, args) => {
      const trip = await Trips.create(args);
      return trip;
    },

    // function to join a trip that has already been created
    joinTrip: async (parent, { tripId, userId }) => {
      const trip = await Trips.findById(tripId);
      const user = await User.findById(userId);

      if (!trip || !user) {
        throw new AuthenticationError("Unable to find trip or user ID!");
      }
      trip.travelers.push(user);
      user.trips.push(trip);
      await Promise.all([trip.save(), user.save()]);
      return trip;
    },

    // function to update the trip details
    // added to update travelers as well
    updateTrip: async (parent, args) => {
      const { _id, ...updates } = args;
      const trip = await Trips.findByIdAndUpdate(_id, updates, { new: true });

      if (!trip) {
        throw new Error("Trip not found!");
      }
      return trip;
    },

    // function to delete trip
    deleteTrip: async (parent, { tripId }) => {
      const deletedTrip = await Trips.findByIdAndDelete(tripId);
      if (!deletedTrip) {
        throw new Error("Trip not found!");
      }
      return tripId;
    },
  },

  // function handles user login
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AuthenticationError("User not found!");
    }
    const correctPw = await user.isCorrectPassword(password);
    if (!correctPw) {
      throw new AuthenticationError("Incorrect password!");
    }
    const token = signToken(user);
    return { token, user };
  },
};

module.exports = resolvers;
