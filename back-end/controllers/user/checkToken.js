const usersModel = require("../../models/users");

const checkAuth = async (req, res, next) => {
  const exactUser = req.headers.email;
  const user = await usersModel.findOne({ email: exactUser });

  if (user.token.KeyToken !== user._id.toString()) {
    return res.status(401).json({ msg: "Faça login novamente!" });
  } else {
    next();
  }
};
module.exports = checkAuth;
