const {Schema, model} = require ('mongoose');
const Trips= require ('./Trips');

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
        match:[/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    trips: [Trips.schema]

});

const User=model('User', userSchema);

module.exports= User;