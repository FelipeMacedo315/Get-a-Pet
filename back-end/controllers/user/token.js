const jwt = require("jsonwebtoken");
const usersModel = require("../../models/users");

async function token(emailUser) {
  const userInfo = await usersModel.findOne({ email: emailUser });
  const token = jwt.sign({ KeyToken: userInfo._id.toString() }, "segredo", {
    expiresIn: "5h",
  });
  const decodeToken = jwt.verify(token, "segredo");

  const insert = await usersModel.updateOne({ email: emailUser }, { token: decodeToken });
}

module.exports = token;
