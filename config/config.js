const mongoose = require('mongoose');
const db = async() => {
    try {
        await mongoose.connect('mongodb://mongo:********@containers-us-west-119.railway.app:6890');
        console.log("Database terkoneksi!");
      } catch (error) {
        console.log(error);
      }
      
}

module.exports = db
