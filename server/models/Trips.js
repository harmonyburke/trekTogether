const { Schema, model } = require('mongoose');

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
        username: {
            type: String,
            required: false
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
        travelers: {
            
        }
    });

const Trips = model("Trips", tripSchema);

module.exports = Trips;