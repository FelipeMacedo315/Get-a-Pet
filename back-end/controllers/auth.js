const usersModel = require("../models/users");

const checkAuth = async (req, res, next) => {
  const emailUser = req.params.emailUser;
  const user = await usersModel.findOne({ email: emailUser });
  if (user === null) {
    res.status(422).json({ msg: "Faça login novamente!" });
  }
  next();
};
module.exports = checkAuth;
