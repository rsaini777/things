const Society = require("../models/society");
const controller = {
  society: async (req, res) => {
    try {
      const { society } = req.body;
      const newsociety = new Society({
        society,
      });
      const newSociety = await newsociety.save();
      res.status(200).send(newSociety);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getData: async (req, res) => {
    try {
      const society = await Society.find();
      res.status(200).send(society);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = controller;
