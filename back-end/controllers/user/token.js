const jwt = require("jsonwebtoken");
const usersModel = require("../../models/users");

async function token(tokenUser) {
  const userInfo = await usersModel.findOne({ _id: tokenUser });
  const token = jwt.sign({ KeyToken: userInfo._id.toString() }, "segredo", {
    expiresIn: "5h",
  });
  const decodeToken = jwt.verify(token, "segredo");

  const insert = await usersModel.updateOne({ _id: tokenUser }, { token: decodeToken });
}

module.exports = token;
