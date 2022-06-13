const usersModel = require("../../models/users");

const checkAuth = async (req, res, next) => {
  const exactUser = req.headers.email
  const user = await usersModel.findOne({ email: exactUser });
  if (
    user === null ||
    user.token.userId !== user._id.toString() ||
    user.token === null
  ) {
    res.status(401).json({ msg: "Faça login novamente!" });
    res.end();
  } else {
    next();
  }
};
module.exports = checkAuth;
