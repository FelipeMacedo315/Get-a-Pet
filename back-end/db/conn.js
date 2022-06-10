const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Get-a-Pet";
const conn = mongoose.connect(url);

module.exports = conn


