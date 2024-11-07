const Employee = require("../models/employee.js");

class EmpService {
  async createEmp(
    id,
    name,
    email,
    phone,
    designation,
    gender,
    course,
    createDate,
    image
  ) {
    const newEmp = new Employee({
      id,
      name,
      email,
      phone,
      designation,
      gender,
      course,
      createDate,
      image,
    });
    return await newEmp.save();
  }
}

module.exports = new EmpService();
