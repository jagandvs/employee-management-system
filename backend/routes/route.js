const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();
router.get("/getAllEmployees", controller.getAllEmployees);
router.post("/createEmployee", controller.createEmployee);
router.put("/updateEmployee", controller.updateEmployee);
router.delete("/deleteEmployee", controller.deleteEmployee);
router.get("/getEmpById", controller.getEmpById);
router.get("/getDepartments", controller.getDepartments);
router.post("/createDepartment", controller.createDepartment);
router.put("/updateDept", controller.updateDept);
router.delete("/deleteDept", controller.deleteDept);

module.exports = router;
