const mongoose = require('mongoose');
const db = async() => {
    try {
        await mongoose.connect('mongodb://localhost:1212/ToDoApp');
        console.log("Database terkoneksi!");
      } catch (error) {
        console.log(error);
      }
      
}

module.exports = db