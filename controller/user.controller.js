const user = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  getUser: async (req, res) => {
    try {
      const dataUser = await user.find({}, "name");
      res.json({
        message: "get Data success",
        data: dataUser,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  Register: (req, res) => {
    let data = req.body;
    let { password } = data;

    try {
      const saltRounds = 10;
      data.password = bcrypt.hashSync(password, saltRounds);
      const regis = new user(data);
      regis.save();
      res.json({
        message: "Register success!",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  Login: async (req, res) => {
    const data = req.body;
    const dataPass = data.password;

    try {
      //dapetin data db
      const [model] = await user.find();

      //dapetin password dari db
      const { password } = model;

      // tampung untuk dihashing
      const payload = model;

      const isValid = await bcrypt.compare(dataPass, password);

      if (isValid) {
        const token = jwt.sign(payload._id.toString(), process.env.SECRET_KEY);
        res.json({
          message: "Login success!",
          token,
        });
      } else {
        res.status(404).json({
          message: "Login gagal!",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
