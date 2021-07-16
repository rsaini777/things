const Subject = require("../models/subjects");
const controller = {
  subjects: async (req, res) => {
    try {
      const { subjects } = req.body;
      const newsubject = new Subject({
        subjects,
      });
      const newSubjects = await newsubject.save();
      res.status(200).send(newSubjects);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getData: async (req, res) => {
    try {
      const subjects = await Subject.find();
      res.status(200).send(subjects);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = controller;
