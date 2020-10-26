const dbconn = require("../config/db");
const fs = require("fs");
var rawdata = fs.readFileSync("./query/queries.json");
var queries = JSON.parse(rawdata);

class Controller {
  async getAllEmployees(req, res) {
    dbconn.query(queries.getAllEmployees, function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    });
  }

  async createEmployee(req, res) {
    dbconn.query(
      queries.createEmployee,
      [
        req.body.fname,
        req.body.lname,
        req.body.address,
        req.body.qualification,
        req.body.contact_num,
        req.body.dept,
      ],
      function (err, results) {
        if (err) {
          console.log(err);
          res.send(err.message);
        } else {
          res.send(results);
        }
      }
    );
  }
  async updateEmployee(req, res) {
    dbconn.query(
      queries.updateEmployee,
      [
        req.body.fname,
        req.body.lname,
        req.body.address,
        req.body.qualification,
        req.body.contact_num,
        req.body.dept,
        req.query.id,
      ],
      function (err, results) {
        if (err) {
          console.log("error: ", err);
          res.send(err.message);
        } else {
          res.send(results);
        }
      }
    );
  }
  async deleteEmployee(req, res) {
    dbconn.query(queries.deleteEmployee, req.query.id, function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    });
  }
  async getEmpById(req, res) {
    dbconn.query(queries.getEmpById, req.query.id, function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    });
  }
  async createDepartment(req, res) {
    dbconn.query(queries.createDepartment, [req.body.department], function (
      err,
      results
    ) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    });
  }
  async getDepartments(req, res) {
    dbconn.query(queries.getDepartments, function (err, results) {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  }
  async updateDept(req, res) {
    dbconn.query(
      queries.updateDept,
      [req.body.department, req.query.id],
      function (err, results) {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      }
    );
  }
  async deleteDept(req, res) {
    dbconn.query(queries.deleteDept, req.query.id, function (err, results) {
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    });
  }
}
const controller = new Controller();
module.exports = controller;
