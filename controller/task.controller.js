const Task = require('../models/task.model');

module.exports = {
    getTask: async(req, res) => {
        const dataTask = await Task.find().populate("user")
        res.json({
            message: "get data success",
            data: dataTask,
        })
    },

    postTask: (req, res) => {
        const data = req.body
        console.log(data);
        const task = new Task(data)
        task.save()

    },

    deleteTask: (req, res) => {},

    updateTask: (req, res) => {},



}