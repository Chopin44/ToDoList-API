const user = require('../models/user.model');

module.exports = {
    getUser: async(req, res) => {
        const dataUser = await user.find({})
        res.json({
            message: "get Data success",
            data: dataUser,
        })
    }

}