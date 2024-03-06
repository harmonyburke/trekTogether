const { Trips, User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single trip by either its id or tripName
  async getSingleTrip({ trip = null, params }, res) {
    const foundTrip = await Trips.findOne({
      $or: [{ _id: trip ? trip._id : params.id }, { tripName: params.tripName }],
    });

    if (!foundTrip) {
      return res.status(400).json({ message: 'Cannot find a trip with this id!' });
    }

    res.json(foundTrip);
  },
  // create a trip, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createTrip({ body }, res) {
    const trip = await Trips.create(body);

    if (!trip) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(trip);
    res.json({ token, trip });
  },
  // login a trip, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ name: body.name }, { email: body.email }] });
    if (!trip) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveBook({ user, body }, res) {
    console.log(user);
    try {
      const updatedTrips = await Trips.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedTrips);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteBook({ user, params }, res) {
    const updatedTrips = await Trips.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedTrips) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedTrips);
  },
};