const { User, Trip } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
       users: async () => User.find(),
       trips: async () => Trip.find(),
       trip: async (parent, { _id }) => Trip.findById(_id),
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        createTrip: async (parent, { tripName, budget, location, details }) => {
            const trip = await Trip.create({ tripName, budget, location, details });
            return trip;
        },
        joinTrip: async (parent, { tripId, userId }) => {
            const trip = await Trip.findById(tripId);
            const user = await User.findById(userId);

            if (!trip || !user) {
                throw new AuthenticationError('Unable to find trip or user ID!');
            }
            trip.travelers.push(user);
            user.trips.push(trip);
            await trip.save();
            await user.save();
            return trip;
        },
        updateTrip: async (parent, { _id, tripName, budget, location, details }) => {
            const trip = await Trip.findByIdAndUpdate(
                _id,
                { tripName, budget, location, details },
                { new: true }
            );
            return trip;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user };
        },
    },
};

module.exports = resolvers;