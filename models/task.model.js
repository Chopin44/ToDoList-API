const mongoose = require('mongoose');
const { Schema } = mongoose

const taskSchema = new Schema({
    title:  String, 
    description: String,
    isDone: Boolean,
    user: {
        type: mongoose.ObjectId,
        ref: "users"
    }
  });

const Task = mongoose.model('task', taskSchema)

module.exports = Task
