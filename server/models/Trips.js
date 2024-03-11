const { Schema, model, ObjectId } = require('mongoose');

const tripSchema = new Schema(
    {
        where: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 500
        },
        img: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        userId: {
            type: String,
            required: true
        },
        departureDate: {
            type: Date,
            required: true
        },
        returnDate: {
            type: Date,
            required: true
        },
        joined: {
            type: Boolean,
            default: false
        },
        travelers: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    });

const Trips = model("Trips", tripSchema);

module.exports = Trips;