const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const Trips = require('./Trips');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 7
        // in order to check password, needs return statement profile.js 17 from 22 (solved)
    },
    // trips: [Trips]

});


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const User=model('User', userSchema);

module.exports = User;