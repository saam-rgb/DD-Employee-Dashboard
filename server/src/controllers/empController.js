const empService = require("../services/empServices");

class EmpController {
  async createEmp(req, res) {
    try {
      const {
        id,
        name,
        email,
        phone,
        designation,
        gender,
        course,
        createDate,
        image,
      } = req.body;
      const saveEmp = await empService.createEmp(
        id,
        name,
        email,
        phone,
        designation,
        gender,
        course,
        createDate,
        image
      );
      res.json(saveEmp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EmpController();
