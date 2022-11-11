const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name:  String, 
    class: String,
  });

const User = mongoose.model('users', userSchema)

module.exports = User
