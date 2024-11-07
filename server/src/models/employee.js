const mongoose = require("../configuration/dbConfig");

const empSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  designation: String,
  gender: String,
  course: String,
  createDate: String,
  image: String,
});

const Employee = mongoose.model("employee", empSchema);
module.exports = Employee;
