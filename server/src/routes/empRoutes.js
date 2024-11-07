const express = require("express");
const EmpController = require("../controllers/empController");
const router = express.Router();

router.post("/", EmpController.createEmp);

module.exports = router;
