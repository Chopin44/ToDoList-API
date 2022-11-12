const Task = require("../models/task.model");

module.exports = {
  getTask: async (req, res) => {
    try {
      const dataTask = await Task.find({}, "title");
      res.json({
        message: "get data success",
        data: dataTask,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  getDetailTask: async (req, res) => {
    try {
      const { id } = req.params;
      const dataTask = await Task.findById(id).populate(
        "user",
        "-email -password -__v"
      );
      res.json({
        message: "get data success",
        data: dataTask,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  postTask: (req, res) => {
    try {
      const data = req.body;
      const task = new Task(data);
      task.save();

      res.json({
        message: "Task has been created!",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const dataTask = await Task.deleteMany();
      console.log(dataTask);
      res.json({
        message: "delete Data success",
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  deleteTaskByID: async (req, res) => {
    try {
      const { id } = req.params;
      const dataTask = await Task.findByIdAndDelete(id);
      console.log(dataTask);
      res.json({
        message: "delete Data success",
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const dataTask = await Task.findByIdAndUpdate(id, data);
      console.log(dataTask);
      res.json({
        message: "update Data success",
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
