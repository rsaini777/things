const Student = require("../models/student");
const axios = require("axios");
const controller = {
  data: async (req, res) => {
    try {
      const { name, contact, classes, year } = req.body;

      await axios({
        method: "get",
        url: "http://localhost:7000/api/subjects",
      })
        .then((result) => {
          subjects = result.data;
        })
        .catch((e) => {
          console.log(e);
        });
      await axios({
        method: "get",
        url: "http://localhost:7000/api/society",
      })
        .then((result) => {
          society = result.data;
        })
        .catch((e) => {
          console.log(e);
        });

      const student = new Student({
        name,
        contact,
        subjects,
        classes,
        society,
        year,
      });

      const newstudent = await student.save();
      res.status(200).send(newstudent);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getdata: async (req, res) => {
    try {
      const student = await Student.find();
      res.status(200).send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatedata: async (req, res) => {
    try {
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = controller;
